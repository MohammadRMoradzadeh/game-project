import Article from "./components/article/Article";
import Criticism from "./components/criticism/Criticism";
import Header from "./components/header/Header";
import NewGame from "./components/newgames/NewGame";
import Slider from "./components/slider/Slider";
import Trailer from "./components/trailer/Trailer";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <NewGame />
      <Article />
      <Criticism />
      <Trailer />
      <div className="w-full h-[1100px]"></div>
    </>
  );
}

export default App;
