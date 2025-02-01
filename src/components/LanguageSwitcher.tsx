"use client";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaLanguage } from "react-icons/fa6";
import { useLocale } from "next-intl";
export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const changeLocale = (newLocale: string) => {
    router.push(`/${newLocale}${pathname.substring(3)}`);
  };

  return (
    <div className="action">
      <button
        className="lgue"
        onClick={() => changeLocale(locale === "fr" ? "en" : "fr")}
      >
        <FaLanguage />
        {locale === "fr" ? "to English" : "en Français"}
      </button>
      <div className="icone">
        <HiOutlineBars3BottomRight />
      </div>
    </div>
  );
}
