import Header from "./component/Header";
import Footer from "./component/Footer";
import Start from "./pages/Start";
import Question from "./pages/Question";
import Score from "./pages/Score";
import Review from "./pages/Review";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("start");
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState({});

  const handlePrev = () => {
    setIndex((index) => index - 1);
  };
  const handleNext = () => {
    setIndex((index) => index + 1);
  };

  // handle reset
  const handleReset = () => {
    setIndex(0);
    setAnswer({});
    setDisplay("start");
    setScore({});
  };
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header display={display} />
        <div className="w-full bg-secondary flex-1">
          {display == "start" && <Start setDisplay={setDisplay} />}
          {display == "questions" && (
            <Question
              index={index}
              handleNext={handleNext}
              handlePrev={handlePrev}
              answer={answer}
              setAnswer={setAnswer}
              setScore={setScore}
              setDisplay={setDisplay}
            />
          )}
          {display == "score" && (
            <Score setDisplay={setDisplay} score={score} setIndex={setIndex} />
          )}
          {display == "review" && (
            <Review
              index={index}
              answer={answer}
              setDisplay={setDisplay}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />
          )}
        </div>
        <Footer handleReset={handleReset} />
      </div>
    </>
  );
}

export default App;
