import React from "react";

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "John Doe",
    description: "An introduction to React Hooks and how they simplify state management in functional components.",
  },
  {
    id: 2,
    title: "Mastering JavaScript Closures",
    author: "Jane Smith",
    description: "A deep dive into closures in JavaScript and their real-world applications.",
  },
  {
    id: 3,
    title: "Getting Started with Node.js",
    author: "Alice Johnson",
    description: "Learn the basics of Node.js and how to build a simple web server.",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen mt-10 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blogs</h1>
      <div className="max-w-4xl mx-auto grid gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-sm text-gray-500">by {blog.author}</p>
            <p className="mt-2 text-gray-700">{blog.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;