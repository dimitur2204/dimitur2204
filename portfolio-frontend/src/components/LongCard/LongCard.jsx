import { animated } from "@react-spring/web";
import React from "react";
import { useTranslation } from "react-i18next";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";

import { getChipColor } from "../../utils";
import Chip from "../Chip/Chip";

function LongCard({
  chips,
  title,
  title_bg,
  description,
  description_bg,
  url,
  images,
  ...props
}) {
  const { i18n } = useTranslation();
  return (
    <animated.a href={url} target="_blank" rel="noreferrer" {...props}>
      <article className="mb-3 flex flex-wrap rounded border border-transparent p-5 transition-shadow hover:border-slate-200 hover:shadow-md sm:flex-nowrap">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mb-2 ml-0 mr-auto h-48 w-48 sm:m-auto sm:mb-0"
        >
          {images.map((image) => {
            return (
              <SwiperSlide key={image.url}>
                <img
                  className="h-48 w-48 rounded border border-slate-300 object-cover"
                  src={image.url}
                  alt={image.alt}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="ml-0 sm:ml-12">
          <h3 className="mb-2 text-2xl font-bold">
            {i18n.language === "en" ? title : title_bg}
          </h3>
          <div className="mb-4">
            {chips?.map((chipText, index) => (
              <Chip
                key={index + chipText}
                text={chipText}
                color={getChipColor(chipText)}
                customClasses={index !== 0 ? "ml-4" : null}
              />
            ))}
          </div>

          <p className="description no-underline">
            {i18n.language === "en" ? description : description_bg}
          </p>
        </div>
      </article>
    </animated.a>
  );
}

export default LongCard;
