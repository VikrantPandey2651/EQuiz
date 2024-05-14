import HomePage from "./HomePage";

import QuizPage from "./QuizPage";

const HomeQuiz = ({
  quizState,
  setquizState,
  playerName,
  setPlayerName,
  score,
  setScore,
}) => {
  return (
    <>
      {quizState === "Home" ? (
        <HomePage
          quizState={quizState}
          setquizState={setquizState}
          playerName={playerName}
          setPlayerName={setPlayerName}
        ></HomePage>
      ) : (
        <QuizPage
          playerName={playerName}
          setquizState={setquizState}
          score={score}
          setScore={setScore}
        ></QuizPage>
      )}
    </>
  );
};

export default HomeQuiz;
