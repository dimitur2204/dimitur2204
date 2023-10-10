import React, { useEffect } from 'react';
import './AvatarImage.css';
import avatar from './avatar-picture.png';
import PopupCircle from './PopupCircle';
import { animated, config, useTrail } from 'react-spring';

const positionMap = {
	1: 'top',
	2: 'right',
	3: 'bottom',
	4: 'left',
};

const textMap = {
	1: 'Passionate',
	2: 'Hardworking',
	3: 'Eager to learn',
	4: 'left',
};

const position = {
	position: 'absolute',
	top: '-15px',
	left: '50%',
	transform: 'translateX(-50%)',
};

function AvatarImage() {
	const [trail, api] = useTrail(4, () => ({
		opacity: 1,
		config: config.stiff,
	}));

	useEffect(() => {
		api.start({ opacity: 0 });
	}, [api]);

	return (
		<div className="h-[450px] flex-1 flex justify-center sm:justify-end items-center">
			<div
				id="circle-orbit-container"
				className="w-[270px] sm:w-[370px] relative"
			>
				<animated.div
					id="outer-orbit"
					className="flex w-[270px] h-[270px] sm:w-[370px] sm:h-[370px] justify-center items-center"
				>
					{trail.map((props, index) => (
						<PopupCircle
							key={index}
							position={positionMap[index + 1]}
							text={textMap[index + 1]}
							chipStyles={position}
						/>
					))}
				</animated.div>
				<img
					className="rounded-full w-2/3 absolute m-auto inset-center"
					src={avatar}
					alt="Avatar"
				/>
			</div>
		</div>
	);
}

export default AvatarImage;
