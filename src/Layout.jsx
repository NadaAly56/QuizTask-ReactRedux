import React from 'react'
import AnswersList from './components/AnswersList.jsx'
import Button from './components/Button.jsx'
import Header from './components/Header'
import Question from './components/Question.jsx'
import Loader from './components/Loader.jsx'
import Start from './components/Start.jsx'
import { useSelector } from 'react-redux'
export default function Layout() {
    const { status, error } = useSelector((store) => store.questions)

    return (
        <main className="overflow-hidden">
            {
                status === "" && <Start />
            }
            {
                status === "loading" && <Loader />
            }
            {status === "failed" && <div>{error}</div>}
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
