import React, { useEffect, useState } from "react";
import style from "./home.module.css";

function Landing() {
  const [product, setProduct] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [productId, setproductId] = useState("");

  const fetchProduct = async () => {
    try {
      const response = await axios.get("vimeo/courses");
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect((row) => {
    fetchProduct();
  }, []);

  return (
    <React.Fragment>
      <button className="scroll__top scroll-to-target" data-target="html">
        <i className="tg-flaticon-arrowhead-up"></i>
      </button>

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
                <div className={style.categories__wrap}>
                  <div className="swiper categories-active">
                    <div className={style.categorySection}>
                      <div className={style.swiper_slide}>
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
                      <div className={style.swiper_slide}>
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
                      <div className={style.swiper_slide}>
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
                      <div className={style.swiper_slide}>
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
                      <div className={style.swiper_slide}>
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
                      <div className={style.swiper_slide}>
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
                      <div className={style.swiper_slide}>
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

        <div className={`${style.brand_area}`}>
          <div className="container-fluid">
            <div className="marquee_mode">
              <div
                style={{
                  width: "100000px",
                  transform: "translateX(0px)",
                  animation:
                    "85.725s linear 0s infinite normal none running marqueeAnimation-5396873",
                }}
                className="js-marquee-wrapper"
              >
                <div
                  style={{ marginRight: "35px", float: "left" }}
                  className={style.js_marquee}
                >
                  <div className={style.brand__item}>
                    <a href="#">
                      <img src="assets/img/brand/brand01.png" alt="brand" />
                    </a>
                    <img src="assets/img/icons/brand_star.svg" alt="star" />
                  </div>
                  <div className={style.brand__item}>
                    <a href="#">
                      <img src="assets/img/brand/brand02.png" alt="brand" />
                    </a>
                    <img src="assets/img/icons/brand_star.svg" alt="star" />
                  </div>
                  <div className={style.brand__item}>
                    <a href="#">
                      <img src="assets/img/brand/brand03.png" alt="brand" />
                    </a>
                    <img src="assets/img/icons/brand_star.svg" alt="star" />
                  </div>
                  <div className={style.brand__item}>
                    <a href="#">
                      <img src="assets/img/brand/brand04.png" alt="brand" />
                    </a>
                    <img src="assets/img/icons/brand_star.svg" alt="star" />
                  </div>
                  <div className={style.brand__item}>
                    <a href="#">
                      <img src="assets/img/brand/brand05.png" alt="brand" />
                    </a>
                    <img src="assets/img/icons/brand_star.svg" alt="star" />
                  </div>
                  <div className={style.brand__item}>
                    <a href="#">
                      <img src="assets/img/brand/brand06.png" alt="brand" />
                    </a>
                    <img src="assets/img/icons/brand_star.svg" alt="star" />
                  </div>
                  <div className={style.brand__item}>
                    <a href="#">
                      <img src="assets/img/brand/brand07.png" alt="brand" />
                    </a>
                    <img src="assets/img/icons/brand_star.svg" alt="star" />
                  </div>
                  <div className={style.brand__item}>
                    <a href="#">
                      <img src="assets/img/brand/brand04.png" alt="brand" />
                    </a>
                    <img src="assets/img/icons/brand_star.svg" alt="star" />
                  </div>
                  <div className={style.brand__item}>
                    <a href="#">
                      <img src="assets/img/brand/brand03.png" alt="brand" />
                    </a>
                    <img src="assets/img/icons/brand_star.svg" alt="star" />
                  </div>
                </div>
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
                      <p>The Most World Class Instructors</p>
                    </li>
                    <li className="about__info-list-item">
                      <i className="flaticon-angle-right"></i>
                      <p>Access Your Class anywhere</p>
                    </li>
                    <li className="about__info-list-item">
                      <i className="flaticon-angle-right"></i>
                      <p>Flexible Course Plan</p>
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
                  <div className={style.categorySection}>
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                  <div className={style.categorySection}>
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                  <div className={style.categorySection}>
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                  <div className={style.categorySection}>
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
                    <div className={style.swiper_slide}>
                      <div
                        className={`${style.courses__item} ${style.shine__animate_item}`}
                      >
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
    </React.Fragment>
  );
}

export default Landing;
