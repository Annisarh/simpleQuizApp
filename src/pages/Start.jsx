import React from "react";

const Start = ({ setDisplay }) => {
  return (
    <div className="flex flex-col gap-5 font-bold items-center justify-center h-full">
      <div className="text-3xl font-bold text-slate-800 font-serif lg:text-[80px]">
        Quiz App
      </div>
      <div className="text-xl lg:text-4xl text-slate-800">
        <button
          className="bg-background border-4 lg:pb-2 lg:pt-1 px-4 rounded-xl border-white hover:scale-110 transition duration-250 hover:text-blue-800 hover:border-slate-700 hover:border-4"
          onClick={() => setDisplay("questions")}
        >
          Start
        </button>
      </div>
      <div className="text-base text-slate-800">
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit<br></br>.
          Perspiciatis error ipsa repudiandae cupiditate mollitia.
        </p>
      </div>
    </div>
  );
};

export default Start;
