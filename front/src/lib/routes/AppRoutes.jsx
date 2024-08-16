import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../../app/root/Login";
import Comingsoon from "../../app/Dashboard/ComingSoon";
import RouteAuth from "../../middleware/RouteAuth";
import Layout from "../../app/root/Layout";
import { authRoutes } from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<Comingsoon />} />
      <Route path="/login" element={<Login />} />
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
