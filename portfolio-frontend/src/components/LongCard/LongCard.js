import React from 'react';
import { getChipColor } from '../../utils';
import Chip from '../Chip/Chip';

function LongCard({ thumbnail, chips, title, description, url }) {
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<article className="flex flex-wrap sm:flex-nowrap">
				<img
					className="h-48 w-48 rounded border border-slate-300 object-cover"
					src={thumbnail}
					alt="Post thumbnail"
				/>
				<div className="ml-0 sm:ml-12">
					<h3 className="text-2xl font-bold mb-2">{title}</h3>
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

					<p className="description">{description}</p>
				</div>
			</article>
		</a>
	);
}

export default LongCard;
