import {
	LiaDocker,
	LiaGithub,
	LiaNpm,
	LiaReact,
	LiaSass,
	LiaUmbraco,
} from "react-icons/lia";
import { SiAnsible, SiBootstrap, SiJquery, SiWebpack } from "react-icons/si";
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
						time: "Feb 2022 - Present",
						link: "https://uniwise.eu",
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
								<span className="block spacing p-3"></span>
								Codebase with microservices and many frontends. Got a lot of
								hands on with Docker and Frontend operations (CI/CD - GH
								Actions, shipping and maintaining <i>npm</i> libraries).
								<span className="block spacing p-3"></span>
								Working with <span className="font-medium">AGILE</span> .
								Working on creating and maintaining an internal component
								library in close collaboration with designers, that required
								meeting high accessibility standards. Other tasks include
								integrating changes, fixing incidents, and develop new features
								based on feedback and needs from the Research, QA and Support
								departments. With my help here we managed greatly modernize and
								make it easy to use and integrate the internal library that is
								the core dependency of all frontends in the company.
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
										<SiWebpack /> Webpack
									</>
								),
								color: "Webpack",
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
						company: "DevaSoft",
						link: "https://devasoft.bg/",
						time: "May 2021 - Aug 2021",
						description: (
							<>
								A small software company based in Sofia, Bulgaria.
								<span className="block spacing p-3"></span>
								Worked on a Cloud Provider platform for the asian market in a
								small team of 4 developers. Helped with many features and
								incidents on the main client side of the platform. Was
								responsible for creating an admin panel from scratch for
								creating marketplace applications which show on the client side
								for provisioning ready to use Virtual Machines on the cloud
								(similiar to DigitalOcean) marketplace.
								<span className="block spacing p-3"></span>
								Got hands on experience with looking into the python backend and
								specifically the Ansible playbooks that were used for
								provisioning the Virtual Machines.
							</>
						),
						iconPath: "devasoft-logo.jpeg",
						chips: [
							{
								text: (
									<>
										<SiAnsible /> Ansible
									</>
								),
								color: "Ansible",
							},

							{
								text: (
									<>
										<LiaReact />
										React
									</>
								),
								color: "React",
							},
							{
								text: (
									<>
										<SiBootstrap />
										Bootstrap
									</>
								),
								color: "Bootstrap",
							},
						],
					},
					{
						company: "Klevret",
						link: "https://klevret.com/",
                        time: "Nov 2020 - May 2021",
						description: (
							<>
								A software company based in Blagoevgrad, Bulgaria. Outsourcing
								for foreign companies mostly based in the UK.
								<span className="block spacing p-3"></span>
								Worked on Umbraco based CMS websites and themes. Mainly
								utilizing complex SCSS architectures and projects together with
								jQuery for the frontends of the CMS based websites. Used a lot
								of CSS libraries such as Bootstrap. Used vue and React in cases
								where interactivity was key
							</>
						),
						iconPath: "klevret-logo.jpeg",
						chips: [
							{
								text: (
									<>
										<LiaSass /> SCSS
									</>
								),
								color: "Sass",
							},
							{
								text: (
									<>
										<SiBootstrap />
										Bootstrap
									</>
								),
								color: "Bootstrap",
							},
							{
								text: (
									<>
										<SiJquery /> jQuery
									</>
								),
								color: "jQuery",
							},
							{
								text: (
									<>
										<LiaUmbraco /> Umbraco
									</>
								),
								color: "Umbraco",
							},
						],
					},
				]}
			/>
		</>
	);
}

export default Work;
