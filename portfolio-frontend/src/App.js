import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function DecorativeCircle() {
  return (
    <div
      style={{
        position: "fixed",
        top: "19%",
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
    <div className="container max-w-5xl px-3 py-4 mx-auto">
      <DecorativeCircle />
      <Nav />
      <Header />
    </div>
  );
}

export default App;
