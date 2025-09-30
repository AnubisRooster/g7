import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Starting question generation request...')
    
    const body = await request.json()
    console.log('📝 Request body:', JSON.stringify(body, null, 2))
    
    const {
      title,
      description,
      categories,
      difficulty,
      experienceLevel,
      focusAreas,
      questionCount,
      customPrompt,
      // Settings from frontend
      apiKey,
      model,
      baseUrl,
      temperature,
      maxTokens
    } = body

    console.log('🔑 API Key provided:', apiKey ? 'Yes' : 'No')
    console.log('🤖 Model:', model || 'default')
    console.log('📋 Categories:', categories)

    // Validate required fields
    if (!categories || !Array.isArray(categories) || categories.length === 0) {
      console.error('❌ Validation failed: No categories provided')
      return NextResponse.json(
        { error: 'At least one category is required' },
        { status: 400 }
      )
    }

    if (!apiKey) {
      console.error('❌ Validation failed: No API key provided')
      return NextResponse.json(
        { error: 'OpenRouter API key is required' },
        { status: 400 }
      )
    }

    console.log('✅ Validation passed, generating questions...')

    // Generate the prompt for the AI
    console.log('🤖 Building AI prompt...')
    const aiPrompt = buildAIPrompt({
      categories,
      difficulty,
      experienceLevel,
      focusAreas,
      questionCount: questionCount || 10,
      customPrompt
    })
    console.log('📝 AI prompt length:', aiPrompt.length)

    // Initialize ZAI SDK with user-provided configuration
    console.log('🔧 Initializing ZAI SDK...')
    const zai = await ZAI.create()
    console.log('✅ ZAI SDK initialized')

    // Generate questions using specified model via OpenRouter
    console.log('🚀 Calling OpenRouter API...')
    const completion = await zai.chat.completions.create({
      model: model || "deepseek/deepseek-r1:free",
      messages: [
        {
          role: 'system',
          content: 'You are an expert technical interviewer specializing in AI, machine learning, and MLOps. Generate high-quality, relevant interview questions based on the provided criteria.'
        },
        {
          role: 'user',
          content: aiPrompt
        }
      ],
      temperature: temperature || 0.7,
      max_tokens: maxTokens || 4000,
      // OpenRouter specific headers
      extra_headers: {
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'AI Interview Generator'
      }
    })
    console.log('✅ OpenRouter API call successful')
    console.log('📊 Response:', completion)

    const responseContent = completion.choices[0]?.message?.content
    
    if (!responseContent) {
      console.error('❌ No response content from AI model')
      throw new Error('No response from AI model')
    }
    
    console.log('✅ Response content received, length:', responseContent.length)

    // Parse the generated questions
    console.log('🔍 Parsing generated questions...')
    const generatedQuestions = parseGeneratedQuestions(responseContent, categories)
    console.log('✅ Parsed', generatedQuestions.length, 'questions')

    // Create a simple session ID for the frontend (no database storage)
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    console.log('🎉 Question generation completed successfully!')
    return NextResponse.json({
      sessionId: sessionId,
      questions: generatedQuestions,
      totalQuestions: generatedQuestions.length,
      sessionInfo: {
        title: title || `${categories.join(', ')} Interview`,
        description: description || 'Generated interview session',
        categories,
        difficulty,
        experienceLevel,
        focusAreas,
        generatedAt: new Date().toISOString()
      }
    })

  } catch (error) {
    console.error('❌ Error generating questions:', error)
    console.error('❌ Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : 'No stack trace'
    })
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to generate questions',
        details: error instanceof Error ? error.stack : 'No additional details'
      },
      { status: 500 }
    )
  }
}

