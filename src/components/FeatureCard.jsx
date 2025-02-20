import React from "react";

const FeatureCard = ({ heading, text, image }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center m-5"
      style={{ height: "50vh"}}
    >
      <img
        src={image}
        alt="Feature"
        className="w-full h-1/2 object-cover rounded-md"
      />
      <h3 className="text-xl font-bold mt-4">{heading}</h3>
      <p className="text-gray-600 text-center mt-2">{text}</p>
    </div>
  );
};

export default FeatureCard;
