import React from "react";
import { useTranslations } from "next-intl";
import "./style/hero.css"; // Importer ton fichier CSS global
const Hero = () => {
  const t = useTranslations("HomePage");
  return <div className="hero">{t("title")}</div>;
};

export default Hero;
