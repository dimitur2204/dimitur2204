import React from 'react';
import { animated } from 'react-spring';
import { COLORS } from '../../constants';

export default function Chip({ button, color, text, customClasses, style }) {
	const hoverClass = color ? `hover:bg-${color}` : 'hover:bg-violet-600';
	return button ? (
		<animated.button
			className={`text-white rounded-full font-bold inline-block ${
				color ? `bg-${color}` : `bg-${COLORS.primary}`
			} ${hoverClass} text-sm py-1 px-3 ${customClasses?.toString()}`}
			style={style}
		>
			{text}
		</animated.button>
	) : (
		<animated.div
			className={`${customClasses?.toString()} text-white rounded-full font-bold inline-block ${
				color ? `bg-${color}` : `bg-${COLORS.primary}`
			} text-sm py-1 px-3 w-fit`}
			style={style}
		>
			{text}
		</animated.div>
	);
}
