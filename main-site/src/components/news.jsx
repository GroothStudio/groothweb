import { useEffect, useState } from "react";
import { BorderBox } from "./box";
import FadeContent from './FadeContent'

const NewestNews = () => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/GroothStudio/groothweb/refs/heads/main/news-db.txt")
      .then((res) => res.json())
      .then((data) => {
        const sortedNews = data.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
        console.log(sortedNews)
        const latestNews = sortedNews[0]

        setNews(latestNews)
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch news:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <FadeContent blur={true} duration={700} easing="ease-out" initialOpacity={0} className="w-[100vw] h-[100vh] max-md:h-[80vh] m-0 flex items-center justify-center">

      <BorderBox className="w-[93vw] h-[93vh] max-md:h-[70vh] m-4 flex items-center p-[3vw]">
        Loading...
      </BorderBox></FadeContent>
    );
  }

  if (!news) {
    return (
      <FadeContent blur={true} duration={700} easing="ease-out" initialOpacity={0} className="w-[100vw] h-[100vh] max-md:h-[80vh] m-0 flex items-center justify-center">
      <BorderBox className="w-[93vw] h-[93vh] max-md:h-[70vh] m-4 flex items-center p-[3vw]">
        No news found.
      </BorderBox></FadeContent>
    );
  }

  return (
  <FadeContent blur={true} duration={700} easing="ease-out" initialOpacity={0} className="w-[100vw] h-[93vh] max-md:h-[70vh] m-0 flex items-center justify-center">
    <BorderBox className="w-[93vw] h-[70vh] m-4 flex flex-col p-[3vw] justify-start gap-[3vw]">
      <div className="bg-[#3A86FE] rounded-t-3xl w-full px-[2vw] py-[1vw]">
        <h2 className="text-[2.088vw] text-white font-semibold">
          {news.title}
        </h2>
      </div>
      <div className=" flex flex-col px-[7vh] justify-start items-start w-full">
        <h2 className="text-[2.569vw]">Grooth Studio Team: </h2>
        <p className="text-[min(2.7vw,15px)] sm:text-[15px] md:text-[16px] lg:text-[15px] xl:text-[15px] leading-relaxed">
          {news.description}
        </p>
      </div>
    </BorderBox></FadeContent>
  );
};

export const News = () => {
  return (
    <div className="w-[100vw] h-fit mt-20 p-auto flex flex-col">
      <h1 className="text-600 font-semibold text-[48px] max-md:text-[24px] font-poppins text-start self-start text-[#3A86FE] mb-[20px] pl-[3.5vw]">
        News
      </h1>
      <div className="flex flex-wrap gap-[2vw] pt-[5vh] max-md:pt-[0vh] pb-[20vh] max-md:pb-[10vh] justify-center">
        <NewestNews />
      </div>
    </div>
  );
};
