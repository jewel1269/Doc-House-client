import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ProfileCard = () => {
  const item = useLoaderData();
  console.log(item);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-64 rounded-lg shadow-2xl shadow-slate-500 h-56 mr-4"
            />
            <div>
              <h1 className="text-2xl font-semibold">{item.name}</h1>
              <p className="text-gray-600">{item.qualification}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-xl">
                  {'★'.repeat(Math.floor(item.rating))}
                </span>
                <span className="ml-2 text-gray-600">({item.reviews})</span>
              </div>
              <p className="text-gray-600 mt-2">
                {item.location} -{' '}
                <a href="#" className="text-blue-500">
                  Get Directions
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 p-4 border-b border-gray-200">
          {item.services.map((service, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {service}
            </button>
          ))}
        </div>
        <div className="p-6 ">
          <Tabs>
            <TabList>
              <Tab>Overview </Tab>
              <Tab>Locations</Tab>
              <Tab>Reviews</Tab>
              <Tab>Business Hours</Tab>
            </TabList>

            <TabPanel>
              <div>
                <h2 className="text-xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-600 mb-6">{item.about}</p>

                <h2 className="text-xl font-semibold mb-4">Education</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  {item.education.map((edu, index) => (
                    <li key={index}>
                      {edu.institution} - {edu.degree} ({edu.years})
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-semibold mb-4">
                  Work & Experience
                </h2>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  {item.experience.map((exp, index) => (
                    <li key={index}>
                      {exp.place} ({exp.years}) ({exp.duration})
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-semibold mb-4">Awards</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  {item.awards.map((award, index) => (
                    <li key={index}>
                      {award.date} - {award.title}
                    </li>
                  ))}
                </ul>

                <h2 className="text-xl font-semibold mb-4">Services</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  {item.services_offered.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>

                <h2 className="text-xl font-semibold mb-4">Specializations</h2>
                <ul className="list-disc pl-6 text-gray-600 mb-6">
                  {item.specializations.map((specialization, index) => (
                    <li key={index}>{specialization}</li>
                  ))}
                </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>
                <strong>Location:</strong> {item.location}
              </h2>
            </TabPanel>
            <TabPanel>
              <h2>
                {item.education.map(info => (
                  <>
                    <h1>
                      <strong>institution: </strong>
                      {info.institution}
                      <h1>
                        <strong>degree: </strong>
                        {info.degree}
                      </h1>
                      <h1>
                        <strong>years: </strong>
                        {info.years}
                      </h1>
                    </h1>
                  </>
                ))}
              </h2>
              <h1>
                <strong>Reviews: </strong>({item.reviews})
                <div className="rating mt-4 rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </h1>
            </TabPanel>
            <TabPanel>
              <h2 className="text-black text-2xl font-bold">
                Comming Soon..............
              </h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
