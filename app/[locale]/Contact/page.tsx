import Hero from "@/components/shares/Hero";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("menu");
  return (
    <div>
      <Hero
        link={t("link5")}
        title={t("title")}
        backgroundImage="/images/contact.jpg"
      />
    </div>
  );
};

export default Page;
