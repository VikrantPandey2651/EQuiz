import QuizPage from "./QuizPage";

const Quiz = ({ playerName, setquizState }) => {
  const finishQuizHandler = () => {
    setquizState("End");
  };

  return (
    <>
      <h1>{playerName}</h1>

      <button onClick={finishQuizHandler}>Finish</button>
    </>
  );
};

export default Quiz;
