import { BorderBox } from "./box";
import OurGamesLogo from "../assets/Frame 156.webp";
import FadeContent from './FadeContent'

export const Games = () => {
  return (
    <div className="w-[100vw] h-fit mt-20 p-auto flex flex-col">
      <h1 className="text-600 font-semibold text-[48px] max-md:text-[24px] font-poppins text-start self-start text-[#3A86FE] mb-[20px] pl-[3.5vw]">
        Our Games
      </h1>
      <div className="flex flex-wrap gap-[2vw] pt-[5vh] pb-[20vh] max-md:pb-[10vh] justify-center">
      <FadeContent blur={true} duration={700} easing="ease-out" initialOpacity={0} className="w-[100vw] h-fit max-md:h-[80vh] m-0 flex items-center justify-center">
        <BorderBox className="w-[93vw] h-[40vh] max-md:h-[80vh] m-4">
          <div className="flex p-[3vw] justify-start gap-[3vw] max-md:flex-col">
          <img
            className="h-[30vh] max-md:w-[30vw] max-md:h-auto self-center"
            src={OurGamesLogo}
          />
          <div className="flex flex-col justify-around items-center h-[34vh] max-md:h-[38vh]">
            <div className="flex flex-col items-start gap-y-7 max-lg:gap-y-4">
              <h1 className="font-bold mb-10">Bladeable</h1>
              <p className="font-semibold max-md:text-xs max-lg:text-sm">
                Bladeable is a fast-paced 2D action indie game that challenges players to master razor-sharp reflexes, fluid combat, and momentum-driven movement as they slash through enemies and overcome dynamic obstacles. With its clean visual style, responsive controls, and satisfying gameplay loop, Bladeable delivers an adrenaline-charged experience that’s both accessible and deeply engaging—inviting players to sharpen their skills, push their limits, and become Bladeable.
              </p>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.groothstudio.app" className="text-white font-semibold w-full">
            <button className="px-6 py-1 bg-[#3A86FE] text-white font-semibold w-full">
              Download now!
            </button></a>
          </div>
          </div>
        </BorderBox>
        </FadeContent>
      </div>
    </div>
  );
};
