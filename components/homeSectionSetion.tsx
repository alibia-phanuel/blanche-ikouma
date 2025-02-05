import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  FaPaintBrush,
  FaBullhorn,
  FaLaptopCode,
  FaPrint,
} from "react-icons/fa";

const HomeSectionSetion = ({ locale }: { locale: string }) => {
  const t = useTranslations("menu");
  const c = useTranslations("cardServiceSection");
  return (
    <div className="w-full flex justify-center flex-col items-center mt-[28px]">
      <h2 className="text-[#EAC258] text-3xl my-8">{t("link2")}</h2>
      <div className="container border-t  border-[#3d3d3d] dark:border-white px-4">
        <div className="my-8 gap-y-8 flex flex-wrap items-center justify-between max-md:justify-center">
          <div className="w-[48%]  max-md:w-full my-2 h-[300px] max-md:h-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700">
            <div className="flex justify-center items-center w-full">
              <FaPaintBrush className="text-2xl mb-2 text-[#EAC258]" />
            </div>
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                {c("titleOne")}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify">
              {c("descOne")}
            </p>
          </div>
          <div className="w-[48%] max-md:w-full my-2 h-[300px] max-md:h-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700">
            <div className="flex justify-center items-center w-full">
              <FaBullhorn className="text-2xl mb-2 text-[#EAC258]" />
            </div>
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                {c("titleTwo")}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify">
              {c("descTwo")}
            </p>
          </div>
          <div className="w-[48%] max-md:w-full my-2 h-[300px] max-md:h-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700">
            <div className="flex justify-center items-center w-full">
              <FaLaptopCode className="text-2xl mb-2 text-[#EAC258]" />
            </div>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold text-center tracking-tight text-gray-900 dark:text-white">
                {c("titleThree")}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify">
              {c("descThree")}
            </p>
          </div>
          <div className="w-[48%] max-md:w-full my-2 h-[300px] max-md:h-auto p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-black dark:border-gray-700">
            <div className="flex justify-center items-center w-full">
              <FaPrint className="text-2xl mb-2 text-[#EAC258]" />
            </div>
            <a href="#">
              <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
                {c("titleFors")}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-justify">
              {c("descFors")}
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link href={`/${locale}/services`} prefetch={false}>
            <button
              type="button"
              className="text-gray-900 dark:bg-black capitalize bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-6 py-3  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition-all"
            >
              {c("show")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSetion;
