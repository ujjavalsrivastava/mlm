import React, { useEffect, useState } from "react";

function Landing() {

  const[product,setProduct]=useState(null);
  const [orderId, setOrderId] = useState("");
  const [productId, setproductId] = useState("");

  const fetchProduct = async()=>{
    try{
      const response =  await axios.get('vimeo/courses');
      setProduct(response.data);
    }catch(error){
      console.log(error)
    }
    
  }
  useEffect((row)=>{
    fetchProduct();
  },[]);
  
  return (
    <React.Fragment>
      <div id="preloader">
        <div id="loader" className="loader">
          <div className="loader-container">
            <div className="loader-icon">
              <img src="assets/img/logo/preloader.svg" alt="Preloader" />
            </div>
          </div>
        </div>
      </div>

      <button className="scroll__top scroll-to-target" data-target="html">
        <i className="tg-flaticon-arrowhead-up"></i>
      </button>

      <header>
        <div className="tg-header__top">
          <div className="container custom-container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="tg-header__top-info list-wrap">
                  <li>
                    <img src="assets/img/icons/map_marker.svg" alt="Icon" />{" "}
                    <span>589 5th Ave, NY 10024, USA</span>
                  </li>
                  <li>
                    <img src="assets/img/icons/envelope.svg" alt="Icon" />{" "}
                    <a href="mailto:info@skillgrodemo.com">
                      info@skillgrodemo.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="tg-header__top-right">
                  <div className="tg-header__phone">
                    <img src="assets/img/icons/phone.svg" alt="Icon" />
                    Call us: <a href="tel:0123456789">+123 599 8989</a>
                  </div>
                  <ul className="tg-header__top-social list-wrap">
                    <li>Follow Us On :</li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="header-fixed-height"></div>
        <div id="sticky-header" className="tg-header__area">
          <div className="container custom-container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <a href="index-2.html">
                        <img src="assets/img/logo/logo.svg" alt="Logo" />
                      </a>
                    </div>
                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                      <ul className="navigation">
                        <li className="active menu-item-has-children">
                          <a href="#">Home</a>
                          <ul className="sub-menu mega-menu">
                            <li>
                              <ul className="list-wrap mega-sub-menu">
                                <li className="active">
                                  <a href="index-2.html">Main Home</a>
                                </li>
                                <li>
                                  <a href="index-3.html">
                                    Online Course{" "}
                                    <span className="tg-badge">Hot</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index-4.html">
                                    University{" "}
                                    <span className="tg-badge-two">New</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index-5.html">
                                    Yoga Instructor
                                    <span className="tg-badge-two">New</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index-6.html">
                                    Kindergarten
                                    <span className="tg-badge">Hot</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <ul className="list-wrap mega-sub-menu">
                                <li>
                                  <a href="index-7.html">
                                    Language Academy
                                    <span className="tg-badge-two">New</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index-8.html">
                                    Business Coach{" "}
                                    <span className="tg-badge-two">New</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="index-9.html">
                                    Kitchen Coach{" "}
                                    <span className="tg-badge">Hot</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="mega-menu-img">
                                <a href="courses.html">
                                  <img
                                    src="assets/img/others/mega_menu_img.jpg"
                                    alt="img"
                                  />
                                </a>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Courses</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="courses.html">All Courses</a>
                            </li>
                            <li>
                              <a href="course-details.html">Course Details</a>
                            </li>
                            <li>
                              <a href="lesson.html">Course Lesson</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="about-us.html">About Us</a>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="instructors.html">Our Instructors</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="instructors.html">Our Instructors</a>
                                </li>
                                <li>
                                  <a href="instructor-details.html">
                                    Instructor Details
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="events.html">Our Events</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="events.html">Our Events</a>
                                </li>
                                <li>
                                  <a href="events-details.html">
                                    Event Details
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="shop.html">Shop</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="shop.html">Shop Page</a>
                                </li>
                                <li>
                                  <a href="shop-details.html">Shop Details</a>
                                </li>
                                <li>
                                  <a href="cart.html">Cart Page</a>
                                </li>
                                <li>
                                  <a href="check-out.html">Checkout</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="blog.html">Blog</a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="blog.html">Blog Right Sidebar</a>
                                </li>
                                <li>
                                  <a href="blog-2.html">Blog Left Sidebar</a>
                                </li>
                                <li>
                                  <a href="blog-3.html">Blog Full Width</a>
                                </li>
                                <li>
                                  <a href="blog-details.html">Blog Details</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="login.html">Student Login</a>
                            </li>
                            <li>
                              <a href="registration.html">
                                Student Registration
                              </a>
                            </li>
                            <li>
                              <a href="404.html">404 Page</a>
                            </li>
                            <li>
                              <a href="contact.html">contact</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Dashboard</a>
                          <ul className="sub-menu">
                            <li className="menu-item-has-children">
                              <a href="instructor-dashboard.html">
                                Instructor Dashboard
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="instructor-dashboard.html">
                                    Dashboard
                                  </a>
                                </li>
                                <li>
                                  <a href="instructor-profile.html">Profile</a>
                                </li>
                                <li>
                                  <a href="instructor-enrolled-courses.html">
                                    Enrolled Courses
                                  </a>
                                </li>
                                <li>
                                  <a href="instructor-wishlist.html">
                                    Wishlist
                                  </a>
                                </li>
                                <li>
                                  <a href="instructor-review.html">Reviews</a>
                                </li>
                                <li>
                                  <a href="instructor-attempts.html">
                                    My Quiz Attempts
                                  </a>
                                </li>
                                <li>
                                  <a href="instructor-history.html">
                                    Order History
                                  </a>
                                </li>
                                <li>
                                  <a href="instructor-courses.html">
                                    My Course
                                  </a>
                                </li>
                                <li>
                                  <a href="instructor-announcement.html">
                                    Announcements
                                  </a>
                                </li>
                                <li>
                                  <a href="instructor-quiz.html">
                                    Quiz Attempts
                                  </a>
                                </li>
                                <li>
                                  <a href="instructor-assignment.html">
                                    Assignments
                                  </a>
                                </li>
                                <li>
                                  <a href="instructor-setting.html">Settings</a>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="student-dashboard.html">
                                Student Dashboard
                              </a>
                              <ul className="sub-menu">
                                <li>
                                  <a href="student-dashboard.html">Dashboard</a>
                                </li>
                                <li>
                                  <a href="student-profile.html">Profile</a>
                                </li>
                                <li>
                                  <a href="student-enrolled-courses.html">
                                    Enrolled Courses
                                  </a>
                                </li>
                                <li>
                                  <a href="student-wishlist.html">Wishlist</a>
                                </li>
                                <li>
                                  <a href="student-review.html">Reviews</a>
                                </li>
                                <li>
                                  <a href="student-attempts.html">
                                    My Quiz Attempts
                                  </a>
                                </li>
                                <li>
                                  <a href="student-history.html">
                                    Order History
                                  </a>
                                </li>
                                <li>
                                  <a href="student-setting.html">Settings</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="tgmenu__search d-none d-md-block">
                      <form action="#" className="tgmenu__search-form">
                        <div className="select-grp">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.992 13.25C10.5778 13.25 10.242 13.5858 10.242 14C10.242 14.4142 10.5778 14.75 10.992 14.75V13.25ZM16.992 14.75C17.4062 14.75 17.742 14.4142 17.742 14C17.742 13.5858 17.4062 13.25 16.992 13.25V14.75ZM14.742 11C14.742 10.5858 14.4062 10.25 13.992 10.25C13.5778 10.25 13.242 10.5858 13.242 11H14.742ZM13.242 17C13.242 17.4142 13.5778 17.75 13.992 17.75C14.4062 17.75 14.742 17.4142 14.742 17H13.242ZM1 6.4H1.75H1ZM1 1.6H1.75H1ZM6.4 1V1.75V1ZM7 1.6H6.25H7ZM6.4 7V6.25V7ZM1 16.4H1.75H1ZM1 11.6H1.75H1ZM6.4 11V11.75V11ZM7 11.6H6.25H7ZM6.4 17V17.75V17ZM1.6 17V17.75V17ZM11 6.4H11.75H11ZM11 1.6H11.75H11ZM11.6 1V0.25V1ZM16.4 1V1.75V1ZM17 1.6H17.75H17ZM17 6.4H17.75H17ZM16.4 7V6.25V7ZM10.992 14.75H13.992V13.25H10.992V14.75ZM16.992 13.25H13.992V14.75H16.992V13.25ZM14.742 14V11H13.242V14H14.742ZM13.242 14V17H14.742V14H13.242ZM1.75 6.4V1.6H0.25V6.4H1.75ZM1.75 1.6C1.75 1.63978 1.7342 1.67794 1.70607 1.70607L0.645406 0.645406C0.392232 0.89858 0.25 1.24196 0.25 1.6H1.75ZM1.70607 1.70607C1.67794 1.7342 1.63978 1.75 1.6 1.75V0.25C1.24196 0.25 0.89858 0.392232 0.645406 0.645406L1.70607 1.70607ZM1.6 1.75H6.4V0.25H1.6V1.75ZM6.4 1.75C6.36022 1.75 6.32207 1.7342 6.29393 1.70607L7.35459 0.645406C7.10142 0.392231 6.75804 0.25 6.4 0.25V1.75ZM6.29393 1.70607C6.2658 1.67793 6.25 1.63978 6.25 1.6H7.75C7.75 1.24196 7.60777 0.898581 7.35459 0.645406L6.29393 1.70607ZM6.25 1.6V6.4H7.75V1.6H6.25ZM6.25 6.4C6.25 6.36022 6.2658 6.32207 6.29393 6.29393L7.35459 7.35459C7.60777 7.10142 7.75 6.75804 7.75 6.4H6.25ZM6.29393 6.29393C6.32207 6.2658 6.36022 6.25 6.4 6.25V7.75C6.75804 7.75 7.10142 7.60777 7.35459 7.35459L6.29393 6.29393ZM6.4 6.25H1.6V7.75H6.4V6.25ZM1.6 6.25C1.63978 6.25 1.67793 6.2658 1.70607 6.29393L0.645406 7.35459C0.898581 7.60777 1.24196 7.75 1.6 7.75V6.25ZM1.70607 6.29393C1.7342 6.32207 1.75 6.36022 1.75 6.4H0.25C0.25 6.75804 0.392231 7.10142 0.645406 7.35459L1.70607 6.29393ZM1.75 16.4V11.6H0.25V16.4H1.75ZM1.75 11.6C1.75 11.6398 1.7342 11.6779 1.70607 11.7061L0.645406 10.6454C0.392231 10.8986 0.25 11.242 0.25 11.6H1.75ZM1.70607 11.7061C1.67793 11.7342 1.63978 11.75 1.6 11.75V10.25C1.24196 10.25 0.898581 10.3922 0.645406 10.6454L1.70607 11.7061ZM1.6 11.75H6.4V10.25H1.6V11.75ZM6.4 11.75C6.36022 11.75 6.32207 11.7342 6.29393 11.7061L7.35459 10.6454C7.10142 10.3922 6.75804 10.25 6.4 10.25V11.75ZM6.29393 11.7061C6.2658 11.6779 6.25 11.6398 6.25 11.6H7.75C7.75 11.242 7.60777 10.8986 7.35459 10.6454L6.29393 11.7061ZM6.25 11.6V16.4H7.75V11.6H6.25ZM6.25 16.4C6.25 16.3602 6.2658 16.3221 6.29393 16.2939L7.35459 17.3546C7.60777 17.1014 7.75 16.758 7.75 16.4H6.25ZM6.29393 16.2939C6.32207 16.2658 6.36022 16.25 6.4 16.25V17.75C6.75804 17.75 7.10142 17.6078 7.35459 17.3546L6.29393 16.2939ZM6.4 16.25H1.6V17.75H6.4V16.25ZM1.6 16.25C1.63978 16.25 1.67793 16.2658 1.70607 16.2939L0.645406 17.3546C0.898581 17.6078 1.24196 17.75 1.6 17.75V16.25ZM1.70607 16.2939C1.7342 16.3221 1.75 16.3602 1.75 16.4H0.25C0.25 16.758 0.392231 17.1014 0.645406 17.3546L1.70607 16.2939ZM11.75 6.4V1.6H10.25V6.4H11.75ZM11.75 1.6C11.75 1.63978 11.7342 1.67793 11.7061 1.70607L10.6454 0.645406C10.3922 0.898581 10.25 1.24196 10.25 1.6H11.75ZM11.7061 1.70607C11.6779 1.7342 11.6398 1.75 11.6 1.75V0.25C11.242 0.25 10.8986 0.392231 10.6454 0.645406L11.7061 1.70607ZM11.6 1.75H16.4V0.25H11.6V1.75ZM16.4 1.75C16.3602 1.75 16.3221 1.7342 16.2939 1.70607L17.3546 0.645406C17.1014 0.392231 16.758 0.25 16.4 0.25V1.75ZM16.2939 1.70607C16.2658 1.67793 16.25 1.63978 16.25 1.6H17.75C17.75 1.24196 17.6078 0.898581 17.3546 0.645406L16.2939 1.70607ZM16.25 1.6V6.4H17.75V1.6H16.25ZM16.25 6.4C16.25 6.36022 16.2658 6.32207 16.2939 6.29393L17.3546 7.35459C17.6078 7.10142 17.75 6.75804 17.75 6.4H16.25ZM16.2939 6.29393C16.3221 6.2658 16.3602 6.25 16.4 6.25V7.75C16.758 7.75 17.1014 7.60777 17.3546 7.35459L16.2939 6.29393ZM16.4 6.25H11.6V7.75H16.4V6.25ZM11.6 6.25C11.6398 6.25 11.6779 6.2658 11.7061 6.29393L10.6454 7.35459C10.8986 7.60777 11.242 7.75 11.6 7.75V6.25ZM11.7061 6.29393C11.7342 6.32207 11.75 6.36022 11.75 6.4H10.25C10.25 6.75804 10.3922 7.10142 10.6454 7.35459L11.7061 6.29393Z"
                              fill="currentcolor"
                            />
                          </svg>
                          <select
                            className="form-select"
                            id="course-cat"
                            aria-label="Default select example"
                            style={{ width: "150px" }}
                          >
                            <option selected disabled>
                              Categories
                            </option>
                            <option value="1">Business</option>
                            <option value="2">Data Science</option>
                            <option value="3">Art & Design</option>
                            <option value="4">Marketing</option>
                            <option value="5">Finance</option>
                          </select>
                        </div>
                        <div className="input-grp">
                          <input
                            type="text"
                            placeholder="Search For Course . . ."
                          />
                          <button type="submit">
                            <i className="flaticon-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="tgmenu__action">
                      <ul className="list-wrap">
                        <li className="wishlist-icon">
                          <a href="cart.html" className="cart-count">
                            <img
                              src="assets/img/icons/heart.svg"
                              className="injectable"
                              alt="img"
                            />
                            <span className="wishlist-count">0</span>
                          </a>
                        </li>
                        <li className="mini-cart-icon">
                          <a href="cart.html" className="cart-count">
                            <img
                              src="assets/img/icons/cart.svg"
                              className="injectable"
                              alt="img"
                            />
                            <span className="mini-cart-count">0</span>
                          </a>
                        </li>
                        <li className="header-btn login-btn">
                          <a href="login.html">Log in</a>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-login-btn">
                      <a href="login.html">
                        <img
                          src="assets/img/icons/user.svg"
                          alt=""
                          className="injectable"
                        />
                      </a>
                    </div>
                    <div className="mobile-nav-toggler">
                      <i className="tg-flaticon-menu-1"></i>
                    </div>
                  </nav>
                </div>
                <div className="tgmobile__menu">
                  <nav className="tgmobile__menu-box">
                    <div className="close-btn">
                      <i className="tg-flaticon-close-1"></i>
                    </div>
                    <div className="nav-logo">
                      <a href="index-2.html">
                        <img src="assets/img/logo/logo.svg" alt="Logo" />
                      </a>
                    </div>
                    <div className="tgmobile__search">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i className="fas fa-search"></i>
                        </button>
                      </form>
                    </div>
                    <div className="tgmobile__menu-outer"></div>
                    <div className="social-links">
                      <ul className="list-wrap">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="tgmobile__menu-backdrop"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main-area fix">
        <section
          className="banner-area banner-bg tg-motion-effects"
          data-background="assets/img/banner/banner_bg.png"
        >
          <div className="container">
            <div className="row justify-content-between align-items-start">
              <div className="col-xl-5 col-lg-6">
                <div className="banner__content">
                  <h3
                    className="title tg-svg"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    Never Stop
                    <span className="position-relative">
                      <span
                        className="svg-icon"
                        id="banner-svg"
                        data-svg-icon="assets/img/objects/title_shape.svg"
                      ></span>
                      <svg
                        x="0px"
                        y="0px"
                        preserveAspectRatio="none"
                        viewBox="0 0 209 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565"
                          fill="currentcolor"
                        />
                      </svg>
                      Learning
                    </span>
                    <br />
                    Life <b>Never Stop</b> Teaching
                  </h3>
                  <p data-aos="fade-right" data-aos-delay="600">
                    Every teaching and learning journey is unique Following
                    We'll help guide your way.
                  </p>
                  <div
                    className="banner__btn-wrap"
                    data-aos="fade-right"
                    data-aos-delay="800"
                  >
                    <a href="contact.html" className="btn arrow-btn">
                      Start Free Trial{" "}
                      <img
                        src="assets/img/icons/right_arrow.svg"
                        alt="img"
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner__images">
                  <img
                    src="assets/img/banner/banner_img.png"
                    alt="img"
                    className="main-img"
                  />
                  <div
                    className="shape big-shape"
                    data-aos="fade-up-right"
                    data-aos-delay="600"
                  >
                    <img
                      src="assets/img/banner/banner_shape01.png"
                      alt="shape"
                      className="tg-motion-effects1"
                    />
                  </div>
                  <img
                    src="assets/img/banner/bg_dots.svg"
                    alt="shape"
                    className="shape bg-dots rotateme"
                  />
                  <img
                    src="assets/img/banner/banner_shape02.png"
                    alt="shape"
                    className="shape small-shape tg-motion-effects3"
                  />
                  <div className="banner__author">
                    <div className="banner__author-item">
                      <div className="image">
                        <img
                          src="assets/img/banner/banner_author01.png"
                          alt="img"
                        />
                      </div>
                      <h6 className="name">Robert Fox</h6>
                    </div>
                    <div className="banner__author-item">
                      <div className="image">
                        <img
                          src="assets/img/banner/banner_author02.png"
                          alt="img"
                        />
                      </div>
                      <h6 className="name">Michel Jones</h6>
                    </div>
                    <img
                      src="assets/img/banner/banner_shape02.svg"
                      alt="shape"
                      className="arrow-shape tg-motion-effects3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="assets/img/banner/banner_shape01.svg"
            alt="shape"
            className="line-shape"
            data-aos="fade-right"
            data-aos-delay="1600"
          />
        </section>

        <section className="categories-area section-py-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-7">
                <div className="section__title text-center mb-40">
                  <span className="sub-title">Trending Categories</span>
                  <h2 className="title">Top Category We Have</h2>
                  <p className="desc">
                    when known printer took a galley of type scrambl edmake
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="categories__wrap">
                  <div className="swiper categories-active">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="categories__item">
                          <a href="courses.html">
                            <div className="icon">
                              <i className="flaticon-graphic-design"></i>
                            </div>
                            <span className="name">Graphic Design</span>
                            <span className="courses">(22)</span>
                          </a>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="categories__item">
                          <a href="courses.html">
                            <div className="icon">
                              <i className="flaticon-investment"></i>
                            </div>
                            <span className="name">Finance</span>
                            <span className="courses">(41)</span>
                          </a>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="categories__item">
                          <a href="courses.html">
                            <div className="icon">
                              <i className="flaticon-coding"></i>
                            </div>
                            <span className="name">Development</span>
                            <span className="courses">(29)</span>
                          </a>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="categories__item">
                          <a href="courses.html">
                            <div className="icon">
                              <i className="flaticon-email"></i>
                            </div>
                            <span className="name">Marketing</span>
                            <span className="courses">(31)</span>
                          </a>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="categories__item">
                          <a href="courses.html">
                            <div className="icon">
                              <i className="flaticon-fashion"></i>
                            </div>
                            <span className="name">Life Style</span>
                            <span className="courses">(23)</span>
                          </a>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="categories__item">
                          <a href="courses.html">
                            <div className="icon">
                              <i className="flaticon-interaction"></i>
                            </div>
                            <span className="name">Management</span>
                            <span className="courses">(19)</span>
                          </a>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="categories__item">
                          <a href="courses.html">
                            <div className="icon">
                              <i className="flaticon-web-design"></i>
                            </div>
                            <span className="name">App Design</span>
                            <span className="courses">(18)</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="categories__nav">
                    <button className="categories-button-prev">
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 7L1 7M1 7L7 1M1 7L7 13"
                          stroke="#161439"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="categories-button-next">
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 7L15 7M15 7L9 1M15 7L9 13"
                          stroke="#161439"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="brand-area">
          <div className="container-fluid">
            <div className="marquee_mode">
              <div className="brand__item">
                <a href="#">
                  <img src="assets/img/brand/brand01.png" alt="brand" />
                </a>
                <img src="assets/img/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="assets/img/brand/brand02.png" alt="brand" />
                </a>
                <img src="assets/img/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="assets/img/brand/brand03.png" alt="brand" />
                </a>
                <img src="assets/img/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="assets/img/brand/brand04.png" alt="brand" />
                </a>
                <img src="assets/img/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="assets/img/brand/brand05.png" alt="brand" />
                </a>
                <img src="assets/img/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="assets/img/brand/brand06.png" alt="brand" />
                </a>
                <img src="assets/img/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="assets/img/brand/brand07.png" alt="brand" />
                </a>
                <img src="assets/img/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="assets/img/brand/brand04.png" alt="brand" />
                </a>
                <img src="assets/img/icons/brand_star.svg" alt="star" />
              </div>
              <div className="brand__item">
                <a href="#">
                  <img src="assets/img/brand/brand03.png" alt="brand" />
                </a>
                <img src="assets/img/icons/brand_star.svg" alt="star" />
              </div>
            </div>
          </div>
        </div>

        <section className="about-area tg-motion-effects section-py-120">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-9">
                <div className="about__images">
                  <img
                    src="assets/img/others/about_img.png"
                    alt="img"
                    className="main-img"
                  />
                  <img
                    src="assets/img/others/about_shape.svg"
                    alt="img"
                    className="shape alltuchtopdown"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=b2Az7_lLh3g"
                    className="popup-video"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="28"
                      viewBox="0 0 22 28"
                      fill="none"
                    >
                      <path
                        d="M0.19043 26.3132V1.69421C0.190288 1.40603 0.245303 1.12259 0.350273 0.870694C0.455242 0.6188 0.606687 0.406797 0.79027 0.254768C0.973854 0.10274 1.1835 0.0157243 1.39936 0.00193865C1.61521 -0.011847 1.83014 0.0480663 2.02378 0.176003L20.4856 12.3292C20.6973 12.4694 20.8754 12.6856 20.9999 12.9535C21.1245 13.2214 21.1904 13.5304 21.1904 13.8456C21.1904 14.1608 21.1245 14.4697 20.9999 14.7376C20.8754 15.0055 20.6973 15.2217 20.4856 15.3619L2.02378 27.824C1.83056 27.9517 1.61615 28.0116 1.40076 27.9981C1.18536 27.9847 0.97607 27.8983 0.792638 27.7472C0.609205 27.596 0.457661 27.385 0.352299 27.1342C0.246938 26.8833 0.191236 26.6008 0.19043 26.3132Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </a>
                  <div
                    className="about__enrolled"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <p className="title">
                      <span>36K+</span> Enrolled Students
                    </p>
                    <img src="assets/img/others/student_grp.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about__content">
                  <div className="section__title">
                    <span className="sub-title">Get More About Us</span>
                    <h2 className="title">
                      Thousand Of Top
                      <span className="position-relative">
                        <svg
                          x="0px"
                          y="0px"
                          preserveAspectRatio="none"
                          viewBox="0 0 209 59"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565"
                            fill="currentcolor"
                          />
                        </svg>
                        Courses
                      </span>
                      Now in One Place
                    </h2>
                  </div>
                  <p className="desc">
                    Groove’s intuitive shared inbox makes it easy for team
                    members to organize, prioritize and.In this episode of the
                    Smashing Pod we’re talking about Web Platform Baseline.
                  </p>
                  <ul className="about__info-list list-wrap">
                    <li className="about__info-list-item">
                      <i className="flaticon-angle-right"></i>
                      <p className="content">
                        The Most World Class Instructors
                      </p>
                    </li>
                    <li className="about__info-list-item">
                      <i className="flaticon-angle-right"></i>
                      <p className="content">Access Your Class anywhere</p>
                    </li>
                    <li className="about__info-list-item">
                      <i className="flaticon-angle-right"></i>
                      <p className="content">Flexible Course Plan</p>
                    </li>
                  </ul>
                  <div className="tg-button-wrap">
                    <a href="about-us.html" className="btn arrow-btn">
                      Start Free Trial{" "}
                      <img
                        src="assets/img/icons/right_arrow.svg"
                        alt="img"
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="courses-area section-pt-120 section-pb-90"
          data-background="assets/img/bg/courses_bg.jpg"
        >
          <div className="container">
            <div className="section__title-wrap">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="section__title text-center mb-40">
                    <span className="sub-title">Top Class Courses</span>
                    <h2 className="title">Explore Our World's Best Courses</h2>
                    <p className="desc">
                      When known printer took a galley of type scrambl edmake
                    </p>
                  </div>
                  <div className="courses__nav">
                    <ul className="nav nav-tabs" id="courseTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="all-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#all-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="all-tab-pane"
                          aria-selected="true"
                        >
                          All Courses
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="design-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#design-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="design-tab-pane"
                          aria-selected="false"
                        >
                          Design
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="business-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#business-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="business-tab-pane"
                          aria-selected="false"
                        >
                          Business
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="development-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#development-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="development-tab-pane"
                          aria-selected="false"
                        >
                          Development
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content" id="courseTabContent">
              <div
                className="tab-pane fade show active"
                id="all-tab-pane"
                role="tabpanel"
                aria-labelledby="all-tab"
                tabindex="0"
              >
                <div className="swiper courses-swiper-active">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb01.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Development</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.8 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Learning JavaScript With Imagination
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$15.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb02.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Design</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.5 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              The Complete Graphic Design for Beginners
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$19.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb03.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Marketing</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.3 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Learning Digital Marketing on Facebook
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$24.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb04.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Business</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.8 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Financial Analyst Training & Investing Course
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$12.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb05.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Data Science</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.5 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Data Analysis & Visualization Masterclass
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$27.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb06.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Mathematic</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.7 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Master the Fundamentals of Math
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$10.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="courses__nav">
                  <div className="courses-button-prev">
                    <i className="flaticon-arrow-right"></i>
                  </div>
                  <div className="courses-button-next">
                    <i className="flaticon-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="design-tab-pane"
                role="tabpanel"
                aria-labelledby="design-tab"
                tabindex="0"
              >
                <div className="swiper courses-swiper-active">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb03.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Marketing</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.3 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Learning Digital Marketing on Facebook
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$24.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb04.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Business</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.8 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Financial Analyst Training & Investing Course
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$12.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb01.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Development</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.8 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Learning JavaScript With Imagination
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$15.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb02.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Design</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.5 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              The Complete Graphic Design for Beginners
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$19.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb05.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Data Science</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.5 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Data Analysis & Visualization Masterclass
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$27.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb06.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Mathematic</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.7 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Master the Fundamentals of Math
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$10.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="courses__nav">
                  <div className="courses-button-prev">
                    <i className="flaticon-arrow-right"></i>
                  </div>
                  <div className="courses-button-next">
                    <i className="flaticon-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="business-tab-pane"
                role="tabpanel"
                aria-labelledby="business-tab"
                tabindex="0"
              >
                <div className="swiper courses-swiper-active">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb02.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Design</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.5 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              The Complete Graphic Design for Beginners
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$19.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb03.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Marketing</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.3 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Learning Digital Marketing on Facebook
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$24.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb04.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Business</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.8 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Financial Analyst Training & Investing Course
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$12.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb05.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Data Science</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.5 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Data Analysis & Visualization Masterclass
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$27.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb01.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Development</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.8 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Learning JavaScript With Imagination
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$15.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb06.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Mathematic</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.7 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Master the Fundamentals of Math
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$10.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="courses__nav">
                  <div className="courses-button-prev">
                    <i className="flaticon-arrow-right"></i>
                  </div>
                  <div className="courses-button-next">
                    <i className="flaticon-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="development-tab-pane"
                role="tabpanel"
                aria-labelledby="development-tab"
                tabindex="0"
              >
                <div className="swiper courses-swiper-active">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb04.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Business</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.8 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Financial Analyst Training & Investing Course
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$12.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb05.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Data Science</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.5 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Data Analysis & Visualization Masterclass
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$27.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb06.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Mathematic</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.7 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Master the Fundamentals of Math
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$10.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb01.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Development</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.8 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Learning JavaScript With Imagination
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$15.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb02.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Design</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.5 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              The Complete Graphic Design for Beginners
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$19.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="courses__item shine__animate-item">
                        <div className="courses__item-thumb">
                          <a
                            href="course-details.html"
                            className="shine__animate-link"
                          >
                            <img
                              src="assets/img/courses/course_thumb03.jpg"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="courses__item-content">
                          <ul className="courses__item-meta list-wrap">
                            <li className="courses__item-tag">
                              <a href="course.html">Marketing</a>
                            </li>
                            <li className="avg-rating">
                              <i className="fas fa-star"></i> (4.3 Reviews)
                            </li>
                          </ul>
                          <h5 className="title">
                            <a href="course-details.html">
                              Learning Digital Marketing on Facebook
                            </a>
                          </h5>
                          <p className="author">
                            By <a href="#">David Millar</a>
                          </p>
                          <div className="courses__item-bottom">
                            <div className="button">
                              <a href="course-details.html">
                                <span className="text">Enroll Now</span>
                                <i className="flaticon-arrow-right"></i>
                              </a>
                            </div>
                            <h5 className="price">$24.00</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="courses__nav">
                  <div className="courses-button-prev">
                    <i className="flaticon-arrow-right"></i>
                  </div>
                  <div className="courses-button-next">
                    <i className="flaticon-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter__area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="newsletter__img-wrap">
                  <img src="assets/img/others/newsletter_img.png" alt="img" />
                  <img
                    src="assets/img/others/newsletter_shape01.png"
                    alt="img"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  />
                  <img
                    src="assets/img/others/newsletter_shape02.png"
                    alt="img"
                    className="alltuchtopdown"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="newsletter__content">
                  <h2 className="title">
                    Want to stay <span>informed</span> about <br /> new{" "}
                    <span>courses & study?</span>
                  </h2>
                  <div className="newsletter__form">
                    <form action="#">
                      <input type="email" placeholder="Type your e-mail" />
                      <button type="submit" className="btn">
                        Subscribe Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="newsletter__shape">
            <img
              src="assets/img/others/newsletter_shape03.png"
              alt="img"
              data-aos="fade-left"
              data-aos-delay="400"
            />
          </div>
        </section>

        <section className="instructor__area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4">
                <div className="instructor__content-wrap">
                  <div className="section__title mb-15">
                    <span className="sub-title">Skilled Introduce</span>
                    <h2 className="title">
                      Our Top Class & Expert Instructors in One Place
                    </h2>
                  </div>
                  <p>
                    when an unknown printer took a galley of type and scrambled
                    makespecimen book has survived not only five centuries
                  </p>
                  <div className="tg-button-wrap">
                    <a href="instructors.html" className="btn arrow-btn">
                      See All Instructors{" "}
                      <img
                        src="assets/img/icons/right_arrow.svg"
                        alt="img"
                        className="injectable"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="instructor__item-wrap">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="instructor__item">
                        <div className="instructor__thumb">
                          <a href="instructor-datails.html">
                            <img
                              src="assets/img/instructor/instructor01.png"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="instructor__content">
                          <h2 className="title">
                            <a href="instructor-datails.html">Mark Jukarberg</a>
                          </h2>
                          <span className="designation">UX Design Lead</span>
                          <p className="avg-rating">
                            <i className="fas fa-star"></i>
                            (4.8 Ratings)
                          </p>
                          <div className="instructor__social">
                            <ul className="list-wrap">
                              <li>
                                <a href="#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-whatsapp"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-instagram"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="instructor__item">
                        <div className="instructor__thumb">
                          <a href="instructor-datails.html">
                            <img
                              src="assets/img/instructor/instructor02.png"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="instructor__content">
                          <h2 className="title">
                            <a href="instructor-datails.html">Olivia Mia</a>
                          </h2>
                          <span className="designation">Web Design</span>
                          <p className="avg-rating">
                            <i className="fas fa-star"></i>
                            (4.8 Ratings)
                          </p>
                          <div className="instructor__social">
                            <ul className="list-wrap">
                              <li>
                                <a href="#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-whatsapp"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-instagram"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="instructor__item">
                        <div className="instructor__thumb">
                          <a href="instructor-datails.html">
                            <img
                              src="assets/img/instructor/instructor03.png"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="instructor__content">
                          <h2 className="title">
                            <a href="instructor-datails.html">William Hope</a>
                          </h2>
                          <span className="designation">Digital Marketing</span>
                          <p className="avg-rating">
                            <i className="fas fa-star"></i>
                            (4.8 Ratings)
                          </p>
                          <div className="instructor__social">
                            <ul className="list-wrap">
                              <li>
                                <a href="#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-whatsapp"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-instagram"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="instructor__item">
                        <div className="instructor__thumb">
                          <a href="instructor-datails.html">
                            <img
                              src="assets/img/instructor/instructor04.png"
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="instructor__content">
                          <h2 className="title">
                            <a href="instructor-datails.html">Sophia Ava</a>
                          </h2>
                          <span className="designation">Web Development</span>
                          <p className="avg-rating">
                            <i className="fas fa-star"></i>
                            (4.8 Ratings)
                          </p>
                          <div className="instructor__social">
                            <ul className="list-wrap">
                              <li>
                                <a href="#">
                                  <i className="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-whatsapp"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-instagram"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fact__area">
          <div className="container">
            <div className="fact__inner-wrap">
              <div className="row">
                <div className="col-lg-3 col-6">
                  <div className="fact__item">
                    <h2 className="count">
                      <span className="odometer" data-count="45"></span>K+
                    </h2>
                    <p>Active Students</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="fact__item">
                    <h2 className="count">
                      <span className="odometer" data-count="89"></span>+
                    </h2>
                    <p>Faculty Courses</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="fact__item">
                    <h2 className="count">
                      <span className="odometer" data-count="156"></span>K
                    </h2>
                    <p>Best Professors</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="fact__item">
                    <h2 className="count">
                      <span className="odometer" data-count="42"></span>K
                    </h2>
                    <p>Award Achieved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq__area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="faq__img-wrap tg-svg">
                  <div className="faq__round-text">
                    <div className="curved-circle">
                      * Education * System * can * Make * Change *
                    </div>
                  </div>
                  <div className="faq__img">
                    <img src="assets/img/others/faq_img.png" alt="img" />
                    <div className="shape-one">
                      <img
                        src="assets/img/others/faq_shape01.svg"
                        className="injectable tg-motion-effects4"
                        alt="img"
                      />
                    </div>
                    <div className="shape-two">
                      <span
                        className="svg-icon"
                        id="faq-svg"
                        data-svg-icon="assets/img/others/faq_shape02.svg"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq__content">
                  <div className="section__title pb-10">
                    <span className="sub-title">Faq’s</span>
                    <h2 className="title">
                      Start Learning From <br /> World’s Pro Instructors
                    </h2>
                  </div>
                  <p>
                    Groove’s intuitive shared inbox makes it easy for team
                    members to organize, prioritize and.In this episode.
                  </p>
                  <div className="faq__wrap">
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            What’s Skillgrow Want to give you?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Groove’s intuitive shared inbox makes it easy for
                              team members organize prioritize and.In this
                              episode.urvived not only five centuries.Edhen an
                              unknown printer took a galley of type and scrambl
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Why choose us for your education?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Groove’s intuitive shared inbox makes it easy for
                              team members organize prioritize and.In this
                              episode.urvived not only five centuries.Edhen an
                              unknown printer took a galley of type and scrambl
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            How We Provide Service For you?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Groove’s intuitive shared inbox makes it easy for
                              team members organize prioritize and.In this
                              episode.urvived not only five centuries.Edhen an
                              unknown printer took a galley of type and scrambl
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Are you Affordable For Your Course
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p>
                              Groove’s intuitive shared inbox makes it easy for
                              team members organize prioritize and.In this
                              episode.urvived not only five centuries.Edhen an
                              unknown printer took a galley of type and scrambl
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features__area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section__title white-title text-center mb-50">
                  <span className="sub-title">How We Start Journey</span>
                  <h2 className="title">Start your Learning Journey Today!</h2>
                  <p>
                    Groove’s intuitive shared inbox makesteam members together{" "}
                    <br /> organize, prioritize and.In this episode.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="features__item">
                  <div className="features__icon">
                    <img
                      src="assets/img/icons/features_icon01.svg"
                      className="injectable"
                      alt="img"
                    />
                  </div>
                  <div className="features__content">
                    <h4 className="title">Learn with Experts</h4>
                    <p>
                      Curate anding area share Pluralsight content to reach your
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="features__item">
                  <div className="features__icon">
                    <img
                      src="assets/img/icons/features_icon02.svg"
                      className="injectable"
                      alt="img"
                    />
                  </div>
                  <div className="features__content">
                    <h4 className="title">Learn Anything</h4>
                    <p>
                      Curate anding area share Pluralsight content to reach your
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="features__item">
                  <div className="features__icon">
                    <img
                      src="assets/img/icons/features_icon03.svg"
                      className="injectable"
                      alt="img"
                    />
                  </div>
                  <div className="features__content">
                    <h4 className="title">Get Online Certificate</h4>
                    <p>
                      Curate anding area share Pluralsight content to reach your
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="features__item">
                  <div className="features__icon">
                    <img
                      src="assets/img/icons/features_icon04.svg"
                      className="injectable"
                      alt="img"
                    />
                  </div>
                  <div className="features__content">
                    <h4 className="title">E-mail Marketing</h4>
                    <p>
                      Curate anding area share Pluralsight content to reach your
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="instructor__area-two">
          <div className="container">
            <div className="instructor__item-wrap-two">
              <div className="row">
                <div className="col-xl-6">
                  <div className="instructor__item-two tg-svg">
                    <div className="instructor__thumb-two">
                      <img
                        src="assets/img/instructor/instructor_two01.png"
                        alt="img"
                      />
                      <div className="shape-one">
                        <img
                          src="assets/img/instructor/instructor_shape01.svg"
                          alt="img"
                          className="injectable"
                        />
                      </div>
                      <div className="shape-two">
                        <span
                          className="svg-icon"
                          id="instructor-svg"
                          data-svg-icon="assets/img/instructor/instructor_shape02.svg"
                        ></span>
                      </div>
                    </div>
                    <div className="instructor__content-two">
                      <h3 className="title">
                        <a href="contact.html">Become a Instructor</a>
                      </h3>
                      <p>
                        To take a trivial example, which of us undertakes
                        physical exercise yes is this happen here.
                      </p>
                      <div className="tg-button-wrap">
                        <a href="contact.html" className="btn arrow-btn">
                          Apply Now{" "}
                          <img
                            src="assets/img/icons/right_arrow.svg"
                            alt="img"
                            className="injectable"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="instructor__item-two tg-svg">
                    <div className="instructor__thumb-two">
                      <img
                        src="assets/img/instructor/instructor_two02.png"
                        alt="img"
                      />
                      <div className="shape-one">
                        <img
                          src="assets/img/instructor/instructor_shape01.svg"
                          alt="img"
                          className="injectable"
                        />
                      </div>
                      <div className="shape-two">
                        <span
                          className="svg-icon"
                          id="instructor-svg-two"
                          data-svg-icon="assets/img/instructor/instructor_shape02.svg"
                        ></span>
                      </div>
                    </div>
                    <div className="instructor__content-two">
                      <h3 className="title">
                        <a href="contact.html">Become a Student</a>
                      </h3>
                      <p>
                        Join millions of people from around the world learning
                        together. Online learning.
                      </p>
                      <div className="tg-button-wrap">
                        <a href="contact.html" className="btn arrow-btn">
                          Apply Now
                          <img
                            src="assets/img/icons/right_arrow.svg"
                            alt="img"
                            className="injectable"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog__post-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section__title text-center mb-40">
                  <span className="sub-title">News & Blogs</span>
                  <h2 className="title">Our Latest News Feed</h2>
                  <p>when known printer took a galley of type scrambl edmake</p>
                </div>
              </div>
            </div>
            <div className="row gutter-20">
              <div className="col-xl-3 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post01.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Marketing
                    </a>
                  </div>
                  <div className="blog__post-content">
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-calendar"></i>20 July, 2024
                        </li>
                        <li>
                          <i className="flaticon-user-1"></i>by{" "}
                          <a href="blog-details.html">Admin</a>
                        </li>
                      </ul>
                    </div>
                    <h4 className="title">
                      <a href="blog-details.html">
                        How To Become idiculously Self-Aware In 20 Minutes
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post02.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Marketing
                    </a>
                  </div>
                  <div className="blog__post-content">
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-calendar"></i>20 July, 2024
                        </li>
                        <li>
                          <i className="flaticon-user-1"></i>by{" "}
                          <a href="blog-details.html">Admin</a>
                        </li>
                      </ul>
                    </div>
                    <h4 className="title">
                      <a href="blog-details.html">
                        Get Started With UI Design With Tips To Speed
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post03.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Marketing
                    </a>
                  </div>
                  <div className="blog__post-content">
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-calendar"></i>20 July, 2024
                        </li>
                        <li>
                          <i className="flaticon-user-1"></i>by{" "}
                          <a href="blog-details.html">Admin</a>
                        </li>
                      </ul>
                    </div>
                    <h4 className="title">
                      <a href="blog-details.html">
                        Make Your Own Expanding Contracting Content
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post04.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Marketing
                    </a>
                  </div>
                  <div className="blog__post-content">
                    <div className="blog__post-meta">
                      <ul className="list-wrap">
                        <li>
                          <i className="flaticon-calendar"></i>20 July, 2024
                        </li>
                        <li>
                          <i className="flaticon-user-1"></i>by{" "}
                          <a href="blog-details.html">Admin</a>
                        </li>
                      </ul>
                    </div>
                    <h4 className="title">
                      <a href="blog-details.html">
                        What we are capable to usually discovered
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer__area">
        <div className="footer__top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer__widget">
                  <div className="logo mb-35">
                    <a href="index-2.html">
                      <img src="assets/img/logo/secondary_logo.svg" alt="img" />
                    </a>
                  </div>
                  <div className="footer__content">
                    <p>
                      when an unknown printer took galley of type and scrambled
                      it to make pspecimen bookt has.
                    </p>
                    <ul className="list-wrap">
                      <li>463 7th Ave, NY 10018, USA</li>
                      <li>+123 88 9900 456</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Useful Links</h4>
                  <div className="footer__link">
                    <ul className="list-wrap">
                      <li>
                        <a href="events-details.html">Our values</a>
                      </li>
                      <li>
                        <a href="events-details.html">Our advisory board</a>
                      </li>
                      <li>
                        <a href="events-details.html">Our partners</a>
                      </li>
                      <li>
                        <a href="events-details.html">Become a partner</a>
                      </li>
                      <li>
                        <a href="events-details.html">Work at Future Learn</a>
                      </li>
                      <li>
                        <a href="events-details.html">Quizlet Plus</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Our Company</h4>
                  <div className="footer__link">
                    <ul className="list-wrap">
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="instructor-details.html">Become Teacher</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="instructor-details.html">Instructor</a>
                      </li>
                      <li>
                        <a href="events-details.html">Events</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Get In Touch</h4>
                  <div className="footer__contact-content">
                    <p>
                      when an unknown printer took <br /> galley type and
                      scrambled
                    </p>
                    <ul className="list-wrap footer__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <img
                            src="assets/img/icons/facebook.svg"
                            alt="img"
                            className="injectable"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <img
                            src="assets/img/icons/twitter.svg"
                            alt="img"
                            className="injectable"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <img
                            src="assets/img/icons/whatsapp.svg"
                            alt="img"
                            className="injectable"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <img
                            src="assets/img/icons/instagram.svg"
                            alt="img"
                            className="injectable"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <img
                            src="assets/img/icons/youtube.svg"
                            alt="img"
                            className="injectable"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="app-download">
                    <a href="#">
                      <img src="assets/img/others/google-play.svg" alt="img" />
                    </a>
                    <a href="#">
                      <img src="assets/img/others/apple-store.svg" alt="img" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="copy-right-text">
                  <p>© 2010-2024 skillgro.com. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="footer__bottom-menu">
                  <ul className="list-wrap">
                    <li>
                      <a href="contact.html">Term of Use</a>
                    </li>
                    <li>
                      <a href="contact.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Landing;
