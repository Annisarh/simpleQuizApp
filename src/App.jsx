import Header from "./component/Header";
import Footer from "./component/Footer";
import Start from "./pages/Start";
import Question from "./pages/Question";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("start");
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header display={display} />
        <div className="w-full bg-secondary flex-1">
          {display == "start" && <Start setDisplay={setDisplay} />}
          {display == "questions" && <Question />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
