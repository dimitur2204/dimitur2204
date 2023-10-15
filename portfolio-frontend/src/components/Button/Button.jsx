import React from "react";

import { COLORS } from "../../constants";

export default function Button({ color, text, props }) {
  return (
    <button
      className={`rounded ${
        color ? "" : `bg-${COLORS.primary}`
      } px-4 py-2 text-sm text-white`}
      {...props}
    >
      {text}
    </button>
  );
}
