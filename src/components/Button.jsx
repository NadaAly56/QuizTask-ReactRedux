import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextQuestion } from '../redux/questionsSlice'
import { useNavigate } from 'react-router-dom'

export default function Button() {
    const { currentQuestionIndex, currentAnswerIndex, questions } = useSelector((store) => store.questions)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleNext() {
        if (currentQuestionIndex >= questions.length - 1)
            navigate('/finish')
        dispatch(nextQuestion())
    }
    return (
        <div className="next-prev">
            <button type="button" id="step1btn" className="next"
                disabled={currentAnswerIndex == null}
                onClick={handleNext}>
                {
                    currentQuestionIndex >= questions.length - 1 ? 'Finish' : 'next question'
                }
                <i className="fa-solid fa-arrow-right"></i></button>
        </div>
    )
}
