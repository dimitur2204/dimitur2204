import { animated, config, useSpring } from "@react-spring/web";

import { useFetch } from "../hooks";
import Blog from "../sections/Blog/Blog";
import Header from "../sections/Header/Header";
import SkillsAndProjects from "../sections/SkillsAndProjects/SkillsAndProjects";

function DecorativeCircle() {
  const style = useSpring({
    from: { transform: "scale(0)", y: -30 },
    to: { transform: "scale(1)", y: 0 },
    config: config.slow,
  });
  return (
    <animated.div
      style={{
        position: "absolute",
        zIndex: -1,
        height: "220px",
        width: "220px",
        backgroundColor: "#fb923c",
        borderRadius: "50%",
        ...style,
      }}
      className="left-[-200px] top-[22%] sm:left-[-70px] sm:top-[11%]"
    ></animated.div>
  );
}

function Loader() {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div className="loader">Loading...</div>
    </div>
  );
}

function Home() {
  const { response: blogPosts, loading: blogLoading } =
    useFetch("/blog-posts.json");

  const { response: projects, loading: projectsLoading } =
    useFetch("/projects.json");
  return blogLoading || projectsLoading ? (
    <Loader />
  ) : (
    <>
      <div className="container mx-auto max-w-5xl px-3">
        <DecorativeCircle />
        <Header />
        <SkillsAndProjects projects={projects} />
        <Blog posts={blogPosts} />
      </div>
      <hr />
    </>
  );
}

export default Home;
