import React, {useState} from "react";
import { FaEye } from "react-icons/fa";



export default function EyeInput({placeholder, name, onChange, value }) {

const [eyeColor, setEyeColor] = useState(true)


const handleClick = () => {
    setEyeColor(!eyeColor);

}
  return (
    <div className=" flex items-center relative">
      <input
        type={`${eyeColor ? "password" : "text"}`}
        name={name}
        value={value}
        onChange={onChange}
        className=" outline-none border p-2  border-solid border-grey w-full  focus:border-green focus:ring-0 rounded-[16px] px-[22px] py-[15px]"
        placeholder={placeholder}
      />
      <FaEye  onClick={handleClick} className={`absolute right-[16px] ${eyeColor ? "text-grey" : "text-green"} hover:text-darkblack cursor-pointer`} size={25} />
    </div>
  );
}
