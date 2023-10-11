import React from "react";
import { animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { getBlogChipColor } from "../../utils";
import Chip from "../Chip/Chip";

function SquareCard({ thumbnail, title, title_bg, url, chips, style }) {
  const { i18n } = useTranslation();
  return (
    <animated.a href={url} className="group" style={style}>
      <div
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative mx-2 flex h-60 flex-col justify-end rounded p-3 text-xl text-white hover:underline"
      >
        <div className="relative z-10 mb-1">
          {chips?.map((chip) => (
            <Chip
              key={chip}
              text={chip}
              color={getBlogChipColor(chip)}
              customClasses={`border border-slate-600 mr-2 `}
              style={{
                color: getBlogChipColor(chip) === "white" && "#000",
              }}
            />
          ))}
        </div>
        <h2 className="pointer-events-none relative z-10 font-medium text-white group-[:last-of-type:hover]:mix-blend-difference">
          {i18n.language === "en" ? title : title_bg}
        </h2>
        <div className="absolute left-0 top-0 h-full w-full rounded bg-black opacity-50 transition-opacity duration-300 hover:opacity-0"></div>
      </div>
    </animated.a>
  );
}

export default SquareCard;
