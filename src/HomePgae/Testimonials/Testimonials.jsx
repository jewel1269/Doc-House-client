import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import avatar1 from '../../assets/Avater/jewel-removebg-preview.png';
import avatar2 from '../../assets/Avater/shamima-removebg-preview.png';

const Testimonials = () => {
  return (
    <div className="py-12  bg-gray-50">
      <div className="text-center lg:ml-20 lg:mr-20 mb-12">
        <h2 className="text-3xl font-bold">What Our Patients Say</h2>
        <p className="text-gray-600 mt-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="container  mx-auto px-4 grid gap-8 lg:grid-cols-2">
        <div className="bg-white lg:ml-20  p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-x-4">
          <img
            src={avatar1}
            alt="Awlad Hossain"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold">Jewel Mia</h3>
            <p className="text-sm text-gray-500">Full Stack Developer</p>
            <p className="mt-4 text-gray-600">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book has survived not only
              five centuries.
            </p>
          </div>
          <FaQuoteLeft className="text-4xl text-orange-300" />
        </div>
        <div className="bg-white lg:mr-20 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-x-4">
          <img
            src={avatar2}
            alt="Farhana Hossain"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex-1 ">
            <h3 className="text-xl font-bold">Shamima Akter</h3>
            <p className="text-sm text-gray-500">Brand Designer</p>
            <p className="mt-4 text-gray-600">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book has survived not only
              five centuries.
            </p>
          </div>
          <FaQuoteLeft className="text-4xl text-orange-300" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
