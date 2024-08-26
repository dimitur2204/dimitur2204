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
import { useTranslation } from "react-i18next";

import Stepper from "../../components/Stepper/Stepper";

function Work({ workplaces }) {
	const { t } = useTranslation("work");
	return (
		<>
			<div className="pb-5">
				<h1 className="text-4xl">{t("workExperience")}</h1>
			</div>
			<Stepper
				workplaces={[
					{
						company: workplaces[2].company,
						description: (
							<div
								dangerouslySetInnerHTML={{ __html: workplaces[2].description }}
							></div>
						),
						time: workplaces[2].time,
						link: "https://uniwise.eu",
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
						company: workplaces[1].company,
						description: (
							<div
								dangerouslySetInnerHTML={{ __html: workplaces[1].description }}
							></div>
						),
						time: workplaces[1].time,
						link: "https://devasoft.bg/",
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
						company: workplaces[0].company,
						description: (
							<div
								dangerouslySetInnerHTML={{ __html: workplaces[0].description }}
							></div>
						),
						time: workplaces[0].time,
						link: "https://klevret.com/",
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
