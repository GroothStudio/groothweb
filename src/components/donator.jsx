import { BorderBox } from "./box";
import FallingText from './FallingText/FallingText';
import Ig from "../assets/Vector.svg"

export const Donator = () => {
    return (
        <div className="w-[100vw] max-h-[100vh] h-[100vh] m-0 p-auto flex flex-col font-600 text-semibold font-[48px] items-center justify-center">
            <div className="w-[93%] h-[100%] flex flex-col items-center justify-center gap-[50px]">
            <h1 className="text-600 font-semibold text-[48px] max-md:text-[24px] font-poppins text-start self-start text-[#3A86FE]">Our Donator</h1>
                <BorderBox className="w-[100%] h-[73vh]">
                    <FallingText
                    text={`Fredrick Grookey Alvin Lim Jimmy Denny Christine Welly`}
                    highlightWords={["Fredrick", "Grookey", "Alvin Lim", "Jimmy", "Denny", "Christine", "Welly"]}
                    highlightClass="highlighted"
                    trigger="hover"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.3}
                    fontSize="24px"
                    mouseConstraintStiffness={0.6}
                    />
                </BorderBox>
                <div className="flex flex-row text-poppins h-[30px] max-md:text-[24px] max-md:h-[24px] text-[24px] max-md:text-[24px] gap-[10px] items-center justify-center text-[#3A86FE] self-start font-semibold">
                    <img src={Ig} alt="" className="max-md:h-[24px]"/>
                    <p className="max-md:text-[20px]">grooth_studio</p>
                </div>
            </div>
    </div>)}