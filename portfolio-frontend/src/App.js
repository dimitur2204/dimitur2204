import Button from './components/Button/Button';
import Chip from './components/Chip/Chip';
import Nav from './components/Nav/Nav';
import SkillsAndProjects from './sections/SkillsAndProjects';
import { COLORS } from './constants';

function App() {
	return (
		<div className="container max-w-5xl px-3 mx-auto">
			<Nav />
			<Chip button text="Content" />
			<Chip text="Content" />
			<Chip button color={COLORS.secondary} text="Content" />
			<Button className="static top-3 right-3" text="Write to me" />
			<SkillsAndProjects />
		</div>
	);
}

export default App;
