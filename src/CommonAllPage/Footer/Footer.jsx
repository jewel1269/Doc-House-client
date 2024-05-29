import React from 'react';
import logo from '../../assets/house-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="bg-gray-200  rounded-2xl shadow-xl p-10 text-gray-800 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <div className="flex  items-center mb-4">
            <img src={logo} alt="Doc House Logo" className="w-20 h-20 mr-2" />
            <span className="text-2xl mt-6 font-semibold">Doc House</span>
          </div>
          <p className="mb-4">
            "Doc House provides exceptional healthcare services, <br />{' '}
            specializing in diagnostics, pediatrics, and personalized <br />{' '}
            care to ensure your well-being and health."
          </p>
          <button className="bg-orange-400 text-white py-2 px-4 rounded">
            Appointment
          </button>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-auto">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Departments
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Online Payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 md:mr-8">
            <h3 className="text-lg font-semibold mb-4">Doc House Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Pediatric Clinic
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Diagnosis Clinic
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cardiac Clinic
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Laboratory Analysis
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gynecological Clinic
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Personal Counseling
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dental Clinic
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="space-y-2">
              <li>Monday - 10 am to 7 pm</li>
              <li>Tuesday - 10 am to 7 pm</li>
              <li>Wednesday - 10 am to 7 pm</li>
              <li>Thursday - 10 am to 7 pm</li>
              <li>Friday - 10 am to 7 pm</li>
              <li>Saturday - 10 am to 7 pm</li>
              <li>Sunday - 10 am to 7 pm</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="text-center mt-8">
        <p>Copyright © 2022 - All right reserved by Doc House Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
