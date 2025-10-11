import { useState } from "react";
import { BorderBox } from "./box";
import FadeContent from './FadeContent'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the latest project from Grooth Studio?",
      answer: "Currently, we are still developing game with the battle theme",
    },
    {
      question: "When was Grooth Studio founded?",
      answer: "Grooth Studio was founded on April 19, 2024.",
    },
    {
      question: "What type of games does Grooth Studio focus on?",
      answer:   "We focus on developing innovative games.",
    },
  ];

  const answerClass =
    "pl-17 max-md:pl-6 py-4 pr-4 w-[86vw] bg-[#3A86FE] text-white max-md:text-[14px] max-md:font-[500]";

  return (
    <div className="w-[100vw] h-fit mt-20 p-auto flex flex-col">
      <h1 className="text-600 font-semibold text-[48px] max-md:text-[24px] font-poppins text-start self-start text-[#3A86FE] mb-[20px] pl-[3.5vw]">
        FAQ
      </h1>
      <div className="flex flex-wrap gap-[2vw] pt-[5vh] pb-[20vh] justify-center">
      <FadeContent blur={true} duration={700} easing="ease-out" initialOpacity={0} className="w-[100vw] h-fit max-md:h-[80vh] m-0 flex items-center justify-center">
          <BorderBox className="w-[93vw] h-[70vh] m-4 py-[8vh] px-[3vw] justify-around items-start gap-[1vw] flex-col">
            {faqs.map((faq, index) => (
              <div key={index} className="flex flex-col gap-y-2">
                <div
                  className="p-4 hover:shadow-md w-[86vw] max-md:text-[14px] max-md:font-[500] cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </div>
                <div
                  className={`
                    ${answerClass}
                    transition-all duration-500 ease-in-out
                    overflow-hidden
                    ${openIndex === index ? "max-h-40 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
                  `}
                >
                  &gt; {faq.answer}
                </div>
              </div>
            ))}
          </BorderBox>
        </FadeContent>
      </div>
    </div>
  );
};
