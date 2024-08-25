import { Outlet, RootRoute } from "@tanstack/react-router";
import i18n from "i18next";
import { useEffect } from "react";
import { initReactI18next } from "react-i18next";
import * as CookieConsent from "vanilla-cookieconsent";

import cookiesConfig from "./cookies-config";
import Footer from "./sections/Footer/Footer";
import Nav from "./sections/Nav/Nav";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        nav: {
          blog: "Blog",
          projects: "Projects",
          home: "Home",
          work: "Work",
        },
        sections: {
          skillsAndProjects: "Skills & Projects",
          blog: "Blog",
          header: {
            stranger: "Hello stranger!",
            this: "This is",
            name: "Dimitar",
            job: "Student Developer",
            passion: "Passionate to work with the greatest",
          },
        },
      },
      bg: {
        nav: {
          home: "Начало",
          work: "Работа",
          blog: "Блог",
          projects: "Проекти",
        },
        sections: {
          skillsAndProjects: "Умения и проекти",
          blog: "Блог",
          header: {
            stranger: "Здравей страннико!",
            this: "Това е",
            name: "Димитър",
            job: "Студент Програмист",
            passion: "Искащ да работи с най-новото",
          },
        },
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

const TailwindColorsFix = () => {
  return <div className="hidden bg-slate-950 bg-pink-500 bg-indigo-700"></div>;
};

function Root() {
  useEffect(() => {
    CookieConsent.run(cookiesConfig);
  }, []);
  return (
    <>
      <TailwindColorsFix />
      <div className="container mx-auto max-w-5xl px-3">
        <Nav />
        <Outlet />
      </div>
      <hr />
      <Footer />
    </>
  );
}

export const rootRoute = new RootRoute({
  component: Root,
});
