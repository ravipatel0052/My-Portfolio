import React from 'react';

const Form = () => {
  return (
    <div className="min-h-screen mt-6 flex items-center justify-center">
  <div className="bg-[#A9B5DF] shadow-md rounded-lg p-8 w-full max-w-md">
    <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
      Resume Download Form
    </h1>
    <form className="space-y-4">
      {/* Name Input */}
      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your full name"
          required
        />
      </div>

      {/* Email Input */}
      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Phone Number Input */}
      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your phone number"
          required
        />
      </div>

      {/* Reason for Downloading */}
      <div>
        <label className="block text-gray-700 font-medium mb-1" htmlFor="reason">
          Reason for Downloading <span className="text-red-500">*</span>
        </label>
        <select
          id="reason"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a reason</option>
          <option value="job_opportunity">Job Opportunity</option>
          <option value="networking">Networking</option>
          <option value="reference">Reference</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none"
      >
        Download Resume
      </button>
    </form>
  </div>
</div>

  );
};

export default Form;
