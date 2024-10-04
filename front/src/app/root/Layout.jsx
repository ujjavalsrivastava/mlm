import Header from "../../Components/Common/LayoutBars/Header";
import Footer from "../../Components/Common/LayoutBars//Footer";
import SideBar from "../../Components/Common/LayoutBars/SideBar";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleSidebarClick = () => {
    setShowSidebar((p) => !p);
  };
  return (
    <div className="wrapper boxed-wrapper">
      <Header handleSidebarClick={handleSidebarClick} />
      <SideBar showSidebar={showSidebar} />
      <Outlet />
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
