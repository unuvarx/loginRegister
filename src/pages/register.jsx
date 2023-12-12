import Checkbox from "@/components/checkbox";
import EyeInput from "@/components/eyeInput";
import NormalInput from "@/components/normalInput";
import PhoneInput from "@/components/phoneInput";
import RegisterCards from "@/components/registerCards";
import React, { useState } from "react";
import { CiStethoscope } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Adı zorunludur"),
  surname: Yup.string().required("Soyadı zorunludur"),
  phoneNumber: Yup.string().required("Cep numarası zorunludur"),
  password1: Yup.string().min(8, "Şifre en az 8 karakter olmalıdır").required("Şifre zorunludur"),
  password2: Yup.string().oneOf([Yup.ref("password1"), null], "Şifreler uyuşmuyor").required("Şifre tekrarı zorunludur"),

  agreement1: Yup.boolean().oneOf(
    [true],
    "Üyelik sözleşmesini kabul etmelisiniz"
  ),
  agreement2: Yup.boolean().oneOf(
    [true],
    "Aydınlatma metnini kabul etmelisiniz"
  ),
  
});

export default function register() {
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      phoneNumber: "",
      password1: "",
      password2: "",
      agreement1: false,
      agreement2: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("afaf");
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-full min-h-[100vh] bg-secondary flex justify-start flex-col  items-center">
        <div className=" flex justify-between py-[22px] max-w-[960px]  w-full">
          <img className="w-[180px]" src="/assets/images/logo.svg" alt="" />
          <button className="flex items-center bg-darkgreen rounded-[16px] font-bold text-white text-sm p-3">
            <CiStethoscope size={25} className="mr-[8px]" />
            <span>Doktor Olarak Kaydol</span>
          </button>
        </div>
        <div className=" max-w-[750px] w-full flex max-md:flex-col justify-between max-md:p-[2rem]">
          <div className="bg-white w-[60%] p-[2rem] rounded-[16px] max-md:w-full ">
            <p className="text-[19px] font-bold">Kayıt Ol</p>
            <div className="mt-[16px]">
              <NormalInput
                value={values.name}
                name={"name"}
                onChange={handleChange}
                title={"Adı"}
                placeholder={"Adı"}
              />
            </div>
            <div className="mt-[16px]">
              <NormalInput
                value={values.surname}
                name={"surname"}
                onChange={handleChange}
                title={"Soyadı"}
                placeholder={"Soyadı"}
              />
            </div>
            <div className="mt-[16px]">
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
            </div>
            <div className="flex flex-col mt-[16px] w-full">
              <label
                className="text-[rgba(4,3,69,.4)] font-bold tracking-[-.16px] text-[13px] mb-3"
                htmlFor=""
              >
                Şifreniz
              </label>
              <EyeInput
                value={values.password1}
                name={"password1"}
                onChange={handleChange}
                placeholder={"Şifreniz"}
              />
            </div>
            <div className="flex flex-col mt-[16px] w-full">
              <label
                className="text-[rgba(4,3,69,.4)] font-bold tracking-[-.16px] text-[13px] mb-3"
                htmlFor=""
              >
                Şifreniz Tekrar
              </label>
              <EyeInput
                value={values.password2}
                name={"password2"}
                onChange={handleChange}
                placeholder={"Şifreniz Tekrar"}
              />
            </div>
            <Checkbox
              handleChange={handleChange}
              name={"agreement1"}
              checkBox={values.agreement1}
              colorText={"Hasta Aydınlatma Metni *"}
              text={"okudum ve kabul ediyorum"}
            />
            <Checkbox
              handleChange={handleChange}
              name={"agreement2"}
              checkBox={values.agreement2}
              colorText={"Üyelik Sözleşmesi *"}
              text={"okudum ve kabul ediyorum"}
            />
            <button
              type="submit"
              className="mt-[16px] relative flex items-center bg-green rounded-[16px] font-bold justify-center text-white text-sm p-3 w-full"
            >
              <span>Doktor Olarak Kaydol</span>
              <FaArrowRight size={15} className="mr-[8px] absolute right-0" />
            </button>
            
          </div>

          <div className="ml-[4rem] w-[40%] max-md:w-full max-md:ml-0 max-md:mt-[32px]">
            <h3 className="font-bold text-[1.3rem] ">
              Her branştan alanında uzman hekimler ile{" "}
              <label className="text-green" htmlFor="">
                online olarak hemen görüşün!
              </label>
            </h3>
            <RegisterCards
              img={"aktif-klinik-dark.svg"}
              count={"13 bin"}
              info={"Aktif Klinik"}
              text={
                "Hastaların görüşlerini incele, doktor ve uzmanlar arasından seçim yap."
              }
            />
            <RegisterCards
              img={"icon-hasta.svg"}
              count={"4.6 milyon"}
              info={"Hasta"}
              text={
                "Tecrübeli doktorlarımızdan ister online ister randevu hizmeti alarak faydalanmaya başla"
              }
            />
            <RegisterCards
              img={"recete-dark.svg"}
              count={"300 bin"}
              info={"Reçete"}
              text={"Bulutklinik kanalıyla reçete alma hizmeti al"}
            />
          </div>
        </div>
      <span className="m-[3rem]">Zaten üye misiniz? <a href="/sign-in" className="text-green font-bold">Giriş Yap</a></span>
      </div>
    </form>
  );
}
