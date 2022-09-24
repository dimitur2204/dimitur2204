import React from 'react';
import { COLORS } from '../../constants';

export default function Button({ color, text, props }) {
	return (
		<button
			className={`rounded ${
				color ? '' : `bg-${COLORS.primary}`
			} text-white text-sm py-2 px-4`}
			{...props}
		>
			{text}
		</button>
	);
}
