import React from 'react';

import SignIn from './pages/SignIn/';
import SignUp from './pages/SignUp';


const routes = [
  {
    path: '/sign-in',
    component: <SignIn />,
  },
  {
    path: '/sign-up',
    component: <SignUp />,
  },
  {
    path: '/',
    component: <SignIn />,
    exact: true,
  },
  {
    path: '/Cursor-React-Homework5/',
    component: <SignIn />,
    exact: true,
  },
];

export default routes;