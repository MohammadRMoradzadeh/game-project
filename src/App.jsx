import Article from "./components/article/Article";
import Header from "./components/header/Header";
import NewGame from "./components/newgames/NewGame";
import Slider from "./components/slider/Slider";


function App() {
  return (
    <>
      <Header />
      <Slider />
      <NewGame />
      <Article />
      <div className="w-full h-[1100px]"></div>
    </>
  );
}

export default App;
