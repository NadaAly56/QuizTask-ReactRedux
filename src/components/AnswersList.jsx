import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitAnswer } from "../redux/questionsSlice";

export default function AnswersList() {
    const { questions, currentQuestionIndex, currentAnswerIndex } = useSelector((store)=>store.questions)
    const dispatch = useDispatch()

    function handleClick(index) {
        dispatch(submitAnswer(index))
    }
  return (
    <fieldset id="step1">
      <div className="row">
       {
        questions[currentQuestionIndex].choices.map(
            (choice, index) =>  <div className="col-md-3 tab-50 mob-100" 
           
            key={choice}>
            <div className={`radio-btn bounce-left}`}>
               
              <input
                className={`op${index+1} ${currentAnswerIndex === index ? 'selected':''}`}
                type="radio"
                name="op1"
                value={choice}
                style={currentAnswerIndex === index ?{borderColor:'#F60079'}:{}}
                onClick={()=>handleClick(index)}
              ></input>
              <label style={currentAnswerIndex === index ?{color:'#F60079'}:{}}>{choice}</label>
            </div>
          </div>
        )
       }
      </div>
    </fieldset>
  );
}
