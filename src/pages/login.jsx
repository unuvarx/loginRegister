import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { MdGTranslate } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { IoKeySharp } from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  language: Yup.string().required("Dil zorunludur"),
  email: Yup.string().required("mail zorunludur"),
  password: Yup.string()
    .min(8, "Şifre en az 8 karakter olmalıdır")
    .required("Şifre zorunludur"),
});

export default function Login() {
  const [search, setSearch] = useState("");
  const formik = useFormik({
    initialValues: {
      language: "Türkçe",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const dropdownRef = useRef(null);
  const [dropdown, setDropdown] = useState({
    close: true,
    gsm: "+91",
  });
  const [arr, setArr] = useState([
    "Türkçe",
    "İngilizce",
    "Arapça",
    "Almanca",
    "Fransızca",
  ]);

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

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdown.close]);

  const changeSearch = (event) => {
    const inputValue = event.target.value.toLowerCase();

    const filteredArr = arr.filter((item) =>
      item.toLowerCase().includes(inputValue)
    );

    setSearch(inputValue);

    if (filteredArr.length > 0) {
      setArr(filteredArr);
    } else {
      setArr([]);
    }
    if (inputValue.length < 1) {
      setArr(["Türkçe", "İngilizce", "Arapça", "Almanca", "Fransızca"]);
    }
    console.log(event.target.value);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex xl:flex-row lg:flex-col md:flex-col sm:flex-col ">
        <div className="xl:w-[50%] max-sm:hidden ">
          <img
            className="w-full h-[100vh] object-cover "
            src="/assets/images/login.jpg"
            alt=""
          />
        </div>
        <div className="py-[2rem] px-[3rem]  xl:w-[50%] max-sm:w-full">
          <img className="w-[15rem]" src="/assets/images/logo.svg" alt="" />
          <p className="text-[2.3rem] mt-[3rem]">Kullanıcı Girişi</p>
          <p className="text-[11px] my-[16px]">
            Lütfen Kullanıcı Adınızı ve Şifrenizi Giriniz
          </p>
          <div className="flex  ">
            <div className="bg-grey w-fit p-[12px] rounded-bl-[8px] rounded-tl-[8px]">
              <MdGTranslate className="text-grey2 " />
            </div>
            <div className="w-full">
              <div className=" w-full relative">
                <button
                  onClick={handleClick}
                  id="dropdown-choice"
                  className={`w-full rounded-br-[8px] rounded-tr-[8px]   border flex-shrink-0 z-10 inline-flex items-center   text-center `}
                  type="button"
                >
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    name="language"
                    value={formik.values.language}
                    className=" outline-none border-none w-full focus:ring-0 pointer-events-none"
                  />
                </button>

                <div
                  ref={dropdownRef}
                  id="dropdown-2"
                  className={`duration-0 z-[1000000000] invisible   bg-white  mt-[8px]  rounded-lg shadow max-h-[175px] overflow-y-auto absolute w-full `}
                >
                  <ul
                    className=" duration-0 "
                    aria-labelledby="dropdown-choice "
                  >
                    <li className="mb-[8px] p-1 cursor-pointer  hover:text-white text-[11px]">
                      <div className="inline-flex items-center w-full">
                        <input
                          type="text"
                          className="w-full h-[30px] rounded-[4px]"
                          value={search}
                          onChange={changeSearch}
                        />
                      </div>
                    </li>
                    {arr.length > 0 ? (
                      arr.map((item, index) => (
                        <li
                          onClick={() => {
                            formik.setFieldValue("language", item);
                          }}
                          key={index}
                          className="mb-[8px] p-1 cursor-pointer hover:bg-blue-500 hover:text-white text-[11px]"
                        >
                          <div className="inline-flex items-center">{item}</div>
                        </li>
                      ))
                    ) : (
                      <li className="mb-[8px] p-1 cursor-pointer hover:bg-blue-500 hover:text-white text-[11px]">
                        <div className="inline-flex items-center">
                          Sonuç bulunamadı
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-[16px] ">
            <div className="bg-grey w-fit p-[12px] rounded-bl-[8px] rounded-tl-[8px]">
              <IoMail className="text-grey2 " />
            </div>
            <input
              type="text"
              name={"email"}
              value={formik.values.email}
              onChange={formik.handleChange}
              className=" outline-none border p-2 w-full border-solid border-grey focus:border-grey   focus:ring-0 rounded-br-[8px] rounded-tr-[8px] px-[22px] "
              placeholder="Mail adresi"
            />
          </div>
          <div className="flex mt-[16px] ">
            <div className="bg-grey w-fit p-[12px] rounded-bl-[8px] rounded-tl-[8px]">
              <IoKeySharp className="text-grey2 " />
            </div>
            <input
              type="password"
              onChange={formik.handleChange}
              name="password"
              value={formik.values.password}
              className=" outline-none border p-2 w-full border-solid border-grey focus:border-grey   focus:ring-0 rounded-br-[8px] rounded-tr-[8px] px-[22px] "
              placeholder="Şifre"
            />
          </div>
          <div className="flex justify-between mt-[16px]">
            <span className="text-[13px] text-blue-600 cursor-pointer">
              Şifremi unuttum
            </span>
            <button
              type="submit"
              className="text-white bg-[#3598dc] rounded-[4px] p-[4px] px-[8px] text-[13px]"
            >
              Sisteme Giriş
            </button>
          </div>
        </div>
        
      </div>
    </form>
  );
}
