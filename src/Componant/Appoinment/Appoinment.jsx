import React, { useContext, useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import 'react-date-range/dist/styles.css'; // main css file for react-date-range
import 'react-date-range/dist/theme/default.css'; // theme css file for react-date-range
import { DateRangePicker } from 'react-date-range';
import image from '../../assets/Doctor/dental-removebg-preview.png';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import SectionTitle from '../../CommonAllPage/SectionTitle/SectionTitle';
import { AuthContext } from '../../Identity/AuthProvider/AuthProvider';

const Appointment = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [slots, setSlots] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [today, setToday] = useState(new Date().toDateString());
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axiosPublic.get('/services').then(res => {
      setServices(res.data);
    });
  }, [axiosPublic]);

  const handleSelectService = service => {
    setSelectedService(service);
    axiosPublic.get(`/api/getSlots?service=${service}`).then(res => {
      setSlots(res.data);
    });
  };

  const handleSelectDateRange = ranges => {
    setRange([ranges.selection]);
  };

  const handleBookNow = slot => {
    setSelectedSlot(slot);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSlot(null);
  };

  const handleBook = e => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const userEmail = user?.email;
    const date = form.date.value;
    const time = form.time.value;
    const fee = form.fee.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const info = {
      serviceName,
      userEmail,
      fee,
      date,
      time,
      name,
      phone,
      email,
    };
    console.log(info);

    axiosPublic
      .post('/books', info)
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: 'Your Booking Complete',
            icon: 'success',

            showClass: {
              popup: `
      animate__animated
      animate__fadeInUp
      animate__faster

    `,
            },
            hideClass: {
              popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
            },
          });
        }
        form.reset();
      })
      .then(error => console.log(error));
  };

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <div className="lg:flex lg:ml-20 lg:mr-20 flex-col items-center justify-center min-h-screen">
      <SectionTitle title={'Book Appointment'} />
      <div className="bg-white shadow-md rounded-md p-4 w-full">
        <div className="flex items-center gap-5 justify-center">
          <DateRangePicker ranges={range} onChange={handleSelectDateRange} />
          <img src={image} alt="" />
        </div>
        <div className="text-center text-orange-600 mb-2">
          Available Services on {range[0].startDate.toDateString()} to{' '}
          {range[0].endDate.toDateString()}
        </div>
        <div className="text-center text-lg font-semibold mb-4">
          Please select a service.
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {services.map(item => (
            <div
              key={item.service}
              className="bg-gray-50 shadow-md rounded-md p-4 flex flex-col items-center cursor-pointer"
              onClick={() => handleSelectService(item.service)}
            >
              <img
                src={item.image}
                className="w-12 h-12 mb-2"
                alt={item.service}
              />
              <div className="text-center">{item.service}</div>
            </div>
          ))}
        </div>
      </div>
      {selectedService && (
        <div className="mt-8 w-full">
          <div className="text-xl text-center font-bold mb-4">
            Available slots for {selectedService}:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {slots.map((slot, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 shadow-md rounded-md flex flex-col items-center cursor-pointer border rounded"
              >
                <img
                  src={slot.image}
                  className="w-40 rounded-full p-5 h-40 mb-2"
                  alt=""
                />
                <h1 className="text-2xl font-bold">{slot.service}</h1>
                <p>{slot.time}</p>
                <p>
                  <strong>Fee: ${slot.fee}</strong>
                </p>
                <button
                  onClick={() => handleBookNow(slot)}
                  className="btn btn-sm hover:bg-orange-500 mt-3"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {isModalOpen && (
        <BookingModal
          slot={selectedSlot}
          onClose={handleCloseModal}
          today={today}
          onBook={handleBook}
        />
      )}
    </div>
  );
};

const BookingModal = ({ slot, onClose, today, onBook }) => {
  if (!slot) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form
        onSubmit={onBook}
        className="bg-white rounded-lg shadow-lg p-6 lg:w-[500px] lg:mt-20 w-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <input
            className="text-2xl font-bold"
            type="text"
            name="serviceName"
            id="serviceName"
            value={slot.service}
          />
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="text"
            name="date"
            id="date"
            value={today}
            readOnly
            className="w-full border border-gray-300 rounded p-2 mt-1 bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <input
            type="text"
            name="time"
            id="time"
            value={slot.time}
            readOnly
            className="w-full border border-gray-300 rounded p-2 mt-1 bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fee</label>
          <input
            type="text"
            name="fee"
            id="fee"
            value={slot.fee}
            placeholder="$"
            readOnly
            className="w-full border border-gray-300 rounded p-2 mt-1 bg-gray-100 cursor-not-allowed"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
            placeholder="Email"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Appointment;
