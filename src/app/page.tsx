'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Brain, Target, Users, Settings, History, Plus, Clock } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

const categories = [
  'AI Engineer',
  'AI Architect', 
  'LLM Model Tuning',
  'MLOps Engineer'
]

const difficulties = [
  'Easy',
  'Medium', 
  'Hard',
  'Expert'
]

const experienceLevels = [
  'Junior',
  'Mid-Level',
  'Senior',
  'Expert'
]

const focusAreas = [
  'Machine Learning',
  'Deep Learning',
  'Neural Networks',
  'Transformers',
  'Fine-tuning',
  'Prompt Engineering',
  'Model Deployment',
  'MLOps',
  'Data Engineering',
  'Computer Vision',
  'NLP',
  'Reinforcement Learning',
  'Model Evaluation',
  'Scalability',
  'Performance Optimization',
  'Ethics & Safety'
]

export default function Home() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>([])
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    difficulty: '',
    experienceLevel: '',
    questionCount: 10,
    customPrompt: ''
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [settings, setSettings] = useState({
    apiKey: '',
    model: 'deepseek/deepseek-r1:free',
    baseUrl: 'https://openrouter.ai/api/v1',
    temperature: 0.7,
    maxTokens: 4000
  })
  const [settingsSaved, setSettingsSaved] = useState(false)

  useEffect(() => {
    loadSettings()
  }, [])

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const toggleFocusArea = (area: string) => {
    setSelectedFocusAreas(prev => 
      prev.includes(area) 
        ? prev.filter(a => a !== area)
        : [...prev, area]
    )
  }

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleGenerate = async () => {
    if (selectedCategories.length === 0) {
      alert('Please select at least one category')
      return
    }

    if (!settings.apiKey.trim()) {
      alert('Please configure your OpenRouter API key in the Settings tab')
      return
    }

    setIsGenerating(true)
    
    try {
      const response = await fetch('/api/generate-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          categories: selectedCategories,
          focusAreas: selectedFocusAreas,
          // Include settings
          apiKey: settings.apiKey,
          model: settings.model,
          baseUrl: settings.baseUrl,
          temperature: settings.temperature,
          maxTokens: settings.maxTokens
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Server error response:', errorData)
        throw new Error(errorData.error || 'Failed to generate questions')
      }

      const result = await response.json()
      
      // Store session data in localStorage
      localStorage.setItem(`session_${result.sessionId}`, JSON.stringify({
        sessionId: result.sessionId,
        questions: result.questions,
        sessionInfo: result.sessionInfo
      }))
      
      // Redirect to the session page
      window.location.href = `/session/${result.sessionId}`
      
    } catch (error) {
      console.error('Error generating questions:', error)
      
      // More detailed error logging
      if (error instanceof Error) {
        console.error('Error name:', error.name)
        console.error('Error message:', error.message)
        console.error('Error stack:', error.stack)
      }
      
      alert(`Failed to generate questions: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setIsGenerating(false)
    }
  }

  const loadSettings = () => {
    const savedSettings = localStorage.getItem('interviewGeneratorSettings')
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings))
    }
  }

  const handleSettingsChange = (key: string, value: string | number) => {
    setSettings(prev => ({ ...prev, [key]: value }))
    setSettingsSaved(false)
  }

  const saveSettings = () => {
    localStorage.setItem('interviewGeneratorSettings', JSON.stringify(settings))
    setSettingsSaved(true)
    
    // Clear success message after 3 seconds
    setTimeout(() => setSettingsSaved(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            AI Interview Question Generator
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Generate tailored interview questions for AI Engineers, Architects, LLM Tuning Experts, and MLOps Engineers using advanced AI
          </p>
        </div>

        <Tabs defaultValue="generator" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="generator" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Generate Questions
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              Previous Sessions
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="generator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Interview Criteria
                </CardTitle>
                <CardDescription>
                  Configure the criteria for generating interview questions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Session Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Senior AI Engineer Interview"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="questionCount">Number of Questions</Label>
                    <Select
                      value={formData.questionCount.toString()}
                      onValueChange={(value) => handleInputChange('questionCount', parseInt(value))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[5, 10, 15, 20, 25, 30].map(num => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} questions
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the context or specific requirements for this interview session..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={3}
                  />
                </div>

                <Separator />

                <div className="space-y-3">
                  <Label>Target Categories</Label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <Badge
                        key={category}
                        variant={selectedCategories.includes(category) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary/80"
                        onClick={() => toggleCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Difficulty Level</Label>
                    <Select
                      value={formData.difficulty}
                      onValueChange={(value) => handleInputChange('difficulty', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        {difficulties.map(difficulty => (
                          <SelectItem key={difficulty} value={difficulty}>
                            {difficulty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Experience Level</Label>
                    <Select
                      value={formData.experienceLevel}
                      onValueChange={(value) => handleInputChange('experienceLevel', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceLevels.map(level => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Focus Areas</Label>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map(area => (
                      <Badge
                        key={area}
                        variant={selectedFocusAreas.includes(area) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary/80"
                        onClick={() => toggleFocusArea(area)}
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="customPrompt">Custom Prompt (Optional)</Label>
                  <Textarea
                    id="customPrompt"
                    placeholder="Add any specific requirements or context for question generation..."
                    value={formData.customPrompt}
                    onChange={(e) => handleInputChange('customPrompt', e.target.value)}
                    rows={4}
                  />
                </div>

                <Button 
                  onClick={handleGenerate} 
                  disabled={isGenerating || selectedCategories.length === 0}
                  className="w-full"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Brain className="mr-2 h-4 w-4 animate-spin" />
                      Generating Questions...
                    </>
                  ) : (
                    <>
                      <Plus className="mr-2 h-4 w-4" />
                      Generate Interview Questions
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Session History</CardTitle>
                <CardDescription>
                  Sessions are stored locally in your browser and are not persisted on the server.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12 text-slate-500">
                  <History className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">No Persistent Sessions</p>
                  <p className="text-sm">
                    Generate interview questions to create a session. Your progress will be saved locally in your browser.
                  </p>
                  <p className="text-xs mt-2 text-slate-400">
                    Note: Clearing browser data will remove all saved sessions and answers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>AI Model Configuration</CardTitle>
                <CardDescription>
                  Configure OpenRouter settings and model selection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="apiKey">OpenRouter API Key</Label>
                    <Input
                      id="apiKey"
                      type="password"
                      placeholder="sk-or-..."
                      value={settings.apiKey}
                      onChange={(e) => handleSettingsChange('apiKey', e.target.value)}
                    />
                    <p className="text-sm text-slate-500">
                      Get your API key from{' '}
                      <a 
                        href="https://openrouter.ai/keys" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        OpenRouter Dashboard
                      </a>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="model">AI Model</Label>
                    <Select
                      value={settings.model}
                      onValueChange={(value) => handleSettingsChange('model', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select AI model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="deepseek/deepseek-r1:free">
                          DeepSeek R1 (Free)
                        </SelectItem>
                        <SelectItem value="deepseek/deepseek-r1-distill-llama-70b:free">
                          DeepSeek R1 Distill Llama 70B (Free)
                        </SelectItem>
                        <SelectItem value="meta-llama/llama-3.1-8b-instruct:free">
                          Llama 3.1 8B Instruct (Free)
                        </SelectItem>
                        <SelectItem value="google/gemini-flash-1.5:free">
                          Google Gemini Flash 1.5 (Free)
                        </SelectItem>
                        <SelectItem value="mistralai/mistral-7b-instruct:free">
                          Mistral 7B Instruct (Free)
                        </SelectItem>
                        <SelectItem value="openai/gpt-3.5-turbo">
                          OpenAI GPT-3.5 Turbo (Paid)
                        </SelectItem>
                        <SelectItem value="openai/gpt-4">
                          OpenAI GPT-4 (Paid)
                        </SelectItem>
                        <SelectItem value="anthropic/claude-3-haiku">
                          Anthropic Claude 3 Haiku (Paid)
                        </SelectItem>
                        <SelectItem value="anthropic/claude-3-sonnet">
                          Anthropic Claude 3 Sonnet (Paid)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-slate-500">
                      Choose a model from OpenRouter. Free models have rate limits.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="baseUrl">OpenRouter Base URL</Label>
                    <Input
                      id="baseUrl"
                      placeholder="https://openrouter.ai/api/v1"
                      value={settings.baseUrl}
                      onChange={(e) => handleSettingsChange('baseUrl', e.target.value)}
                    />
                    <p className="text-sm text-slate-500">
                      Default: https://openrouter.ai/api/v1
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="temperature">Response Temperature</Label>
                    <Select
                      value={settings.temperature.toString()}
                      onValueChange={(value) => handleSettingsChange('temperature', parseFloat(value))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0.1">0.1 (Very Focused)</SelectItem>
                        <SelectItem value="0.3">0.3 (Focused)</SelectItem>
                        <SelectItem value="0.5">0.5 (Balanced)</SelectItem>
                        <SelectItem value="0.7">0.7 (Creative)</SelectItem>
                        <SelectItem value="0.9">0.9 (Very Creative)</SelectItem>
                        <SelectItem value="1.0">1.0 (Maximum Creativity)</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-slate-500">
                      Controls randomness. Lower values are more focused, higher values are more creative.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maxTokens">Max Tokens</Label>
                    <Input
                      id="maxTokens"
                      type="number"
                      placeholder="4000"
                      value={settings.maxTokens}
                      onChange={(e) => handleSettingsChange('maxTokens', parseInt(e.target.value))}
                    />
                    <p className="text-sm text-slate-500">
                      Maximum response length. Default: 4000
                    </p>
                  </div>

                  <Button onClick={saveSettings} className="w-full">
                    Save Settings
                  </Button>

                  {settingsSaved && (
                    <Alert>
                      <AlertDescription>
                        Settings saved successfully! Restart the application to apply changes.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Available Models</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">Free Models</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-sm">
                          <div className="font-medium">DeepSeek R1</div>
                          <div className="text-slate-500">Excellent for technical content</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">Llama 3.1 8B</div>
                          <div className="text-slate-500">Fast and capable</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">Gemini Flash 1.5</div>
                          <div className="text-slate-500">Google's fast model</div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm">Paid Models</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-sm">
                          <div className="font-medium">GPT-4</div>
                          <div className="text-slate-500">Best overall quality</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">Claude 3 Sonnet</div>
                          <div className="text-slate-500">Great for reasoning</div>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">GPT-3.5 Turbo</div>
                          <div className="text-slate-500">Fast and cost-effective</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}