import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen mt-6 flex flex-col items-center py-8">
      {/* Contact Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contacts</h1>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We’d love to hear from you! Please reach out to us via the contact details below or fill out the form.
          </p>
          <div className="space-y-4">
            <p>
              <strong>Phone:</strong> +91 7800285437
            </p>
            <p>
              <strong>Email:</strong> ravipatel1022001@gmail.com
            </p>
            <p>
              <strong>Address:</strong> New Ashok Nager, New Delhi, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#A9B5DF] shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <form className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="message">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
