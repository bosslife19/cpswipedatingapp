// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Headers from './Components/Headers/Headers.jsx';
import { Footer } from './Components/footer/Footer.jsx';
import Login from './Components/Registeration/Login';
import Signup from './Components/Registeration/SignUp';
import { AllTiktok_Section } from './Components/TiktokProfiles/AllTiktok_Section.jsx';
import { Uploads } from './tiktokBG/Tiktok_upload/Uploads.jsx';
import { Tiktok_Logins } from './tiktokBG/Logins/Tiktok_Logins.jsx';
import CommentModals from './tiktokBG/Tiktok_Homepage/CommentModal.jsx';
import CommentsPage from './tiktokBG/Tiktok_Homepage/CommentModal.jsx';
import ProfilePage from './tiktokBG/tiktok_Navbar/subpages/ProfilePage';
import UploadPage from './tiktokBG/Tiktok_Homepage/subPages/UploadPage';
import SearchPage from './tiktokBG/LeftSide_tiktok/subPages/Searchpage.jsx';
import PeopleInYourAreaPage from './tiktokBG/LeftSide_tiktok/subPages/peopleInYourare';
import PotentialMatchesPage from './tiktokBG/LeftSide_tiktok/subPages/Potential';
import MatchedPage from './tiktokBG/LeftSide_tiktok/subPages/Matched.jsx';
import SingleWomenPage from './tiktokBG/LeftSide_tiktok/subPages/Singlewomen.jsx';
import SingleMenPage from './tiktokBG/LeftSide_tiktok/subPages/men.jsx';
 

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
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/comments",
        element: <CommentsPage />,
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
