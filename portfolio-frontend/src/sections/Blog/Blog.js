import React from 'react';
import { useTranslation } from 'react-i18next';
import SquareCard from '../../components/SquareCard/SquareCard';
import { WP_API_URL } from '../../constants';
import useFetch from '../../hooks';

function Blog() {
	const {
		response: posts,
		error,
		loading,
	} = useFetch(WP_API_URL + '/blog-posts');
	const { t } = useTranslation('sections');

	return error ? (
		<>Error with fetching projects</>
	) : loading ? (
		<>Loading...</>
	) : (
		<section id="skills-and-projects">
			<h2 className="text-xl font-semibold underline mb-6">{t('blog')}</h2>
			<div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{posts
					?.slice()
					.reverse()
					.map((post) => (
						<SquareCard key={post.id} {...post.acf} />
					))}
			</div>
		</section>
	);
}

export default Blog;
