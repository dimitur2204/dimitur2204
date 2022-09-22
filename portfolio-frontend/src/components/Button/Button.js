import React from "react";
import {colors} from '../../constants'

export default function Button({ color, text, props }) {

  return (
    <button
      className={`rounded ${color ? "" : `bg-${colors.primary}`} text-white text-sm py-2 px-4`}
      {...props}
    >
      {text}
    </button>
  )
}
