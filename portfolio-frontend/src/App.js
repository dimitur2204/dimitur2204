import Button from "./components/Button/Button";
import Chip from "./components/Chip/Chip";
import {colors} from './constants';

function App() {
  return (
    <div className="container-md mx-auto">
      <Chip button text="Content" />
      <Chip text="Content" />
      <Chip button color={colors.secondary} text="Content" />
	  <Button text="Write to me" />
    </div>
  );
}

export default App;
