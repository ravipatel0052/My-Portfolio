import React, { useState, useEffect } from "react";
import hero from '../assets/Images/home.png'

const Hero = () => {
  const fullText =
    "Discover exciting projects, insightful blogs, and valuable resources designed for developers and tech enthusiasts.";
  const [text, setText] = useState("");
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setShowButtons(true); // Show buttons after typing is complete
      }
    }, 50); // Adjust speed of typing effect

    return () => clearInterval(interval);
  }, []);

  return (
      <header className="text-white bg-cover bg-center min-h-[100vh] flex items-center"
      style={{ backgroundImage: `url(${hero})` }}>
        <div className="w-[40vw] ml-[10vw] flex flex-col items-center lg:items-start text-center lg:text-left">
          <h4 className="text-xl flex items-center max-w-sm">I'm Ravi Patel</h4>
          <h2 className="text-4xl lg:text-6xl font-bold">Welcome</h2>
          <h4 className="text-xl flex items-center max-w-sm mb-4 self-center">
             to my Portfolio site.
          </h4>

        {/* Typing effect paragraph */}
          <p className="text-lg lg:text-xl mb-6 min-h-[50px]">{text}</p>

        {/* Show buttons only after typing completes */}
          {showButtons && (
            <div className="space-x-4">
              <button className="bg-white text-blue-500 px-6 py-2 rounded-lg shadow-md hover:bg-gray-100">
                  Get Started
              </button>
              <button className="bg-blue-700 px-6 py-2 rounded-lg shadow-md hover:bg-blue-800">
                 Learn More
              </button>
            </div>
          )}
        </div>
      </header>
  );
};

export default Hero;
