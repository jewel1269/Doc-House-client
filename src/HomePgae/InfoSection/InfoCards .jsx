import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const InfoCards = () => {
  return (
    <div className="flex lg:ml-20 lg:mr-20 lg:mt-12 justify-center space-x-4 py-10">
      <div className="bg-teal-900 text-white p-6 rounded-lg flex items-start space-x-4 w-1/3">
        <FaClock className="w-12 h-12 text-white" />
        <div>
          <h3 className="text-xl font-bold">Opening Hours</h3>
          <p>Open 9.00 am to 5.00pm</p>
          <p>Everyday</p>
        </div>
      </div>
      <div className="bg-orange-300 text-white p-6 rounded-lg flex items-start space-x-4 w-1/3">
        <FaMapMarkerAlt className="w-12 h-12 text-white" />
        <div>
          <h3 className="text-xl font-bold">Our Locations</h3>
          <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
        </div>
      </div>
      <div className="bg-teal-900 text-white p-6 rounded-lg flex items-start space-x-4 w-1/3">
        <FaPhone className="w-12 h-12 text-white" />
        <div>
          <h3 className="text-xl font-bold">Contact Us</h3>
          <p>+88 01654321082</p>
          <p>+88 01575456856</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
