import { useState } from "react";

import HomeQuiz from "./Components/HomeQuiz";
import ScorePage from "./Components/ScorePage";

function App() {
  const [quizState, setquizState] = useState("Home"); //Threee possible values --> Home, start, end
  const [playerName, setPlayerName] = useState("XYZ");
  let [score, setScore] = useState(0);

  return (
    <>
      {quizState === "Home" || quizState === "Start" ? (
        <HomeQuiz
          quizState={quizState}
          setquizState={setquizState}
          playerName={playerName}
          setPlayerName={setPlayerName}
          score={score}
          setScore={setScore}
        ></HomeQuiz>
      ) : (
        <ScorePage
          quizState={quizState}
          setquizState={setquizState}
          playerName={playerName}
          score={score}
        ></ScorePage>
      )}
    </>
  );
}

export default App;
