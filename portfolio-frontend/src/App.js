import Footer from './sections/Footer/Footer';
import Nav from './components/Nav/Nav';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import SkillsAndProjects from './sections/SkillsAndProjects/SkillsAndProjects';
import Blog from './sections/Blog/Blog';

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
				},
			},
		},
		lng: 'en',
		fallbackLng: 'en',

		interpolation: {
			escapeValue: false,
		},
	});

function App() {
	return (
		<>
			<div className="container max-w-5xl px-3 mx-auto">
				<Nav />
				<SkillsAndProjects />
				<Blog />
			</div>
			<hr />
			<Footer />
		</>
	);
}

export default App;
