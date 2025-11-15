import { useRef } from "react";
import { GroothStudioIntro } from "./components/groothStudioIntro";
import { Donator } from "./components/donator";
import { Anggota } from "./components/anggota";
import "./index.css";
import { News } from "./components/news";
import { Games } from "./components/games";
import { FAQ } from "./components/FAQ";

function App() {
  const sectionsRef = {
    Home: useRef(null),
    News: useRef(null),
    "Our Member": useRef(null),
    FAQ: useRef(null),
    "Our Games": useRef(null),
    "Our Donator": useRef(null),
  };

  const scrollToSection = (name) => {
    const section = sectionsRef[name]?.current;
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex items-center justify-center font-poppins flex-col">
      <div ref={sectionsRef["Home"]}>
        <GroothStudioIntro />
      </div>

      <div ref={sectionsRef["News"]}>
        <News />
      </div>

      <div ref={sectionsRef["Our Member"]}>
        <Anggota />
      </div>

      <div ref={sectionsRef["FAQ"]}>
        <FAQ />
      </div>

      <div ref={sectionsRef["Our Games"]}>
        <Games />
      </div>

      <div ref={sectionsRef["Our Donator"]}>
        <Donator scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}

export default App;
