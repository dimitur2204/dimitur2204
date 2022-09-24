import React from 'react';
import { useTranslation } from 'react-i18next';
import LongCard from '../components/LongCard/LongCard';
import { WP_API_URL } from '../constants';
import useFetch from '../hooks';

function SkillsAndProjects() {
	const {
		response: posts,
		error,
		loading,
	} = useFetch(WP_API_URL + '/projects');

	const { t } = useTranslation('sections');

	return error ? (
		<>Error with fetching projects</>
	) : loading ? (
		<>Loading...</>
	) : (
		<section id="skills-and-projects">
			<h2 className="text-xl font-semibold underline mb-12">
				{t('skillsAndProjects')}
			</h2>
			{posts?.map((post) => (
				<LongCard key={post.id} {...post.acf} />
			))}
		</section>
	);
}

export default SkillsAndProjects;
