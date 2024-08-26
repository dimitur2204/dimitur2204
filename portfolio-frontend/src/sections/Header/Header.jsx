import { animated, useSpring } from "@react-spring/web";
import React, { Component } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { ReactTyped as Typed } from "react-typed";

import AvatarImage from "../../components/AvatarImage/AvatarImage";
import { ChevronRight } from "react-feather";
import { Link } from "@tanstack/react-router";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

function CursorBlinker() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-5 w-[1px] translate-y-1 bg-slate-900"
    />
  );
}

function TextAnim() {
    const { t } = useTranslation("sections.header");
  const baseText = t("stranged") + " " + t("this") + " " + t("name");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);

  return (
    <span className="">
      <motion.span>{displayText}</motion.span>
      <CursorBlinker />
    </span>
  );
}

class TypedHeader extends Component {
  render() {
    return (
      <Typed
        strings={[
          `${this.props.t("header.stranger")} <br /> ${this.props.t(
            "header.this",
          )} <span class="text-violet-500">${this.props.t(
            "header.name",
          )}</span>`,
        ]}
        typeSpeed={25}
        showCursor={true}
        startDelay={800}
        startWhenVisible
      />
    );
  }
}

export default function Header() {
  const style = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { duration: 400 },
    delay: 400,
  });
  const { t } = useTranslation("sections");
  return (
    <animated.header
      className="my-8 block items-center sm:my-0 sm:flex"
      style={style}
    >
      <div className="flex-1">
        <h1 className="mb-5 text-5xl font-bold text-black">
          <TypedHeaderWithTranslation />
        </h1>
        <div className="flex gap-2">
          <div>
            <p>{t("header.job")}</p>
            <a className="text-blue-500" href="https://www.uniwise.co.uk/">
              @UNIWise
            </a>
          </div>
          <span>|</span>
          <div>{t("header.passion")}</div>
        </div>
        <Link to={"/work"} className="inline-block mt-4 text-sm font-semibold bg-slate-800 text-white px-4 py-2 rounded">
            Check my work
            <ChevronRight className="inline-block"/>
        </Link>
      </div>
      <AvatarImage />
    </animated.header>
  );
}
