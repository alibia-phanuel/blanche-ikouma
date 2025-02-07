import {
  FaPaintBrush,
  FaBullhorn,
  FaLaptopCode,
  FaPrint,
  FaTruck,
  FaHeadset,
  FaLightbulb,
  FaLanguage,
  FaGraduationCap,
  FaSearch,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";

import { useTranslations } from "next-intl";
const ServicesContent = () => {
  const services = [
    {
      icon: <FaBullhorn className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleTwo",
      desc: "descTwo",
    },
    {
      icon: <FaLaptopCode className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleThree",
      desc: "descThree",
    },
    {
      icon: <FaPrint className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleFors",
      desc: "descFors",
    },
    {
      icon: <FaSearch className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleOne",
      desc: "SdescOne",
    },
    {
      icon: <FaHandshake className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleTwo",
      desc: "SdescTwo",
    },
    {
      icon: <FaCheckCircle className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleThree",
      desc: "SdescThree",
    },
    {
      icon: <FaPaintBrush className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleOne",
      desc: "descOne",
    },
    {
      icon: <FaTruck className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleFors",
      desc: "SdescFors",
    },
    {
      icon: <FaHeadset className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleFive",
      desc: "SdescFive",
    },
    {
      icon: <FaLightbulb className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleSix",
      desc: "SdescSix",
    },
    {
      icon: <FaLanguage className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleSevent",
      desc: "SdescSevent",
    },
    {
      icon: <FaPaintBrush className="text-2xl mb-2 text-[#EAC258]" />,
      title: "Stitle8",
      desc: "Sdesc8",
    },
    {
      icon: <FaGraduationCap className="text-2xl mb-2 text-[#EAC258]" />,
      title: "Stitle9",
      desc: "Sdesc9",
    },
  ];
  const c = useTranslations("cardServiceSection");
  return (
    <div className=" flex  flex-col justify-center items-center">
      <div className="container flex justify-center items-center flex-col px-4">
        <p className="text-center text-gray-500 dark:text-white my-20 w-1/2 max-md:w-full text-xl">
          {c("ServiceTitle")}
        </p>

        {services.map((service, index) => (
          <div
            key={index}
            className={`flex justify-evenly items-center my-y flex-wrap ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-1/2 px-4 max-md:w-full max-md:my-2">
              <div className="flex flex-col gap-2">
                {service.icon}
                <span className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {c(service.title)}
                </span>
              </div>
              <div className="text-gray-500 dark:text-white">
                {c(service.desc)}
              </div>
            </div>
            <div className="w-1/2 max-md:w-full border-2 border-[#EAC258] max-md:my-2 bg-[url('/images/baner.png')] h-[319px] bg-gray-500 flex justify-center items-center shadow-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesContent;
