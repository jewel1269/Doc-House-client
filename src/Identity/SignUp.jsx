import React, { useContext } from 'react';
import logo from '../assets/logIn/doctor-removebg-preview.png';
import { AuthContext } from './AuthProvider/AuthProvider';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value; // If you want to handle file uploads, this is fine
    const gender = form.gender.value;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { name, photo, gender, email, password };

    (email, password)
      .then(res => {
        console.log(res.result);
      })
      .then(() => {
        axiosPublic.post('/users', userInfo).then(res => {
          if (res.data.insertedId) {
            alert('Successful');
          }
          navigate('/');
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="lg:flex w-full lg:max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="lg:w-1/2 bg-teal-900 p-8 flex items-center justify-center">
          <div className="text-center">
            <img
              src={logo}
              alt="Doctor Illustration"
              className=" lg:h-96 h-full w-full lg:w-96"
            />
          </div>
        </div>
        <div className="lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
            Sign Up to Doc House
          </h2>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Your Photo</label>
              <input
                type="file"
                name="photo"
                id="photo"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Gender</label>
              <select
                name="gender"
                id="gender"
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
              >
                <option value="" disabled selected>
                  Select your gender
                </option>

                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-200"
            >
              Create Account
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700">
            Already registered? Go to{' '}
            <NavLink to={'/LogIn'} className="text-teal-500 hover:underline">
              LOG IN
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
