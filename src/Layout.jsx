import React, { useEffect } from 'react'
import AnswersList from './components/AnswersList.jsx'
import Button from './components/Button.jsx'
import Header from './components/Header'
import Question from './components/Question.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './redux/questionsSlice.js'
import Loader from './components/Loader.jsx'
import Start from './components/Start.jsx'
export default function Layout() {
    const { status, error } = useSelector((store)=> store.questions)
    const dispatch = useDispatch()
    // useEffect(()=>{
    //   dispatch(fetchData())
    // },[dispatch])
  
  return (
    <main className="overflow-hidden">
        {
            status === "" && <Start />
        }
    {
      status === "loading" && <Loader />
    }
    { status === "failed" && <div>{error}</div>}
    {
      status === "ready" && 
      <>
      <Header />
    <form>
      <div className="quiz-main">
        <div className="container show-section">
        <section className='steps'>
          <Question />
          <AnswersList />
          <Button />
        </section>
        </div>
      </div>
    </form>
      </>
      
    }
  </main>
  )
}
