import React, { useEffect, useState } from 'react';
import {
  FaStar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDollarSign,
} from 'react-icons/fa';
import doctor1 from '../../assets/Doctor/pexels-edward-jenner-4033148.jpg'; // Replace with actual paths to your images
import doctor2 from '../../assets/Doctor/pexels-shvetsa-4225880.jpg';
import doctor3 from '../../assets/Doctor/pexels-tima-miroshnichenko-5452293.jpg';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-gray-100  p-6 rounded-lg shadow-lg">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-xl font-bold">{doctor.name}</h3>
        <p className="text-gray-500">{doctor.qualification}</p>
        <div className="flex items-center mt-2">
          {Array(5)
            .fill('')
            .map((_, index) => (
              <FaStar
                key={index}
                className={`text-yellow-400 ${
                  index < doctor.rating ? '' : 'text-gray-300'
                }`}
              />
            ))}
        </div>
        <div className="mt-4 text-gray-600">
          <div className="flex items-center mt-2">
            <FaMapMarkerAlt className="mr-2" />
            {doctor.location}
          </div>
          <div className="flex items-center mt-2">
            <FaCalendarAlt className="mr-2" />
            {doctor?.available_time}
          </div>
          <div className="flex items-center mt-2">
            <FaDollarSign className="mr-2" />
            {doctor.reviews}
          </div>
        </div>
        <NavLink to={`ProfileCard/${doctor._id}`}>
          <button className="mt-4 w-full  text-black btn-ghost py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
            View Profile
          </button>
        </NavLink>
      </div>
    </div>
  );
};

const ExpertDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/doctors')
      .then(response => {
        setDoctors(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  console.log(doctors);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="py-12 bg-gray-50">
      <div className="text-center  lg:ml-20 lg:mr-20 mb-12">
        <h2 className="text-3xl font-bold">Our Expert Doctors</h2>
        <p className="text-gray-600 mt-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className=" lg:ml-20 lg:mr-20 mx-auto px-4 grid gap-8 lg:grid-cols-3">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default ExpertDoctors;
