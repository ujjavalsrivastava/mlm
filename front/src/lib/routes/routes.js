import Profile from "../../app/Dashboard/Profile";
import Dashboard from "../../app/Dashboard/Dashboard";
import Tree from "../../app/tree/Tree";
import KYC from "../../app/Dashboard/KYC";
export const authRoutes = [
  { path: "/dashboard", Component: Dashboard },
  { path: "/profile", Component: Profile },
  { path: "/tree", Component: Tree },
  { path: "/Kyc", Component: KYC },
];
