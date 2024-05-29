import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { SiAnkermake } from 'react-icons/si';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get('/users')
      .then(res => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [axiosPublic]);

  const makeAdmin = userId => {
    setUsers(
      users.map(user =>
        user.id === userId ? { ...user, isAdmin: true } : user
      )
    );
  };

  const removeUser = userId => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-md p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold">
            All Users: {users.length.toString().padStart(2, '0')}
          </h1>
        </div>
        <table className="min-w-full bg-white border border-gray-300 rounded-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Make Admin</th>
              <th className="px-4 py-2 text-left">Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="border-t border-gray-300">
                <td className="px-4 py-2">
                  {(index + 1).toString().padStart(2, '0')}
                </td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  {!user.isAdmin && (
                    <button
                      className="hover:bg-green-700 p-3 hover:text-white btn rounded-full"
                      onClick={() => makeAdmin(user.id)}
                    >
                      <SiAnkermake />
                    </button>
                  )}
                </td>
                <td className="px-4 py-2">
                  <button
                    className="hover:bg-red-700 p-2 hover:text-white btn rounded-full"
                    onClick={() => removeUser(user.id)}
                  >
                    <AiOutlineDelete className="h-8 w-8" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
