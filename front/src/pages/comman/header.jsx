import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchProfile } from "../../store/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import { menuItems } from "./constants";

const header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile?.data || {});
  const logout = () => {
    const userConfirmed = window.confirm("Are you sure you want to proceed?");
    if (userConfirmed) {
      localStorage.removeItem("token");
      window.location.assign("/login");
    } else {
      // User clicked Cancel
      console.log("User canceled.");
    }
  };
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [menu, setMenu] = useState(menuItems);

  useEffect(() => {
    if (!profile?._id) {
      dispatch(fetchProfile());
    }
  }, []);

  useEffect(() => {
    if (location.hash === "#course") {
      document.getElementById("course")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const handleNavbar = (value) => {
    if (!value) {
      setSelectedMenu([]);
      setMenu(menuItems);
    }
    setShowSidebar(value);
  };

  const handleMenuClick = (menuItem) => {
    if (menuItem.sub) {
      setSelectedMenu((p) => [...p, menuItem.title]);
      setMenu(menuItem.sub);
    } else {
      navigate(menuItem.url);
      handleNavbar(false);
    }
  };

  const renderTitle = (navItem) => (
    <li onClick={() => handleMenuClick(navItem)} className="menu_item_header">
      <span>{navItem.title}</span>
      {navItem.sub ? <p>&#129170;</p> : null}
    </li>
  );

  const menuHeading = selectedMenu.length
    ? selectedMenu[selectedMenu.length - 1]
    : "Menu";

  return (
    <>
      <div className="tf-top-bar flex items-center justify-center">
        <p>A Unit of MD Digital Duniyaa Pvt. Ltd.</p>
      </div>

      <header id="header_main" className="header">
        <div className="header-inner">
          <div className="header-inner-wrap">
            <div className="header-left">
              <a
                className="mobile-nav-toggler mobile-button d-lg-none flex"
                href="#"
                onClick={() => handleNavbar(true)}
              ></a>
              <div id="site-logo">
                <Link to={"/"}>
                  <img
                    id="logo-header"
                    src="assets/images/dg-logo.svg"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="header-center flex-shrink-0">
              <nav className="main-menu">
                <ul className="navigation">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to="/#course">Our Course</Link>
                  </li>
                  <li>
                    <Link to={"about-us"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"contact-us"}>Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right justify-end">
              <div className="header-btn">
                {profile?._id ? (
                  <div className="header-register">
                    <Link to={"/my-course"}>
                      <a
                        href="#"
                        className="tf-button-default active header-text"
                      >
                        My Account
                      </a>
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="header-login">
                      <Link to={"/login"}>
                        <a href="#" className="tf-button-default header-text">
                          Log In
                        </a>
                      </Link>
                    </div>
                    <div className="header-register">
                      <Link to={"/register"}>
                        <a
                          href="#"
                          className="tf-button-default active header-text"
                        >
                          Sign Up
                        </a>
                      </Link>
                    </div>
                    <div className="header-join d-lg-none flex">
                      <Link to={"/login"}>
                        <a href="#" className="fs-15">
                          Join
                        </a>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* pending side work */}
        <nav
          id="menu"
          style={{
            display: showSidebar ? "block" : "none",
          }}
        >
          <a
            className="close"
            aria-label="Close menu"
            href="#"
            onClick={() => handleNavbar(false)}
          >
            <i className="flaticon-close-1"></i>
          </a>
          <p className="menu_heading_element">{menuHeading}</p>
          <hr />
          <ul>
            {menu.map((menuItem) => (
              <React.Fragment key={`key=${idx}`}>
                {renderTitle(menuItem)}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default header;
