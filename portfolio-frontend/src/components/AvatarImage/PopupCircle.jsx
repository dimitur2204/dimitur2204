import { animated, useSpring } from "@react-spring/web";
import React, { useEffect, useState } from "react";

function PopupCircle({ position, text, chipStyles, props }) {
  const [hovered, setHovered] = useState();
  const [clicked, setClicked] = useState();

  useEffect(() => {
    if (!hovered) {
      return;
    }
  }, [hovered, setHovered]);

  function triggerEnter() {
    setHovered(true);
  }

  function triggerLeave() {
    setHovered(false);
  }

  const circleStyle = useSpring({
    transform:
      hovered && !clicked ? `scale(1.4)` : clicked ? "scale(0)" : `scale(1)`,
  });

  return (
    <>
      <div
        onMouseLeave={triggerLeave}
        onFocus={triggerEnter}
        onBlur={triggerLeave}
        onMouseEnter={triggerEnter}
        className="circle-parent"
        tabIndex={-1}
        aria-hidden="true"
        {...props}
      >
        <span className="invisible">{text}</span>
        <animated.div
          className={`outer-orbit-cirlce-${position} pulsing`}
        ></animated.div>
      </div>
    </>
  );
}

export default PopupCircle;
