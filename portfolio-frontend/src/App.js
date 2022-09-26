import Footer from './sections/Footer/Footer';
import Nav from './components/Nav/Nav';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import SkillsAndProjects from './sections/SkillsAndProjects/SkillsAndProjects';
import Blog from './sections/Blog/Blog';
import Header from './sections/Header/Header';
import { WP_API_URL } from './constants';
import useFetch from './hooks';
import { useSpring, animated, config } from 'react-spring';

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources: {
			en: {
				nav: {
					blog: 'Blog',
					projects: 'Projects',
				},
				sections: {
					skillsAndProjects: 'Skills & Projects',
					blog: 'Blog',
					header: {
						stranger: 'Hello stranger!',
						this: 'This is',
						name: 'Dimitar',
						job: 'Student Developer',
						passion: 'Passionate to work with the greatest',
					},
				},
			},
			bg: {
				nav: {
					blog: 'Блог',
					projects: 'Проекти',
				},
				sections: {
					skillsAndProjects: 'Умения и проекти',
					blog: 'Блог',
					header: {
						stranger: 'Здравей страннико!',
						this: 'Това е',
						name: 'Димитър',
						job: 'Студент Програмист',
						passion: 'Искащ да работи с най-новото',
					},
				},
			},
		},
		lng: 'en',
		fallbackLng: 'en',

		interpolation: {
			escapeValue: false,
		},
	});

function DecorativeCircle() {
	const style = useSpring({
		from: { transform: 'scale(0)', y: -30 },
		to: { transform: 'scale(1)', y: 0 },
		config: config.slow,
	});
	return (
		<animated.div
			style={{
				position: 'absolute',
				zIndex: -1,
				height: '220px',
				width: '220px',
				backgroundColor: '#fb923c',
				borderRadius: '50%',
				...style,
			}}
			className="left-[-200px] top-[22%] sm:left-[-70px] sm:top-[11%]"
		></animated.div>
	);
}

function Loader() {
	return (
		<div className="h-[100vh] flex justify-center items-center">
			<div className="loader">Loading...</div>
		</div>
	);
}

function App() {
	const {
		response: blogPosts,
		error: blogError,
		loading: blogLoading,
	} = useFetch(WP_API_URL + '/blog-posts');

	const {
		response: projects,
		error: projectsError,
		loading: projectsLoading,
	} = useFetch(WP_API_URL + '/projects');
	return blogLoading || projectsLoading ? (
		<Loader />
	) : (
		<>
			<div className="container max-w-5xl px-3 mx-auto">
				<DecorativeCircle />
				<Nav />
				<Header />
				<SkillsAndProjects posts={projects} />
				<Blog posts={blogPosts} />
			</div>
			<hr />
			<Footer />
		</>
	);
}

export default App;
