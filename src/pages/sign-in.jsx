import Checkbox from "@/components/checkbox";
import EyeInput from "@/components/eyeInput";
import PhoneInput from "@/components/phoneInput";
import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  phoneNumber: Yup.string().required("Cep numarası zorunludur"),
  password: Yup.string().min(8, "Şifre en az 8 karakter olmalıdır").required("Şifre zorunludur"),
  agreement: Yup.boolean()
});
export default function SignIn() {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
      agreement: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <div className="h-[200vh] bg-secondary flex justify-start flex-col  items-center">
        <div className=" flex justify-center py-[22px] max-w-[960px]  w-full">
          <img className="w-[180px]" src="/assets/images/logo.svg" alt="" />
        </div>
        <div className=" max-w-[750px] w-full flex justify-center">
          <div className="bg-white p-[2rem] max-sm:m-6 rounded-[16px]">
            <p className="text-[19px] font-bold">Giriş Yap</p>

            <div className="flex flex-col mt-[16px] w-full">
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
            <div className="flex flex-col mt-[16px] w-full">
              <label
                className="text-[rgba(4,3,69,.4)] font-bold tracking-[-.16px] text-[13px] mb-3 flex justify-between"
                htmlFor=""
              >
                <span className="">Şifreniz</span>
                <span className="text-green">Şifrenizi mi unuttunuz?</span>
              </label>
              <EyeInput
                value={values.password}
                name={"password"}
                onChange={handleChange}
                placeholder={""}
              />
            </div>

            <Checkbox
              handleChange={handleChange}
              name={"agreement"}
              checkBox={values.agreement}
              text={"Beni hatırla"}
            />
            <button
              type="submit"
              className="mt-[32px] relative flex items-center bg-green rounded-[16px] font-bold justify-center text-white text-sm p-4 w-full"
            >
              <span>Giriş Yap</span>
              <FaArrowRight size={15} className="mr-[8px] absolute right-0" />
            </button>
          </div>
        </div>
        <div className="mt-[32px]">
          <label
            htmlFor=""
            className="text-[rgba(4,3,69,.4)] tracking-[-.16px] text-[16px] mb-3"
          >
            Hesabın yok mu?
            <a src="" className="font-bold text-green ml-[8px] cursor-pointer ">
              Hemen Kaydol
            </a>
          </label>
        </div>
        
      </div>
    </form>
  );
}
