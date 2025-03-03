import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-600 leading-relaxed">
          Hi, I'm <span className="font-semibold text-gray-900">Ravi Patel</span>, a passionate
          <span className="text-blue-600"> Full-Stack Developer</span> specializing in Java, React, and MongoDB. I love
          building scalable web applications and solving complex problems with clean and efficient code.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Skills</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Java, Spring Boot</li>
          <li>React, JavaScript, TypeScript</li>
          <li>MongoDB, Express.js, Node.js</li>
          <li>REST APIs, Microservices</li>
          <li>Git, Docker, CI/CD</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Experience</h2>
        <p className="text-gray-600">I have worked on multiple projects, including an Employee Management System, a Dynamic User Availability and Event Scheduling System, and an ATM simulation project.</p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-3">Contact</h2>
        <p className="text-gray-600">Feel free to reach out to me via email at <span className="font-semibold">ravi.patel@example.com</span> or connect on LinkedIn.</p>
      </div>
    </div>
  );
};

export default About;