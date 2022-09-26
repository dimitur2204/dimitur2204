import React from 'react';
import { useTranslation } from 'react-i18next';
import { getBlogChipColor } from '../../utils';
import Chip from '../Chip/Chip';

function SquareCard({ thumbnail, title, title_bg, url, chips }) {
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
				className="rounded h-60 mx-2 p-3 text-white text-xl hover:underline relative flex flex-col justify-end"
			>
				<div className="relative z-10 mb-1">
					{chips?.split(',').map((chip) => (
						<Chip
							text={chip}
							color={getBlogChipColor(chip)}
							customClasses={`
								${
									getBlogChipColor(chip) === 'white' ? 'text-black' : ''
								} border border-slate-600 mr-2`}
						/>
					))}
				</div>
				<h2 className="relative z-10 font-medium">
					{i18n.language === 'en' ? title : title_bg}
				</h2>
				<div class="rounded absolute w-full h-full top-0 left-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
			</div>
		</a>
	);
}

export default SquareCard;
