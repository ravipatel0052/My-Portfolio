import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import hero from "../assets/Images/home.png";

const features = [
  { heading: "Code Snippets", text: "Access curated code snippets and solutions for various programming challenges.", image: hero },
  { heading: "Tech Blogs", text: "Stay updated with the latest trends in technology and development.", image: hero },
  { heading: "Community", text: "Join a vibrant community of like-minded developers and tech enthusiasts.", image: hero },
  { heading: "Workshops", text: "Participate in workshops to improve your coding skills.", image: hero },
  { heading: "Resources", text: "Get access to free learning resources and projects.", image: hero },
  { heading: "Networking", text: "Connect with industry professionals and mentors.", image: hero },
];

// Duplicate first 3 items at the end for seamless transition
const extendedFeatures = [...features, ...features.slice(0, 3)];

const FeatureRow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  // Instant reset when reaching the last duplicate slides
  useEffect(() => {
    if (currentIndex >= features.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 0); // Instantly reset without delay
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex]);

  return (
    <section className="container mx-auto px-6 py-16 min-h-[100vh]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Features</h2>

      <div className="relative w-full overflow-hidden">
        {/* Cards container */}
        <div
          className="flex"
          style={{
            width: "100%",
            transform: `translateX(-${(currentIndex * 100) / 3}%)`,
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {extendedFeatures.map((feature, index) => (
            <div key={index} className="flex-none w-[calc(34%)]">
              <FeatureCard heading={feature.heading} text={feature.text} image={feature.image} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots for card navigation */}
      <div className="flex justify-center gap-2 mt-10">
        {features.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex % features.length ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureRow;
