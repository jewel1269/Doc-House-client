import { createBrowserRouter } from 'react-router-dom';
import Home from '../HomePgae/Home/Home';
import Main from '../Layout/Main/Main';
import Appoinment from '../Componant/Appoinment/Appoinment';
import ProfileCard from '../Componant/ProfileCard/ProfileCard';
import SignUp from '../Identity/SignUp';
import LogIn from '../Identity/LogIn';
import Dashboard from '../Dashboard/Dashboard';
import Layout from '../Dashboard/Layout';
import Mydash from '../Dashboard/Mydash/Mydash';
import AppointmentsTable from '../Dashboard/User/AppointmentsTable';
import UsersTable from '../Dashboard/User/UsersTable ';
import AddDoctorForm from '../Dashboard/User/admin/AddDoctorForm';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'Appoinment',
        element: <Appoinment />,
      },
      {
        path: 'ProfileCard/:id',
        element: <ProfileCard />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/doctors/${params.id}`),
      },
    ],
  },
  {
    path: 'SignUp',
    element: <SignUp />,
  },
  {
    path: 'LogIn',
    element: <LogIn />,
  },

  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'AppointmentsTable',
        element: <AppointmentsTable />,
      },
      {
        path: 'AddDoctorForm',
        element: <AddDoctorForm />,
      },

      //admin
      {
        path: 'Mydash',
        element: <Mydash />,
      },
      {
        path: 'UsersTable',
        element: <UsersTable />,
      },
    ],
  },
]);
