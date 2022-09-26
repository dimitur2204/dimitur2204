import React from "react";
import { Moon, Search } from "react-feather";
import { useTranslation } from "react-i18next";
import BG from "./BG.svg";
import GB from "./GB.svg";

function Link({ href, button, children, ...props }) {
  return (
    <li className="font-medium flex items-center justify-center" {...props}>
      {button ? <button>{children}</button> : <a href={href}>{children}</a>}
    </li>
  );
}
function Nav() {
  const { t, i18n } = useTranslation("nav");
  return (
    <nav className="flex justify-between">
      <a href="/">
        <span className="font-serif text-3xl">D.Huz</span>
      </a>
      <ul className="grid gap-2 grid-cols-6">
        <Link
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "bg" : "en")
          }
          button
        >
          <div className="flex">
            <span>{i18n.language === "en" ? "БГ" : "EN"}</span>
            <img
              className="inline-block ml-2"
              src={i18n.language === "en" ? BG : GB}
              alt="Country flag"
            />
          </div>
        </Link>
        <Link>{t("blog")}</Link>
        <Link>{t("projects")}</Link>
        <Link button>
          <Search />
        </Link>
        <Link button>
          <Moon />
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
