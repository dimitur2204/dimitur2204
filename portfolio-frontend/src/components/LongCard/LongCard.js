import React from 'react';
import { useTranslation } from 'react-i18next';
import { getChipColor } from '../../utils';
import Chip from '../Chip/Chip';

function LongCard({
	thumbnail,
	chips,
	title,
	title_bg,
	description,
	description_bg,
	url,
}) {
	const { i18n } = useTranslation();
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<article className="flex flex-wrap sm:flex-nowrap mb-10">
				<img
					className="h-48 w-48 rounded border border-slate-300 object-cover"
					src={thumbnail}
					alt="Post thumbnail"
				/>
				<div className="ml-0 sm:ml-12">
					<h3 className="text-2xl font-bold mb-2">
						{i18n.language === 'en' ? title : title_bg}
					</h3>
					<div className="mb-4">
						{chips?.split(',').map((chipText, index) => (
							<Chip
								key={chipText}
								text={chipText}
								color={getChipColor(chipText)}
								customClasses={index !== 0 ? 'ml-4' : null}
							/>
						))}
					</div>

					<p className="description">
						{i18n.language === 'en' ? description : description_bg}
					</p>
				</div>
			</article>
		</a>
	);
}

export default LongCard;
