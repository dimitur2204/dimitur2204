import React from 'react';
import LongCard from '../components/LongCard/LongCard';
import { WP_API_URL } from '../constants';
import useFetch from '../hooks';

function SkillsAndProjects() {
	const {
		response: posts,
		error,
		loading,
	} = useFetch(WP_API_URL + '/projects');
	return error ? (
		<>Error with fetching projects</>
	) : loading ? (
		<>Loading...</>
	) : (
		<section id="skills-and-projects">
			<h2 className="text-xl font-semibold underline">Skils & projects</h2>
			{/* <LongCard /> */}
			{posts?.map((post) => (
				<LongCard key={post.id} {...post.acf} />
			))}
		</section>
	);
}

export default SkillsAndProjects;
