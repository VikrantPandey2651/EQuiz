import { useState } from "react";
import { quizQuestions } from "../data/quizdata";

const QuizPage = ({ playerName, setquizState, score, setScore }) => {
  let [queNum, setQueNum] = useState(0);
  let [optionChosen, setOptionChosen] = useState("");

  const quizQue = [...quizQuestions];

  const finishQuizHandler = () => {
    setquizState("End");
  };

  const nextButtonHandler = () => {
    if (quizQue[queNum].correctOption === optionChosen) {
      setScore((score += 1));
    }
    console.log("Current Score ", score);
    setOptionChosen("");
    setQueNum((queNum += 1));
  };

  return (
    <>
      <div className="">
        <h1>Hello,{playerName} </h1>
      </div>
      <div className="question">
        <h1>{quizQue[queNum].question}</h1>
        <button
          onClick={() => {
            setOptionChosen("A");
          }}
        >
          {quizQue[queNum].optionA}
        </button>
        <button
          onClick={() => {
            setOptionChosen("B");
          }}
        >
          {quizQue[queNum].optionB}
        </button>
        <button
          onClick={() => {
            setOptionChosen("C");
          }}
        >
          {quizQue[queNum].optionC}
        </button>
        <button
          onClick={() => {
            setOptionChosen("D");
          }}
        >
          {quizQue[queNum].optionD}
        </button>
      </div>
      {queNum === quizQue.length - 1 ? (
        <button onClick={finishQuizHandler}>Finish</button>
      ) : (
        <button onClick={nextButtonHandler}>Next</button>
      )}
    </>
  );
};

export default QuizPage;
