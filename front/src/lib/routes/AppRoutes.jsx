import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../../app/root/Login";
import Profile from "../../app/Dashboard/Profile";
import Dashboard from "../../app/Dashboard/Dashboard";
import RouteAuth from "../../middleware/RouteAuth";
import Layout from "../../app/root/Layout";
import Tree from "../../app/tree/Tree";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route element={<RouteAuth />}>
      <Route element={<Layout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/Tree" element={<Tree />} />
      </Route>
      </Route>
    </>
  )
);
export default router;

