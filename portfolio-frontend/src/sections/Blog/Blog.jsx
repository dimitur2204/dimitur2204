import React, { useEffect } from "react";
import { useTrail, useSpring, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import SquareCard from "../../components/SquareCard/SquareCard";

function Blog({ posts }) {
  const { t } = useTranslation("sections");

  const [trail, api] = useTrail(
    posts?.length || 0,
    () => ({
      config: { duration: 400 },
      opacity: 0,
    }),
    [posts],
  );

  const spring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { duration: 400 },
    delay: 2400,
  });

  useEffect(() => {
    api.start({ opacity: 1, delay: 3000 });
  }, [api, posts]);

  const elements = trail ? (
    trail.map((styles, index) => {
      return (
        <SquareCard style={styles} key={posts[index].id} {...posts[index]} />
      );
    })
  ) : (
    <></>
  );

  return (
    <section id="blog" className="mb-12">
      <animated.h2
        style={spring}
        className="mb-6 text-xl font-semibold underline"
      >
        {t("blog")}
      </animated.h2>
      <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {elements}
      </div>
    </section>
  );
}

export default Blog;
