import React, { useState } from "react";
import "./Question.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Question = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="container question">
      <div className="question-title">
        <h4>{title}</h4>
        <button className="question-icons" onClick={handleClick}>
          {showAnswer ? (
            <AiOutlineMinus color="red" />
          ) : (
            <AiOutlinePlus color="rgb(68, 241, 0)" />
          )}
        </button>
      </div>
      <div className="question-answer">
        {showAnswer && <p className="u-text-faq">{answer}</p>}
      </div>
    </div>
  );
};

export default Question;