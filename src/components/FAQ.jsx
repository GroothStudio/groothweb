import { useState } from "react";
import { BorderBox } from "./box";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const answerClass =
    "pl-17 max-md:pl-6 py-4 pr-4 hover:shadow-md w-[86vw] bg-[#3A86FE] text-white max-md:text-[14px] max-md:font-[500]";

  return (
    <div className="w-[100vw] h-fit mt-20 p-auto flex flex-col">
      <h1 className="text-600 font-semibold text-[48px] max-md:text-[32px] font-poppins text-start self-start text-[#3A86FE] mb-[20px] pl-[3.5vw]">
        FAQ
      </h1>
      <div className="flex flex-wrap gap-[2vw] pt-[5vh] pb-[20vh] justify-center">
              <AnimatedContent

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
          className={`w-[93vw] 
            ${
              openIndex !== null
                ? "h-[48vh] md:h-[44vh] max-md:h-[70vh]"
                : "h-[40vh] md:h-[36vh] max-md:h-[70vh]"
            }
            m-4 py-[8vh] px-[3vw] justify-around items-start gap-[1vw] flex-col`}
        >
          <div className="flex flex-col gap-y-4">
            <div
              className="p-4 hover:shadow-md w-[86vw] max-md:text-[14px] max-md:font-[500]"
              onClick={() => toggleFAQ(0)}
            >
              What is the latest project from Grooth Studio?
            </div>
            <div
              className={`${
                openIndex === 0 ? "block" : "hidden"
              } ${answerClass}`}
            >
              &gt; Currently, We are still developing with the battle theme
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div
              className="p-4 hover:shadow-md w-[86vw] max-md:text-[14px] max-md:font-[500]"
              onClick={() => toggleFAQ(1)}
            >
              What is the latest project from Grooth Studio?
            </div>
            <div
              className={`${
                openIndex === 1 ? "block" : "hidden"
              } ${answerClass}`}
            >
              &gt; We are still developing with the battle theme
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div
              className="p-4 hover:shadow-md w-[86vw] max-md:text-[14px] max-md:font-[500]"
              onClick={() => toggleFAQ(2)}
            >
              What is the latest project from Grooth Studio?
            </div>
            <div
              className={`${
                openIndex === 2 ? "block" : "hidden"
              } ${answerClass}`}
            >
              &gt; Currently, We are still developing with the battle theme
            </div>
          </div>
        </BorderBox>
        </AnimatedContent>
      </div>
    </div>
  );
};
