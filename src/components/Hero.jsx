import React, { useState, useEffect } from "react";
import hero from "../assets/Images/home.png";

const Hero = () => {
  const fullText =
    "Discover exciting projects, insightful blogs, and valuable resources designed for developers and tech enthusiasts.";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) clearInterval(interval);
    }, 50); // Adjust speed of typing effect

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="text-white bg-cover bg-left min-h-screen flex items-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="w-full px-4 md:w-[70vw] lg:w-[50vw] xl:w-[40vw] ml-auto md:ml-[10vw] flex flex-col items-center text-left">
        
        {/* Indented Text Effect Using Flex */}
        <div className="flex flex-col space-y-2 md:space-y-3">
          <h4 className="text-xl md:text-2xl lg:text-3xl">
            I'm Ravi Patel
          </h4>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold pl-6 md:pl-10 lg:pl-12">
            Welcome
          </h2>
          <h4 className="text-xl md:text-2xl lg:text-3xl pl-16 lg:pl-40  md:pl-28">
            to my Portfolio site.
          </h4>
        </div>

        {/* Typing effect paragraph */}
        <p className="text-lg md:text-xl mt-6 w-4/5">{text}</p>
      </div>
    </header>
  );
};

export default Hero;
