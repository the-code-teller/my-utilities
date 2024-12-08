import "./App.css";
import ClickCounter from "./components/hocExample/ClickCounter";
import HoverCounter from "./components/hocExample/HoverCounter";
import CallModal from "./components/modals/CallModal";

function App() {
  return (
    <>
      {/* <CallModal /> */}
      <ClickCounter />
      <HoverCounter />
    </>
  );
}

export default App;
