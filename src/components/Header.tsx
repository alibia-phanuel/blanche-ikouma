import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import "./header.css";
const Header = () => {
  const t = useTranslations("menu");
  return (
    <div className="head">
      <div className="container nav">
        <div className="logo">
          <Image
            src="/logo.png"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <nav className="menu">
          <ul>
            <li>
              <Link className="a" href="/">
                {t("link1")}
              </Link>
            </li>
            <li>
              <Link className="a" href="/">
                {t("link2")}
              </Link>
            </li>
            <li>
              <Link className="a" href="/">
                {t("link3")}
              </Link>
            </li>
            <li>
              <Link className="a" href="/">
                {t("link4")}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="action">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;
