import Header from "./../pages/comman/header";
import Footer from "./../pages/comman/footer";

import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const FrontLayout = () => {
  return (
    <div className="wrapper boxed-wrapper">
      <Header />
     
      <Outlet />
     
          <Footer />
        
       </div>  
         
  );
};

FrontLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FrontLayout;