function buildAIPrompt(params: {
  categories: string[]
  difficulty?: string
  experienceLevel?: string
  focusAreas?: string[]
  questionCount: number
  customPrompt?: string
}): string {
  const {
    categories,
    difficulty,
    experienceLevel,
    focusAreas,
    questionCount,
    customPrompt
  } = params

  let prompt = `Generate ${questionCount} technical interview questions for the following roles: ${categories.join(', ')}.\n\n`

  if (difficulty) {
    prompt += `Difficulty level: ${difficulty}\n`
  }

  if (experienceLevel) {
    prompt += `Experience level: ${experienceLevel}\n`
  }

  if (focusAreas && focusAreas.length > 0) {
    prompt += `Focus areas: ${focusAreas.join(', ')}\n`
  }

  prompt += `\nPlease generate questions that:\n`
  prompt += `- Are technically challenging and relevant to the specified roles\n`
  prompt += `- Test both theoretical knowledge and practical implementation skills\n`
  prompt += `- Cover modern AI/ML concepts and best practices\n`
  prompt += `- Are appropriate for the specified difficulty and experience level\n`

  if (categories.includes('AI Engineer')) {
    prompt += `- Include questions about model development, deployment, and optimization\n`
  }

  if (categories.includes('AI Architect')) {
    prompt += `- Include questions about system design, scalability, and architectural decisions\n`
  }

  if (categories.includes('LLM Model Tuning')) {
    prompt += `- Include questions about fine-tuning, prompt engineering, and model optimization\n`
  }

  if (categories.includes('MLOps Engineer')) {
    prompt += `- Include questions about ML pipelines, monitoring, and production deployment\n`
  }

  prompt += `\nPlease format your response as a JSON array with the following structure:\n`
  prompt += `[\n`
  prompt += `  {\n`
  prompt += `    "question": "The interview question text",\n`
  prompt += `    "category": "The category this question belongs to",\n`
  prompt += `    "difficulty": "Easy|Medium|Hard|Expert",\n`
  prompt += `    "role": "Specific role this question targets",\n`
  prompt += `    "tags": ["tag1", "tag2", "tag3"],\n`
  prompt += `    "expectedAnswer": "A brief outline of what a good answer should include"\n`
  prompt += `  }\n`
  prompt += `]\n\n`

  if (customPrompt) {
    prompt += `Additional requirements:\n${customPrompt}\n\n`
  }

  prompt += `Please ensure all questions are original, relevant, and valuable for technical interviews in the AI/ML field.`

  return prompt
}

function parseGeneratedQuestions(content: string, defaultCategories: string[]): any[] {
  try {
    // Try to parse as JSON first
    const parsed = JSON.parse(content)
    if (Array.isArray(parsed)) {
      return parsed.map((item, index) => ({
        question: item.question || `Question ${index + 1}`,
        category: item.category || defaultCategories[0],
        difficulty: item.difficulty || 'Medium',
        role: item.role || '',
        tags: Array.isArray(item.tags) ? item.tags : [],
        expectedAnswer: item.expectedAnswer || null
      }))
    }
  } catch (error) {
    // If JSON parsing fails, try to extract questions from text
    console.warn('Failed to parse AI response as JSON, attempting to extract questions manually')
    return extractQuestionsFromText(content, defaultCategories)
  }

  return []
}

function extractQuestionsFromText(content: string, defaultCategories: string[]): any[] {
  const questions: any[] = []
  
  // Split by numbered questions or question markers
  const questionBlocks = content.split(/\d+\.\s|\n\s*\n|\n\s*Question\s*\d*:/i)
  
  for (let i = 0; i < questionBlocks.length; i++) {
    const block = questionBlocks[i].trim()
    if (block.length > 20 && !block.toLowerCase().includes('here are') && !block.toLowerCase().includes('following')) {
      questions.push({
        question: block,
        category: defaultCategories[0],
        difficulty: 'Medium',
        role: '',
        tags: [],
        expectedAnswer: null
      })
    }
  }

  // If no questions found, create a generic one
  if (questions.length === 0) {
    questions.push({
      question: 'Explain your experience with machine learning model development and deployment.',
      category: defaultCategories[0],
      difficulty: 'Medium',
      role: '',
      tags: [],
      expectedAnswer: null
    })
  }

  return questions.slice(0, 10) // Limit to 10 questions as fallback
}