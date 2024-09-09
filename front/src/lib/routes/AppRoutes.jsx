import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import Login from "../../app/root/Login";
// import Register from "../../app/root/Register";
import Purchage from "../../app/root/Purchage";
import Comingsoon from "../../app/Dashboard/ComingSoon";
import RouteAuth from "../../middleware/RouteAuth";
import Layout from "../../app/root/Layout";
import { authRoutes } from "./routes";
import Landing from "../../pages/landing";
import Courses from "../../pages/landing/courses";
import CoursesDetails from "../../pages/landing/courseDetails";
import Login from "../../pages/landing/login";
import Register from "../../pages/landing/register";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<Purchage />} /> */}
      <Route path="/" element={<Landing />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses-details" element={<CoursesDetails />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<RouteAuth />}>
        <Route element={<Layout />}>
          {authRoutes.map((route, idx) => (
            <Route {...route} key={idx} />
          ))}
        </Route>
      </Route>
    </>
  )
);
export default router;
