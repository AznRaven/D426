"use client";
import { useState, useEffect } from "react";
import questionsData from "../data/questions";
import flashcards from "../data/flashcards";

export default function Home() {
  // Flashcard state
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timer, setTimer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);

  // Load high scores from localStorage
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    resetQuiz();
    // Load saved scores
    const savedScores = localStorage.getItem("quizHighScores");
    if (savedScores) {
      setHighScores(JSON.parse(savedScores));
    }

    // Load theme preference
    if (localStorage.getItem("darkMode") === "true") {
      setDarkMode(true);
    }
  }, []);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Handle explanation timer
  useEffect(() => {
    if (showExplanation) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);

      const explanationTimer = setTimeout(() => {
        if (answeredQuestions.length + skippedQuestions.length >= questions.length) {
          saveScore();
          setShowScore(true);
        } else {
          nextQuestion();
        }
      }, 10000);

      return () => {
        clearTimeout(explanationTimer);
        clearInterval(countdown);
      };
    }
  }, [showExplanation]);

  // Keyboard controls
  useEffect(() => {
    function handleKeyDown(e) {
      if (showFlashcards) {
        // Flashcard mode keys
        if (e.key === " " || e.key === "Spacebar") {
          setShowDefinition(!showDefinition);
        } else if (e.key === "ArrowRight" || e.key === "n") {
          nextFlashcard();
        } else if (e.key === "ArrowLeft" || e.key === "p") {
          prevFlashcard();
        }
      } else if (!showScore && !selectedAnswer) {
        // Quiz mode keys - number keys to select answers
        const num = parseInt(e.key);
        if (num >= 1 && num <= questions[currentQuestion]?.options.length) {
          handleAnswer(questions[currentQuestion].options[num - 1]);
        } else if (e.key === "s") {
          skipQuestion();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showFlashcards, showDefinition, questions, currentQuestion, selectedAnswer, showScore]);

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const resetQuiz = () => {
    const shuffledQuestions = shuffleArray([...questionsData]).map((q) => ({
      ...q,
      options: Array.isArray(q.options) ? shuffleArray([...q.options]) : [], // Ensure options is an array
    }));

    console.log("Shuffled Questions:", shuffledQuestions);

    setQuestions(shuffledQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setTimer(null);
    setAnsweredQuestions([]);
    setSkippedQuestions([]);
  };

  const handleAnswer = (option) => {
    if (!questions.length) return;

    const isCorrect = option === questions[currentQuestion].answer;

    // Play sound effect if enabled
    if (isCorrect) {
      playSound("correct");
    } else {
      playSound("incorrect");
    }

    console.log("Handling Answer:", option, "Is Correct:", isCorrect);

    setSelectedAnswer(option);
    setShowExplanation(true);
    setTimer(10);
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setAnsweredQuestions((prevAnswered) => [...prevAnswered, currentQuestion]);
  };

  const nextQuestion = () => {
    setCurrentQuestion((prevQuestion) => (prevQuestion + 1) % questions.length);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setTimer(null);
  };

  const skipQuestion = () => {
    console.log("Skipping Question:", currentQuestion);
    setSkippedQuestions((prevSkipped) => [...prevSkipped, currentQuestion]);
    nextQuestion();
  };

  const saveScore = () => {
    const newScore = {
      score: score,
      total: questions.length,
      date: new Date().toISOString(),
    };

    const updatedScores = [...highScores, newScore]
      .sort((a, b) => b.score / b.total - a.score / a.total)
      .slice(0, 5); // Keep top 5 scores

    setHighScores(updatedScores);
    localStorage.setItem("quizHighScores", JSON.stringify(updatedScores));
  };

  const nextFlashcard = () => {
    setCurrentFlashcard((currentFlashcard + 1) % flashcards.length);
    setShowDefinition(false);
  };

  const prevFlashcard = () => {
    setCurrentFlashcard((currentFlashcard - 1 + flashcards.length) % flashcards.length);
    setShowDefinition(false);
  };

  const playSound = (type) => {
    // Check if sound is enabled in user preferences
    const soundEnabled = localStorage.getItem("soundEnabled") !== "false";
    if (!soundEnabled) return;

    const sound = new Audio(`/sounds/${type}.mp3`);
    sound.play().catch((e) => console.log("Sound play error:", e));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Calculate quiz progress percentage
  const progressPercentage = questions.length
    ? ((answeredQuestions.length + skippedQuestions.length) / questions.length) * 100
    : 0;

  const skipCountdown = () => {
    console.log("Skipping Countdown:", currentQuestion);
    if (answeredQuestions.length + skippedQuestions.length >= questions.length) {
      saveScore();
      setShowScore(true);
    } else {
      nextQuestion();
    }
  };

  return (
    <div>
      <div
        className={`flex flex-col items-center justify-center min-h-screen p-4 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div className="w-full max-w-md">
          <h2 className="text-center text-6xl my-5">D426</h2>
          <p className="text-center text-3xl my-5">
            Data Management Foundations
          </p>
          {/* Header with mode toggles */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setShowFlashcards(!showFlashcards)}
              className={`px-4 py-2 rounded transition-colors ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white`}
              aria-label={
                showFlashcards
                  ? "Switch to Quiz Mode"
                  : "Switch to Flashcard Mode"
              }
            >
              {showFlashcards ? "← Quiz Mode" : "Flashcards →"}
            </button>

            <button
              onClick={toggleDarkMode}
              className={`ml-2 p-2 rounded-full ${
                darkMode ? "bg-yellow-400 text-black" : "bg-gray-800 text-white"
              }`}
              aria-label={
                darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>

          {/* Keyboard shortcuts help */}
          <div
            className={`text-xs mb-2 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {showFlashcards
              ? "Keyboard: Space (flip), ← → (navigate)"
              : "Keyboard: 1-4 (select answer), S (skip)"}
          </div>

          {/* Main content area */}
          {showFlashcards ? (
            <div className="space-y-4">
              {/* Flashcard counter */}
              <p
                className={`text-sm text-center ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Card {currentFlashcard + 1} of {flashcards.length}
              </p>

              {/* Flashcard */}
              <div
                className={`p-6 rounded-lg shadow-md text-center cursor-pointer transition-transform hover:scale-105 min-h-[200px] flex items-center justify-center ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
                onClick={() => setShowDefinition(!showDefinition)}
                role="button"
                aria-label="Flip flashcard"
                tabIndex="0"
              >
                <h2 className="text-lg font-bold">
                  {showDefinition
                    ? flashcards[currentFlashcard].definition
                    : flashcards[currentFlashcard].term}
                </h2>
              </div>

              {/* Flashcard navigation */}
              <div className="flex justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevFlashcard();
                  }}
                  className={`px-4 py-2 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  } rounded`}
                  aria-label="Previous flashcard"
                >
                  ← Previous
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextFlashcard();
                  }}
                  className={`px-4 py-2 ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  } rounded`}
                  aria-label="Next flashcard"
                >
                  Next →
                </button>
              </div>
            </div>
          ) : showScore ? (
            <div
              className={`p-6 rounded-lg shadow-md ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <h2 className="text-xl font-bold text-center mb-4">
                Quiz Complete!
              </h2>
              <p className="text-center text-lg mb-6">
                Your Score: {score} / {questions.length} (
                {Math.round((score / questions.length) * 100)}%)
              </p>

              {/* High scores */}
              {highScores.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-bold mb-2">High Scores:</h3>
                  <ul
                    className={`${
                      darkMode ? "bg-gray-700" : "bg-gray-100"
                    } rounded p-2`}
                  >
                    {highScores.map((score, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{new Date(score.date).toLocaleDateString()}</span>
                        <span>
                          {score.score}/{score.total} (
                          {Math.round((score.score / score.total) * 100)}%)
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={resetQuiz}
                className={`w-full p-2 ${
                  darkMode
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-500 hover:bg-green-600"
                } text-white rounded-lg`}
              >
                Start New Quiz
              </button>
            </div>
          ) : (
            <div>
              {/* Progress bar */}
              <div className="mb-4">
                <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${progressPercentage}%` }}
                    role="progressbar"
                    aria-valuenow={progressPercentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p
                  className={`text-xs mt-1 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Question{" "}
                  {answeredQuestions.length + skippedQuestions.length + 1} of{" "}
                  {questions.length}
                </p>
              </div>

              {/* Question card */}
              <div
                className={`p-6 rounded-lg shadow-md ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <h2 className="text-lg font-bold mb-4">
                  {questions[currentQuestion]?.question}
                </h2>

                {/* Answer options */}
                <div className="space-y-2">
                  {questions[currentQuestion]?.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-3 rounded-lg flex items-center transition-colors ${
                        selectedAnswer === null
                          ? `${
                              darkMode
                                ? "bg-gray-700 hover:bg-gray-600"
                                : "bg-gray-200 hover:bg-gray-300"
                            }`
                          : selectedAnswer === option
                          ? option === questions[currentQuestion].answer
                            ? "bg-green-500 text-white"
                            : "bg-red-500 text-white"
                          : option === questions[currentQuestion].answer &&
                            selectedAnswer !== null
                          ? "bg-green-500 text-white"
                          : `${darkMode ? "bg-gray-700" : "bg-gray-200"}`
                      }`}
                    >
                      <span className="mr-2">{index + 1}.</span> {option}
                    </button>
                  ))}
                </div>

                {/* Skip button */}
                {selectedAnswer === null && (
                  <button
                    onClick={skipQuestion}
                    className={`mt-4 px-4 py-2 w-full ${
                      darkMode
                        ? "bg-gray-600 hover:bg-gray-500"
                        : "bg-gray-300 hover:bg-gray-400"
                    } rounded-lg`}
                  >
                    Skip Question
                  </button>
                )}

                {/* Explanation section */}
                {showExplanation && (
                  <div
                    className={`mt-6 p-4 rounded-lg ${
                      darkMode ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  >
                    <h3 className="font-bold mb-2">Explanation:</h3>
                    <p className="text-sm">
                      {questions[currentQuestion]?.explanation}
                    </p>
                    <div className="mt-3 flex items-center">
                      <div className="w-full bg-gray-300 rounded-full h-2 mr-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(timer / 10) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{timer}s</span>
                    </div>
                    {/* Add the skip countdown button */}
                    <button
                      onClick={skipCountdown}
                      className={`mt-4 px-4 py-2 w-full ${
                        darkMode
                          ? "bg-gray-600 hover:bg-gray-500"
                          : "bg-gray-300 hover:bg-gray-400"
                      } rounded-lg`}
                    >
                      Skip Countdown
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
