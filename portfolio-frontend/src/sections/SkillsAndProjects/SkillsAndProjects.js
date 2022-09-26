import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, useTrail, animated } from 'react-spring';
import LongCard from '../../components/LongCard/LongCard';

function SkillsAndProjects({ posts }) {
	const { t } = useTranslation('sections');
	const [trail, api] = useTrail(posts?.length || 0, () => ({
		config: { duration: 400 },
		opacity: 0,
	}));

	const spring = useSpring({
		from: { opacity: 0, y: 30 },
		to: { opacity: 1, y: 0 },
		config: { duration: 400 },
		delay: 2000,
	});

	useEffect(() => {
		api.start({ opacity: 1, delay: 2600 });
	}, [api, posts]);

	const elements = trail ? (
		trail.map((styles, index) => {
			return (
				<LongCard style={styles} key={posts[index]?.id} {...posts[index].acf} />
			);
		})
	) : (
		<></>
	);

	return (
		<section id="skills-and-projects" className="mb-8">
			<animated.h2
				className="text-xl font-semibold underline mb-6"
				style={spring}
			>
				{t('skillsAndProjects')}
			</animated.h2>
			{elements}
		</section>
	);
}

export default SkillsAndProjects;
