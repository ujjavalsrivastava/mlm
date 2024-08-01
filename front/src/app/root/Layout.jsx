import Header from "../../Components/Common/LayoutBars/Header";
import Footer from "../../Components/Common/LayoutBars//Footer";
import SideBar from "../../Components/Common/LayoutBars/SideBar";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="wrapper boxed-wrapper">
      <Header />
      <SideBar />
      <Outlet />
     
          <Footer />
        
       </div>  
         
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
