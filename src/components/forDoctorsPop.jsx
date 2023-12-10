import { IoClose } from "react-icons/io5";
import { GoDash } from "react-icons/go";

import PhoneInput from "./phoneInput";
import Dropdown from "./dropdown";
import EyeInput from "./eyeInput";
import Checkbox from "./checkbox";

import React, { useState } from "react";
import { useFormik} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Adı Soyadı zorunludur"),
  email: Yup.string().required("Geçerli bir e-posta adresi girin"),
  phoneNumber: Yup.string().required("Cep numarası zorunludur"),
  companyName: Yup.string().required("Firma adı zorunludur"),
  branch: Yup.string().required("Branş seçimi zorunludur"),
  password1: Yup.string()
    .min(8, "Şifre en az 8 karakter olmalıdır")
    .required("Şifre zorunludur"),
  password2: Yup.string()
    .oneOf([Yup.ref("password1"), null], "Şifreler uyuşmuyor")
    .required("Şifre tekrarı zorunludur"),

  agreement1: Yup.boolean().oneOf(
    [true],
    "Üyelik sözleşmesini kabul etmelisiniz"
  ),
  agreement2: Yup.boolean().oneOf(
    [true],
    "Aydınlatma metnini kabul etmelisiniz"
  ),
  agreement3: Yup.boolean().oneOf(
    [true],
    "Kişisel veri işleme açık rızayı vermelisiniz"
  ),
});

const ForDoctorsPop = () => {
  const [close, setClose] = useState(true);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      branch: "",
      password1: "",
      password2: "",
      agreement1: false,
      agreement2: false,
      agreement3: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white w-full max-w-[650px] rounded-[28px]  h-fit ">
        <div className="flex items-center justify-between p-[30px]">
          <span className="font-bold text-xl">Ücretsiz Dene</span>
          <div
            className={` rounded-[10px]  cursor-pointer  transition-all duration-500 relative p-6 ${
              !close ? "bg-green" : "bg-secondary"
            }`}
          >
            <IoClose
              onMouseEnter={() => {
                setClose(false);
              }}
              size={50}
              className={` z-[2] top-0 left-0 p-2  transition-all duration-500   text-green absolute ${
                !close ? "z-[1] opacity-0 rotate-180" : ""
              } `}
            />

            <GoDash
              onMouseLeave={() => {
                setClose(true);
              }}
              size={50}
              className={` z-[1] top-0 left-0 p-2  transition-all duration-500    text-white absolute ${
                !close ? "z-[2] opacity-1 rotate-180" : "opacity-0"
              }`}
            />
          </div>
        </div>
        <hr className=" w-full" />

        <div className="p-[30px]">
          <div className="flex flex-col">
            <label
              className="text-[rgba(4,3,69,.4)] font-bold tracking-[-.16px] text-[13px] mb-3"
              htmlFor=""
            >
              Adı Soyadı
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
              className=" outline-none border p-2  border-solid  border-grey text-[14px]   focus:border-green focus:ring-0  rounded-[16px] px-[22px] py-[15px]"
              placeholder="Adı Soyadı"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col mt-[16px] w-[47%]">
              <label
                className="text-[rgba(4,3,69,.4)] font-bold tracking-[-.16px] text-[13px] mb-3"
                htmlFor=""
              >
                E-Posta
              </label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={values.email}
                className=" outline-none border p-2  border-solid  border-grey text-[14px]  focus:border-green focus:ring-0 rounded-[16px] px-[22px] py-[15px]"
                placeholder="E Posta"
              />
            </div>

            <div className="flex flex-col mt-[16px] w-[47%]">
              <label
                className="text-[rgba(4,3,69,.4)] font-bold tracking-[-.16px] text-[13px] mb-3"
                htmlFor=""
              >
                Cep Numarası
              </label>
              <PhoneInput
                value={values.phoneNumber}
                name={"phoneNumber"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col mt-[16px] w-[47%]">
              <label
                className="text-[rgba(4,3,69,.4)] font-bold tracking-[-.16px] text-[13px] mb-3"
                htmlFor=""
              >
                Firma Adı
              </label>
              <input
                type="text"
                name="companyName"
                value={values.companyName}
                onChange={handleChange}
                className=" outline-none border p-2  border-solid  border-grey text-[14px]  focus:border-green focus:ring-0 rounded-[16px] px-[22px] py-[15px]"
                placeholder="Firma Adı"
              />
            </div>
            <div className="flex flex-col mt-[16px] w-[47%] relative">
              <label
                className="text-[rgba(4,3,69,.4)] font-bold tracking-[-.16px] text-[13px] mb-3"
                htmlFor=""
              >
                Branş Seçiniz
              </label>
              <Dropdown
                name={"branch"}
                value={values.branch}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col mt-[16px] w-[47%]">
              <label
                className="text-[rgba(4,3,69,.4)] font-bold tracking-[-.16px] text-[13px] mb-3"
                htmlFor=""
              >
                Şifreniz
              </label>
              <EyeInput
                value={values.password1}
                onChange={handleChange}
                name={"password1"}
                placeholder={"Şifre Tekrar"}
              />
            </div>
            <div className="flex flex-col mt-[16px] w-[47%]">
              <label
                className="text-[rgba(4,3,69,.4)] font-bold tracking-[-.16px] text-[13px] mb-3"
                htmlFor=""
              >
                Şifre Tekrar
              </label>
              <EyeInput
                value={values.password2}
                onChange={handleChange}
                name={"password2"}
                placeholder={"Şifre Tekrar"}
              />
            </div>
          </div>
          <div className=" justify-between">
            <Checkbox
              handleChange={handleChange}
              checkBox={values.agreement1}
              name={"agreement1"}
              colorText={"Üyelik Sözleşmesi *"}
              text={"okudum ve kabul ediyorum"}
            />
            <Checkbox
              handleChange={handleChange}
              checkBox={values.agreement2}
              name={"agreement2"}
              colorText={" Aydınlatma Metni *"}
              text={"okudum ve kabul ediyorum"}
            />
            <Checkbox
              handleChange={handleChange}
              checkBox={values.agreement3}
              name={"agreement3"}
              colorText={" Kişisel Verilerin İşlenmesine İlişkin Açık Rıza *"}
              text={"okudum ve kabul ediyorum"}
            />
          </div>
          <div className="flex items-center justify-center mt-6">
            <button className="bg-grey rounded-[16px] p-[16px] font-bold m-[16px] ">
              İptal Et
            </button>
            <button
              type="submit"
              className=" rounded-[16px] p-[16px] m-[16px] font-bold bg-green text-white hover:bg-darkgreen "
            >
              Hemen Kaydol
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ForDoctorsPop;
