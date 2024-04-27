// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Login from './Components/Registeration/Login';
import { AllTiktok_Section } from './Components/TiktokProfiles/AllTiktok_Section.jsx';
import { Tiktok_Logins } from './tiktokBG/Logins/Tiktok_Logins.jsx';
import ProfilePage from './tiktokBG/tiktok_Navbar/subpages/ProfilePage';
import UploadPage from './tiktokBG/Tiktok_Homepage/subPages/UploadPage';
import SearchPage from './tiktokBG/LeftSide_tiktok/subPages/Searchpage.jsx';
import PeopleInYourAreaPage from './tiktokBG/LeftSide_tiktok/subPages/peopleInYourare';
import PotentialMatchesPage from './tiktokBG/LeftSide_tiktok/subPages/Potential';
import MatchedPage from './tiktokBG/LeftSide_tiktok/subPages/Matched.jsx';
import SingleWomenPage from './tiktokBG/LeftSide_tiktok/subPages/Singlewomen.jsx';
import SingleMenPage from './tiktokBG/LeftSide_tiktok/subPages/men.jsx';
 import SignUp from './Components/Registeration/SignUp.jsx';
 import Appssss from './tiktokBG/Tiktok_Homepage/SideberItems.jsx';
 

// Define the layout component
const Layout = () => {
  return (
    <div>
      {/* <Headers /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

// Define routes including admin route
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      
      
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/upload",
        element: <UploadPage />,
      },
      {
        path: "/potential",
        element: <PotentialMatchesPage />,
      },
      {
        path: "/searchingleft",
        element: <SearchPage />,
      },
      {
        path: "/sidebars",
        element: <Appssss />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/peopleArea",
        element: <PeopleInYourAreaPage />,
      },
      {
        path: "/matched",
        element: <MatchedPage />,
      },
      {
        path: "/singleladies",
        element: <SingleWomenPage />,
      },
      {
        path: "/singleMen",
        element: <SingleMenPage />,
      },
      {
        path: "/admin/",
        element: <AllTiktok_Section />,
        children: [
         
          {
            path: "/admin/login",
            element: <Tiktok_Logins />,
          },
          
        ],
      },
    ],
  },
];

// Create browser router
const router = createBrowserRouter(routes);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
