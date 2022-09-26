import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSpring, useTrail, animated } from 'react-spring';
import LongCard from '../../components/LongCard/LongCard';
import { WP_API_URL } from '../../constants';
import useFetch from '../../hooks';

function SkillsAndProjects() {
	const {
		response: posts,
		error,
		loading,
	} = useFetch(WP_API_URL + '/projects');

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

	const elements = trail
		? trail.map((styles, index) => (
				<>
					<LongCard
						key={posts[index]?.id}
						style={styles}
						{...posts[index].acf}
					/>
				</>
		  ))
		: '';

	return error ? (
		<>Error with fetching projects</>
	) : loading ? (
		<>Loading...</>
	) : (
		<section id="skills-and-projects">
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
