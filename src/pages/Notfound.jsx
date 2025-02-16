import React from "react";

function Notfound() {
  return (
    <div className="h-screen bg-[#000a0f] text-[#fff] flex justify-evenly items-center">
      <div className="flex justify-between items-center flex-col">
        <h1 className="animate-textGradient text-[220px] font-[Roboto] bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
          404
        </h1>
        <p className=" font-[Roboto] text-[25px] text-center">
          Sorry, no such pages were found
        </p>
      </div>
    </div>
  );
}

export default Notfound;
