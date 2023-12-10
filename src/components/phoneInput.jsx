import React, { useState} from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function PhoneInput({ value, name, onChange }) {
  const [dropdown, setDropdown] = useState({
    close: true,
    gsm: "+1",
  });

  let arr = [
    "+1",
    "+2",
    "+3",
    "+4",
    "+5",
    "+6",
    "+7",
    "+8",
    "+9",
    "+10",
    "+11",
    "+12",
    "+13",
    "+14",
    "+15",
    "+16",
    "+17",
    "+18",
    "+19",
    "+20",
  ];
  const handleClick = (item) => {
    setDropdown((premItem) => {
      return {
        ...premItem,
        close: !dropdown.close,
      };
    });
  };
  const changeGsm = (item) => {
    setDropdown((premItem) => {
      return {
        ...premItem,
        gsm: item,
      };
    });
  };

  return (
    <div>
      <div className="max-w-sm mx-auto">
        <div className="flex items-center relative">
          <button
            onClick={handleClick}
            id="dropdown-phone-button"
            data-dropdown-toggle="dropdown-phone"
            className={`mr-[12px] p-2 rounded-[16px] px-[22px] py-[15px]  border flex-shrink-0 z-10 inline-flex items-center   font-bold text-center ${
              !dropdown.close ? "bg-darkgreen text-white" : ""
            }`}
            type="button"
          >
            {dropdown?.gsm}
            <IoMdArrowDropdown className="ml-[8px]" size={20} />
          </button>

          <div
            id="dropdown-phone34324"
            className={`z-[20] ${
              dropdown.close ? "hidden" : "inline-flex"
            } bg-white p-4 w-[130px]   rounded-lg shadow max-h-[175px] overflow-y-auto absolute top-[64px] `}
          >
            <ul
              className="py-2 font-bold text-darkblack  "
              aria-labelledby="dropdown-phone-button "
            >
              {arr.map((item, index) => (
                <li
                  onClick={() => changeGsm(item)}
                  key={index}
                  className="mb-[8px] cursor-pointer"
                >
                  <div className="inline-flex items-center"> {item} </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative  w-full">
            <input
              type="text"
              className=" outline-none border p-2 w-full  border-solid border-grey  focus:border-green focus:ring-0 rounded-[16px] px-[22px] py-[15px]"
              placeholder="xxx xxx xx xx"
              name={name}
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
