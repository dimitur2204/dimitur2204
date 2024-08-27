import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { useTranslation } from "react-i18next";
import { ReactTyped as Typed } from "react-typed";

import AvatarImage from "../../components/AvatarImage/AvatarImage";
import { ChevronRight } from "react-feather";
import { Link } from "@tanstack/react-router";

function TypedHeaderWithTranslation() {
	const { t } = useTranslation("sections");
	return (
		<Typed
			strings={[
				`${t("header.stranger")} <br /> ${t(
					"header.this",
				)} <span class="text-violet-500">${t("header.name")}</span>`,
			]}
			typeSpeed={25}
			showCursor={true}
			startDelay={800}
			startWhenVisible
		/>
	);
}

export default function Header() {
	const style = useSpring({
		from: { opacity: 0, y: 30 },
		to: { opacity: 1, y: 0 },
		config: { duration: 400 },
		delay: 400,
	});
	const { t } = useTranslation("sections");
	return (
		<animated.header
			className="my-8 block items-center sm:my-0 sm:flex"
			style={style}
		>
			<div className="flex-1">
				<h1 className="mb-5 text-5xl font-bold text-black">
					<TypedHeaderWithTranslation />
				</h1>
				<div className="flex gap-2">
					<div>
						<p>{t("header.job")}</p>
						<a className="text-blue-500" href="https://www.uniwise.co.uk/">
							@UNIWise
						</a>
					</div>
					<span>|</span>
					<div>{t("header.passion")}</div>
				</div>
				<Link
					to={"/work"}
					className="inline-block mt-4 text-sm font-semibold bg-slate-800 text-white px-4 py-2 rounded"
				>
					Check my work
					<ChevronRight className="inline-block" />
				</Link>
			</div>
			<AvatarImage />
		</animated.header>
	);
}
