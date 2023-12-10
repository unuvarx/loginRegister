import React from "react";

export default function NormalInput({title, placeholder, value, name, onChange }) {
  return (
    <div className="flex flex-col">
      <label
        className="text-[rgba(4,3,69,.4)] font-bold tracking-[-.16px] text-[13px] mb-3"
        htmlFor=""
      >
        {title}
      </label>
      <input
      value={value}
      onChange={onChange}
      name={name}
        type="text"
        className=" outline-none border p-2  border-solid border-grey  focus:border-green focus:ring-0 rounded-[16px] px-[22px] py-[15px]"
        placeholder={placeholder}
      />
    </div>
  );
}
