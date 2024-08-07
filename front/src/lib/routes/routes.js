import Profile from "../../app/Dashboard/Profile";
import Dashboard from "../../app/Dashboard/Dashboard";
import Tree from "../../app/tree/Tree";
import KYC from "../../app/Dashboard/KYC";
import payment from "../../pages/payment";

export const authRoutes = [
  { path: "/dashboard", Component: Dashboard },
  { path: "/profile", Component: Profile },
  { path: "/tree", Component: Tree },
  { path: "/Kyc", Component: KYC },
  { path: "/payment", Component: payment },
];
