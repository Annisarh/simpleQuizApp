import React from "react";
import { questions } from "../data/data";

const Question = () => {
  return (
    <div className="h-full relative p-[15px] lg:p-[54px] font-bold flex flex-col gap-6 md:gap-[40px] lg:gap-[45px]">
      <>
        <div className="flex text-white text-[32px] justify-center text-center">{`Question 1 : ${questions[0].question}`}</div>
        <div className="grid grid-cols-1 gap-y-[15px] lg:grid-cols-2 lg:gap-x-[142px] lg:gap-y-[35px] lg:mx-[20px] mx-0">
          {Object.entries(questions[0].options).map(([key, value]) => {
            return (
              <div
                key={key}
                className={`bg-primary border h-[50px] lg:h-[100px] rounded-[20px] text-[18px] lg:text-[20px] lg:flex lg:items-center p-2 lg:p-4 text-white cursor-pointer hover:bg-blue-800 hover:border-3 hover:border-white hover:text-black`}
              >{`${key}. ${value}`}</div>
            );
          })}
        </div>
      </>
      <div className="lg:absolute flex justify-between lg:gap-4 bottom-6 right-2 px-[15px] lg:px-[54px] lg:right-6 lg:bottom-2 cursor-pointer">
        <span className="hover:scale-110">
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
        </span>
        <span className="hover:scale-110">
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
        </span>
      </div>
      <div className="absolute bottom-5 right-[50%] left-[50%]">Finish</div>
    </div>
  );
};

export default Question;
