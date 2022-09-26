import Footer from './sections/Footer/Footer';
import Nav from './components/Nav/Nav';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import SkillsAndProjects from './sections/SkillsAndProjects/SkillsAndProjects';
import Blog from './sections/Blog/Blog';
import Header from './sections/Header/Header';

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

function DecorativeCircle() {
  return (
    <div
      style={{
        position: "absolute",
		zIndex: -1,
        top: "11%",
        left: "-70px",
        height: "220px",
        width: "220px",
        backgroundColor: "#fb923c",
        borderRadius: "50%",
      }}
    ></div>
  );
}

function App() {
	return (
		<>
			<div className="container max-w-5xl px-3 mx-auto">
				<DecorativeCircle />
				<Nav />
				<Header />
				<SkillsAndProjects />
				<Blog />
			</div>
			<hr />
			<Footer />
		</>
	);
}

export default App;
