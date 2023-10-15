import Stepper from "../../components/Stepper/Stepper";

function Work() {
  return (
    <>
      <div>
        <h1>Work</h1>
      </div>
      <Stepper
        workplaces={[
          {
            company: "Company 1",
            description:
              "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem iste porro quis totam, dolorum velit ea perferendis quos aliquam architecto deleniti mollitia corporis fuga eum, inventore vero magnam, culpa explicabo nam distinctio unde aspernatur. Aut optio praesentium, hic sit quos blanditiis. Ab molestiae necessitatibus fugiat nisi ad! Dicta, eius excepturi!",
          },
          {
            company: "Company 2",
            description:
              "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem iste porro quis totam, dolorum velit ea perferendis quos aliquam architecto deleniti mollitia corporis fuga eum, inventore vero magnam, culpa explicabo nam distinctio unde aspernatur. Aut optio praesentium, hic sit quos blanditiis. Ab molestiae necessitatibus fugiat nisi ad! Dicta, eius excepturi!",
          },
        ]}
      />
    </>
  );
}

export default Work;
