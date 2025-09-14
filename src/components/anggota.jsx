import { BorderBox } from "./box";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

import BoltbertImg from "../assets/boltbert.webp";
import GlendovinnImg from "../assets/glendovinn.webp";
import GabrielImg from "../assets/gabriel.webp";
import JosephImg from "../assets/joseph.webp";
import TimothyImg from "../assets/timothy.webp";

const anggota2 = () => {
  const a = [
    {
      nama: "Boltbert",
      jabatan: "Unity Developer",
      keterangan:
        "Boltbert brings the game to life—literally. As the Unity developer, he transforms design and code into an interactive experience that players can touch, see, and feel. He crafts the gameplay mechanics, visual effects, and player controls that define how the world behaves and responds. His expertise turns ideas into a fully playable reality.",
      link: "https://boltbert.grooths.com/",
      profil: BoltbertImg,
    },
    {
      nama: "Glenndovin",
      jabatan: "Designer",
      keterangan:
        "Glenndovin is the visionary who shapes the world’s aesthetics. From UI layout to environment concept art, he ensures that everything not only looks beautiful but also feels intuitive. His designs create the first impression and the lasting emotional tone of the game, guiding players visually and emotionally through the experience.",
      link: "https://gln.grooths.com/",
      profil: GlendovinnImg,
    },
    {
      nama: "Gabriel",
      jabatan: "Music Engineer",
      keterangan:
        "Gabriel is the soul of the project. Through melodies and soundscapes, he evokes emotion, tension, and wonder. His compositions breathe life into every scene—from epic battles to quiet reflection. The world wouldn’t feel the same without his music guiding the player’s heart through every moment.",
      link: "",
      profil: GabrielImg,
    },
    {
      nama: "Joseph",
      jabatan: "Frontend Web Developer",
      keterangan:
        "Joseph is the mastermind behind this website. He designed the platform that serves as a bridge between the development team and the players, ensuring seamless communication. Additionally, he writes the lore that immerses players deeply into the world he has created, weaving stories that enhance their experience and connection to the game.",
      link: "",
      profil: JosephImg,
    },
    {
      nama: "Timothy",
      jabatan: "Backend Web Developer",
      keterangan:
        "Timothy is the silent force powering everything behind the scenes. He builds and maintains the core systems that keep the game running smoothly, ensuring stability, performance, and security. From user authentication to database optimization, his code forms the invisible backbone of the entire experience. Without his work, none of it would function as intended.",
      link: "",
      profil: TimothyImg,
    },
  ];
  return a.map((anggota, index) => (
    <AnimatedContent
      key={index}
      distance={60}
      direction="vertikal"
      reverse={false}
      duration={0.8}
      ease="bounce.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1.1}
      threshold={0.2}
      delay={0.2}
    >
      <BorderBox
        className="w-[85.7%] max-xl:w-[93vw] max-md:h-[44vh] h-[60vh] lg:h-[37vw] flex flex-col p-[1vw]"
      >
        <div className="flex flex-col h-[90%] max-md:h-[85%] justify-around max-xl:items-center max-md:gap-[32px]">
          <div className="top-20 w-[39.5vw] max-xl:w-[85%] flex flex-col gap-[40px] max-md:gap-[16px] lg:gap-[26px]">
            <div className="text-left self-start flex flex-row items-center justify-center gap-[20px] max-md:gap-[6px]">
              <img
                src={anggota.profil}
                alt={anggota.nama}
                className="w-[5.23vw] max-xl:w-[58px] max-xl:h-[58px] h-[5.23vw] lg:h-[68px] lg:w-[68px] rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h2 className="text-[2.89vw] max-xl:text-[26px] font-bold lg:text-[32px]">
                  {anggota.nama}
                </h2>
                <h3 className="text-[1.93vw] max-xl:text-[16px] lg:text-[20px]">
                  {anggota.jabatan}
                </h3>
              </div>
            </div>
            <p className="text-[1.2vw] max-xl:text-[12px] font-400 mt-2 lg:text-[16px]">
              {anggota.keterangan}
            </p>
          </div>
          <a href={anggota.link}>
            <button className="w-[39.5vw] h-[4.5vw] bg-[#3A86FE] max-xl:w-[77vw] max-md:h-[9vw] max-md:rounded-[6vw] rounded-[1.5vw] text-[white] lg:text-[24px] cursor-pointer">
              Open Portofolio
            </button>
          </a>
        </div>
      </BorderBox>
    </AnimatedContent>
  ));
};

export const Anggota = () => {
  return (
    <div className="w-full flex xl:justify-center">
      <div className="max-md:max-w-[100vw] max-md:w-[100vw] max-w-[93vw] w-[93vw]">
        <h1 className="text-600 font-semibold text-[48px] max-md:text-[32px] font-poppins text-start text-[#3A86FE] mb-[20px] pl-[3.5vw]">
          Our Member
        </h1>

        <div
          className="
            w-screen
            max-xl:place-items-center
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-[4vw]
            max-xl:gap-[6vw]
            pt-[5vh]
            pb-[20vh]
            max-xl:grid-cols-1
          "
          style={{
            ["--tw-grid-template"]: "repeat(auto-fill, minmax(45.5vw, 1fr))",
          }}
        >
          {anggota2()}
        </div>
      </div>
    </div>
  );
};
