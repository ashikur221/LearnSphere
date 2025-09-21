import React, { useState, useEffect, useCallback } from 'react'
import { ImageProvider } from '@/utils/ImageProvider'
import { ArrowRight, Badge, Play, Clock, Users, CheckCircle } from 'lucide-react'
import Statistics from '@/components/dashboard/Statistics';
import { CustomPassing, CustomQuestion, CustomTime } from '@/utils/IconProvider';
import BadgeCard from '@/components/completionBadge/BadgeCard';

// Quiz questions data - moved outside component to avoid re-creation
const quizQuestions = [
    {
        id: 1,
        question: "Which of the following is the best definition of continuous measurement?",
        options: [
            "Recording behavior that occurs at specific moments in time",
            "Recording every instance of a behavior within an observation period",
            "Measuring behavior only when it reaches a certain intensity",
            "Recording behavior only during predetermined intervals"
        ],
        correctAnswer: 1,
        explanation: "Continuous measurement involves recording every instance of a behavior within an observation period, providing the most comprehensive data about behavior occurrence."
    },
    {
        id: 2,
        question: "What is the primary purpose of measurement in behavior analysis?",
        options: [
            "To predict future behavior",
            "To provide objective data about behavior",
            "To control behavior",
            "To eliminate unwanted behavior"
        ],
        correctAnswer: 1,
        explanation: "The primary purpose of measurement in behavior analysis is to provide objective, quantifiable data about behavior that can be used to make informed decisions about interventions."
    },
    {
        id: 3,
        question: "Which measurement procedure involves recording the duration of a behavior?",
        options: [
            "Frequency recording",
            "Latency recording",
            "Duration recording",
            "Interval recording"
        ],
        correctAnswer: 2
    },
    {
        id: 4,
        question: "What is the difference between frequency and rate?",
        options: [
            "Frequency is the number of occurrences, rate includes time",
            "Rate is the number of occurrences, frequency includes time",
            "They are the same thing",
            "Frequency is used for discrete behaviors, rate for continuous"
        ],
        correctAnswer: 0
    },
    {
        id: 5,
        question: "Which of the following is an example of discontinuous measurement?",
        options: [
            "Counting every instance of a behavior",
            "Recording the exact time a behavior occurs",
            "Partial interval recording",
            "Measuring the duration of a behavior"
        ],
        correctAnswer: 2
    },
    {
        id: 6,
        question: "What is latency in behavior measurement?",
        options: [
            "The duration of a behavior",
            "The time between a stimulus and the start of a behavior",
            "The frequency of a behavior",
            "The intensity of a behavior"
        ],
        correctAnswer: 1
    },
    {
        id: 7,
        question: "Which measurement procedure is most appropriate for high-frequency behaviors?",
        options: [
            "Continuous measurement",
            "Momentary time sampling",
            "Partial interval recording",
            "Whole interval recording"
        ],
        correctAnswer: 1
    },
    {
        id: 8,
        question: "What is the purpose of interobserver agreement (IOA)?",
        options: [
            "To increase the frequency of behavior",
            "To ensure measurement reliability",
            "To reduce the duration of observation",
            "To eliminate measurement errors"
        ],
        correctAnswer: 1
    },
    {
        id: 9,
        question: "Which of the following is true about permanent product recording?",
        options: [
            "It requires direct observation of behavior",
            "It measures the result or outcome of behavior",
            "It is only used for discrete behaviors",
            "It cannot be used for academic behaviors"
        ],
        correctAnswer: 1
    },
    {
        id: 10,
        question: "What is the minimum IOA percentage typically considered acceptable?",
        options: [
            "70%",
            "80%",
            "90%",
            "95%"
        ],
        correctAnswer: 1
    }
]

