import { LiaDocker, LiaGithub, LiaReact, LiaNpm } from "react-icons/lia";
import { TbBrandTypescript } from "react-icons/tb";
import Stepper from "../../components/Stepper/Stepper";

function Work() {
  return (
    <>
      <div className="pb-5">
        <h1 className="text-4xl">Work experience</h1>
      </div>
      <Stepper
        workplaces={[
          {
            company: "UNIwise",
            description: (
              <>
                <a
                  className="text-blue-600 visited:text-purple-600"
                  href="https://uniwise.eu/about-wiseflow"
                >
                  WISEflow
                </a>{" "}
                - One of the biggest digital assessment providers in Scandinavia
                and Europe working with universities in: Denmark, Norway, The
                United Kingdom, Portugal, France, Spain.
                <div className="spacing p-3"></div>
                Codebase with microservices and microfrontends. Got a lot of
                hands on with Docker and general Frontend operations (CI/CD - GH
                Actions, shipping and maintaining <i>npm</i> libraries).
                <div className="spacing p-3"></div>
                Worked in a true <span className="font-medium">AGILE</span>{" "}
                development environment. Worked on creating and maintaining
                components in the internal component library, that required
                meeting high accessibility standards. On other projects in the
                system I had to integrate changes, fix incidents, and develop
                new features based on feedback and needs from the Research, QA
                and Support departments. With my help here we managed to create
                a few modern reusable components which highly improved many of
                our interfaces!
              </>
            ),
            iconPath: "uniwise.jpeg",
            chips: [
              {
                text: (
                  <>
                    <LiaReact className="inline h-5 w-5" /> React
                  </>
                ),
                color: "React",
              },
              {
                text: (
                  <>
                    <TbBrandTypescript className="inline h-5 w-5" /> TypeScript
                  </>
                ),
                color: "TypeScript",
              },
              {
                text: (
                  <>
                    <LiaNpm className="inline h-5 w-5" /> npm
                  </>
                ),
                color: "npm",
              },
              {
                text: (
                  <>
                    <LiaDocker className="inline h-5 w-5" /> Docker
                  </>
                ),
                color: "Docker",
              },
              {
                text: (
                  <>
                    <LiaGithub className="inline h-5 w-5" /> GitHub
                  </>
                ),
                color: "GitHub",
              },
            ],
          },
          {
            company: "Company 2",
            description:
              "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem iste porro quis totam, dolorum velit ea perferendis quos aliquam architecto deleniti mollitia corporis fuga eum, inventore vero magnam, culpa explicabo nam distinctio unde aspernatur. Aut optio praesentium, hic sit quos blanditiis. Ab molestiae necessitatibus fugiat nisi ad! Dicta, eius excepturi!",
            iconPath: "",
            chips: [],
          },
        ]}
      />
    </>
  );
}

export default Work;
