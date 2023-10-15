import {
  animated,
  config,
  easings,
  useSpring,
  useTrail,
} from "@react-spring/web";
import React, { useEffect } from "react";

import "./AvatarImage.css";
import PopupCircle from "./PopupCircle";
import avatar from "./avatar-picture.png";

const positionMap = {
  1: "top",
  2: "right",
  3: "bottom",
  4: "left",
};

const textMap = {
  1: "Passionate",
  2: "Hardworking",
  3: "Eager to learn",
  4: "left",
};

const position = {
  position: "absolute",
  top: "-15px",
  left: "50%",
  transform: "translateX(-50%)",
};

function AvatarImage() {
  const [trail, api] = useTrail(4, () => ({
    opacity: 1,
    config: config.stiff,
  }));

  useEffect(() => {
    api.start({ opacity: 0 });
  }, [api]);

  const orbitRotate = useSpring({
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
    loop: true,
    config: {
      ...config.default,
      easing: easings.linear,
      duration: 19000,
    },
  });

  return (
    <div className="flex h-[450px] flex-1 items-center justify-center sm:justify-end">
      <div
        id="circle-orbit-container"
        className="relative w-[270px] sm:w-[370px]"
      >
        <div id="outer-orbit"></div>
        <animated.div
          className="flex h-[270px] w-[270px] items-center justify-center sm:h-[370px] sm:w-[370px]"
          style={orbitRotate}
        >
          {trail.map((props, index) => (
            <PopupCircle
              key={index}
              position={positionMap[index + 1]}
              text={textMap[index + 1]}
              chipStyles={position}
            />
          ))}
        </animated.div>
        <img
          className="inset-center absolute m-auto w-2/3 rounded-full"
          src={avatar}
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default AvatarImage;
