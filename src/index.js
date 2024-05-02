import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Signup from './Components/Signup';
import Login from './Components/LoginForm';
import Teacher from './Components/Teacher';
import Student from './Components/Student';
import Home from './Components/Home';
import Admin from './Components/Admin';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path:"/signup",
    element: <Signup />
  },{
    path:"/login",
    element: <Login />
  },{
    path:"/teacher",
    element: <Teacher />
  },{
    path:"/student",
    element: <Student />
  },{
    path:"/home",
    element: <Home />
  },{
    path:"/admin",
    element: <Admin />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <RouterProvider router={router} />
);