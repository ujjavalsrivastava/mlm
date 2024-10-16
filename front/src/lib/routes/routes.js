import Profile from "../../app/Dashboard/Profile";
import changePassword from "../../app/Dashboard/changePassword";
import Dashboard from "../../app/Dashboard/Wallets";
import MemberDashboard from "../../app/Dashboard/MemberDashboard";
import referal from "../../app/Dashboard/referal";
import Tree from "../../app/tree/Tree";
import KYC from "../../app/Dashboard/KYC";
import payment from "../../pages/payment";
import MyCourse from "../../app/Dashboard/MyCourse";
import ProfileUplaod from '../../app/Dashboard/ProfileUpload';
import MyCourseDeatils from "../../app/Dashboard/MyCouseDetails";
import Level from "../../app/Dashboard/Level";
import LevelWiseReport from "../../app/Dashboard/LevelWiseReport";
import TeamSize from "../../app/Dashboard/TeamSize";
import PassiveIncome from "../../app/Dashboard/PassiveIncome";
import Rewards from "../../app/Dashboard/Rewards";
import Invoice from "../../app/Dashboard/Invoice";
import Wallets from "../../app/Dashboard/Wallets";
import WalletsAdmin from "../../app/Dashboard/WalletsAdmin";
import AssocReport from "../../app/Dashboard/AssocReport";
import DirectTeam from "../../app/Dashboard/DirectTeam";
import AllStudent from "../../app/Dashboard/AllStudent";



export const authRoutes = [

  { path: "/dashboard", Component: Dashboard },
  { path: "/profile", Component: Profile },
  { path: "/change-password", Component: changePassword },
  { path: "/tree", Component: Tree },
  { path: "/Kyc", Component: KYC },
  { path: "/payment", Component: payment },
  { path: "/member-dashboard", Component: MemberDashboard },
  { path: "/my-course", Component: MyCourse },
  { path: "/profile-upload", Component: ProfileUplaod },
  { path: "/referal-link", Component: referal },
  { path: "/course-details/:id", Component: MyCourseDeatils },
  { path: "/level", Component: Level },
  { path: "/level-wise-report", Component: LevelWiseReport },
  { path: "/team-size", Component: TeamSize },
  { path: "/passive-income", Component: PassiveIncome },
  { path: "/rewards", Component: Rewards },
  { path: "/invoice", Component: Invoice },
  { path: "/wallet", Component: Wallets },
  { path: "/wallet-admin", Component: WalletsAdmin },
  { path: "/assoc-report", Component: AssocReport },
  { path: "/direct-team-report", Component: DirectTeam },
  { path: "/all-student-report", Component: AllStudent },
  
];
