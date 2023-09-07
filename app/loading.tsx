import React from "react";
import logo from "./assets/logo_1.png";
import Image from "next/image";
export default function loading() {
  return (
    <div className="text-3xl h-screen w-full flex justify-center items-center text-center  font-semibold mt-5">
      <Image src={logo} width={50} height={50} alt="logo" />
      <span>Looking Up...</span>
    </div>
  );
}
