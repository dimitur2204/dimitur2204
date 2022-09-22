import React from "react";
import {colors} from '../../constants';

export default function Chip({ button, color, text, props }) {
    const hoverClass = color ? `hover:bg-${color}-600` : "hover:bg-violet-600";
  return button ? (
    <button
      className={`rounded-full ${color ? `bg-${color}` : `bg-${colors.primary}`} ${hoverClass} text-white text-sm py-1 px-3`}
      {...props}
    >
      {text}
    </button>
  ) : (
    <div
      className={`rounded-full ${color ? `bg-${color}` : `bg-${colors.primary}`} text-white text-sm py-1 px-3 w-fit`}
      {...props}
    >
      {text}
    </div>
  );
}
