import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Dropdown({ name, value, onChange }) {
  const dropdownRef = useRef(null);
  const branchRef = useRef("");
  const [dropdown, setDropdown] = useState({
    close: true,
    gsm: "+91",
  });
  let arr = [
    {
      name: "ADLİ TIP",
    },

    {
      name: "ACİL TIP",
    },
    {
      name: "ACİL SERVİS",
    },
    {
      name: "PSİKOLOJİ",
    },
    {
      name: "KBB",
    },
    {
      name: "BEYİN CERRAHİSİ",
    },
  ];

  const handleClick = () => {
    const temp = dropdownRef.current;
    if (dropdown.close) {
      gsap.to(temp, {
        y: +0,
        duration: 0.2,
        visibility: "visible",
        opacity: 1,
        ease: "power2.out",
        onComplete: () => {
          setDropdown({
            close: !dropdown.close,
          });
        },
      });
    }
  };
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      const temp = dropdownRef.current;
      if (!dropdown.close) {
        gsap.to(temp, {
          y: +35,
          duration: 0.2,
          visibility: "hidden",
          opacity: 0,
          ease: "power2.out",
          onComplete: () => {
            setDropdown({
              close: !dropdown.close,
            });
          },
        });
      }
    }
  };
  const handleBranch = (name) => {
    branchRef.current = name;
    gsap.to(dropdown, {
      y: +35,
      duration: 0.2,
      visibility: "hidden",
      opacity: 0,
      ease: "power2.out",
      onComplete: () => {
        setDropdown({
          close: !dropdown.close,
        });
      },
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdown.close]);

  return (
    <div>
      <div className="max-w-sm mx-auto">
        <div className="  ">
          <div className="">
            <button
              onClick={handleClick}
              id="dropdown-choice"
              className={`w-full rounded-[16px] px-[11px] py-[7.5px]  border flex-shrink-0 z-10 inline-flex items-center   text-center `}
              type="button"
            >
              <input
                type="text"
                className=" outline-none border-none w-full focus:ring-0 "
                placeholder="Branş seçiniz"
                name={name}
                value={branchRef.current}
                onChange={onChange}
              />
            </button>

            <div
              ref={dropdownRef}
              id="dropdown-2"
              className={`duration-0 z-[1000000000] invisible   bg-white p-4 mt-[8px]  rounded-lg shadow max-h-[175px] overflow-y-auto absolute w-[100%] `}
            >
              <ul
                className="py-2 font-bold text-darkblack duration-0 "
                aria-labelledby="dropdown-choice "
              >
                {arr.map((item, index) => (
                  <li
                    onClick={() => handleBranch(item.name)}
                    key={index}
                    className="mb-[8px] cursor-pointer"
                  >
                    <div className="inline-flex items-center">{item.name}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
