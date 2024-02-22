export default function Header() {
  return (
  <header>
    <div className="container no-div">
        <div className="step-count">
            <div className="step-count-bar active">
                <div className="step-number">
                    <div className="number-inner">1</div>
                </div>
            </div>
            <div className="step-count-bar">
                <div className="step-number">
                    <div className="number-inner">2</div>
                </div>
            </div>
            <div className="step-count-bar">
                <div className="step-number">
                    <div className="number-inner">3</div>
                </div>
            </div>
            <div className="step-count-bar">
                <div className="step-number">
                    <div className="number-inner">4</div>
                </div>
            </div>
            <div className="step-count-bar no-line">
                <div className="step-number">
                    <div className="number-inner">5</div>
                </div>
            </div>
        </div>
    </div>
    <div className="timer">
        <div className="timer-inner">
            <div className="timer-count">
                <span id="countdown-timer">0</span>
                sec
            </div>
        </div>
    </div>
</header>
  )
}
