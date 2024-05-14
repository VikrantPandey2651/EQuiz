import { useRef } from "react";
import "./HomePage.css";

const HomePage = ({ quizState, setquizState, playerName, setPlayerName }) => {
  const nameInput = useRef();
  const setQuizStart = () => {
    if (nameInput.current.value !== "") {
      setPlayerName(nameInput.current.value);
      setquizState("Start");
    }
  };

  return (
    <>
      <div className="homepage">
        <h1 className="heading">Hi, Welcome to the E-Quiz</h1>
        <h3 className="para"> Please enter your name to start the game : </h3>
        <input type="text" ref={nameInput}></input>
        <button onClick={setQuizStart}>Start Quiz</button>
      </div>
    </>
  );
};

export default HomePage;
