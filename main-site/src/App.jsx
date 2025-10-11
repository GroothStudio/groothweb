import { GroothStudioIntro } from "./components/groothStudioIntro";
import { Donator } from "./components/donator";
import { Anggota } from "./components/anggota";
import "./index.css";
import { News } from "./components/news";
import { Games } from "./components/games";
import { FAQ } from "./components/FAQ";

function App() {
  return (
    <div className="flex items-center justify-center font-poppins flex-col">
      <GroothStudioIntro />
      <News />
      <Anggota />
      <FAQ />
      <Games />
      <Donator />
    </div>
  );
}

export default App;
