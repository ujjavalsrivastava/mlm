
import React, { useEffect, useState } from "react";
const courseDetails = ()=>{
    return (
        <React.Fragment>

<div id="preloader">
        <div id="loader" class="loader">
            <div class="loader-container">
                <div class="loader-icon"><img src="assets/img/logo/preloader.svg" alt="Preloader" /></div>
            </div>
        </div>
    </div>
    
    <button class="scroll__top scroll-to-target" data-target="html">
        <i class="tg-flaticon-arrowhead-up"></i>
    </button>
    
    <header>
        <div class="tg-header__top">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-lg-6">
                        <ul class="tg-header__top-info list-wrap">
                            <li><img src="assets/img/icons/map_marker.svg" alt="icon" /> <span>589 5th Ave, NY 10024, USA</span></li>
                            <li><img src="assets/img/icons/envelope.svg" alt="icon" /> <a href="mailto:info@skillgrodemo.com">info@skillgrodemo.com</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <div class="tg-header__top-right">
                            <div class="tg-header__phone">
                                <img src="assets/img/icons/phone.svg" alt="icon" />Call us: <a href="tel:0123456789">+123 599 8989</a>
                            </div>
                            <ul class="tg-header__top-social list-wrap">
                                <li>Follow Us On :</li>
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="header-fixed-height"></div>
        <div id="sticky-header" class="tg-header__area">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-12">
                        <div class="tgmenu__wrap">
                            <nav class="tgmenu__nav">
                                <div class="logo">
                                    <a href="index-2.html"><img src="assets/img/logo/logo.svg" alt="Logo" /></a>
                                </div>
                                <div class="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                    <ul class="navigation">
                                        <li class="menu-item-has-children"><a href="#">Home</a>
                                            <ul class="sub-menu mega-menu">
                                                <li>
                                                    <ul class="list-wrap mega-sub-menu">
                                                        <li>
                                                            <a href="index-2.html">Main Home</a>
                                                        </li>
                                                        <li>
                                                            <a href="index-3.html">Online Course <span class="tg-badge">Hot</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="index-4.html">University <span class="tg-badge-two">New</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="index-5.html">Yoga Instructor<span class="tg-badge-two">New</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="index-6.html">Kindergarten<span class="tg-badge">Hot</span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <ul class="list-wrap mega-sub-menu">
                                                        <li>
                                                            <a href="index-7.html">Language Academy<span class="tg-badge-two">New</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="index-8.html">Business Coach <span class="tg-badge-two">New</span></a>
                                                        </li>
                                                        <li>
                                                            <a href="index-9.html">Kitchen Coach <span class="tg-badge">Hot</span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div class="mega-menu-img">
                                                        <a href="courses.html"><img src="assets/img/others/mega_menu_img.jpg" alt="img" /></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="active menu-item-has-children"><a href="#">Courses</a>
                                            <ul class="sub-menu">
                                                <li><a href="courses.html">All Courses</a></li>
                                                <li class="active"><a href="course-details.html">Course Details</a></li>
                                                <li><a href="lesson.html">Course Lesson</a></li>
                                            </ul>
                                        </li>
                                        <li class="menu-item-has-children"><a href="#">Pages</a>
                                            <ul class="sub-menu">
                                                <li><a href="about-us.html">About Us</a></li>
                                                <li class="menu-item-has-children">
                                                    <a href="instructors.html">Our Instructors</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="instructors.html">Our Instructors</a></li>
                                                        <li><a href="instructor-details.html">Instructor Details</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="events.html">Our Events</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="events.html">Our Events</a></li>
                                                        <li><a href="events-details.html">Event Details</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="shop.html">Shop</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="shop.html">Shop Page</a></li>
                                                        <li><a href="shop-details.html">Shop Details</a></li>
                                                        <li><a href="cart.html">Cart Page</a></li>
                                                        <li><a href="check-out.html">Checkout</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item-has-children">
                                                    <a href="blog.html">Blog</a>
                                                    <ul class="sub-menu">
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
                                        <li class="menu-item-has-children"><a href="#">Dashboard</a>
                                            <ul class="sub-menu">
                                                <li class="menu-item-has-children">
                                                    <a href="instructor-dashboard.html">Instructor Dashboard</a>
                                                    <ul class="sub-menu">
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
                                                <li class="menu-item-has-children"><a href="student-dashboard.html">Student Dashboard</a>
                                                    <ul class="sub-menu">
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
                                <div class="tgmenu__search d-none d-md-block">
                                    <form action="#" class="tgmenu__search-form">
                                        <div class="select-grp">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.992 13.25C10.5778 13.25 10.242 13.5858 10.242 14C10.242 14.4142 10.5778 14.75 10.992 14.75V13.25ZM16.992 14.75C17.4062 14.75 17.742 14.4142 17.742 14C17.742 13.5858 17.4062 13.25 16.992 13.25V14.75ZM14.742 11C14.742 10.5858 14.4062 10.25 13.992 10.25C13.5778 10.25 13.242 10.5858 13.242 11H14.742ZM13.242 17C13.242 17.4142 13.5778 17.75 13.992 17.75C14.4062 17.75 14.742 17.4142 14.742 17H13.242ZM1 6.4H1.75H1ZM1 1.6H1.75H1ZM6.4 1V1.75V1ZM7 1.6H6.25H7ZM6.4 7V6.25V7ZM1 16.4H1.75H1ZM1 11.6H1.75H1ZM6.4 11V11.75V11ZM7 11.6H6.25H7ZM6.4 17V17.75V17ZM1.6 17V17.75V17ZM11 6.4H11.75H11ZM11 1.6H11.75H11ZM11.6 1V0.25V1ZM16.4 1V1.75V1ZM17 1.6H17.75H17ZM17 6.4H17.75H17ZM16.4 7V6.25V7ZM10.992 14.75H13.992V13.25H10.992V14.75ZM16.992 13.25H13.992V14.75H16.992V13.25ZM14.742 14V11H13.242V14H14.742ZM13.242 14V17H14.742V14H13.242ZM1.75 6.4V1.6H0.25V6.4H1.75ZM1.75 1.6C1.75 1.63978 1.7342 1.67794 1.70607 1.70607L0.645406 0.645406C0.392232 0.89858 0.25 1.24196 0.25 1.6H1.75ZM1.70607 1.70607C1.67794 1.7342 1.63978 1.75 1.6 1.75V0.25C1.24196 0.25 0.89858 0.392232 0.645406 0.645406L1.70607 1.70607ZM1.6 1.75H6.4V0.25H1.6V1.75ZM6.4 1.75C6.36022 1.75 6.32207 1.7342 6.29393 1.70607L7.35459 0.645406C7.10142 0.392231 6.75804 0.25 6.4 0.25V1.75ZM6.29393 1.70607C6.2658 1.67793 6.25 1.63978 6.25 1.6H7.75C7.75 1.24196 7.60777 0.898581 7.35459 0.645406L6.29393 1.70607ZM6.25 1.6V6.4H7.75V1.6H6.25ZM6.25 6.4C6.25 6.36022 6.2658 6.32207 6.29393 6.29393L7.35459 7.35459C7.60777 7.10142 7.75 6.75804 7.75 6.4H6.25ZM6.29393 6.29393C6.32207 6.2658 6.36022 6.25 6.4 6.25V7.75C6.75804 7.75 7.10142 7.60777 7.35459 7.35459L6.29393 6.29393ZM6.4 6.25H1.6V7.75H6.4V6.25ZM1.6 6.25C1.63978 6.25 1.67793 6.2658 1.70607 6.29393L0.645406 7.35459C0.898581 7.60777 1.24196 7.75 1.6 7.75V6.25ZM1.70607 6.29393C1.7342 6.32207 1.75 6.36022 1.75 6.4H0.25C0.25 6.75804 0.392231 7.10142 0.645406 7.35459L1.70607 6.29393ZM1.75 16.4V11.6H0.25V16.4H1.75ZM1.75 11.6C1.75 11.6398 1.7342 11.6779 1.70607 11.7061L0.645406 10.6454C0.392231 10.8986 0.25 11.242 0.25 11.6H1.75ZM1.70607 11.7061C1.67793 11.7342 1.63978 11.75 1.6 11.75V10.25C1.24196 10.25 0.898581 10.3922 0.645406 10.6454L1.70607 11.7061ZM1.6 11.75H6.4V10.25H1.6V11.75ZM6.4 11.75C6.36022 11.75 6.32207 11.7342 6.29393 11.7061L7.35459 10.6454C7.10142 10.3922 6.75804 10.25 6.4 10.25V11.75ZM6.29393 11.7061C6.2658 11.6779 6.25 11.6398 6.25 11.6H7.75C7.75 11.242 7.60777 10.8986 7.35459 10.6454L6.29393 11.7061ZM6.25 11.6V16.4H7.75V11.6H6.25ZM6.25 16.4C6.25 16.3602 6.2658 16.3221 6.29393 16.2939L7.35459 17.3546C7.60777 17.1014 7.75 16.758 7.75 16.4H6.25ZM6.29393 16.2939C6.32207 16.2658 6.36022 16.25 6.4 16.25V17.75C6.75804 17.75 7.10142 17.6078 7.35459 17.3546L6.29393 16.2939ZM6.4 16.25H1.6V17.75H6.4V16.25ZM1.6 16.25C1.63978 16.25 1.67793 16.2658 1.70607 16.2939L0.645406 17.3546C0.898581 17.6078 1.24196 17.75 1.6 17.75V16.25ZM1.70607 16.2939C1.7342 16.3221 1.75 16.3602 1.75 16.4H0.25C0.25 16.758 0.392231 17.1014 0.645406 17.3546L1.70607 16.2939ZM11.75 6.4V1.6H10.25V6.4H11.75ZM11.75 1.6C11.75 1.63978 11.7342 1.67793 11.7061 1.70607L10.6454 0.645406C10.3922 0.898581 10.25 1.24196 10.25 1.6H11.75ZM11.7061 1.70607C11.6779 1.7342 11.6398 1.75 11.6 1.75V0.25C11.242 0.25 10.8986 0.392231 10.6454 0.645406L11.7061 1.70607ZM11.6 1.75H16.4V0.25H11.6V1.75ZM16.4 1.75C16.3602 1.75 16.3221 1.7342 16.2939 1.70607L17.3546 0.645406C17.1014 0.392231 16.758 0.25 16.4 0.25V1.75ZM16.2939 1.70607C16.2658 1.67793 16.25 1.63978 16.25 1.6H17.75C17.75 1.24196 17.6078 0.898581 17.3546 0.645406L16.2939 1.70607ZM16.25 1.6V6.4H17.75V1.6H16.25ZM16.25 6.4C16.25 6.36022 16.2658 6.32207 16.2939 6.29393L17.3546 7.35459C17.6078 7.10142 17.75 6.75804 17.75 6.4H16.25ZM16.2939 6.29393C16.3221 6.2658 16.3602 6.25 16.4 6.25V7.75C16.758 7.75 17.1014 7.60777 17.3546 7.35459L16.2939 6.29393ZM16.4 6.25H11.6V7.75H16.4V6.25ZM11.6 6.25C11.6398 6.25 11.6779 6.2658 11.7061 6.29393L10.6454 7.35459C10.8986 7.60777 11.242 7.75 11.6 7.75V6.25ZM11.7061 6.29393C11.7342 6.32207 11.75 6.36022 11.75 6.4H10.25C10.25 6.75804 10.3922 7.10142 10.6454 7.35459L11.7061 6.29393Z" fill="currentcolor" />
                                            </svg>
                                            <select class="form-select" id="course-cat" aria-label="Default select example" style={{width: '150px'}}>
                                                <option selected disabled>Categories</option>
                                                <option value="1">Business</option>
                                                <option value="2">Data Science</option>
                                                <option value="3">Art & Design</option>
                                                <option value="4">Marketing</option>
                                                <option value="5">Finance</option>
                                            </select>
                                        </div>
                                        <div class="input-grp">
                                            <input type="text" placeholder="Search For Course . . ." />
                                            <button type="submit"><i class="flaticon-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div class="tgmenu__action">
                                    <ul class="list-wrap">
                                        <li class="wishlist-icon">
                                            <a href="cart.html" class="cart-count">
                                                <img src="assets/img/icons/heart.svg" class="injectable" alt="img" />
                                                <span class="wishlist-count">0</span>
                                            </a>
                                        </li>
                                        <li class="mini-cart-icon">
                                            <a href="cart.html" class="cart-count">
                                                <img src="assets/img/icons/cart.svg" class="injectable" alt="img" />
                                                <span class="mini-cart-count">0</span>
                                            </a>
                                        </li>
                                        <li class="header-btn login-btn">
                                            <a href="login.html">Log in</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mobile-login-btn">
                                    <a href="login.html"><img src="assets/img/icons/user.svg" alt="" class="injectable" /></a>
                                </div>
                                <div class="mobile-nav-toggler"><i class="tg-flaticon-menu-1"></i></div>
                            </nav>
                        </div>
                        
                        <div class="tgmobile__menu">
                            <nav class="tgmobile__menu-box">
                                <div class="close-btn"><i class="tg-flaticon-close-1"></i></div>
                                <div class="nav-logo">
                                    <a href="index-2.html"><img src="assets/img/logo/logo.svg" alt="Logo" /></a>
                                </div>
                                <div class="tgmobile__search">
                                    <form action="#">
                                        <input type="text" placeholder="Search here..." />
                                        <button><i class="fas fa-search"></i></button>
                                    </form>
                                </div>
                                <div class="tgmobile__menu-outer">
                                  
                                </div>
                                <div class="social-links">
                                    <ul class="list-wrap">
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="tgmobile__menu-backdrop"></div>
                        
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <main class="main-area fix">

      
        <div class="breadcrumb__area breadcrumb__bg breadcrumb__bg-two" data-background="assets/img/bg/breadcrumb_bg.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="breadcrumb__content">
                            <nav class="breadcrumb">
                                <span property="itemListElement" typeof="ListItem">
                                    <a href="index-2.html">Home</a>
                                </span>
                                <span class="breadcrumb-separator"><i class="fas fa-angle-right"></i></span>
                                <span property="itemListElement" typeof="ListItem">
                                    <a href="index-2.html">Courses</a>
                                </span>
                                <span class="breadcrumb-separator"><i class="fas fa-angle-right"></i></span>
                                <span property="itemListElement" typeof="ListItem">Resolving Conflicts Between Designers And Engineers</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="breadcrumb__shape-wrap">
                <img src="assets/img/others/breadcrumb_shape01.svg" alt="img" class="alltuchtopdown" />
                <img src="assets/img/others/breadcrumb_shape02.svg" alt="img" data-aos="fade-right" data-aos-delay="300" />
                <img src="assets/img/others/breadcrumb_shape03.svg" alt="img" data-aos="fade-up" data-aos-delay="400" />
                <img src="assets/img/others/breadcrumb_shape04.svg" alt="img" data-aos="fade-down-left" data-aos-delay="400" />
                <img src="assets/img/others/breadcrumb_shape05.svg" alt="img" data-aos="fade-left" data-aos-delay="400" />
            </div>
        </div>
        
        <section class="courses__details-area section-py-120">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 col-lg-8">
                        <div class="courses__details-thumb">
                            <img src="assets/img/courses/courses_details.jpg" alt="img" />
                        </div>
                        <div class="courses__details-content">
                            <ul class="courses__item-meta list-wrap">
                                <li class="courses__item-tag">
                                    <a href="course.html">Development</a>
                                </li>
                                <li class="avg-rating"><i class="fas fa-star"></i> (4.5 Reviews)</li>
                            </ul>
                            <h2 class="title">Resolving Conflicts Between Designers And Engineers</h2>
                            <div class="courses__details-meta">
                                <ul class="list-wrap">
                                    <li class="author-two">
                                        <img src="assets/img/courses/course_author001.png" alt="img" />
                                        By
                                        <a href="#">David Millar</a>
                                    </li>
                                    <li class="date"><i class="flaticon-calendar"></i>24/07/2024</li>
                                    <li><i class="flaticon-mortarboard"></i>2,250 Students</li>
                                </ul>
                            </div>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview-tab-pane" type="button" role="tab" aria-controls="overview-tab-pane" aria-selected="true">Overview</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="curriculum-tab" data-bs-toggle="tab" data-bs-target="#curriculum-tab-pane" type="button" role="tab" aria-controls="curriculum-tab-pane" aria-selected="false">Curriculum</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="instructors-tab" data-bs-toggle="tab" data-bs-target="#instructors-tab-pane" type="button" role="tab" aria-controls="instructors-tab-pane" aria-selected="false">Instructors</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane" aria-selected="false">reviews</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">
                                    <div class="courses__overview-wrap">
                                        <h3 class="title">Course Description</h3>
                                        <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.dolor sit amet, consectetur adipiscing elited do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <h3 class="title">What you'll learn in this course?</h3>
                                        <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                        <ul class="about__info-list list-wrap">
                                            <li class="about__info-list-item">
                                                <i class="flaticon-angle-right"></i>
                                                <p class="content">Work with color & Gradients & Grids</p>
                                            </li>
                                            <li class="about__info-list-item">
                                                <i class="flaticon-angle-right"></i>
                                                <p class="content">All the useful shortcuts</p>
                                            </li>
                                            <li class="about__info-list-item">
                                                <i class="flaticon-angle-right"></i>
                                                <p class="content">Be able to create Flyers, Brochures, Advertisements</p>
                                            </li>
                                            <li class="about__info-list-item">
                                                <i class="flaticon-angle-right"></i>
                                                <p class="content">How to work with Images & Text</p>
                                            </li>
                                        </ul>
                                        <p class="last-info">Morem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn.</p>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="curriculum-tab-pane" role="tabpanel" aria-labelledby="curriculum-tab" tabindex="0">
                                    <div class="courses__curriculum-wrap">
                                        <h3 class="title">Course Curriculum</h3>
                                        <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                        <div class="accordion" id="accordionExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingOne">
                                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"  aria-expanded="true" aria-controls="collapseOne">
                                                        Introduction
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <ul class="list-wrap">
                                                            <li class="course-item open-item">
                                                                <a href="https://www.youtube.com/watch?v=b2Az7_lLh3g" class="course-item-link popup-video">
                                                                    <span class="item-name">Course Installation</span>
                                                                    <div class="course-item-meta">
                                                                        <span class="item-meta duration">03:03</span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="course-item">
                                                                <a href="#" class="course-item-link">
                                                                    <span class="item-name">Create a Simple React App</span>
                                                                    <div class="course-item-meta">
                                                                        <span class="item-meta duration">07:48</span>
                                                                        <span class="item-meta course-item-status">
                                                                            <img src="assets/img/icons/lock.svg" alt="icon" />
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="course-item">
                                                                <a href="#" class="course-item-link">
                                                                    <span class="item-name">React for the Rest of us</span>
                                                                    <div class="course-item-meta">
                                                                        <span class="item-meta duration">10:48</span>
                                                                        <span class="item-meta course-item-status">
                                                                            <img src="assets/img/icons/lock.svg" alt="icon" />
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingTwo">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Capacitance and Inductance
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <ul class="list-wrap">
                                                            <li class="course-item">
                                                                <a href="#" class="course-item-link">
                                                                    <span class="item-name">Course Installation</span>
                                                                    <div class="course-item-meta">
                                                                        <span class="item-meta duration">07:48</span>
                                                                        <span class="item-meta course-item-status">
                                                                            <img src="assets/img/icons/lock.svg" alt="icon" />
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="course-item">
                                                                <a href="#" class="course-item-link">
                                                                    <span class="item-name">Create a Simple React App</span>
                                                                    <div class="course-item-meta">
                                                                        <span class="item-meta duration">07:48</span>
                                                                        <span class="item-meta course-item-status">
                                                                            <img src="assets/img/icons/lock.svg" alt="icon" />
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="course-item">
                                                                <a href="#" class="course-item-link">
                                                                    <span class="item-name">React for the Rest of us</span>
                                                                    <div class="course-item-meta">
                                                                        <span class="item-meta duration">10:48</span>
                                                                        <span class="item-meta course-item-status">
                                                                            <img src="assets/img/icons/lock.svg" alt="icon" />
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingThree">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Final Audit
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                                    data-bs-parent="#accordionExample">
                                                    <div class="accordion-body">
                                                        <ul class="list-wrap">
                                                            <li class="course-item">
                                                                <a href="#" class="course-item-link">
                                                                    <span class="item-name">Course Installation</span>
                                                                    <div class="course-item-meta">
                                                                        <span class="item-meta duration">07:48</span>
                                                                        <span class="item-meta course-item-status">
                                                                            <img src="assets/img/icons/lock.svg" alt="icon" />
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="course-item">
                                                                <a href="#" class="course-item-link">
                                                                    <span class="item-name">Create a Simple React App</span>
                                                                    <div class="course-item-meta">
                                                                        <span class="item-meta duration">07:48</span>
                                                                        <span class="item-meta course-item-status">
                                                                            <img src="assets/img/icons/lock.svg" alt="icon" />
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="course-item">
                                                                <a href="#" class="course-item-link">
                                                                    <span class="item-name">React for the Rest of us</span>
                                                                    <div class="course-item-meta">
                                                                        <span class="item-meta duration">10:48</span>
                                                                        <span class="item-meta course-item-status">
                                                                            <img src="assets/img/icons/lock.svg" alt="icon" />
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="instructors-tab-pane" role="tabpanel" aria-labelledby="instructors-tab" tabindex="0">
                                    <div class="courses__instructors-wrap">
                                        <div class="courses__instructors-thumb">
                                            <img src="assets/img/courses/course_instructors.png" alt="img" />
                                        </div>
                                        <div class="courses__instructors-content">
                                            <h2 class="title">Mark Jukarberg</h2>
                                            <span class="designation">UX Design Lead</span>
                                            <p class="avg-rating"><i class="fas fa-star"></i>(4.8 Ratings)</p>
                                            <p>Dorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                            <div class="instructor__social">
                                                <ul class="list-wrap justify-content-start">
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabindex="0">
                                    <div class="courses__rating-wrap">
                                        <h2 class="title">Reviews</h2>
                                        <div class="course-rate">
                                            <div class="course-rate__summary">
                                                <div class="course-rate__summary-value">4.8</div>
                                                <div class="course-rate__summary-stars">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <div class="course-rate__summary-text">
                                                    12 Ratings
                                                </div>
                                            </div>
                                            <div class="course-rate__details">
                                                <div class="course-rate__details-row">
                                                    <div class="course-rate__details-row-star">
                                                        5
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="course-rate__details-row-value">
                                                        <div class="rating-gray"></div>
                                                        <div class="rating" style={{width:'80%'}} title="80%"></div>
                                                        <span class="rating-count">2</span>
                                                    </div>
                                                </div>
                                                <div class="course-rate__details-row">
                                                    <div class="course-rate__details-row-star">
                                                        4
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="course-rate__details-row-value">
                                                        <div class="rating-gray"></div>
                                                        <div class="rating" style={{width:'50%'}} title="50%"></div>
                                                        <span class="rating-count">1</span>
                                                    </div>
                                                </div>
                                                <div class="course-rate__details-row">
                                                    <div class="course-rate__details-row-star">
                                                        3
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="course-rate__details-row-value">
                                                        <div class="rating-gray"></div>
                                                        <div class="rating" style={{width:'0%'}} title="0%"></div>
                                                        <span class="rating-count">0</span>
                                                    </div>
                                                </div>
                                                <div class="course-rate__details-row">
                                                    <div class="course-rate__details-row-star">
                                                        2
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="course-rate__details-row-value">
                                                        <div class="rating-gray"></div>
                                                        <div class="rating" style={{width:'0%'}} title="0%"></div>
                                                        <span class="rating-count">0</span>
                                                    </div>
                                                </div>
                                                <div class="course-rate__details-row">
                                                    <div class="course-rate__details-row-star">
                                                        1
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="course-rate__details-row-value">
                                                        <div class="rating-gray"></div>
                                                        <div class="rating" style={{width:'0%'}} title="0%"></div>
                                                        <span class="rating-count">0</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="course-review-head">
                                            <div class="review-author-thumb">
                                                <img src="assets/img/courses/review-author.png" alt="img" />
                                            </div>
                                            <div class="review-author-content">
                                                <div class="author-name">
                                                    <h5 class="name">Jura Hujaor <span>2 Days ago</span></h5>
                                                    <div class="author-rating">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                                <h4 class="title">The best LMS Design System</h4>
                                                <p>Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis semper bibendum nisi porta, malesuada risus nonerviverra dolor. Vestibulum ante ipsum primis in faucibus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4">
                        <div class="courses__details-sidebar">
                            <div class="courses__details-video">
                                <img src="assets/img/courses/course_thumb02.jpg" alt="img" />
                                <a href="https://www.youtube.com/watch?v=YwrHGratByU" class="popup-video"><i class="fas fa-play"></i></a>
                            </div>
                            <div class="courses__cost-wrap">
                                <span>This Course Fee:</span>
                                <h2 class="title">$18.00 <del>$32.00</del></h2>
                            </div>
                            <div class="courses__information-wrap">
                                <h5 class="title">Course includes:</h5>
                                <ul class="list-wrap">
                                    <li>
                                        <img src="assets/img/icons/course_icon01.svg" alt="img" class="injectable" />
                                        Level
                                        <span>Expert</span>
                                    </li>
                                    <li>
                                        <img src="assets/img/icons/course_icon02.svg" alt="img" class="injectable" />
                                        Duration
                                        <span>11h 20m</span>
                                    </li>
                                    <li>
                                        <img src="assets/img/icons/course_icon03.svg" alt="img" class="injectable" />
                                        Lessons
                                        <span>12</span>
                                    </li>
                                    <li>
                                        <img src="assets/img/icons/course_icon04.svg" alt="img" class="injectable" />
                                        Quizzes
                                        <span>145</span>
                                    </li>
                                    <li>
                                        <img src="assets/img/icons/course_icon05.svg" alt="img" class="injectable" />
                                        Certifications
                                        <span>Yes</span>
                                    </li>
                                    <li>
                                        <img src="assets/img/icons/course_icon06.svg" alt="img" class="injectable" />
                                        Graduation
                                        <span>25K</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="courses__payment">
                                <h5 class="title">Secure Payment:</h5>
                                <img src="assets/img/others/payment.png" alt="img" />
                            </div>
                            <div class="courses__details-social">
                                <h5 class="title">Share this course:</h5>
                                <ul class="list-wrap">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-whatsapp"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                            <div class="courses__details-enroll">
                                <div class="tg-button-wrap">
                                    <a href="courses.html" class="btn btn-two arrow-btn">
                                        See All Instructors
                                        <img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       

    </main>
  
    <footer class="footer__area">
        <div class="footer__top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="footer__widget">
                            <div class="logo mb-35">
                                <a href="index-2.html"><img src="assets/img/logo/secondary_logo.svg" alt="img" /></a>
                            </div>
                            <div class="footer__content">
                                <p>when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.</p>
                                <ul class="list-wrap">
                                    <li>463 7th Ave, NY 10018, USA</li>
                                    <li>+123 88 9900 456</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title">Useful Links</h4>
                            <div class="footer__link">
                                <ul class="list-wrap">
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
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title">Our Company</h4>
                            <div class="footer__link">
                                <ul class="list-wrap">
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="instructor-details.html">Become Teacher</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="instructor-details.html">Instructor</a></li>
                                    <li><a href="events-details.html">Events</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="footer__widget">
                            <h4 class="footer__widget-title">Get In Touch</h4>
                            <div class="footer__contact-content">
                                <p>when an unknown printer took <br /> galley type and scrambled</p>
                                <ul class="list-wrap footer__social">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/facebook.svg" alt="img" class="injectable" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/twitter.svg" alt="img" class="injectable" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/whatsapp.svg" alt="img" class="injectable" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/instagram.svg" alt="img" class="injectable" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="assets/img/icons/youtube.svg" alt="img" class="injectable" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="app-download">
                                <a href="#"><img src="assets/img/others/google-play.svg" alt="img" /></a>
                                <a href="#"><img src="assets/img/others/apple-store.svg" alt="img" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-7">
                        <div class="copy-right-text">
                            <p>© 2010-2024 skillgro.com. All rights reserved.</p>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="footer__bottom-menu">
                            <ul class="list-wrap">
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
    )
}

export default courseDetails;