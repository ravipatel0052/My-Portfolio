import React, { useEffect, useState } from "react";
import FeatureCard from "./Card";
import codeSnippets from "../assets/Images/code.png";
import techBlogs from "../assets/Images/3.jpg";
import community from "../assets/Images/4.jpg";
import workshops from "../assets/Images/2.jpg";
import resources from "../assets/Images/6.jpg";
import networking from "../assets/Images/5.jpg";

const features = [
  { heading: "Code Snippets", text: "Access curated code snippets and solutions for various programming challenges.", image: codeSnippets},
  { heading: "Tech Blogs", text: "Stay updated with the latest trends in technology and development.", image: techBlogs },
  { heading: "Community", text: "Join a vibrant community of like-minded developers and tech enthusiasts.", image: community },
  { heading: "Workshops", text: "Participate in workshops to improve your coding skills.", image: workshops },
  { heading: "Resources", text: "Get access to free learning resources and projects.", image: resources },
  { heading: "Networking", text: "Connect with industry professionals and mentors.", image: networking },
];

const FeatureRow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(1);

  // Update the number of visible items based on screen size
  useEffect(() => {
    const updateItemsPerSlide = () => {
      let newItemsPerSlide = 1;
      if (window.innerWidth >= 1024) {
        newItemsPerSlide = 3; // Large screens
      } else if (window.innerWidth >= 768) {
        newItemsPerSlide = 2; // Medium screens
      }
      setItemsPerSlide(newItemsPerSlide);
      setTotalSlides(Math.ceil(features.length / newItemsPerSlide)); // Calculate total slides
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="container mx-auto px-6 py-16 min-h-[100vh]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Features</h2>

      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100)}%)`,
          }}
        >
          {features.concat(features).map((feature, index) => (
            <div
              key={index}
              className="px-2"
              style={{ minWidth: `${100 / itemsPerSlide}%` }}
            >
              <FeatureCard heading={feature.heading} text={feature.text} image={feature.image} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots for Manual Navigation */}
      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-500 scale-110" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureRow;
