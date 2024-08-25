import { animated, config, easings, useSprings } from "@react-spring/web";
import { useEffect } from "react";

import { getChipColor } from "../../utils";
import Chip from "../Chip/Chip";

function Stepper({ workplaces }) {
  const [dotSprings, dotSpringsApi] = useSprings(
    workplaces.length,
    () => ({
      from: {
        transform: "scale(0)",
        opacity: 0,
      },
      to: {
        transform: "scale(1)",
        opacity: 1,
      },
      config: config.slow,
      pause: true,
    }),
    [workplaces],
  );

  const [lineSprings, lineSpringsApi] = useSprings(
    workplaces.length,
    () => ({
      from: {
        transform: "scaleY(0)",
        transformOrigin: "top",
      },
      to: {
        transform: "scaleY(1)",
      },
      config: {
        ...config.stiff,
        easing: easings.easeOutCirc,
        duration: 800,
      },
      pause: true,
    }),
    [workplaces],
  );

  useEffect(() => {
    const allSprings = dotSpringsApi.current.map((_, index) => {
      return [dotSpringsApi.current[index], lineSpringsApi.current[index]];
    });
    const timeouts = [];
    allSprings.flat().forEach((spring, index) => {
      const timeout = setTimeout(() => {
        spring.resume();
      }, index * 500);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
    };
  }, [dotSprings, lineSprings, dotSpringsApi, lineSpringsApi]);

  return (
    <div className="flex flex-col gap-4">
      {workplaces.map((wp, index) => (
        <div key={wp.company} className="flex w-full h-full gap-3">
          <div className="flex flex-col items-center">
            <animated.div
              style={dotSprings[index]}
              className="dot h-3 w-3 rounded-full bg-violet-500"
            ></animated.div>
            <div className="mt-3 h-full">
              <animated.div
                style={lineSprings[index]}
                className="line h-full w-1 rounded bg-violet-500"
              ></animated.div>
            </div>
          </div>
          <div className="w-full">
            <a className="flex gap-2" href={wp.link}>
              {wp.iconPath ? (
                <img
                  className="aspect-square w-12 p-1 border-gray-400 border rounded"
                  src={wp.iconPath}
                  alt=""
                />
              ) : null}
              {wp.company ? (
                  <div className="flex-wrap">
                <h2 className="text-xl text-blue-500">{wp.company}</h2>
                  <span className="text-xs text-gray-500 flex">{wp.time}</span>
                  </div>
              ) : null}
            </a>
            <p className="py-3">{wp.description}</p>
            <div className="flex flex-wrap gap-1">
              {wp.chips.map(({ text, color }, index) => (
                <Chip
                  key={text + index}
                  text={text}
                  color={getChipColor(color)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stepper;
