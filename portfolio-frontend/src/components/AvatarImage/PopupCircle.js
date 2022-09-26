import React from 'react'

function PopupCircle({position, text, props}) {
  return (
    <div {...props}>
        <div className={`outer-orbit-cirlce-${position}`}></div>
    </div>
  )
}

export default PopupCircle