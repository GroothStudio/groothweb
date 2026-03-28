import { BorderBox } from "./box";
import Game1 from "../assets/Frame 156.webp";
import Game2 from "../assets/Slide 4_3 - 25.png";
import FadeContent from "./FadeContent";

export const Games = () => {

  const games = [
    {
      title: "Bladeable",
      image: Game1,
      description:
        "Bladeable is a fast-paced 2D action indie game that challenges players to master razor-sharp reflexes, fluid combat, and momentum-driven movement as they slash through enemies and overcome dynamic obstacles. With its clean visual style, responsive controls, and satisfying gameplay loop, Bladeable delivers an adrenaline-charged experience that’s both accessible and deeply engaging—inviting players to sharpen their skills, push their limits, and become Bladeable.",
      link: "https://play.google.com/store/apps/details?id=com.groothstudio.app",
    },
    {
      title: "Bladeable Escape The Universe",
      image: Game2,
      description:
        "Run as far as you can in this fast-paced 2D endless runner set in a universe on the brink of collapse. There are no coins and no distractions — only your skill, timing, and reflexes stand between survival and extinction.",
      link: "https://play.google.com/store/apps/details?id=com.groothstudio.BladeableEscapeTheUniverse",
    },
  ];

  return (
    <div className="w-[100vw] h-fit mt-20 p-auto flex flex-col">
      <h1 className="text-600 font-semibold xl:text-[48px] md:text-[36px] max-md:text-[24px] font-poppins text-start self-start text-[#3A86FE] mb-[20px] pl-[3.5vw]">
        Our Games
      </h1>

      <div className="flex flex-wrap gap-[1.5vw] pt-[5vh] max-2xl:pb-[5vh] pb-[10vh] max-lg:pb-[5vh] justify-center">
        {games.map((game, index) => (
          <FadeContent
            key={index}
            blur={true}
            duration={700}
            easing="ease-out"
            initialOpacity={0}
            className="w-[100vw] h-fit m-0 flex items-center justify-center"
          >
            <BorderBox className="w-[93vw] h-[40vh] max-md:h-fit m-4">
              <div className="flex p-[3vw] justify-start gap-[3vw] max-md:flex-col">

                <img
                  className="h-[30vh] max-md:w-fit max-md:h-auto self-center"
                  src={game.image}
                  alt={game.title}
                />

                <div className="flex flex-col justify-around items-center h-[34vh] max-md:h-[38vh]">

                  <div className="flex flex-col items-start gap-y-7 max-lg:gap-y-4">
                    <h1 className="font-bold mb-10 text-[1.93vw] max-xl:text-[16px] lg:text-[20px]">
                      {game.title}
                    </h1>

                    <p className="font-[400] max-md:text-xs max-lg:text-sm text-[1.2vw] max-xl:text-[18px] max-md:text-[12px]">
                      {game.description}
                    </p>
                  </div>

                  <a href={game.link} className="text-white font-semibold w-full">
                    <button className="px-6 py-1 bg-[#3A86FE] text-white font-semibold w-full hover:shadow-md w-[86vw]">
                      Download now!
                    </button>
                  </a>

                </div>
              </div>
            </BorderBox>
          </FadeContent>
        ))}
      </div>
    </div>
  );
};
