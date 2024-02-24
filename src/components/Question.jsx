import React from 'react'
import { useSelector } from 'react-redux'
export default function Question() {
  const { questions, currentQuestionIndex } = useSelector((store)=>store.questions)
  return (
    <h2 className="quiz-question">
      {questions[currentQuestionIndex].question}
    </h2>
  )
}
