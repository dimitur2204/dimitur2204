import React from "react";
import { useTranslation } from "react-i18next";
import Work from "../sections/Work/Work";
import { useFetch } from "../hooks";

function Loader() {
	return (
		<div className="flex h-[100vh] items-center justify-center">
			<div className="loader">Loading...</div>
		</div>
	);
}

function WorkPage() {
	const { response: workplaces, loading } = useFetch("/workplaces.json");

	const { i18n } = useTranslation();

	const translatedWorkspaces = React.useMemo(
		() =>
			workplaces?.map((workplace) => {
				return {
					...workplace,
					...(i18n.language === "bg"
						? workplace.content.bg
						: workplace.content.en),
				};
			}),
		[workplaces, i18n.language],
	);

	return loading || !translatedWorkspaces ? (
		<Loader />
	) : (
		<>
			<div className="container mx-auto max-w-5xl px-3 py-9">
				<Work workplaces={translatedWorkspaces} />
			</div>
			<hr />
		</>
	);
}

export default WorkPage;
