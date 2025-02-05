import Hero from "@/components/shares/Hero";
import { useTranslations } from "next-intl";
const Page = () => {
  const t = useTranslations("menu");
  return (
    <div>
      <Hero
        link={t("link3")}
        title={t("title")}
        backgroundImage="/images/agency.jpg"
      />
    </div>
  );
};

export default Page;
