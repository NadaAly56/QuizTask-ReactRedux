import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from '../redux/questionsSlice'

export default function Start() {
    const dispatch = useDispatch()
    function handleClick() {
        dispatch(fetchData())
    }
  return (
    <section className='start'>
        <div className="next-prev">
            {/* <img src='question.jpg' alt='question'></img> */}
            <h1>Are you Ready To Start?</h1>
            <button type="button" id="step1btn" className="next" onClick={handleClick}>
            Start Quiz
            </button>   
    </div>
    </section>
  )
}
