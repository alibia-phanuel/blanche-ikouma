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
      bg: "bg-[url('/services/01.png')]",
    },
    {
      icon: <FaLaptopCode className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleThree",
      desc: "descThree",
      bg: "bg-[url('/services/02.jpg')]",
    },
    {
      icon: <FaPrint className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleFors",
      desc: "descFors",
      bg: "bg-[url('/services/03.png')]",
    },
    {
      icon: <FaSearch className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleOne",
      desc: "SdescOne",
      bg: "bg-[url('/services/04.png')]",
    },
    {
      icon: <FaHandshake className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleTwo",
      desc: "SdescTwo",
      bg: "bg-[url('/services/05.jpg')]",
    },
    {
      icon: <FaCheckCircle className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleThree",
      desc: "SdescThree",
      bg: "bg-[url('/services/06.jpg')]",
    },
    {
      icon: <FaPaintBrush className="text-2xl mb-2 text-[#EAC258]" />,
      title: "titleOne",
      desc: "descOne",
      bg: "bg-[url('/services/07.jpg')]",
    },
    {
      icon: <FaTruck className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleFors",
      desc: "SdescFors",
      bg: "bg-[url('/services/08.jpg')]",
    },
    {
      icon: <FaHeadset className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleFive",
      desc: "SdescFive",
      bg: "bg-[url('/services/09.jpg')]",
    },
    {
      icon: <FaLightbulb className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleSix",
      desc: "SdescSix",
      bg: "bg-[url('/services/10.jpg')]",
    },
    {
      icon: <FaPaintBrush className="text-2xl mb-2 text-[#EAC258]" />,
      title: "StitleSevent",
      desc: "SdescSevent",
      bg: "bg-[url('/services/11.jpg')]",
    },
    {
      icon: <FaLanguage className="text-2xl mb-2 text-[#EAC258]" />,
      title: "Stitle8",
      desc: "Sdesc8",
      bg: "bg-[url('/services/12.jpg')]",
    },
    {
      icon: <FaGraduationCap className="text-2xl mb-2 text-[#EAC258]" />,
      title: "Stitle9",
      desc: "Sdesc9",
      bg: "bg-[url('/services/13.jpg')]",
    },
  ];
  const c = useTranslations("cardServiceSection");
  return (
    <div className=" flex  flex-col justify-center items-center">
      <div className="container my-10 flex justify-center items-center flex-col px-4 overflow-hidden">
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
            <div
              className={`w-1/2 max-md:w-full border-2 border-[#EAC258] max-md:my-2 bg-center bg-cover ${service.bg} h-[319px] bg-gray-500 flex justify-center items-center shadow-lg`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesContent;
