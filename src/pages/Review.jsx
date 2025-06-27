import React from "react";
import { questions } from "../data/data";

const Review = ({ answer, index, setDisplay, handlePrev, handleNext }) => {
  console.log(index);
  return (
    <div className="h-full relative p-[15px] lg:p-[54px] font-bold flex flex-col gap-6 md:gap-[40px] lg:gap-[45px] justify-center items-center">
      <>
        <div className="flex text-white text-[32px] justify-center text-center">{`Question ${
          index + 1
        } : ${questions[index].question}`}</div>
        <div className="w-full flex justify-center">
          <div className="h-fit w-[500px] rounded-[20px] flex text-white p-5 bg-primary border-solid text-2xl">
            {answer[index + 1]
              ? `${answer[index + 1]} . ${
                  questions[index].options[answer[index + 1]]
                }`
              : "anda tidak jawab"}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 text-white text-xl">
          {questions[index].answer === answer[index + 1] ? "Betul" : "Salah"}
        </div>
        <div className="text-xl text-white">
          Jawabannya : {questions[index].options[questions[index].answer]}
        </div>
      </>
      <div className="lg:absolute flex justify-between lg:gap-4 bottom-6 right-2 px-[15px] lg:px-[54px] lg:right-6 lg:bottom-2">
        <span className="hover:scale-110 cursor-pointer" onClick={handlePrev}>
          {index !== 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="lg: w-[40px] lg:h-[40px]"
            >
              <path
                fill="currentColor"
                d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m8 15H11.85l5.58 5.573L16 24l-8-8l8-8l1.43 1.393L11.85 15H24Z"
              />
              <path
                fill="none"
                d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8z"
              />
            </svg>
          )}
        </span>
        <span className="hover:scale-110 cursor-pointer" onClick={handleNext}>
          {index + 1 !== questions.length && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="lg: w-[40px] lg:h-[40px]"
            >
              <path
                fill="currentColor"
                d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16m6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z"
              />
              <path
                fill="none"
                d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z"
              />
            </svg>
          )}
        </span>
      </div>
      {index + 1 === questions.length && (
        <div
          className="absolute bottom-4 left-[44%] border-2 border-white rounded-lg px-2 py-1  md:left-[45%] md:bottom-6 lg:left-[77%] lg:bottom-2 lg:text-xl hover:scale-110 cursor-pointer"
          onClick={() => setDisplay("score")}
        >
          Your Score
        </div>
      )}
    </div>
  );
};

export default Review;
