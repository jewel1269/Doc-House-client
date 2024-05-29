import React, { useContext, useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { AuthContext } from '../../Identity/AuthProvider/AuthProvider';

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axiosPublic
        .get(`/books/${user.email}`)
        .then(res => {
          console.log(res.data);
          setAppointments(res.data);
        })
        .catch(err => {
          console.error('Error fetching appointments:', err);
        });
    }
  }, [axiosPublic, user]);

  const handlePayClick = appointment => {
    setSelectedAppointment(appointment);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="p-8 lg:mt-24 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="bg-white shadow-md rounded-md p-4 w-full max-w-5xl">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">
            My Appointments: {appointments.length}
          </h1>
          <div className="border border-gray-300 rounded p-2">
            <span className="text-gray-700">{formattedDate}</span>
          </div>
        </div>
        <table className="min-w-full bg-white border border-gray-300 rounded-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Service</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Fee</th>
              <th className="px-4 py-2 text-left">Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment.id} className="border-t border-gray-300">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{appointment.name}</td>
                <td className="px-4 py-2">{appointment.serviceName}</td>
                <td className="px-4 py-2">{appointment.date}</td>
                <td className="px-4 py-2">{appointment.time}</td>
                <td className="px-4 py-2">${appointment.fee}</td>
                <td className="px-4 py-2">
                  <button
                    className="btn bg-indigo-500 text-white p-2 rounded"
                    onClick={() => handlePayClick(appointment)}
                  >
                    Pay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedAppointment && (
        <PaymentModal appointment={selectedAppointment} onClose={closeModal} />
      )}
    </div>
  );
};

const PaymentModal = ({ appointment, onClose }) => {
  const handlePayment = () => {
    // Add payment processing logic here
    console.log('Payment processed');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-80">
        <h2 className="text-lg font-semibold mb-4">
          Hello, {appointment.name}
        </h2>
        <p className="mb-2">
          Please Pay for: <strong>{appointment.serviceName}</strong>
        </p>
        <p className="mb-2">
          Your Appointment:{' '}
          <span className="font-semibold">
            {appointment.date} at {appointment.time}
          </span>
        </p>
        <p className="mb-2">
          Please Pay: <span className="font-semibold">${appointment.fee}</span>
        </p>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Card Number"
            className="border border-gray-300 p-2 w-full rounded mb-2"
          />
          <input
            type="text"
            placeholder="MM/YY/CVC"
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <button
          onClick={handlePayment}
          className="bg-indigo-500 text-white p-2 w-full rounded"
        >
          Pay
        </button>
        <button
          onClick={onClose}
          className="mt-2 text-indigo-500 underline w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AppointmentsTable;
