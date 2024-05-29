import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const lineData = {
  labels: ['2013', '2014', '2015', '2016', '2017', '2018'],
  datasets: [
    {
      label: 'Patients',
      data: [50, 100, 150, 120, 180, 150],
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};

const pieData = {
  labels: ['Red', 'Yellow', 'Green'],
  datasets: [
    {
      data: [30, 30, 40],
      backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
      hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
    },
  ],
};

const Mydash = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 p-5 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
          <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 19.364l1.414-1.414A7.975 7.975 0 0112 15c1.878 0 3.624.654 5.029 1.95l1.414 1.414m1.414-1.414a9 9 0 10-12.728 0M9 12h.01M15 12h.01M7.5 10.5h9"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-700">168</h3>
            <p className="text-gray-500">Doctors</p>
            <div className="mt-2 h-1 bg-pink-200 rounded-full">
              <div className="w-2/3 h-full bg-pink-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2h-1l-2 2v2h-2v-2l-2-2H5a2 2 0 01-2-2V7z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-700">487</h3>
            <p className="text-gray-500">Patients</p>
            <div className="mt-2 h-1 bg-green-200 rounded-full">
              <div className="w-4/5 h-full bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
          <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2h-1l-2 2v2h-2v-2l-2-2H5a2 2 0 01-2-2V7z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-700">95</h3>
            <p className="text-gray-500">Appointments</p>
            <div className="mt-2 h-1 bg-yellow-200 rounded-full">
              <div className="w-3/5 h-full bg-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Patients</h3>
          <div className="h-40">
            <Line data={lineData} />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Appointments
          </h3>
          <div className="h-40">
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mydash;
