import React from 'react';
import { useTranslation } from 'react-i18next';

function SquareCard({ thumbnail, title, title_bg, url }) {
	const { i18n } = useTranslation();
	return (
		<a href={url}>
			<div
				style={{
					backgroundImage: `url(${thumbnail})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
				className="rounded h-60 mx-2 p-3 text-white font-bold text-lg hover:underline relative flex justify-end items-end"
			>
				<h2 className="relative z-10">
					{i18n.language === 'en' ? title : title_bg}
				</h2>
				<div class="rounded absolute w-full h-full top-0 left-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
			</div>
		</a>
	);
}

export default SquareCard;
