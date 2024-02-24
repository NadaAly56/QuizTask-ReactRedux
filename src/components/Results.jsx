import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Results() {
  const {
    wrongAnswers,
    correctAnswers,
    currentQuestionIndex,
    questions,
    points,
    total,
  } = useSelector((store) => store.questions);
  const navigate = useNavigate();

  useEffect(() => {
    if (questions === null || currentQuestionIndex < questions.length - 1)
      navigate("/");
  }, [questions, currentQuestionIndex, navigate]);
  return (
    <>
      <header className="thankyouheader">
        <h2>Quiz has been taken</h2>
      </header>
      <section className="results">
        <h1>
          Your Score Is <span>{points}</span> Out Of <span>{total}</span>{" "}
        </h1>
        <div className="correct-wrong">
          <div>
            <h1>Correct answers</h1>
            {correctAnswers.map((question, index) => {
              return (
                <div key={index}>
                  <h3 key={question.question}>{question.question}</h3>
                  <ol type="a">
                    {question.choices.map((choice, index) => (
                      <li
                        key={choice}
                        style={
                          question.correct_choice - 1 === index
                            ? { color: "green" }
                            : {}
                        }
                      >
                        {choice}
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
          <div>
            <h1>Wrong answers</h1>
            {wrongAnswers.map((question, index) => {
              return (
                <div key={index}>
                  <h3 key={question.question}>{question.question}</h3>
                  <ol type="a">
                    {question.choices.map((choice, index) => (
                      <li
                        key={choice}
                        style={
                          question.correct_choice - 1 === index
                            ? { color: "green" }
                            : question.answer === index
                            ? { color: "red" }
                            : {}
                        }
                      >
                        {choice}
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
