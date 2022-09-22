import Button from "./components/Button/Button";
import Chip from "./components/Chip/Chip";
import Nav from "./components/Nav/Nav";
import { colors } from "./constants";

function App() {
  return (
    <div className="container max-w-5xl px-3 mx-auto">
      <Nav />
      <Chip button text="Content" />
      <Chip text="Content" />
      <Chip button color={colors.secondary} text="Content" />
      <Button text="Write to me" />
    </div>
  );
}

export default App;
