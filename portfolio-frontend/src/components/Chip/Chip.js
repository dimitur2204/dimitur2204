import React from 'react';
import { COLORS } from '../../constants';

export default function Chip({ button, color, text, props }) {
	const hoverClass = color ? `hover:bg-${color}` : 'hover:bg-violet-600';
	return button ? (
		<button
			className={`rounded-full ${
				color ? `bg-${color}` : `bg-${COLORS.primary}`
			} ${hoverClass} text-white text-sm py-1 px-3`}
			{...props}
		>
			{text}
		</button>
	) : (
		<div
			className={`rounded-full ${
				color ? `bg-${color}` : `bg-${COLORS.primary}`
			} text-white text-sm py-1 px-3 w-fit`}
			{...props}
		>
			{text}
		</div>
	);
}
