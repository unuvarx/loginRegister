import React from "react";

export default function Checkbox({checkBox, colorText, text, handleChange, name}) {
  return (
    <div className="flex  mt-[16px]  w-full items-center">
      <input
        type="checkbox"
        name={name}
        className={`focus:outline-none checked:bg-darkgreen  border p-2  border-solid border-grey cursor-pointer  focus:border-darkgreen focus:ring-0 rounded-[7px]  px-[11px] py-[12px]`}
        placeholder="Firma Adı"
        value={checkBox}
        onChange={handleChange}
      />
      <a className="text-darkgreen font-bold ml-[8px] text-sm" href="">
       {colorText}
       <span className=" text-black font-bold text-[13px] ml-[8px]">
        {text}
      </span>
      </a>
      
    </div>
  );
}
