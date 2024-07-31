import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../../app/root/Login";
import Profile from "../../app/Dashboard/Profile";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
    </>
  )
);
export default router;

