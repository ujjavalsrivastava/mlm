import { Navigate, Outlet } from "react-router-dom";

const RouteAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return <Outlet />;
};

export default RouteAuth;
