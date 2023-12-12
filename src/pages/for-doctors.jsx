import ForDoctorsPop from "@/components/forDoctorsPop";
import React from "react";

export default function ForDoctors() {
  return (
    <div className="bg-[rgba(9,8,73,0.15)]">
      <div className="  flex   justify-center  ">
        <ForDoctorsPop />
      </div>
      <div className=" text-center p-[3rem]">
        Zaten üye misiniz? <a href="/login" className="text-green font-bold">Hemen Kaydol</a>
      </div>
    </div>
  );
}
