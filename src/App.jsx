import Leftnavigation from "./components/navigation/Leftnavigation";
import Topnavigation from "./components/navigation/Topnavigation";
import Message from "./pages/Message";

function App() {
  return (
    <>
      <Topnavigation />
      <div className="flex ">
        <div className=" w-[300px]">
          <Leftnavigation />
        </div>
        <div className=" w-[calc(100%_-_300px)] h-[calc(100vh_-_70px)] ">
          <Message />
        </div>
      </div>
    </>
  );
}

export default App;
