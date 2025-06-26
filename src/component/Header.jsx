import React from "react";

const Header = ({ display }) => {
  return (
    <div className="bg-primary w-full flex items-center px-2 lg:px-[73px] lg:py-[9px] text-white lg:h-[88px]">
      {display !== "start" && <div className="text-[55px]">Quiz APP</div>}
    </div>
  );
};

export default Header;
