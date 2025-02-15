import {
  FaLightbulb,
  FaChartLine,
  FaLaptopCode,
  FaBullhorn,
  FaUsers,
  FaRocket,
} from "react-icons/fa";
import { MdVisibility, MdWeb } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

import Hero from "@/components/shares/Hero";
import { useTranslations } from "next-intl";
const Page = () => {
  const t = useTranslations("menu");
  return (
    <div className="flex flex-col">
      <Hero
        link={t("link3")}
        title={t("title")}
        backgroundImage="/images/agency.jpg"
      />
      <div className="w-full flex justify-center items-center">
        <div className="container mx-auto px-6 py-12 text-gray-900 dark:text-white">
          {/* Qui sommes-nous ? */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-[#EAC258]">
              <FaLightbulb className="text-4xl" /> Qui sommes-nous ?
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Profitez de la meilleure expérience ! Lancée en 2023 et implantée
              au cœur de Douala,
              <strong> IKOUMA LABS</strong> est une agence de communication
              stratégique à 360° qui se démarque par son savoir-faire pointu et
              son sens aigu de l&lsquo;innovation.
            </p>
          </section>

          {/* Nos Missions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold flex items-center gap-2 text-[#EAC258]">
              <FaChartLine className="text-4xl" /> Nos missions
            </h2>
            <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FaBullhorn,
                  title: "Accompagnement stratégique",
                  desc: "Conseil en communication, publicité et RP.",
                },
                {
                  icon: FaLaptopCode,
                  title: "Expertise digitale",
                  desc: "Création de contenus, SEO et gestion de pages web.",
                },
                {
                  icon: MdVisibility,
                  title: "Visibilité sur mesure",
                  desc: "Identité visuelle et supports de communication.",
                },
                {
                  icon: FaRocket,
                  title: "Transmission des valeurs",
                  desc: "Stratégies innovantes et percutantes.",
                },
                {
                  icon: MdWeb,
                  title: "Solutions digitales complètes",
                  desc: "Sites web, applications mobiles et réseaux sociaux.",
                },
                {
                  icon: FaUsers,
                  title: "Approche sur mesure",
                  desc: "Suivi personnalisé et pilotage des projets.",
                },
              ].map(({ icon: Icon, title, desc }, index) => (
                <li
                  key={index}
                  className="flex items-start p-4 border border-[#EAC258] rounded-lg bg-[#fff] shadow-sm dark:bg-[#000]"
                >
                  <Icon className="text-3xl text-[#EAC258] mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-justify">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Notre Équipe */}
          <section className="text-center">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-2 text-[#EAC258]">
              <RiTeamFill className="text-4xl" /> Notre Équipe
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Une équipe jeune, dynamique et passionnée, combinant créativité,
              expertise et innovation. Spécialisée en communication, marketing
              et ingénierie informatique, notre mission est d’accompagner votre
              croissance avec des solutions sur mesure et performantes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
