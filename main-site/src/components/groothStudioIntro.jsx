import { BorderBox } from "./box";
import Ikan from "../assets/Group 14.svg";
import Logo from "../assets/logo.svg";
import FadeContent from './FadeContent'

export const GroothStudioIntro = () => {
  return (
      <FadeContent blur={true} duration={700} easing="ease-out" initialOpacity={0} className="w-[100vw] h-[100vh] max-md:h-[80vh] m-0 flex items-center justify-center">
        <BorderBox className="w-[93%] h-[93vh] max-md:h-[70vh] relative">
          <a href="http://grooths.com" className="absolute top-2 left-2 cursor-pointer w-fit h-fit rounded-xl max-md:hidden"><img src={Logo} alt="" className="cursor-pointer"/></a>
          <div className="max-h-[30%] text-center flex flex-col max-md:gap-[45px] items-center justify-center relative">
            <img src={Ikan} alt="Grooth Studio" className="w-[70%] max-md:w-[100%]"/>
            <p className="mt-10 max-md: text-left text-base text-[500] text-[20.5px] max-md:text-[14px] leading-relaxed font-normal w-[73%] max-md:w-[90%]">
              Grooth Studio is an indie game development group founded on April
              19, 2024. We focus on creating and developing fun and innovative 2D
              games, aiming to offer players a unique and enjoyable experience.
              Our team consists of talented and dedicated members, each with
              specific skills, ensuring high quality game production.
            </p>
          </div>
          <p className="text-[1.25vw] max-md:text-[3vw] absolute right-[2%] bottom-[2%] font-bold">
            ©{new Date().getFullYear()} Grooth Studio. All rights reserved
          </p>
        </BorderBox>
      </FadeContent>
  );
};
