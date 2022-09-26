import React from 'react';
import { useTranslation } from 'react-i18next';
import SquareCard from '../../components/SquareCard/SquareCard';

function Blog({ posts }) {
	const { t } = useTranslation('sections');

	return (
		<section id="skills-and-projects" className="mb-12">
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
