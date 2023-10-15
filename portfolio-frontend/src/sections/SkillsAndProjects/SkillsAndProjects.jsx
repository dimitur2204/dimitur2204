import { animated, useSpring, useTrail } from "@react-spring/web";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import LongCard from "../../components/LongCard/LongCard";

function SkillsAndProjects({ projects }) {
  const { t } = useTranslation("sections");
  const [trail, api] = useTrail(projects?.length || 0, () => ({
    config: { duration: 400 },
    opacity: 0,
  }));

  const spring = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { duration: 400 },
    delay: 2000,
  });

  useEffect(() => {
    api.start({ opacity: 1, delay: 2600 });
  }, [api, projects]);

  const elements = trail ? (
    trail.map((styles, index) => {
      return (
        <LongCard
          style={styles}
          key={projects[index].id}
          {...projects[index]}
        />
      );
    })
  ) : (
    <></>
  );

  return (
    <section id="skills-and-projects" className="mb-8">
      <animated.h2
        className="mb-6 text-xl font-semibold underline"
        style={spring}
      >
        {t("skillsAndProjects")}
      </animated.h2>
      {elements}
    </section>
  );
}

export default SkillsAndProjects;
