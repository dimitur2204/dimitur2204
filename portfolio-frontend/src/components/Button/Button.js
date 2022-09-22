import React from "react";
import { colors } from "../../constants";
import { getWhiteOrBlackBasedOnContrast } from "../../utils";

export default function Button({ color, text, props }) {
  const customStyles = {
    backgroundColor: color,
    color: getWhiteOrBlackBasedOnContrast(color || colors.primary),
  };
  return (
    <button
      style={customStyles}
      className={`rounded ${color ? "" : "bg-primary"} text-sm py-2 px-4`}
      {...props}
    >
      {text}
    </button>
  )
}
