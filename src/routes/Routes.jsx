import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import AboutFull from "../components/pages/about/AboutFull";
import HomeFull from "../components/pages/home/HomeFull";
import ErrorPage from "../components/shared/ErrorPage";
import Login from "../components/pages/login/Login";
import Register from "../components/pages/login/Register";
import AddSpot from "../components/pages/addToruristSpot/addSpot";
import AllTouristSpot from "../components/pages/allTouristSpot/AllTouristSpot";
import MyList from "../components/pages/myList/MyList";
import PrivateRoute from "./PrivateRoute";
import SpotDetails from "../components/pages/spotDetails/SpotDetails";
import UpdateSpot from "../components/pages/updateSpot/UpdateSpot";
import Countries from "../components/pages/home/Countries";
import SpotsByCountry from "../components/pages/spotsByCountry/SpotsByCountry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomeFull></HomeFull>,
        loader: () => fetch("https://lvc63.com/all-tourist-spot"),
      },
      {
        path: "/about",
        element: <AboutFull></AboutFull>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-tourist-spot",
        element: (
          <PrivateRoute>
            <AddSpot></AddSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-tourist-spot",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("https://lvc63.com/all-tourist-spot"),
      },
      {
        path: "/spot-details/:id",
        element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://lvc63.com/spot-details/${params.id}`),
      },
      {
        path: "/update-spot/:id",
        element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
        loader: ({params}) => fetch(`https://lvc63.com/spot-details/${params.id}`),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/country/:country",
        element: <SpotsByCountry></SpotsByCountry>,
        
      },

    ],
  },
]);

export default router;
