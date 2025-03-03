import React from 'react';
import ProjectCard from "../components/Card";
import hero from "../assets/Images/home.png";

const projects = [
  { id: 1, heading: "Project-1", text: "This is my first project...", image: hero },
  { id: 2, heading: "Project-2", text: "This is my second project...", image: hero },
  { id: 3, heading: "Project-3", text: "This is my third project...", image: hero },
  { id: 4, heading: "Project-4", text: "This is my fourth project...", image: hero },
  { id: 4, heading: "Project-4", text: "This is my fourth project...", image: hero },
  { id: 4, heading: "Project-4", text: "This is my fourth project...", image: hero },
  { id: 4, heading: "Project-4", text: "This is my fourth project...", image: hero },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            heading={project.heading} 
            text={project.text} 
            image={project.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;