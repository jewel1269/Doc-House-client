import React from 'react';

const ContactForm = () => {
  return (
    <div className="lg:ml-20 lg:mr-20">
      <div className="bg-green-900 text-white p-8 rounded-lg w-full py-4 ">
        <h2 className="text-2xl font-semibold mb-4">Contact With Us</h2>
        <p className="mb-8">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve veritatis et quasi.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded border"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 rounded border border-gray-300 text-gray-900"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="p-2 rounded border border-gray-300 text-gray-900"
            />
            <input
              type="text"
              placeholder="Doctor Name"
              className="p-2 rounded border border-gray-300 text-gray-900"
            />
            <input
              type="date"
              className="p-2 rounded border border-gray-300 text-gray-900"
            />
            <input
              type="time"
              className="p-2 rounded border border-gray-300 text-gray-900"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-400 text-white py-2 px-4 rounded mt-4 w-full"
          >
            Book Now
          </button>
        </form>
        <div className="mt-8">
          <p className="mb-2 flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5h18M3 12h18m-9 7h9"
              ></path>
            </svg>
            +88 01750 14 14 14
          </p>
          <p className="flex items-center">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c-1.1 0-2-.9-2-2 0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2zm0 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              ></path>
            </svg>
            Dhanmondi, Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