const Quiz = () => {

    const keypoints = [
        `You have 15 minutes to complete this quiz. The timer will start once you click "Start Now".`,
        `This quiz contains 10 multiple-choice questions based on the Measurement module.`,
        `You must score at least 80% (8/10 questions) to pass this quiz.`,
        `You can navigate between questions using the Previous and Next buttons.`,
        `You can navigate between questions using the Previous and Next buttons.`,
        `If you run out of time, your quiz will be automatically submitted with your current answers.`
    ]

    // State management
    const [quizStarted, setQuizStarted] = useState(false)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState({})
    const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes in seconds
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [score, setScore] = useState(0)
    const [timeTaken, setTimeTaken] = useState(0)
    const [startTime, setStartTime] = useState(null)

    // Helper functions
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    const handleQuizSubmit = useCallback(() => {
        let correctAnswers = 0
        quizQuestions.forEach(question => {
            if (answers[question.id] === question.correctAnswer) {
                correctAnswers++
            }
        })
        const percentage = (correctAnswers / quizQuestions.length) * 100
        setScore(percentage)

        // Calculate time taken
        if (startTime) {
            const timeElapsed = Math.floor((Date.now() - startTime) / 1000)
            setTimeTaken(timeElapsed)
        }

        setQuizCompleted(true)
    }, [answers, startTime])

    // Timer effect
    useEffect(() => {
        let interval = null
        if (quizStarted && timeLeft > 0 && !quizCompleted) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft => timeLeft - 1)
            }, 1000)
        } else if (timeLeft === 0) {
            handleQuizSubmit()
        }
        return () => clearInterval(interval)
    }, [quizStarted, timeLeft, quizCompleted, handleQuizSubmit])

    const handleStartQuiz = () => {
        setQuizStarted(true)
        setTimeLeft(15 * 60)
        setStartTime(Date.now())
    }

    const handleAnswerSelect = (questionId, answerIndex) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answerIndex
        }))
    }

    const handleNextQuestion = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    const handleFinishQuiz = () => {
        handleQuizSubmit()
    }

    // Get incorrect answers for review
    const getIncorrectAnswers = () => {
        return quizQuestions.filter(question =>
            answers[question.id] !== question.correctAnswer
        )
    }

    const getCorrectAnswers = () => {
        return quizQuestions.filter(question =>
            answers[question.id] === question.correctAnswer
        )
    }
    // Quiz completion screen
    if (quizCompleted) {
        const passed = score >= 80
        const correctCount = getCorrectAnswers().length
        const incorrectCount = getIncorrectAnswers().length
        const incorrectAnswers = getIncorrectAnswers()

        return (
            <div className='container mx-auto px-5'>
                <BadgeCard showModal={true} />
                <div className="border rounded-xl shadow-md">
                    {/* Header */}
                    <div className="bg-theme-primary rounded-t-xl p-6 text-center">
                        <h1 className="text-2xl lg:text-3xl text-white font-bold mb-2">Quiz Results</h1>
                        <p className="text-white text-sm lg:text-base">Measurement Quiz Performance Summary</p>
                    </div>

                    <div className="p-8">
                        {/* Overall Performance Summary */}
                        <div className="text-center mb-8">
                            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">{score.toFixed(0)}%</div>
                                    <div className="text-white text-sm">Score</div>
                                </div>
                            </div>
                            <h2 className={`text-2xl font-bold mb-2 ${passed ? 'text-green-600' : 'text-red-600'}`}>
                                {passed ? 'Congratulations! You passed the quiz' : 'Quiz Failed'}
                            </h2>
                            <p className="text-gray-600">
                                You answered {correctCount} out of {quizQuestions.length} questions correctly
                            </p>
                        </div>

                        {/* Key Metrics Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white border rounded-lg p-6 text-center shadow-sm">
                                <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-600 mb-1">Correct Answers</h3>
                                <p className="text-3xl font-bold text-gray-800">{correctCount}</p>
                            </div>
                            <div className="bg-white border rounded-lg p-6 text-center shadow-sm">
                                <div className="w-12 h-12 mx-auto mb-3 bg-red-100 rounded-full flex items-center justify-center">
                                    <Badge className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-600 mb-1">Incorrect Answers</h3>
                                <p className="text-3xl font-bold text-gray-800">{incorrectCount}</p>
                            </div>
                            <div className="bg-white border rounded-lg p-6 text-center shadow-sm">
                                <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-600 mb-1">Time Taken</h3>
                                <p className="text-3xl font-bold text-gray-800">{formatTime(timeTaken)}</p>
                            </div>
                        </div>

                        {/* Incorrect Answers Review */}
                        {incorrectAnswers.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-6">Incorrect Answers Review</h3>
                                <div className="space-y-6">
                                    {incorrectAnswers.map((question) => (
                                        <div key={question.id} className="bg-gray-50 border rounded-lg p-6">
                                            <h4 className="font-semibold text-gray-800 mb-4">
                                                Question {question.id}: {question.question}
                                            </h4>
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center text-red-600">
                                                    <Badge className="w-4 h-4 mr-2" />
                                                    <span className="font-medium">Your answer: {question.options[answers[question.id]]}</span>
                                                </div>
                                                <div className="flex items-center text-green-600">
                                                    <CheckCircle className="w-4 h-4 mr-2" />
                                                    <span className="font-medium">Correct answer: {question.options[question.correctAnswer]}</span>
                                                </div>
                                            </div>
                                            {question.explanation && (
                                                <p className="text-gray-600 text-sm bg-white p-3 rounded border">
                                                    <strong>Explanation:</strong> {question.explanation}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Navigation Button */}
                        <div className="text-center">
                            <button
                                onClick={() => {
                                    setQuizStarted(false)
                                    setQuizCompleted(false)
                                    setCurrentQuestion(0)
                                    setAnswers({})
                                    setScore(0)
                                    setTimeLeft(15 * 60)
                                    setTimeTaken(0)
                                    setStartTime(null)
                                }}
                                className="bg-theme-primary text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
                            >
                                <ArrowRight className="w-4 h-4 rotate-180" />
                                Back to the module
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }



    // Quiz interface
    if (quizStarted) {
        const currentQ = quizQuestions[currentQuestion]

        return (
            <div className='container mx-auto px-5'>
                <div className="border rounded-xl shadow-md">
                    {/* Quiz Header */}
                    <div className="bg-theme-primary rounded-t-xl p-5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="">
                                <img src={ImageProvider.bacb2} alt="" />
                            </div>
                            <div className="">
                                <p className="text-sm lg:text-2xl text-white font-bold">RBT Training Quiz: Measurement</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 text-white">
                            <div className="flex items-center gap-2">
                                <CustomQuestion />
                                <span className="text-sm">10 Questions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CustomTime />
                                <span className="text-sm">15 Minutes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CustomPassing />
                                <span className="text-sm">80% to Pass</span>
                            </div>
                            <div className="flex items-center gap-2 bg-green-500 px-3 py-1 rounded-full">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm font-bold">{formatTime(timeLeft)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Quiz Content */}
                    <div className="p-8">
                        <div className="bg-white border rounded-lg shadow-sm p-6">
                            {/* Question Header */}
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-500 text-sm">Question {currentQuestion + 1} of 10</span>
                            </div>

                            {/* Question */}
                            <h3 className="text-lg font-bold text-gray-800 mb-6">
                                {currentQ.question}
                            </h3>

                            {/* Answer Options */}
                            <div className="space-y-3 mb-8">
                                {currentQ.options.map((option, index) => (
                                    <label
                                        key={index}
                                        className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${answers[currentQ.id] === index
                                            ? 'bg-blue-50 border-blue-500'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name={`question-${currentQ.id}`}
                                            value={index}
                                            checked={answers[currentQ.id] === index}
                                            onChange={() => handleAnswerSelect(currentQ.id, index)}
                                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <span className="ml-3 text-gray-700">{option}</span>
                                    </label>
                                ))}
                            </div>

                            {/* Navigation */}
                            <div className="flex justify-between items-center">
                                <div className="text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded">
                                    Question {currentQuestion + 1} of 10
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={handlePreviousQuestion}
                                        disabled={currentQuestion === 0}
                                        className={`px-4 py-2 rounded-lg flex items-center gap-2 ${currentQuestion === 0
                                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-gray-500 text-white hover:bg-gray-600'
                                            }`}
                                    >
                                        ← Previous
                                    </button>
                                    {currentQuestion === quizQuestions.length - 1 ? (
                                        <button
                                            onClick={handleFinishQuiz}
                                            className="bg-theme-primary text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                                        >
                                            Finish Quiz
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleNextQuestion}
                                            className="bg-theme-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                                        >
                                            Next →
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Initial quiz instructions screen
    return (
        <div className='container mx-auto px-5'>
            
            <div className="">
                <div className="border rounded-xl shadow-md">
                    <div className="bg-theme-primary rounded-t-xl p-5 flex items-center gap-4">
                        <div className="">
                            <img src={ImageProvider.bacb2} alt="" />
                        </div>
                        <div className="">
                            <p className="text-sm lg:text-2xl text-white font-bold">Measurement Quiz</p>
                            <p className="text-sm lg:text-base text-white">Please read the instructions carefully before starting.</p>
                        </div>
                    </div>

                    <div className="flex p-5">
                        <div className=" w-full  p-4">
                            <div className="">
                                <p className="text-sm lg:text-lg text-big-text font-bold">
                                    Course Includes:
                                </p>
                                {
                                    keypoints.map((point, index) => (
                                        <p key={index} className="text-sm my-2 lg:text-base text-small-text flex gap-2 items-center">
                                            <img src={ImageProvider.Tikk} alt="" />
                                            {point}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-5 p-10">
                        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 gap-2 border shadow-lg rounded-lg">
                            <CustomQuestion />
                            <p className="text-base text-small-text font-semibold">Questions</p>
                            <p className="font-semibold text-xl lg:text-4xl text-big-text">10</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 gap-2 border shadow-lg rounded-lg">
                            <CustomTime />
                            <p className="text-base text-small-text font-semibold">Time Limit</p>
                            <p className="font-semibold text-xl lg:text-4xl text-big-text">15 Minutes</p>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-gray-100 p-5 gap-2 border shadow-lg rounded-lg">
                            <CustomPassing />
                            <p className="text-base text-small-text font-semibold">Passing Score</p>
                            <p className="font-semibold text-xl lg:text-4xl text-big-text">80%</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-end p-5 border-t ">
                        <div className="">
                            <button
                                onClick={handleStartQuiz}
                                className='bg-green-500 text-white py-3 px-5 rounded-full flex items-center gap-1 hover:bg-green-600 transition-colors'
                            >
                                <Play />Start Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;