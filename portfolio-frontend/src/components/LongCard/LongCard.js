import React from 'react';
import Chip from '../Chip/Chip';

function getChipColor(chipText) {
	switch (chipText.toLowerCase()) {
		case 'react':
			return 'cyan-400';
		case 'firebase':
			return 'orange-400';
		case 'node.js':
			return 'green-400';
		default:
			return null;
	}
}
function LongCard({ thumbnail, chips, title, description, url }) {
	return (
		<a href={url}>
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
