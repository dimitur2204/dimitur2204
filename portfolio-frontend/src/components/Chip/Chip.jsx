import { animated } from "@react-spring/web";
import React from "react";

import { COLORS } from "../../constants";

export default function Chip({ button, color, text, customClasses, style }) {
  const hoverClass = color ? `hover:bg-${color}` : "hover:bg-violet-600";
  return button ? (
    <animated.button
      className={`inline-block rounded-full font-bold text-white ${
        color ? `bg-${color}` : `bg-${COLORS.primary}`
      } ${hoverClass} px-3 py-1 text-sm ${customClasses?.toString()}`}
      style={style}
    >
      {text}
    </animated.button>
  ) : (
    <animated.div
      className={`${customClasses?.toString()} inline-block rounded-full font-bold text-white ${
        color ? `bg-${color}` : `bg-${COLORS.primary}`
      } w-fit px-3 py-1 text-sm`}
      style={style}
    >
      {text}
    </animated.div>
  );
}
