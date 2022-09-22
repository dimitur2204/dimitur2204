import React from "react";
import { colors } from "../../constants";
import { getWhiteOrBlackBasedOnContrast } from "../../utils";

export default function Chip({ button, color, text, props }) {
  const customStyles = {
    backgroundColor: color,
    color: getWhiteOrBlackBasedOnContrast(color || colors.primary),
  };
  return button ? (
    <button
      style={customStyles}
      className={`rounded-full ${color ? "" : "bg-primary"} text-sm py-1 px-3`}
      {...props}
    >
      {text}
    </button>
  ) : (
    <div
      style={customStyles}
      className={`rounded-full ${color ? "" : "bg-primary"} text-sm py-1 px-3 w-fit`}
      {...props}
    >
      {text}
    </div>
  );
}
