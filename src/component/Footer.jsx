import React from "react";

const Footer = ({ handleReset }) => {
  return (
    <div className="bg-primary w-full text-center lg:flex lg:justify-between px-2 lg:px-[73px] py-1 lg:py-[9px] text-white lg:h-[88px]">
      <div className="flex justify-between">
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            className="lg: w-[50px] lg:h-[50px] cursor-pointer"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10.707-3.707A1 1 0 0 0 11.998 8a1 1 0 0 0-.705.293a1 1 0 0 1-1.414-1.414a3 3 0 0 1 2.116-.88a3 3 0 0 1 2.126.88A2.994 2.994 0 0 1 13 11.829l.001.167a1 1 0 0 1-2 .008l-.004-1A1 1 0 0 1 11.999 10a1 1 0 0 0 .71-.293A1 1 0 0 0 13 9a1 1 0 0 0-.293-.707M10.5 16a1.5 1.5 0 0 1 1.5-1.5h.01a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            className="lg: w-[50px] lg:h-[50px] cursor-pointer"
            onClick={handleReset}
          >
            <path
              fill="currentColor"
              d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"
            />
          </svg>
        </span>
      </div>
      <div className="text-[15px] lg:text-[24px] lg:font-bold">
        Created By: Annisa Rahmadani
      </div>
    </div>
  );
};

export default Footer;
