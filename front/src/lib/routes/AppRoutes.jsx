import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import Login from "../../app/root/Login";
// import Register from "../../app/root/Register";
import Purchage from "../../app/root/Purchage";

import RouteAuth from "../../middleware/RouteAuth";
import Layout from "../../app/root/Layout";
import FrontLayout from "../../pages/FrontLayout";

import { authRoutes } from "./routes";
import Landing from "../../pages/landing";
import Courses from "../../pages/landing/courses";
import CoursesDetails from "../../pages/landing/courseDetails";
import Login from "../../pages/landing/login";
import Register from "../../pages/landing/register";
import Aboutus from "../../pages/landing/aboutUs";
import Refund from "../../pages/landing/Refund";
import ContactUs from "../../pages/landing/ContactUs";
import Blog from "../../pages/landing/Blog";
import Disclaimer from "../../pages/landing/Disclaimer";
import Condition from "../../pages/landing/Condition";
import Privacy from "../../pages/landing/Privacy";
import Forgot from "../../pages/landing/Forgot";
import VerifyOTP from "../../pages/landing/VerifyOTP";
import ChangePassword from "../../pages/landing/ChangePassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<Purchage />} /> */}

      <Route element={<FrontLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/courses" element={<Courses />} />
        <Route
          path="/courses-details-all/:courseId"
          element={<CoursesDetails />}
        />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-condition" element={<Condition />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/forgot" element={<Forgot />} />

        <Route path="/update-password" element={<ChangePassword />} />
      </Route>

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
