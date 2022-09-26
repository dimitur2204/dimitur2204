import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import Chip from '../Chip/Chip';

function PopupCircle({position, text, props}) {
const [hovered,setHovered] = useState();
const [clicked,setClicked] = useState();

useEffect(() => {
  if (!hovered) {
    return;
  }}, [hovered, setHovered]);

  function triggerEnter() {
    setHovered(true)
  }

  function triggerLeave() {
    setHovered(false)
  }

  function triggerClick() {
    setClicked(true)
  }

  const circleStyle = useSpring({
    transform: hovered
      ? `scale(1.4)`
      : clicked ? 'scale(0)' : `scale(1)`,
  });
  const chipStyle = useSpring({
    transform: clicked
      ? `scale(1)`
      : `scale(0)`,
  });


  return (
    <>
      <button onClick={triggerClick} onMouseLeave={triggerLeave} onFocus={triggerEnter} onBlur={triggerLeave} onMouseEnter={triggerEnter} className='circle-parent' {...props}>
          <animated.div className={`outer-orbit-cirlce-${position} pulsing`} style={circleStyle}></animated.div>
      </button>
      {/* <Chip text={"Passionate"} style={chipStyle}/> */}
    </>

  )
}

export default PopupCircle