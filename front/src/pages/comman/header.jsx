import { useEffect, useState } from "react";
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
    localStorage.removeItem("token");
    window.location.assign("/login");
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
      <div class="tf-top-bar flex items-center justify-center">
        <p>A Unit of MD Digital Duniyaa Pvt. Ltd.</p>
      </div>

      <header id="header_main" class="header">
        <div class="header-inner">
          <div class="header-inner-wrap">
            <div class="header-left">
              <a
                class="mobile-nav-toggler mobile-button d-lg-none flex"
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
            <div class="header-center flex-shrink-0">
              <nav class="main-menu">
                <ul class="navigation">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li class="has-children">
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
            <div class="header-right justify-end">
              <a href="#" class="header-cart flex items-center justify-center">
                <i class="icon-shopcart fs-18"></i>
              </a>
              <div class="header-btn">
                <div class="header-login">
                  <Link to={"/login"}>
                    <a href="#" class="tf-button-default header-text">
                      Log In
                    </a>
                  </Link>
                </div>
                <div class="header-register">
                  <Link to={"/register"}>
                    <a href="#" class="tf-button-default active header-text">
                      Sign Up
                    </a>
                  </Link>
                </div>
                <div class="header-join d-lg-none flex">
                  <Link to={"/login"}>
                    <a href="#" class="fs-15">
                      Join
                    </a>
                  </Link>
                </div>
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
            class="close"
            aria-label="Close menu"
            href="#"
            onClick={() => handleNavbar(false)}
          >
            <i class="flaticon-close-1"></i>
          </a>
          <p className="menu_heading_element">{menuHeading}</p>
          <hr />
          <ul>
            {menu.map((menuItem) => (
              <>{renderTitle(menuItem)}</>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default header;
