import React from 'react';

function AddDoctorForm() {
  const handleAdd = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const info = form.info.value;
    const specialty = form.specialty.value;
    const descriptions = form.descriptions.value;
    const img = form.img.files[0];
    const allInfo = { name, email, info, specialty, descriptions, img };
    console.log(allInfo);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-50 p-8 lg:ml-20 lg:mr-20 rounded-lg shadow-md w-full">
        <h2 className="text-2xl text-center font-semibold mb-6">
          Add a New Doctor
        </h2>
        <form onSubmit={handleAdd}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">All info. point wise:</label>
            <input
              type="text"
              name="info"
              id="info"
              placeholder="Enter Your Info"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Specialty</label>
            <select
              name="specialty"
              id="specialty"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            >
              <option value="" disabled>
                Select Specialty
              </option>
              <option value="Teeth Orthodontics">Teeth Orthodontics</option>
              <option value="Oral Surgery">Oral Surgery</option>
              <option value="Pediatric Dental">Pediatric Dental</option>
              <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
              <option value="Cavity Protection">Cavity Protection</option>
              <option value="Teeth Cleaning">Teeth Cleaning</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Descriptions:</label>
            <textarea
              name="descriptions"
              id="descriptions"
              placeholder="Descriptions..."
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Your Photo</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8a4 4 0 00-4-4H8a4 4 0 00-4 4v16a4 4 0 004 4h16a4 4 0 004-4V8z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32 16v22a4 4 0 01-4 4H8a4 4 0 01-4-4V16"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 12v4m0 4h8m4-4v4m0 4h8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="img"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDoctorForm;
