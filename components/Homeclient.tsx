import React from "react";
import Testimonial from "./Testimonial";
export default function Homeclient() {
  return (
    <div className="w-full  py-10 flex justify-center min-h-[500px] mt-10 items-center bg-white dark:bg-black ">
      <div className="container flex flex-wrap justify-evenly items-center gap-4">
        <div className="flex flex-wrap justify-evenly items-center gap-4 w-full">
          <div className="flex  justify-between items-center gap-4 text-center flex-col  ">
            <div className="text-2xl font-bold text-[50px] dark:text-[#EAC258]">
              99%
            </div>
            <div>client retention</div>
          </div>
          <div className="flex  justify-between items-center gap-4 text-center flex-col ">
            <div className="text-2xl font-bold text-[50px] dark:text-[#EAC258]">
              2
            </div>
            <div>Years of Services</div>
          </div>
          <div className="flex  justify-between items-center gap-4 text-center flex-col  ">
            <div className="text-2xl font-bold text-[50px] dark:text-[#EAC258]">
              5{" "}
            </div>
            <div>Team of Professinals</div>
          </div>
          <div className="flex  justify-between items-center gap-4 text-center flex-col  ">
            <div className="text-2xl font-bold text-[50px] dark:text-[#EAC258]">
              30+
            </div>
            <div>Satisfied clients</div>
          </div>
        </div>
        <Testimonial />
      </div>
    </div>
  );
}
