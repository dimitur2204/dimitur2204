import React, { useEffect } from "react";
import "./AvatarImage.css";
import avatar from "./avatar-picture.png";
import PopupCircle from "./PopupCircle";
import { animated, config, useTrail } from 'react-spring'

const positionMap = {
  1: "top",
  2: "right",
  3: "bottom",
  4: "left", 
}

function AvatarImage() {

  const [trail, api] = useTrail(4, () => ({ opacity: 1, config: config.stiff }))

  useEffect(() => {
    api.start({ opacity: 0 })
  }, [])
  return (
    <div className="h-[650px] flex-1 flex justify-end items-center">
      <div id="circle-orbit-container" className="relative">
        <animated.div id="outer-orbit" className="flex justify-center items-center">
          {trail.map((props, index) => (
            <PopupCircle position={positionMap[index + 1]} text="Hello"/>
          ))}
        </animated.div>
        <img className="rounded-full w-2/3 absolute m-auto inset-center" src={avatar} alt="Avatar"/>
      </div>
    </div>
  );
}

export default AvatarImage;
