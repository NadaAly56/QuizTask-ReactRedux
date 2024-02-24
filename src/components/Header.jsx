import { useSelector } from "react-redux"

export default function Header() {

    const { questions, currentQuestionIndex, points } = useSelector((store)=>store.questions)
  return (
  <header>
    <div className="container no-div">
        <div className="step-count">
            {
                questions.map(
                    (question, index) => <div 
                    className={`step-count-bar ${currentQuestionIndex === index ? 'active' : ''}
                    ${index === questions.length - 1 ? 'no-line' : ''}`}
                    key={question.question}
                    >
                <div className="step-number">
                    <div className="number-inner">{index + 1}</div>
                </div>
            </div>)
            }
        </div>
    </div>
    <div className="timer">
        <div className="timer-inner">
            <div className="timer-count">
                <span id="countdown-timer"> { points } </span>
            </div>
        </div>
    </div>
</header>
  )
}
