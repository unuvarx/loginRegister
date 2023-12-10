import React from "react";

export default function RegisterCards({ img, count, info, text }) {
  return (
    <div className=" mt-[3rem]">
      <div className="flex items-center mb-[8px]">


        <img className="w-[42px]" src={`/assets/images/${img}`} alt="" />
        <div className="flex flex-col ml-3">
          <span className="text-[#040345] font-semibold text-[1.8rem];"> {count} </span>
          <span className="text-[15px] text-[rgba(4,3,69,.4)]"> {info} </span>
        </div>



      </div>



      <span className="  text-[15px] text-[rgba(4,3,69,.4)]" > {text} </span>



    </div>
  );
}
