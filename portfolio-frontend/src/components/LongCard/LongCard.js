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
function LongCard({ thumbnail, chips, title, description, url, id }) {
	return (
		<a href={url}>
			<article className="flex">
				<img src={thumbnail} alt="Post thumbnail" />
				<div>
					<h3 className="text-2xl font-bold">{title}</h3>
					{chips?.split(',').map((chipText) => (
						<Chip text={chipText} color={getChipColor(chipText)} />
					))}
					<p className="description">{description}</p>
				</div>
			</article>
		</a>
	);
}

export default LongCard;
