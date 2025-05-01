import React, { useState } from 'react';

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  }
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
     if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } 
};
  return (
    <div className="quiz-container">
      {
    (
        <>
          <div>
            <h2>Question {currentQuestion + 1}/{quizData.length}</h2>
            <div className="question-text">
              {quizData[currentQuestion].question}
            </div>
          </div>
          <button 
            onClick={handleNextQuestion}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default QuizApp;
