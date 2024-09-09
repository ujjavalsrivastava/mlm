import React, { useEffect, useState } from "react";
import style from './home.module.css';
const courses =()=>{
    return (
        
        <React.Fragment>
    
    <div id="preloader">
        <div id="loader" className="loader">
            <div className="loader-container">
                <div className="loader-icon"><img src="assets/img/logo/preloader.svg" alt="Preloader" /></div>
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
                            <li><img src="assets/img/icons/map_marker.svg" alt="Icon" /> <span>589 5th Ave, NY 10024, USA</span></li>
                            <li><img src="assets/img/icons/envelope.svg" alt="Icon" /> <a href="mailto:info@skillgrodemo.com">info@skillgrodemo.com</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="tg-header__top-right">
                            <div className="tg-header__phone">
                                <img src="assets/img/icons/phone.svg" alt="Icon" />Call us: <a href="tel:0123456789">+123 599 8989</a>
                            </div>
                            <ul className="tg-header__top-social list-wrap">
                                <li>Follow Us On :</li>
                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
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
                                    <a href="index-2.html"><img src="assets/img/logo/logo.svg" alt="Logo" /></a>
                                </div>
                                <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                    <ul className="navigation">
                                        <li className="menu-item-has-children"><a href="#">Home</a>
                                            <ul className="sub-menu mega-menu">
                                                <li>
                                                    <ul className="list-wrap mega-sub-menu">
                                                        <li>
                                                            <a href="index-2.html">Main Home</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-3.html">Online Course <span className="tg-badge">Hot</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="index-4.html">University <span className="tg-badge-two">New</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="index-5.html">Yoga Instructor<span className="tg-badge-two">New</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="index-6.html">Kindergarten<span className="tg-badge">Hot</span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul className="list-wrap mega-sub-menu">
                                                        <li>
                                                            <a href="index-7.html">Language Academy<span className="tg-badge-two">New</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="index-8.html">Business Coach <span className="tg-badge-two">New</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="index-9.html">Kitchen Coach <span className="tg-badge">Hot</span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="mega-menu-img">
                                                        <a href="courses.html"><img src="assets/img/others/mega_menu_img.jpg" alt="img" /></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="active menu-item-has-children"><a href="#">Courses</a>
                                            <ul className="sub-menu">
                                                <li className="active"><a href="courses.html">All Courses</a></li>
                                                <li><a href="course-details.html">Course Details</a></li>
                                                <li><a href="lesson.html">Course Lesson</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="about-us.html">About Us</a></li>
                                                <li className="menu-item-has-children">
                                                    <a href="instructors.html">Our Instructors</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="instructors.html">Our Instructors</a></li>
                                                        <li><a href="instructor-details.html">Instructor Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="events.html">Our Events</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="events.html">Our Events</a></li>
                                                        <li><a href="events-details.html">Event Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="shop.html">Shop</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="shop.html">Shop Page</a></li>
                                                        <li><a href="shop-details.html">Shop Details</a></li>
                                                        <li><a href="cart.html">Cart Page</a></li>
                                                        <li><a href="check-out.html">Checkout</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="blog.html">Blog</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="blog.html">Blog Right Sidebar</a></li>
                                                        <li><a href="blog-2.html">Blog Left Sidebar</a></li>
                                                        <li><a href="blog-3.html">Blog Full Width</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="login.html">Student Login</a></li>
                                                <li><a href="registration.html">Student Registration</a></li>
                                                <li><a href="404.html">404 Page</a></li>
                                                <li><a href="contact.html">contact</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children"><a href="#">Dashboard</a>
                                            <ul className="sub-menu">
                                                <li className="menu-item-has-children">
                                                    <a href="instructor-dashboard.html">Instructor Dashboard</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="instructor-dashboard.html">Dashboard</a></li>
                                                        <li><a href="instructor-profile.html">Profile</a></li>
                                                        <li><a href="instructor-enrolled-courses.html">Enrolled Courses</a></li>
                                                        <li><a href="instructor-wishlist.html">Wishlist</a></li>
                                                        <li><a href="instructor-review.html">Reviews</a></li>
                                                        <li><a href="instructor-attempts.html">My Quiz Attempts</a></li>
                                                        <li><a href="instructor-history.html">Order History</a></li>
                                                        <li><a href="instructor-courses.html">My Course</a></li>
                                                        <li><a href="instructor-announcement.html">Announcements</a></li>
                                                        <li><a href="instructor-quiz.html">Quiz Attempts</a></li>
                                                        <li><a href="instructor-assignment.html">Assignments</a></li>
                                                        <li><a href="instructor-setting.html">Settings</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children"><a href="student-dashboard.html">Student Dashboard</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="student-dashboard.html">Dashboard</a></li>
                                                        <li><a href="student-profile.html">Profile</a></li>
                                                        <li><a href="student-enrolled-courses.html">Enrolled Courses</a></li>
                                                        <li><a href="student-wishlist.html">Wishlist</a></li>
                                                        <li><a href="student-review.html">Reviews</a></li>
                                                        <li><a href="student-attempts.html">My Quiz Attempts</a></li>
                                                        <li><a href="student-history.html">Order History</a></li>
                                                        <li><a href="student-setting.html">Settings</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tgmenu__search d-none d-md-block">
                                    <form action="#" className="tgmenu__search-form">
                                        <div className="select-grp">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.992 13.25C10.5778 13.25 10.242 13.5858 10.242 14C10.242 14.4142 10.5778 14.75 10.992 14.75V13.25ZM16.992 14.75C17.4062 14.75 17.742 14.4142 17.742 14C17.742 13.5858 17.4062 13.25 16.992 13.25V14.75ZM14.742 11C14.742 10.5858 14.4062 10.25 13.992 10.25C13.5778 10.25 13.242 10.5858 13.242 11H14.742ZM13.242 17C13.242 17.4142 13.5778 17.75 13.992 17.75C14.4062 17.75 14.742 17.4142 14.742 17H13.242ZM1 6.4H1.75H1ZM1 1.6H1.75H1ZM6.4 1V1.75V1ZM7 1.6H6.25H7ZM6.4 7V6.25V7ZM1 16.4H1.75H1ZM1 11.6H1.75H1ZM6.4 11V11.75V11ZM7 11.6H6.25H7ZM6.4 17V17.75V17ZM1.6 17V17.75V17ZM11 6.4H11.75H11ZM11 1.6H11.75H11ZM11.6 1V0.25V1ZM16.4 1V1.75V1ZM17 1.6H17.75H17ZM17 6.4H17.75H17ZM16.4 7V6.25V7ZM10.992 14.75H13.992V13.25H10.992V14.75ZM16.992 13.25H13.992V14.75H16.992V13.25ZM14.742 14V11H13.242V14H14.742ZM13.242 14V17H14.742V14H13.242ZM1.75 6.4V1.6H0.25V6.4H1.75ZM1.75 1.6C1.75 1.63978 1.7342 1.67794 1.70607 1.70607L0.645406 0.645406C0.392232 0.89858 0.25 1.24196 0.25 1.6H1.75ZM1.70607 1.70607C1.67794 1.7342 1.63978 1.75 1.6 1.75V0.25C1.24196 0.25 0.89858 0.392232 0.645406 0.645406L1.70607 1.70607ZM1.6 1.75H6.4V0.25H1.6V1.75ZM6.4 1.75C6.36022 1.75 6.32207 1.7342 6.29393 1.70607L7.35459 0.645406C7.10142 0.392231 6.75804 0.25 6.4 0.25V1.75ZM6.29393 1.70607C6.2658 1.67793 6.25 1.63978 6.25 1.6H7.75C7.75 1.24196 7.60777 0.898581 7.35459 0.645406L6.29393 1.70607ZM6.25 1.6V6.4H7.75V1.6H6.25ZM6.25 6.4C6.25 6.36022 6.2658 6.32207 6.29393 6.29393L7.35459 7.35459C7.60777 7.10142 7.75 6.75804 7.75 6.4H6.25ZM6.29393 6.29393C6.32207 6.2658 6.36022 6.25 6.4 6.25V7.75C6.75804 7.75 7.10142 7.60777 7.35459 7.35459L6.29393 6.29393ZM6.4 6.25H1.6V7.75H6.4V6.25ZM1.6 6.25C1.63978 6.25 1.67793 6.2658 1.70607 6.29393L0.645406 7.35459C0.898581 7.60777 1.24196 7.75 1.6 7.75V6.25ZM1.70607 6.29393C1.7342 6.32207 1.75 6.36022 1.75 6.4H0.25C0.25 6.75804 0.392231 7.10142 0.645406 7.35459L1.70607 6.29393ZM1.75 16.4V11.6H0.25V16.4H1.75ZM1.75 11.6C1.75 11.6398 1.7342 11.6779 1.70607 11.7061L0.645406 10.6454C0.392231 10.8986 0.25 11.242 0.25 11.6H1.75ZM1.70607 11.7061C1.67793 11.7342 1.63978 11.75 1.6 11.75V10.25C1.24196 10.25 0.898581 10.3922 0.645406 10.6454L1.70607 11.7061ZM1.6 11.75H6.4V10.25H1.6V11.75ZM6.4 11.75C6.36022 11.75 6.32207 11.7342 6.29393 11.7061L7.35459 10.6454C7.10142 10.3922 6.75804 10.25 6.4 10.25V11.75ZM6.29393 11.7061C6.2658 11.6779 6.25 11.6398 6.25 11.6H7.75C7.75 11.242 7.60777 10.8986 7.35459 10.6454L6.29393 11.7061ZM6.25 11.6V16.4H7.75V11.6H6.25ZM6.25 16.4C6.25 16.3602 6.2658 16.3221 6.29393 16.2939L7.35459 17.3546C7.60777 17.1014 7.75 16.758 7.75 16.4H6.25ZM6.29393 16.2939C6.32207 16.2658 6.36022 16.25 6.4 16.25V17.75C6.75804 17.75 7.10142 17.6078 7.35459 17.3546L6.29393 16.2939ZM6.4 16.25H1.6V17.75H6.4V16.25ZM1.6 16.25C1.63978 16.25 1.67793 16.2658 1.70607 16.2939L0.645406 17.3546C0.898581 17.6078 1.24196 17.75 1.6 17.75V16.25ZM1.70607 16.2939C1.7342 16.3221 1.75 16.3602 1.75 16.4H0.25C0.25 16.758 0.392231 17.1014 0.645406 17.3546L1.70607 16.2939ZM11.75 6.4V1.6H10.25V6.4H11.75ZM11.75 1.6C11.75 1.63978 11.7342 1.67793 11.7061 1.70607L10.6454 0.645406C10.3922 0.898581 10.25 1.24196 10.25 1.6H11.75ZM11.7061 1.70607C11.6779 1.7342 11.6398 1.75 11.6 1.75V0.25C11.242 0.25 10.8986 0.392231 10.6454 0.645406L11.7061 1.70607ZM11.6 1.75H16.4V0.25H11.6V1.75ZM16.4 1.75C16.3602 1.75 16.3221 1.7342 16.2939 1.70607L17.3546 0.645406C17.1014 0.392231 16.758 0.25 16.4 0.25V1.75ZM16.2939 1.70607C16.2658 1.67793 16.25 1.63978 16.25 1.6H17.75C17.75 1.24196 17.6078 0.898581 17.3546 0.645406L16.2939 1.70607ZM16.25 1.6V6.4H17.75V1.6H16.25ZM16.25 6.4C16.25 6.36022 16.2658 6.32207 16.2939 6.29393L17.3546 7.35459C17.6078 7.10142 17.75 6.75804 17.75 6.4H16.25ZM16.2939 6.29393C16.3221 6.2658 16.3602 6.25 16.4 6.25V7.75C16.758 7.75 17.1014 7.60777 17.3546 7.35459L16.2939 6.29393ZM16.4 6.25H11.6V7.75H16.4V6.25ZM11.6 6.25C11.6398 6.25 11.6779 6.2658 11.7061 6.29393L10.6454 7.35459C10.8986 7.60777 11.242 7.75 11.6 7.75V6.25ZM11.7061 6.29393C11.7342 6.32207 11.75 6.36022 11.75 6.4H10.25C10.25 6.75804 10.3922 7.10142 10.6454 7.35459L11.7061 6.29393Z" fill="currentcolor" />
                                            </svg>
                                            <select className="form-select" id="course-cat" aria-label="Default select example" style={{width: '150px'}}>
                                                <option selected disabled>Categories</option>
                                                <option value="1">Business</option>
                                                <option value="2">Data Science</option>
                                                <option value="3">Art & Design</option>
                                                <option value="4">Marketing</option>
                                                <option value="5">Finance</option>
                                            </select>
                                        </div>
                                        <div className="input-grp">
                                            <input type="text" placeholder="Search For Course . . ." />
                                            <button type="submit"><i className="flaticon-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="tgmenu__action">
                                    <ul className="list-wrap">
                                        <li className="wishlist-icon">
                                            <a href="cart.html" className="cart-count">
                                                <img src="assets/img/icons/heart.svg" className="injectable" alt="img" />
                                                <span className="wishlist-count">0</span>
                                            </a>
                                        </li>
                                        <li className="mini-cart-icon">
                                            <a href="cart.html" className="cart-count">
                                                <img src="assets/img/icons/cart.svg" className="injectable" alt="img" />
                                                <span className="mini-cart-count">0</span>
                                            </a>
                                        </li>
                                        <li className="header-btn login-btn">
                                            <a href="login.html">Log in</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mobile-login-btn">
                                    <a href="login.html"><img src="assets/img/icons/user.svg" alt="" className="injectable" /></a>
                                </div>
                                <div className="mobile-nav-toggler"><i className="tg-flaticon-menu-1"></i></div>
                            </nav>
                        </div>
                      
                        <div className="tgmobile__menu">
                            <nav className="tgmobile__menu-box">
                                <div className="close-btn"><i className="tg-flaticon-close-1"></i></div>
                                <div className="nav-logo">
                                    <a href="index-2.html"><img src="assets/img/logo/logo.svg" alt="Logo" /></a>
                                </div>
                                <div className="tgmobile__search">
                                    <form action="#">
                                        <input type="text" placeholder="Search here..." />
                                        <button><i className="fas fa-search"></i></button>
                                    </form>
                                </div>
                                <div className="tgmobile__menu-outer">
                                  
                                </div>
                                <div className="social-links">
                                    <ul className="list-wrap">
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
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

       
        <section className={`${style.breadcrumb__area} ${style.breadcrumb__bg}`} data-background="assets/img/bg/breadcrumb_bg.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumb__content">
                            <h3 className="title">All Courses</h3>
                            <nav className="breadcrumb">
                                <span property="itemListElement" typeof="ListItem">
                                    <a href="index-2.html">Home</a>
                                </span>
                                <span className="breadcrumb-separator"><i className="fas fa-angle-right"></i></span>
                                <span property="itemListElement" typeof="ListItem">Courses</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcrumb__shape-wrap">
                <img src="assets/img/others/breadcrumb_shape01.svg" alt="img" className="alltuchtopdown" />
                <img src="assets/img/others/breadcrumb_shape02.svg" alt="img" data-aos="fade-right" data-aos-delay="300" />
                <img src="assets/img/others/breadcrumb_shape03.svg" alt="img" data-aos="fade-up" data-aos-delay="400" />
                <img src="assets/img/others/breadcrumb_shape04.svg" alt="img" data-aos="fade-down-left" data-aos-delay="400" />
                <img src="assets/img/others/breadcrumb_shape05.svg" alt="img" data-aos="fade-left" data-aos-delay="400" />
            </div>
        </section>
      
        <section className="all-courses-area section-py-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 order-2 order-lg-0">
                        <aside className="courses__sidebar">
                            <div className="courses-widget">
                                <h4 className="widget-title">Categories</h4>
                                <div className="courses-cat-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="cat_1" />
                                                <label className="form-check-label" for="cat_1">Art & Design (8)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="cat_2" />
                                                <label className="form-check-label" for="cat_2">Business (12)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="cat_3" />
                                                <label className="form-check-label" for="cat_3">Data Science (7)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="cat_4" />
                                                <label className="form-check-label" for="cat_4">Development (10)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="cat_5" />
                                                <label className="form-check-label" for="cat_5">Finance (8)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="cat_6" />
                                                <label className="form-check-label" for="cat_6">Health & Fitness (8)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="cat_7" />
                                                <label className="form-check-label" for="cat_7">Lifestyle (9)</label>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="show-more">
                                        <a href="#">Show More +</a>
                                    </div>
                                </div>
                            </div>
                            <div className="courses-widget">
                                <h4 className="widget-title">Language</h4>
                                <div className="courses-cat-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="lang_1" />
                                                <label className="form-check-label" for="lang_1">All Language</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="lang_2" />
                                                <label className="form-check-label" for="lang_2">Arabic (11)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="lang_3" />
                                                <label className="form-check-label" for="lang_3">English (53)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="lang_4" />
                                                <label className="form-check-label" for="lang_4">Spanish (22)</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="show-more">
                                    <a href="#">Show More +</a>
                                </div>
                            </div>
                            <div className="courses-widget">
                                <h4 className="widget-title">Price</h4>
                                <div className="courses-cat-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="price_1" />
                                                <label className="form-check-label" for="price_1">All Price</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="price_2" />
                                                <label className="form-check-label" for="price_2">Free</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="price_3" />
                                                <label className="form-check-label" for="price_3">Paid</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="courses-widget">
                                <h4 className="widget-title">Skill level</h4>
                                <div className="courses-cat-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="difficulty_1" />
                                                <label className="form-check-label" for="difficulty_1">All Skills</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="difficulty_2" />
                                                <label className="form-check-label" for="difficulty_2">Beginner (55)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="difficulty_3" />
                                                <label className="form-check-label" for="difficulty_3">Intermediate (22)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="difficulty_4" />
                                                <label className="form-check-label" for="difficulty_4">High (42)</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="courses-widget">
                                <h4 className="widget-title">Instructors</h4>
                                <div className="courses-cat-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="ins_1" />
                                                <label className="form-check-label" for="ins_1">David Millar (10)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="ins_2" />
                                                <label className="form-check-label" for="ins_2">Wade Warren (13)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="ins_3" />
                                                <label className="form-check-label" for="ins_3">Jenny Wilson (22)</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="ins_4" />
                                                <label className="form-check-label" for="ins_4">Jacob Jones (42)</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="show-more">
                                    <a href="#">Show More +</a>
                                </div>
                            </div>
                            <div className="courses-widget">
                                <h4 className="widget-title">Ratings</h4>
                                <div className="courses-rating-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <div className="rating">
                                                    <ul className="list-wrap">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                    </ul>
                                                    <span>(42)</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <div className="rating">
                                                    <ul className="list-wrap">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li className="delete"><i className="fas fa-star"></i></li>
                                                    </ul>
                                                    <span>(23)</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <div className="rating">
                                                    <ul className="list-wrap">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li className="delete"><i className="fas fa-star"></i></li>
                                                        <li className="delete"><i className="fas fa-star"></i></li>
                                                    </ul>
                                                    <span>(11)</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <div className="rating">
                                                    <ul className="list-wrap">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li className="delete"><i className="fas fa-star"></i></li>
                                                        <li className="delete"><i className="fas fa-star"></i></li>
                                                        <li className="delete"><i className="fas fa-star"></i></li>
                                                    </ul>
                                                    <span>(7)</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <div className="rating">
                                                    <ul className="list-wrap">
                                                        <li><i className="fas fa-star"></i></li>
                                                        <li className="delete"><i className="fas fa-star"></i></li>
                                                        <li className="delete"><i className="fas fa-star"></i></li>
                                                        <li className="delete"><i className="fas fa-star"></i></li>
                                                        <li className="delete"><i className="fas fa-star"></i></li>
                                                    </ul>
                                                    <span>(3)</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="courses-top-wrap courses-top-wrap">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <div className="courses-top-left">
                                        <p>Showing 250 total results</p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="d-flex justify-content-center justify-content-md-end align-items-center flex-wrap">
                                        <div className="courses-top-right m-0 ms-md-auto">
                                            <span className="sort-by">Sort By:</span>
                                            <div className="courses-top-right-select">
                                                <select name="orderby" className="orderby">
                                                    <option value="Most Popular">Most Popular</option>
                                                    <option value="popularity">popularity</option>
                                                    <option value="average rating">average rating</option>
                                                    <option value="latest">latest</option>
                                                    <option value="latest">latest</option>
                                                </select>
                                            </div>
                                        </div>
                                        <ul className="nav nav-tabs courses__nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="grid-tab" data-bs-toggle="tab" data-bs-target="#grid" type="button" role="tab" aria-controls="grid" aria-selected="true">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 1H2C1.44772 1 1 1.44772 1 2V6C1 6.55228 1.44772 7 2 7H6C6.55228 7 7 6.55228 7 6V2C7 1.44772 6.55228 1 6 1Z"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M16 1H12C11.4477 1 11 1.44772 11 2V6C11 6.55228 11.4477 7 12 7H16C16.5523 7 17 6.55228 17 6V2C17 1.44772 16.5523 1 16 1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M6 11H2C1.44772 11 1 11.4477 1 12V16C1 16.5523 1.44772 17 2 17H6C6.55228 17 7 16.5523 7 16V12C7 11.4477 6.55228 11 6 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M16 11H12C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17H16C16.5523 17 17 16.5523 17 16V12C17 11.4477 16.5523 11 16 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="list-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="false">
                                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.5 6C0.67 6 0 6.67 0 7.5C0 8.33 0.67 9 1.5 9C2.33 9 3 8.33 3 7.5C3 6.67 2.33 6 1.5 6ZM1.5 0C0.67 0 0 0.67 0 1.5C0 2.33 0.67 3 1.5 3C2.33 3 3 2.33 3 1.5C3 0.67 2.33 0 1.5 0ZM1.5 12C0.67 12 0 12.68 0 13.5C0 14.32 0.68 15 1.5 15C2.32 15 3 14.32 3 13.5C3 12.68 2.33 12 1.5 12ZM5.5 14.5H17.5C18.05 14.5 18.5 14.05 18.5 13.5C18.5 12.95 18.05 12.5 17.5 12.5H5.5C4.95 12.5 4.5 12.95 4.5 13.5C4.5 14.05 4.95 14.5 5.5 14.5ZM5.5 8.5H17.5C18.05 8.5 18.5 8.05 18.5 7.5C18.5 6.95 18.05 6.5 17.5 6.5H5.5C4.95 6.5 4.5 6.95 4.5 7.5C4.5 8.05 4.95 8.5 5.5 8.5ZM4.5 1.5C4.5 2.05 4.95 2.5 5.5 2.5H17.5C18.05 2.5 18.5 2.05 18.5 1.5C18.5 0.95 18.05 0.5 17.5 0.5H5.5C4.95 0.5 4.5 0.95 4.5 1.5Z" fill="currentColor" />
                                                    </svg>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                                <div className="row courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb01.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Development</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.8 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                                <p className="author">By <a href="#">David Millar</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb02.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Design</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.5 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">The Complete Graphic Design for Beginners</a></h5>
                                                <p className="author">By <a href="#">Jenny Wilson</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb03.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Marketing</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.3 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Learning Digital Marketing on Facebook</a></h5>
                                                <p className="author">By <a href="#">Wade Warren</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb04.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Business</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.8 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Financial Analyst Training & Investing Course</a></h5>
                                                <p className="author">By <a href="#">Robert Fox</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb05.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Data Science</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.5 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Data Analysis & Visualization MasterclassName</a></h5>
                                                <p className="author">By <a href="#">Guy Hawkins</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb06.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Mathematic</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.7 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Master the Fundamentals of Math</a></h5>
                                                <p className="author">By <a href="#">Sawpawlo Mark</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb07.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Business</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.8 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">How To Build A Localized Website With Hugo And Strapi</a></h5>
                                                <p className="author">By <a href="#">David Millar</a></p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">$11.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb08.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Desing</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.5 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Designing Effective Pricing Plans UX</a></h5>
                                                <p className="author">By <a href="#">Sawpawlo Mark</a></p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">$17.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb09.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Language</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.6 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Accelerating UX Maturity With A Breakthrough Project</a></h5>
                                                <p className="author">By <a href="#">David Millar</a></p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">$22.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb10.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Creative</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.7 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Demystifying The New Gatsby Framework</a></h5>
                                                <p className="author">By <a href="#">Jack & Jon</a></p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">$29.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb11.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Data</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.8 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Voice Control Usability Considerations For Partially</a></h5>
                                                <p className="author">By <a href="#">Lily Rebeca</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb12.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Finance</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.5 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Things I Wish I’d Known Earlier In My Career</a></h5>
                                                <p className="author">By <a href="#">Sawpawlo Mark</a></p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">$9.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav className="pagination__wrap mt-30">
                                    <ul className="list-wrap">
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="courses.html">2</a></li>
                                        <li><a href="courses.html">3</a></li>
                                        <li><a href="courses.html">4</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                                <div className="row courses__list-wrap row-cols-1">
                                    <div className={style.cal}>
                                        <div className="courses__item courses__item-three shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb01.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Development</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.8 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price"><del>$29.00</del>$15.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Resolving Conflicts Between Designers And Engineers</a></h5>
                                                <p className="author">By <a href="#">David Millar</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item courses__item-three shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb02.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Design</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.5 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price">$41.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Powerful Image Optimization Tools for this year</a></h5>
                                                <p className="author">By <a href="#">Jenny Wilson</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item courses__item-three shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb03.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Marketing</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.6 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price"><del>$24.00</del>$12.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                                <p className="author">By <a href="#">Wade Warren</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item courses__item-three shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb04.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Finance</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.9 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price"><del>$32.00</del>$19.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Resolving Conflicts Between Designers And Engineers</a></h5>
                                                <p className="author">By <a href="#">Robert Fox</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item courses__item-three shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb05.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Data Science</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.7 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price"><del>$50.00</del>$40.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">A Look At Remix And The Differences With Next.js</a></h5>
                                                <p className="author">By <a href="#">Guy Hawkins</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item courses__item-three shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb06.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Mathematic</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.8 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price"><del>$30.00</del>$19.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">An Accessibility-First Approach To Chart Visual</a></h5>
                                                <p className="author">By <a href="#">Sawpawlo Mark</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item courses__item-three shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb07.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Development</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.6 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price">$11.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">How To Build A Localized Website With Hugo And Strapi</a></h5>
                                                <p className="author">By <a href="#">Robert Fox</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav className="pagination__wrap mt-30">
                                    <ul className="list-wrap">
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="courses.html">2</a></li>
                                        <li><a href="courses.html">3</a></li>
                                        <li><a href="courses.html">4</a></li>
                                    </ul>
                                </nav>
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
                                <a href="index-2.html"><img src="assets/img/logo/secondary_logo.svg" alt="img" /></a>
                            </div>
                            <div className="footer__content">
                                <p>when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.</p>
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
                                    <li><a href="events-details.html">Our values</a></li>
                                    <li><a href="events-details.html">Our advisory board</a></li>
                                    <li><a href="events-details.html">Our partners</a></li>
                                    <li><a href="events-details.html">Become a partner</a></li>
                                    <li><a href="events-details.html">Work at Future Learn</a></li>
                                    <li><a href="events-details.html">Quizlet Plus</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div className="footer__widget">
                            <h4 className="footer__widget-title">Our Company</h4>
                            <div className="footer__link">
                                <ul className="list-wrap">
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="instructor-details.html">Become Teacher</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="instructor-details.html">Instructor</a></li>
                                    <li><a href="events-details.html">Events</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="footer__widget">
                            <h4 className="footer__widget-title">Get In Touch</h4>
                            <div className="footer__contact-content">
                                <p>when an unknown printer took <br /> galley type and scrambled</p>
                                <ul className="list-wrap footer__social">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/facebook.svg" alt="img" className="injectable" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/twitter.svg" alt="img" className="injectable" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/whatsapp.svg" alt="img" className="injectable" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/instagram.svg" alt="img" className="injectable" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/youtube.svg" alt="img" className="injectable"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="app-download">
                                <a href="#"><img src="assets/img/others/google-play.svg" alt="img" /></a>
                                <a href="#"><img src="assets/img/others/apple-store.svg" alt="img" /></a>
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
                                <li><a href="contact.html">Term of Use</a></li>
                                <li><a href="contact.html">Privacy Policy</a></li>
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

export default courses;