import { animated, useSpring } from "@react-spring/web";
import React, { Component } from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { ReactTyped as Typed } from "react-typed";

import AvatarImage from "../../components/AvatarImage/AvatarImage";

class TypedHeader extends Component {
  componentDidUpdate() {
    this.typed.reset();
  }
  render() {
    return (
      <Typed
        typedRef={(typed) => {
          this.typed = typed;
        }}
        contentType={"html"}
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
      />
    );
  }
}

const TypedHeaderWithTranslation = withTranslation("sections")(TypedHeader);

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
      </div>
      <AvatarImage />
    </animated.header>
  );
}
