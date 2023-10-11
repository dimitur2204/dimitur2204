import { useSpring, animated, config } from "@react-spring/web";

function Stepper() {
  const dotAnimation = useSpring({
    from: { transform: "scale(0)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: config.slow,
  });

  const lineAnimation = useSpring({
    from: { transform: "scaleY(0)", transformOrigin: "top" },
    to: { transform: "scaleY(1)", transformOrigin: "top" },
    config: {
      ...config.stiff,
      duration: 800,
    },
    delay: 600,
  });

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <animated.div
          style={dotAnimation}
          className="dot mb-3 h-3 w-3 rounded-full bg-violet-500"
        ></animated.div>
        <animated.div
          style={lineAnimation}
          className="line h-full w-1 rounded bg-violet-500"
        ></animated.div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero,
        dolorum modi sed tempore consectetur obcaecati harum aliquam at quos,
        fugit placeat mollitia, dignissimos doloribus ea consequatur sunt sequi!
        Consectetur hic vero nostrum soluta pariatur sunt. Repellendus,
        molestias. Vero alias maiores dolorum illo beatae eligendi accusamus
        nobis sint ex omnis.
      </p>
    </div>
  );
}

export default Stepper;
