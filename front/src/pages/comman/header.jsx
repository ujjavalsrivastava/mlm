import { initDropdowns } from "flowbite";
import { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { axios } from "../../helper/httpHelper";

const header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    window.location.assign("/login");
  };
  const [profile, setprofile] = useState(null);
  const fetchProfile = async () => {
    const response = await axios.get("user/profile");
    setprofile(response.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  console.log(profile);

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
                href="#menu"
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
                    <a href="#">Home</a>
                  </li>
                  <li class="has-children">
                    <a href="javascript:void(0);">Our Couress</a>
                    <ul>
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
                    </ul>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
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
        <nav class="d-lg-none" id="menu" style={{display:'none'}}>
          <a class="close" aria-label="Close menu" href="#wrapper">
            <i class="flaticon-close-1"></i>
          </a>
          <ul>
            <li>
              <span>Categories</span>
              <ul>
                <li>
                  <span>Graphics & Design</span>
                  <ul>
                    <li>
                      <a href="categories.html">Human Resources</a>
                    </li>
                    <li>
                      <a href="categories.html">Operations</a>
                    </li>
                    <li>
                      <a href="categories.html">Supply Chain Management</a>
                    </li>
                    <li>
                      <a href="categories.html">Customer Service</a>
                    </li>
                    <li>
                      <a href="categories.html">Manufacturing</a>
                    </li>
                    <li>
                      <a href="categories.html">Health And Safety</a>
                    </li>
                    <li>
                      <a href="categories.html">Quality Management</a>
                    </li>
                    <li>
                      <a href="categories.html">E-commerce</a>
                    </li>
                    <li>
                      <a href="categories.html">Management</a>
                    </li>
                    <li>
                      <a href="categories.html">Sales</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Digital Marketing</span>
                  <ul>
                    <li>
                      <a href="categories.html">Human Resources</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="current">
              <span>Home</span>
              <ul>
                <li>
                  <a href="index-2.html">Home Page 01</a>
                </li>
                <li>
                  <a href="home-02.html">Home Page 02</a>
                </li>
                <li>
                  <a href="home-03.html">Home Page 03</a>
                </li>
                <li>
                  <a href="home-04.html">Home Page 04</a>
                </li>
                <li>
                  <a href="home-05.html">Home Page 05</a>
                </li>
                <li>
                  <a href="home-06.html">Home Page 06</a>
                </li>
                <li class="current">
                  <a href="home-07.html">Home Page 07</a>
                </li>
                <li>
                  <a href="home-08.html">Home Page 08</a>
                </li>
                <li>
                  <a href="home-09.html">Home Page 09</a>
                </li>
                <li>
                  <a href="home-10.html">Home Page 10</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Courses</span>
              <ul>
                <li>
                  <span>Course List</span>
                  <ul>
                    <li>
                      <a href="course-grid-basic.html">Course Grid Basic</a>
                    </li>
                    <li>
                      <a href="course-grid-modern.html">Course Grid Modern</a>
                    </li>
                    <li>
                      <a href="course-grid-left-sidebar.html">
                        Course Grid Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="course-grid-right-sidebar.html">
                        Course Grid Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="course-list-sidebar.html">Course List Sidebar</a>
                    </li>
                    <li>
                      <a href="all-list-style.html">Course All List Style</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Course Single</span>
                  <ul>
                    <li>
                      <a href="course-single-v1.html">Course Single 01</a>
                    </li>
                    <li>
                      <a href="course-single-v2.html">Course Single 02</a>
                    </li>
                    <li>
                      <a href="course-single-v3.html">Course Single 03</a>
                    </li>
                    <li>
                      <a href="course-single-v4.html">Course Single 04</a>
                    </li>
                    <li>
                      <a href="course-single-v5.html">Course Single 05</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Course Category</span>
                  <ul>
                    <li>
                      <a href="property-single-v1.html">Coaching</a>
                    </li>
                    <li>
                      <a href="categories.html">Categories</a>
                    </li>
                    <li>
                      <a href="categories.html">Online Business</a>
                    </li>
                    <li>
                      <a href="categories.html">Photography</a>
                    </li>
                    <li>
                      <a href="categories.html">Music & Audio</a>
                    </li>
                    <li>
                      <a href="categories.html">Photography</a>
                    </li>
                    <li>
                      <a href="categories.html">Programming & Tech</a>
                    </li>
                    <li>
                      <a href="categories.html">Graphics & Design</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <span>Pages</span>
              <ul>
                <li>
                  <a href="#">Instructor List</a>
                </li>
                <li>
                  <a href="instructor-single.html">Instructor Single</a>
                </li>
                <li>
                  <a href="become-teacher.html">Become a Teacher</a>
                </li>
                <li>
                  <a href="event-list.html">Event List </a>
                </li>
                <li>
                  <a href="event-single.html">Event Single</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li>
                  <a href="help-center.html">Help Center</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="faq.html">Faq</a>
                </li>
                <li>
                  <a href="terms.html">Terms</a>
                </li>
                <li>
                  <a href="404.html">404</a>
                </li>
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="register.html">Register</a>
                </li>
                <li>
                  <a href="instructor-dashboard.html">Instructor Dashboard</a>
                </li>
                <li>
                  <a href="student-dashboard.html">Student Dashboard</a>
                </li>
                <li>
                  <a href="ui-elements.html">UI elements</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Blog</span>
              <ul>
                <li>
                  <a href="blog-grid.html">Blog Grid</a>
                </li>
                <li>
                  <a href="blog-list-v1.html">Blog List 01</a>
                </li>
                <li>
                  <a href="blog-list-v2.html">Blog List 02</a>
                </li>
                <li>
                  <a href="blog-single.html">Blog Single</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Shop</span>
              <ul>
                <li>
                  <a href="#">Shop List</a>
                </li>
                <li>
                  <a href="shop-single.html">Shop Single</a>
                </li>
                <li>
                  <a href="shop-cart.html">Shop Cart</a>
                </li>
                <li>
                  <a href="shop-checkout.html">Shop Checkout</a>
                </li>
                <li>
                  <a href="shop-order.html">Shop Order</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default header;
