import React from 'react';
import Hero from "../components/Hero"
import FeatureRow from '../components/FeatureRow';


const Home = () => {
  return (
    <div>

      <Hero></Hero>

      <FeatureRow></FeatureRow>
     
      {/* Call to Action Section */}
     
      <section className="bg-blue-500 text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-4">
            Discover a world of knowledge and connect with like-minded individuals.
          </p>
          <button className="bg-white text-blue-500 px-6 py-2 rounded-lg shadow-md hover:bg-gray-100">
            Join Us Now
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default Home;