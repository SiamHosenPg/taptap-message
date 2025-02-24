import Leftnavigation from "./components/navigation/Leftnavigation";
import Topnavigation from "./components/navigation/Topnavigation";
import Message from "./pages/Message";

function App() {
  return (
    <>
      <Topnavigation />
      <div className="flex">
        <Leftnavigation />
      </div>

      <Message />
    </>
  );
}

export default App;
