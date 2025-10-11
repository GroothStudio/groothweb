import { BorderBox } from "./box";
import OurGamesLogo from "../assets/Our Games Logo.svg";
import FadeContent from './FadeContent'

export const Games = () => {
  return (
    <div className="w-[100vw] h-fit mt-20 p-auto flex flex-col">
      <h1 className="text-600 font-semibold text-[48px] max-md:text-[24px] font-poppins text-start self-start text-[#3A86FE] mb-[20px] pl-[3.5vw]">
        Our Games
      </h1>
      <div className="flex flex-wrap gap-[2vw] pt-[5vh] pb-[20vh] justify-center">
      <FadeContent blur={true} duration={700} easing="ease-out" initialOpacity={0} className="w-[100vw] h-fit max-md:h-[80vh] m-0 flex items-center justify-center">
        <BorderBox className="w-[93vw] h-[40vh] max-md:h-[80vh] m-4">
          <div className="flex p-[3vw] justify-start gap-[3vw] max-md:flex-col">
          <img
            className="h-[30vh] max-md:h-[35vh] max-lg:h-[32vh]"
            src={OurGamesLogo}
          />
          <div className="flex flex-col justify-around items-center h-[34vh] max-md:h-[38vh]">
            <div className="flex flex-col items-start gap-y-7 max-lg:gap-y-4">
              <h2 className="font-bold mb-10">Bladeable [Beta Test]</h2>
              <p className="font-semibold max-md:text-xs max-lg:text-sm">
                Our latest game is in the final stages of development and will
                be available on the Play Store soon. We've put a lot of time,
                ideas, and passion into creating a fun, immersive, and
                unforgettable gaming experience. While the title is still under
                wraps, we're confident it will bring a fun new adventure to
                players around the world.
              </p>
            </div>
            <button className="px-6 py-1 bg-[#3A86FE] text-white font-semibold w-full">
              Join Beta Test
            </button>
          </div>
          </div>
        </BorderBox>
        </FadeContent>
      </div>
    </div>
  );
};
