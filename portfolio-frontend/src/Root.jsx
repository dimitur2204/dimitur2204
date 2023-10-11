import i18n from "i18next";
import { RootRoute, Outlet } from "@tanstack/react-router";
import { initReactI18next } from "react-i18next";
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

function Root() {
  return (
    <>
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
