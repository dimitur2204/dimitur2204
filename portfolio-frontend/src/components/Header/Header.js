import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const titleClasses =
	'text-4xl sm:text-6xl md:text-7xl lg:text-8xl lg:leading-negative font-bold italic font-serif text-yellow';

export default function Header() {
	return (
		<header>
			<div className="text-left mb-6">
				<h1 className={`${titleClasses}`}>Dimitar</h1>
				<h1 className={`${titleClasses}`}>Nizamov</h1>
			</div>
			<p className="text-base lg:text-lg font-sans text-white mb-6">
				My year long journey around the world to shine a light on creatives from
				16 different countries.
			</p>
			<a
				href="/"
				className="text-base lg:text-lg font-sans text-white uppercase font-bold mb-6"
			>
				Read More here{' '}
				<FontAwesomeIcon className="text-yellow" icon={faArrowRight} />
			</a>
		</header>
	);
}
