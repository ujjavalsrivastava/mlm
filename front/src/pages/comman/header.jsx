import { initDropdowns } from "flowbite";
import { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { axios } from "../../helper/httpHelper";

const subMenu = [
  { url: "/category", title: "Human Resources" },
  { url: "/category", title: "Operations" },
  { url: "/category", title: "Supply Chain Management" },
  { url: "/category", title: "Customer Service" },
  { url: "/category", title: "Manufacturing" },
  { url: "/category", title: "Health And Safety" },
  { url: "/category", title: "Quality Management" },
  { url: "/category", title: "E-commerce" },
  { url: "/category", title: "Management" },
  { url: "/category", title: "Sales" },
];

const menuItems = [
  {
    title: "Categories",
    sub: [
      { title: "Graphics & Design", sub: subMenu },
      {
        title: "Digital Marketing",
        sub: subMenu,
      },
      {
        title: "Bussiness",
        sub: subMenu,
      },
      {
        title: "Music & Audio",
        sub: subMenu,
      },
      {
        title: "Data",
        sub: subMenu,
      },
      {
        title: "Video & Animation",
        sub: subMenu,
      },
      {
        title: "Photography",
        sub: subMenu,
      },
      {
        title: "Lifestyle",
        sub: subMenu,
      },
      {
        title: "Writing & translation",
        sub: subMenu,
      },
      {
        title: "Programming & tech",
        sub: subMenu,
      },
    ],
  },
  {
    title: "Home",
    sub: [
      { url: "/category", title: "Home 1" },
      { url: "/category", title: "Home 2" },
      { url: "/category", title: "Home 3" },
      { url: "/category", title: "Home 4" },
    ],
  },
  { title: "Courses", sub: [{ title: "Course List" }] },
  {
    title: "Pages",
    sub: [
      { url: "/category", title: "page 1" },
      { url: "/category", title: "page 2" },
    ],
  },
  {
    title: "Blog",
    sub: [
      { url: "/category", title: "Blog List" },
      { url: "/category", title: "faq " },
    ],
  },
  {
    title: "Shop",
    sub: [{ title: "shop List" }, { url: "/category", title: "checkout " }],
  },
];

const header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const logout = () => {
    localStorage.removeItem("token");
    window.location.assign("/login");
  };
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [menu, setMenu] = useState(menuItems);
  const [profile, setprofile] = useState(null);
  const fetchProfile = async () => {
    const response = await axios.get("user/profile");
    setprofile(response.data);
  };

  useEffect(() => {
    fetchProfile();
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
                    <Link to="/#course">Our Couress</Link>
                    {/* <ul>
                      <li>
                        <a href="#">Instructor List</a>
                      </li>
                      <li>
                        <a href="#">Instructor Single</a>
                      </li>
                      <li>
                        <a href="#">Becomer a Teacher</a>
                      </li>
                      <li>
                        <a href="#">Event List </a>
                      </li>
                      <li>
                        <a href="#">Event Single</a>
                      </li>
                    </ul> */}
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
