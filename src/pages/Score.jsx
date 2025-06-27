import React from "react";

const Score = ({ setDisplay, score, setIndex }) => {
  const handleClick = () => {
    setDisplay("review");
    setIndex(0);
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-full border">
      <div className="text-3xl font-bold">Your Score</div>
      <div className="rounded-full p-6 border-2 border-white">
        <span className="text-4xl font-bold">{score.score}</span>
      </div>
      <div className="flex flex-wrap gap-8">
        <div className="font-bold text-xl">True : {score.true}</div>
        <div className="font-bold text-xl">False : {score.false}</div>
      </div>
      <div
        className="font-bold text-xl border-2 border-white px-4 py-2 cursor-pointer"
        onClick={handleClick}
      >
        Review Answer
      </div>
    </div>
  );
};

export default Score;
