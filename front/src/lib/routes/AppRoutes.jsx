import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../../app/root/Login";
import Register from "../../app/root/Register";
import Purchage from "../../app/root/Purchage";
import Comingsoon from "../../app/Dashboard/ComingSoon";
import RouteAuth from "../../middleware/RouteAuth";
import Layout from "../../app/root/Layout";
import { authRoutes } from "./routes";
import Landing from "../../pages/landing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Purchage />} />
      <Route path="/home" element={<Landing />} />
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
