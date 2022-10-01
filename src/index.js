import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AddProject } from './Drawer/AddProject';
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/addproject",
    //     element: <AddProject />,
    //   },
    // ],
  },
  {
    path: "/addproject",
    element: <AddProject />,

  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( 
  <React.StrictMode >
  <RouterProvider router={router} />
  </React.StrictMode >
);

reportWebVitals();
