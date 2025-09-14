import { useEffect, useState } from "react";
import { BorderBox } from "./box";
import AnimatedContent from '../AnimatedContent/AnimatedContent'

const NewestNews = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/news/latest")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data);
        console.log(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch news:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
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
      <BorderBox className="w-[93vw] h-[93vh] m-4 flex items-center p-[3vw]">
        Loading...
      </BorderBox></AnimatedContent>
    );
  }

  if (!news) {
    return (
                <AnimatedContent

        distance={130}

        direction="vertikal"

        reverse={false}

        duration={1.2}

        ease="bounce.out"

        initialOpacity={0.2}

        animateOpacity

        scale={1.1}

        threshold={0.2}

        delay={0.2}

      >
      <BorderBox className="w-[93vw] h-[93vh] m-4 flex items-center p-[3vw]">
        No news found.
      </BorderBox></AnimatedContent>
    );
  }

  return (
              <AnimatedContent

        distance={130}

        direction="vertikal"

        reverse={false}

        duration={1.2}

        ease="bounce.out"

        initialOpacity={0.2}

        animateOpacity

        scale={1.1}

        threshold={0.2}

        delay={0.2}

      >
    <BorderBox className="w-[93vw] h-[53vh] m-4 flex flex-col p-[3vw] justify-start gap-[3vw]">
      <div className="bg-[#3A86FE] rounded-t-3xl w-full px-[2vw] py-[1vw]">
        <h2 className="text-[2.088vw] text-white font-semibold">
          {new Date(news.updatedAt).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </h2>
      </div>
      <div className=" flex flex-col px-[7vh] justify-start items-start w-full">
        <h2 className="text-[2.569vw]">Grooth Studio Team: </h2>
        <p className="text-[min(2.7vw,15px)] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[15px] leading-relaxed">
          {news.description}
        </p>
      </div>
    </BorderBox></AnimatedContent>
  );
};

export const News = () => {
  return (
    <div className="w-[100vw] h-fit mt-20 p-auto flex flex-col">
      <h1 className="text-600 font-semibold text-[48px] max-md:text-[32px] font-poppins text-start self-start text-[#3A86FE] mb-[20px] pl-[3.5vw]">
        News
      </h1>
      <div className="flex flex-wrap gap-[2vw] pt-[5vh] pb-[20vh] justify-center">
        <NewestNews />
      </div>
    </div>
  );
};
