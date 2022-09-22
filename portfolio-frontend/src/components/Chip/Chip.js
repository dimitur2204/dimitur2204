import React from 'react'

export default function Chip({button, color, text}) {
  return (
        button ? 
    <button className={`rounded-full bg-${color ?? 'primary'}`}>
        {text}
    </button> : 
    <div className={`rounded-full bg-${color ?? 'primary'}`}>
        {text}
    </div>
    )
}
