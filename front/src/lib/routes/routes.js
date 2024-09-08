import Profile from "../../app/Dashboard/Profile";
import changePassword from "../../app/Dashboard/changePassword";
import Dashboard from "../../app/Dashboard/Dashboard";
import MemberDashboard from "../../app/Dashboard/MemberDashboard";
import referal from "../../app/Dashboard/referal";
import Tree from "../../app/tree/Tree";
import KYC from "../../app/Dashboard/KYC";
import payment from "../../pages/payment";
import MyCourse from "../../app/Dashboard/MyCourse";
import MyCourseDeatils from "../../app/Dashboard/MyCouseDetails";



export const authRoutes = [

  { path: "/dashboard", Component: Dashboard },
  { path: "/profile", Component: Profile },
  { path: "/change-password", Component: changePassword },
  { path: "/tree", Component: Tree },
  { path: "/Kyc", Component: KYC },
  { path: "/payment", Component: payment },
  { path: "/member-dashboard", Component: MemberDashboard },
  { path: "/my-course", Component: MyCourse },
  { path: "/referal-link", Component: referal },
  { path: "/course-details/:id", Component: MyCourseDeatils },
];
