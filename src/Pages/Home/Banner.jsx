import React from "react";
import Lottie from "lottie-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import habit1 from "../../assets/Lottie/habit1.json";
import habit2 from "../../assets/Lottie/habit2.json";
import habit3 from "../../assets/Lottie/habit3.json";


const Banner = () => {
  const bannerData = [
    {
      animation: habit1,
      title: "Achieve Your Habits",
      desc: "Track your daily progress and stay motivated.",
    },
    {
      animation: habit2,
      title: "Boost Your Target",
      desc: "Stay focused and get more done every day.",
    },
    {
      animation: habit3,
      title: "Reach Success",
      desc: "Turn your habits into real achievements.",
    },
  ];

  return (
    <div className="mb-8 md:mb-12">
      <Carousel
        autoPlay
        infiniteLoop
        interval={5000}
        showThumbs={false}
        showStatus={false}
        swipeable
        showIndicators={true}
      >
        {bannerData.map((slide, index) => (
          <div key={index} className="relative ">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center h-[250px] md:h-[400px]">
              {/* LEFT SIDE (Text) */}
              <div className="z-10 text-left md:mt-0 mt-4">
                <h1 className="text-3xl md:text-5xl font-bold md:text-left text-center text-white md:mb-4 md:px-0 px-4">
                  {slide.title}
                </h1>

                <p className="text-gray-200 md:mb-6 mb-3 md:text-lg text-sm md:text-left text-center md:px-0 px-4 mt-2">
                  {slide.desc}
                </p>
              </div>

              {/* RIGHT SIDE (Lottie) */}
              <div className="z-10">
                <Lottie
                  animationData={slide.animation}
                  loop={true}
                  className="w-full pb-20 md:pb-0 h-[200px] md:h-[380px]"
                />
              </div>
            </div>

            {/* BACKGROUND OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-green-500/50 to-transparent"></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
