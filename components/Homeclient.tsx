import React from "react";

export default function Homeclient() {
  return (
    <div className="w-full my-8 py-8 flex justify-center min-h-[300px] items-center bg-white border border-gray-200  shadow-sm dark:bg-black dark:border-gray-700">
      <div className="container flex flex-wrap justify-evenly items-center gap-4">
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
    </div>
  );
}
