import React from 'react';
import { COLORS } from '../../constants';

export default function Chip({ button, color, text, customClasses, props }) {
	const hoverClass = color ? `hover:bg-${color}` : 'hover:bg-violet-600';
	return button ? (
		<button
			className={`rounded-full font-bold inline-block ${
				color ? `bg-${color}` : `bg-${COLORS.primary}`
			} ${hoverClass} text-white text-sm py-1 px-3 ${customClasses?.toString()}`}
			{...props}
		>
			{text}
		</button>
	) : (
		<div
			className={`rounded-full font-bold inline-block ${
				color ? `bg-${color}` : `bg-${COLORS.primary}`
			} text-white text-sm py-1 px-3 w-fit ${customClasses?.toString()}`}
			{...props}
		>
			{text}
		</div>
	);
}
