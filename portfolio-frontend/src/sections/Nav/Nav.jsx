import React from "react";
import { useTranslation } from "react-i18next";
import { useSpring, animated } from "react-spring";
import { Link as RouterLink } from "@tanstack/react-router";
import BG from "./BG.svg";
import GB from "./GB.svg";

function Link({ href, button, children, ...props }) {
  const buttonClassnames = `relative after:bg-gray-300 hover:after:bg-gray-400 after:w-10/12 hover:after:w-full after:transition-all after:absolute after:h-1 after:left-0 after:top-8 after:rounded`;
  return (
    <li className="flex items-center justify-center font-medium" {...props}>
      {button ? (
        <button>{children}</button>
      ) : (
        <RouterLink
          activeProps={{
            className: "after:bg-violet-500 hover:after:bg-violet-600",
          }}
          className={buttonClassnames}
          to={href}
        >
          {children}
        </RouterLink>
      )}
    </li>
  );
}

function Nav() {
  const { t, i18n } = useTranslation("nav");
  const style = useSpring({
    from: { opacity: 0, y: -30 },
    to: { opacity: 1, y: 0, visibility: "visible!important" },
    config: { duration: 400 },
    delay: 400,
  });
  return (
    <animated.nav className="flex justify-between py-2" style={style}>
      <a href="/">
        <span className="font-serif text-3xl">D.Niz</span>
      </a>
      <ul className="grid grid-cols-3 gap-6">
        <Link
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "bg" : "en")
          }
          button
        >
          <div className="flex">
            <span>{i18n.language === "en" ? "БГ" : "EN"}</span>
            <img
              className="ml-2 inline-block"
              src={i18n.language === "en" ? BG : GB}
              alt="Country flag"
            />
          </div>
        </Link>
        <Link href={"/"}>{t("Home")}</Link>
        <Link href={"/about"}>{t("About")}</Link>
      </ul>
    </animated.nav>
  );
}

export default Nav;
