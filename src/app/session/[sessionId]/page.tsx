'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { 
  ArrowLeft, 
  Brain, 
  CheckCircle, 
  Clock, 
  Target, 
  User,
  Save,
  ChevronRight
} from 'lucide-react'

interface Question {
  id: string
  question: string
  category: string
  difficulty: string
  role: string
  tags: string[]
  expectedAnswer?: string
  order: number
}

interface SessionData {
  sessionId: string
  questions: Question[]
  sessionInfo: {
    title: string
    description: string
    categories: string[]
    difficulty?: string
    experienceLevel?: string
    focusAreas: string[]
    generatedAt: string
  }
}

export default function SessionPage() {
  const params = useParams()
  const router = useRouter()
  const searchParams = useSearchParams()
  const sessionId = params.sessionId as string
  
  const [sessionData, setSessionData] = useState<SessionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<{[key: string]: string}>({})
  const [savedStatus, setSavedStatus] = useState<{[key: string]: boolean}>({})

  useEffect(() => {
    loadSessionData()
  }, [sessionId])

  const loadSessionData = () => {
    try {
      // Try to get session data from localStorage
      const sessionDataStr = localStorage.getItem(`session_${sessionId}`)
      if (sessionDataStr) {
        const data = JSON.parse(sessionDataStr)
        setSessionData(data)
        
        // Initialize answers with existing saved answers
        const savedAnswers = localStorage.getItem(`answers_${sessionId}`)
        if (savedAnswers) {
          setAnswers(JSON.parse(savedAnswers))
          const savedStatus: {[key: string]: boolean} = {}
          Object.keys(JSON.parse(savedAnswers)).forEach(key => {
            savedStatus[key] = true
          })
          setSavedStatus(savedStatus)
        }
      } else {
        // If no session data found, redirect back to home
        router.push('/')
      }
    } catch (err) {
      setError('Failed to load session data')
      console.error('Error loading session:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAnswerChange = (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer }
    setAnswers(newAnswers)
    setSavedStatus({ ...savedStatus, [questionId]: false })
    
    // Auto-save to localStorage
    localStorage.setItem(`answers_${sessionId}`, JSON.stringify(newAnswers))
  }

  const saveAnswer = (questionId: string) => {
    const answer = answers[questionId]
    if (!answer?.trim()) return

    // Mark as saved (already auto-saved to localStorage)
    setSavedStatus(prev => ({ ...prev, [questionId]: true }))
    
    // Show success feedback
    setTimeout(() => {
      setSavedStatus(prev => ({ ...prev, [questionId]: false }))
    }, 2000)
  }

  const goToNextQuestion = () => {
    if (sessionData && currentQuestionIndex < sessionData.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'hard': return 'bg-orange-100 text-orange-800'
      case 'expert': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-12 w-12 mx-auto mb-4 animate-spin text-primary" />
          <p className="text-lg">Loading interview session...</p>
        </div>
      </div>
    )
  }

  if (error || !sessionData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-lg font-medium text-red-600 mb-4">Session Not Found</p>
              <p className="text-sm text-slate-600 mb-4">
                {error || 'This session may have expired or been cleared.'}
              </p>
              <Button 
                onClick={() => router.push('/')} 
                className="w-full"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Generator
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const { questions, sessionInfo } = sessionData
  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100
  const answeredCount = Object.keys(answers).filter(id => answers[id].trim()).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => router.push('/')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Generator
          </Button>
          
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{sessionInfo.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {sessionInfo.description}
                  </CardDescription>
                </div>
                <div className="text-right text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {new Date(sessionInfo.generatedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Target className="h-4 w-4" />
                    {answeredCount}/{questions.length} answered
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {sessionInfo.categories.map(cat => (
                    <Badge key={cat} variant="secondary">{cat}</Badge>
                  ))}
                  {sessionInfo.difficulty && (
                    <Badge className={getDifficultyColor(sessionInfo.difficulty)}>
                      {sessionInfo.difficulty}
                    </Badge>
                  )}
                  {sessionInfo.experienceLevel && (
                    <Badge variant="outline">{sessionInfo.experienceLevel}</Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Question Navigation */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={goToPreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              
              <div className="text-center">
                <div className="text-sm text-slate-500">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </div>
                <div className="font-medium">
                  {currentQuestion?.category}
                </div>
              </div>
              
              <Button
                onClick={goToNextQuestion}
                disabled={currentQuestionIndex === questions.length - 1}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Question */}
        {currentQuestion && (
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">
                    Question {currentQuestion.order}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
                      {currentQuestion.difficulty}
                    </Badge>
                    <Badge variant="outline">{currentQuestion.category}</Badge>
                    {currentQuestion.role && (
                      <Badge variant="secondary">{currentQuestion.role}</Badge>
                    )}
                  </div>
                  {currentQuestion.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {currentQuestion.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                {savedStatus[currentQuestion.id] && (
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 ml-4" />
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-sm max-w-none">
                <p className="text-lg font-medium text-slate-900 dark:text-slate-100">
                  {currentQuestion.question}
                </p>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">
                    Your Answer
                  </label>
                  <Button
                    size="sm"
                    onClick={() => saveAnswer(currentQuestion.id)}
                    disabled={!answers[currentQuestion.id]?.trim()}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {savedStatus[currentQuestion.id] ? 'Saved!' : 'Save'}
                  </Button>
                </div>
                
                <Textarea
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                  placeholder="Type your answer here..."
                  rows={8}
                  className="resize-none"
                />
                
                <div className="text-xs text-slate-500">
                  {answers[currentQuestion.id]?.length || 0} characters
                </div>
              </div>

              {currentQuestion.expectedAnswer && (
                <>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-slate-600 dark:text-slate-400">
                      Expected Answer Outline
                    </h4>
                    <div className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      {currentQuestion.expectedAnswer}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}

        {/* Question Overview */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Question Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {questions.map((question, index) => (
                <Button
                  key={question.id}
                  variant={index === currentQuestionIndex ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentQuestionIndex(index)}
                  className="justify-start h-auto p-3"
                >
                  <div className="text-left">
                    <div className="font-medium text-xs">Q{question.order}</div>
                    <div className="text-xs opacity-70">{question.category}</div>
                    {answers[question.id] && (
                      <CheckCircle className="h-3 w-3 text-green-500 inline ml-1" />
                    )}
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}