import { BorderBox } from "./box";
import FallingText from './FallingText/FallingText';
import Ig from "../assets/Vector.svg"
import Ig2 from "../assets/Vector2.svg"

export const Donator = ({scrollToSection}) => {
    return (
        <div className="w-[100vw] h-fit m-0 p-0 flex flex-col font-600 text-semibold font-[48px] items-center justify-center">
            <div className="w-[93%] h-[100%] flex flex-col items-center justify-center gap-[50px]">
            <h1 className="text-600 font-semibold text-[48px] max-md:text-[24px] font-poppins text-start self-start text-[#3A86FE]">Our Donator</h1>
                <BorderBox className="w-[100%] h-[100vh]">
                    <FallingText
                    text={`Fredrick Grookey Alvin Lim Jimmy Denny Christine Welly Steven Chen`}
                    highlightWords={["Fredrick", "Grookey", "Alvin Lim", "Jimmy", "Denny", "Christine", "Welly", "Steven Chen"]}
                    highlightClass="highlighted"
                    trigger="scroll"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.3}
                    fontSize="24px"
                    mouseConstraintStiffness={0.6}
                    />
                </BorderBox>
                <div className="w-screen h-[70vh] bg-blue-500 flex flex-col items-center max-xl:hidden relative">
                    <div className="h-[33vh] flex flex-row w-[90vw] justify-around pt-25">
                        <div>
                            <h1 className="font-[700] text-[24px] text-white">Quick Access</h1>
                            <div class="grid grid-cols-2 gap-y-2 gap-x-10 bg-blue-500 pt-5 rounded">
                                <a
                                href="#"
                                className="text-white text-[14px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("Home");
                                }}
                                >
                                Home
                                </a>

                                <a
                                href="#"
                                className="text-white text-[14px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("FAQ");
                                }}
                                >
                                FAQ
                                </a>

                                <a
                                href="#"
                                className="text-white text-[14px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("News");
                                }}
                                >
                                News
                                </a>

                                <a
                                href="#"
                                className="text-white text-[14px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("Our Games");
                                }}
                                >
                                Our Games
                                </a>

                                <a
                                href="#"
                                className="text-white text-[14px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("Our Member");
                                }}
                                >
                                Our Member
                                </a>

                                <a
                                href="#"
                                className="text-white text-[14px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("Our Donator");
                                }}
                                >
                                Our Donator
                                </a>

                            </div>

                        </div>
                        <div>                            
                            <h1 className="font-[700] text-[24px] text-white">Social Media</h1>
                            <div className="flex flex-row text-poppins h-[30px] max-md:text-[24px] max-md:h-[24px] text-[24px] max-md:text-[24px] gap-[10px] items-center justify-center text-[#3A86FE] self-start">
                            <a href="https://www.instagram.com/grooth_studio?igsh=MXVpNjhsaDdvdzJ3MA==" className="flex flex-row gap-[10px] items-center pt-3">
                                <img src={Ig2} alt="" className="max-md:h-[16px]"/>
                                <p className="max-md:text-[26px] lg:text-[16px] text-white">grooth_studio</p></a>
                            </div>
                        </div>
                        <div className="w-[360px]">
                            <div>
                                <p className="font-bold text-white text-[10px] p-0 m-0">Let’s make something great together.</p>
                                <a href="mailto:studiogrooth@gmail.com"><h1 className="font-bold text-white text-[24px]">studiogrooth@gmail.com</h1></a>
                            </div>
                            <hr className="text-white bg-white h-[4px] mt-2" />
                            <p className="text-[12px] text-right text-white pt-2">© 2025 Grooth Studio. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="h-[270px] absolute bottom-0">
                        <h1 className="text-[250px] font-[800] text-white">GROOTHS</h1>
                    </div>
                </div>
                <div className="w-screen h-[65vh] bg-blue-500 flex flex-col items-center max-md:hidden xl:hidden relative">
                    <div className="h-[33vh] flex flex-row w-[90vw] justify-around pt-15">
                        <div>
                            <h1 className="font-[700] text-[20px] text-white">Quick Access</h1>
                            <div class="grid grid-cols-2 gap-y-2 gap-x-10 bg-blue-500 pt-3 rounded">
                                <a
                                href="#"
                                className="text-white text-[14px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("Home");
                                }}
                                >
                                Home
                                </a>

                                <a
                                href="#"
                                className="text-white text-[14px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("FAQ");
                                }}
                                >
                                FAQ
                                </a>

                                <a
                                href="#"
                                className="text-white text-[14px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("News");
                                }}
                                >
                                News
                                </a>

                                <a
                                href="#"
                                className="text-white text-[14px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("Our Games");
                                }}
                                >
                                Our Games
                                </a>

                                <a
                                href="#"
                                className="text-white text-[14px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("Our Member");
                                }}
                                >
                                Our Member
                                </a>

                                <a
                                href="#"
                                className="text-white text-[14px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("Our Donator");
                                }}
                                >
                                Our Donator
                                </a>

                            </div>

                        </div>
                        <div>                            
                            <h1 className="font-[700] text-[20px] text-white">Social Media</h1>
                            <div className="flex flex-row text-poppins h-[30px] max-md:text-[24px] max-md:h-[24px] text-[24px] max-md:text-[24px] gap-[10px] items-center justify-center text-[#3A86FE] self-start">
                                <a href="https://www.instagram.com/grooth_studio?igsh=MXVpNjhsaDdvdzJ3MA==" className="flex flex-row gap-[10px] items-center pt-3">

                                <img src={Ig2} alt="" className="md:h-[14px]"/>
                                <p className="max-md:text-[26px] md:text-[14px] text-white">grooth_studio</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="w-[360px]">
                            <div>
                                <p className="font-bold text-white text-[10px] p-0 m-0">Let’s make something great together.</p>
                                <a href="mailto:studiogrooth@gmail.com"><h1 className="font-bold text-white text-[20px]">studiogrooth@gmail.com</h1></a>
                            </div>
                            <hr className="text-white bg-white h-[4px] mt-2" />
                            <p className="text-[10px] text-right text-white pt-2">© 2025 Grooth Studio. All rights reserved.</p>
                        </div>
                    <div className="h-[160px] absolute bottom-0">
                        <h1 className="text-[150px] font-[800] text-white">GROOTHS</h1>
                    </div>
                </div>
          <div className="w-screen h-[55vh] bg-blue-500 flex flex-col items-center md:hidden xl:hidden relative">
            <div className="w-[90vw] grid grid-cols-2 gap-6 pt-20 pb-10">

                <div>
                <h1 className="font-[700] text-[16px] text-white">Quick Access</h1>
                <div className="grid grid-cols-2 gap-y-2 gap-x-5 pt-3">

                    <a
                    href="#"
                    className="text-white text-[12px]"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("Home");
                    }}
                    >
                    Home
                    </a>

                    <a
                    href="#"
                    className="text-white text-[12px]"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("FAQ");
                    }}
                    >
                    FAQ
                    </a>

                    <a
                    href="#"
                    className="text-white text-[12px]"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("News");
                    }}
                    >
                    News
                    </a>

                    <a
                    href="#"
                    className="text-white text-[12px]"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("Our Games");
                    }}
                    >
                    Our Games
                    </a>

                    <a
                    href="#"
                    className="text-white text-[12px]"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("Our Member");
                    }}
                    >
                    Our Member
                    </a>

                    <a
                    href="#"
                    className="text-white text-[12px]"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("Our Donator");
                    }}
                    >
                    Our Donator
                    </a>

                </div>
                </div>

                <div className="justify-self-end">
                <h1 className="font-[700] text-[16px] text-white">Social Media</h1>

                <div>
                    <a href="https://www.instagram.com/grooth_studio?igsh=MXVpNjhsaDdvdzJ3MA==" className="flex flex-row gap-[10px] items-center pt-3">
                    <img src={Ig2} alt="" className="h-[18px]" />
                    <p className="text-[12px] text-white">grooth_studio</p></a>
                </div>
                </div>
            </div>

                    <div className="w-[300px] self-center">
                            <div>
                                <p className="font-bold text-white text-[10px] p-0 m-0">Let’s make something great together.</p>
                                <a href="mailto:studiogrooth@gmail.com"><h1 className="font-bold text-white text-[20px]">studiogrooth@gmail.com</h1></a>
                            </div>
                            <hr className="text-white bg-white h-[4px] mt-2" />
                            <p className="text-[10px] text-right text-white pt-2">© 2025 Grooth Studio. All rights reserved.</p>
                        </div>
                    <div className="h-fit absolute bottom-0">
                        <h1 className="text-[18vw] font-[800] text-white">GROOTHS</h1>
                    </div>
            </div>
            </div>
    </div>)}

    

