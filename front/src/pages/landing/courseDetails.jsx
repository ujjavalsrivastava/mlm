import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axios } from "../../helper/httpHelper";
const courseDetails = () => {
  const { courseId } = useParams();

  const [course, setcourse] = useState(null);
  const fetchCourse = async () => {
    try {
      const response = await axios.get("vimeo/courses");
      // Filtered names based on the search term
      console.log(response.data);
      const filteredNames = response.data.filter(
        (name) => name.courseId === courseId // Ensure both values are numbers
      );
      setcourse(filteredNames);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);
  return (
    <React.Fragment>
      <button className="scroll__top scroll-to-target" data-target="html">
        <i className="tg-flaticon-arrowhead-up"></i>
      </button>

      <main className="main-area fix">
        <div
          className="breadcrumb__area breadcrumb__bg breadcrumb__bg-two"
          data-background="../assets/img/bg/breadcrumb_bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb__content">
                  <nav className="breadcrumb">
                    <span property="itemListElement" typeof="ListItem">
                      <a href="index-2.html">Home</a>
                    </span>
                    <span className="breadcrumb-separator">
                      <i className="fas fa-angle-right"></i>
                    </span>
                    <span property="itemListElement" typeof="ListItem">
                      <a href="index-2.html">Courses</a>
                    </span>
                    <span className="breadcrumb-separator">
                      <i className="fas fa-angle-right"></i>
                    </span>
                    <span property="itemListElement" typeof="ListItem">
                      {course && course[0].name}
                    </span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="breadcrumb__shape-wrap">
            <img
              src="../assets/img/others/breadcrumb_shape01.svg"
              alt="img"
              className="alltuchtopdown"
            />
            <img
              src="../assets/img/others/breadcrumb_shape02.svg"
              alt="img"
              data-aos="fade-right"
              data-aos-delay="300"
            />
            <img
              src="../assets/img/others/breadcrumb_shape03.svg"
              alt="img"
              data-aos="fade-up"
              data-aos-delay="400"
            />
            <img
              src="../assets/img/others/breadcrumb_shape04.svg"
              alt="img"
              data-aos="fade-down-left"
              data-aos-delay="400"
            />
            <img
              src="../assets/img/others/breadcrumb_shape05.svg"
              alt="img"
              data-aos="fade-left"
              data-aos-delay="400"
            />
          </div>
        </div>

        <section className="courses__details-area section-py-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="courses__details-thumb">
                  <img src={course && course[0].pictures.base_link} alt="img" />
                </div>
                <div className="courses__details-content">
                  <ul className="courses__item-meta list-wrap">
                    <li className="courses__item-tag">
                      <a href="course.html">Development</a>
                    </li>
                    <li className="avg-rating">
                      <i className="fas fa-star"></i> (4.5 Reviews)
                    </li>
                  </ul>
                  <h2 className="title">{course && course[0].name}</h2>
                  <div className="courses__details-meta">
                    <ul className="list-wrap">
                      <li className="author-two">
                        <img
                          src="../assets/img/courses/course_author001.png"
                          alt="img"
                        />
                        By
                        <a href="#">David Millar</a>
                      </li>
                      <li className="date">
                        <i className="flaticon-calendar"></i>24/07/2024
                      </li>
                      <li>
                        <i className="flaticon-mortarboard"></i>2,250 Students
                      </li>
                    </ul>
                  </div>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="overview-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#overview-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="overview-tab-pane"
                        aria-selected="true"
                      >
                        Overview
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="curriculum-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#curriculum-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="curriculum-tab-pane"
                        aria-selected="false"
                      >
                        Curriculum
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="instructors-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#instructors-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="instructors-tab-pane"
                        aria-selected="false"
                      >
                        Instructors
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#reviews-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="reviews-tab-pane"
                        aria-selected="false"
                      >
                        reviews
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="overview-tab-pane"
                      role="tabpanel"
                      aria-labelledby="overview-tab"
                      tabindex="0"
                    >
                      <div className="courses__overview-wrap">
                        <h3 className="title">Course Description</h3>
                        <p>
                          Dorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan lacus
                          vel facilisis.dolor sit amet, consectetur adipiscing
                          elited do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <h3 className="title">
                          What you'll learn in this course?
                        </h3>
                        <p>
                          Dorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan.
                        </p>
                        <ul className="about__info-list list-wrap">
                          <li className="about__info-list-item">
                            <i className="flaticon-angle-right"></i>
                            <p className="content">
                              Work with color & Gradients & Grids
                            </p>
                          </li>
                          <li className="about__info-list-item">
                            <i className="flaticon-angle-right"></i>
                            <p className="content">All the useful shortcuts</p>
                          </li>
                          <li className="about__info-list-item">
                            <i className="flaticon-angle-right"></i>
                            <p className="content">
                              Be able to create Flyers, Brochures,
                              Advertisements
                            </p>
                          </li>
                          <li className="about__info-list-item">
                            <i className="flaticon-angle-right"></i>
                            <p className="content">
                              How to work with Images & Text
                            </p>
                          </li>
                        </ul>
                        <p className="last-info">
                          Morem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan.Dorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod tempor incididunt ut labore et dolore magn.
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="curriculum-tab-pane"
                      role="tabpanel"
                      aria-labelledby="curriculum-tab"
                      tabindex="0"
                    >
                      <div className="courses__curriculum-wrap">
                        <h3 className="title">Course Curriculum</h3>
                        <p>
                          Dorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua Quis ipsum suspendisse ultrices
                          gravida. Risus commodo viverra maecenas accumsan.
                        </p>
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Introduction
                              </button>
                            </h2>
                            <div
                              id="collapseOne"
                              className="accordion-collapse collapse show"
                              aria-labelledby="headingOne"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <ul className="list-wrap">
                                  <li className="course-item open-item">
                                    <a
                                      href="https://www.youtube.com/watch?v=b2Az7_lLh3g"
                                      className="course-item-link popup-video"
                                    >
                                      <span className="item-name">
                                        Course Installation
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          03:03
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="course-item">
                                    <a href="#" className="course-item-link">
                                      <span className="item-name">
                                        Create a Simple React App
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          07:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="../assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="course-item">
                                    <a href="#" className="course-item-link">
                                      <span className="item-name">
                                        React for the Rest of us
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          10:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="../assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Capacitance and Inductance
                              </button>
                            </h2>
                            <div
                              id="collapseTwo"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingTwo"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <ul className="list-wrap">
                                  <li className="course-item">
                                    <a href="#" className="course-item-link">
                                      <span className="item-name">
                                        Course Installation
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          07:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="../assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="course-item">
                                    <a href="#" className="course-item-link">
                                      <span className="item-name">
                                        Create a Simple React App
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          07:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="../assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="course-item">
                                    <a href="#" className="course-item-link">
                                      <span className="item-name">
                                        React for the Rest of us
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          10:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="../assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Final Audit
                              </button>
                            </h2>
                            <div
                              id="collapseThree"
                              className="accordion-collapse collapse"
                              aria-labelledby="headingThree"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <ul className="list-wrap">
                                  <li className="course-item">
                                    <a href="#" className="course-item-link">
                                      <span className="item-name">
                                        Course Installation
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          07:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="../assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="course-item">
                                    <a href="#" className="course-item-link">
                                      <span className="item-name">
                                        Create a Simple React App
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          07:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="../assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                  <li className="course-item">
                                    <a href="#" className="course-item-link">
                                      <span className="item-name">
                                        React for the Rest of us
                                      </span>
                                      <div className="course-item-meta">
                                        <span className="item-meta duration">
                                          10:48
                                        </span>
                                        <span className="item-meta course-item-status">
                                          <img
                                            src="../assets/img/icons/lock.svg"
                                            alt="icon"
                                          />
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
                    <div
                      className="tab-pane fade"
                      id="instructors-tab-pane"
                      role="tabpanel"
                      aria-labelledby="instructors-tab"
                      tabindex="0"
                    >
                      <div className="courses__instructors-wrap">
                        <div className="courses__instructors-thumb">
                          <img
                            src="../assets/img/courses/course_instructors.png"
                            alt="img"
                          />
                        </div>
                        <div className="courses__instructors-content">
                          <h2 className="title">Mark Jukarberg</h2>
                          <span className="designation">UX Design Lead</span>
                          <p className="avg-rating">
                            <i className="fas fa-star"></i>(4.8 Ratings)
                          </p>
                          <p>
                            Dorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua Quis ipsum suspendisse ultrices
                            gravida. Risus commodo viverra maecenas accumsan.
                          </p>
                          <div className="instructor__social">
                            <ul className="list-wrap justify-content-start">
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
                    <div
                      className="tab-pane fade"
                      id="reviews-tab-pane"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                      tabindex="0"
                    >
                      <div className="courses__rating-wrap">
                        <h2 className="title">Reviews</h2>
                        <div className="course-rate">
                          <div className="course-rate__summary">
                            <div className="course-rate__summary-value">
                              4.8
                            </div>
                            <div className="course-rate__summary-stars">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </div>
                            <div className="course-rate__summary-text">
                              12 Ratings
                            </div>
                          </div>
                          <div className="course-rate__details">
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                5<i className="fas fa-star"></i>
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray"></div>
                                <div
                                  className="rating"
                                  style={{ width: "80%" }}
                                  title="80%"
                                ></div>
                                <span className="rating-count">2</span>
                              </div>
                            </div>
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                4<i className="fas fa-star"></i>
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray"></div>
                                <div
                                  className="rating"
                                  style={{ width: "50%" }}
                                  title="50%"
                                ></div>
                                <span className="rating-count">1</span>
                              </div>
                            </div>
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                3<i className="fas fa-star"></i>
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray"></div>
                                <div
                                  className="rating"
                                  style={{ width: "0%" }}
                                  title="0%"
                                ></div>
                                <span className="rating-count">0</span>
                              </div>
                            </div>
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                2<i className="fas fa-star"></i>
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray"></div>
                                <div
                                  className="rating"
                                  style={{ width: "0%" }}
                                  title="0%"
                                ></div>
                                <span className="rating-count">0</span>
                              </div>
                            </div>
                            <div className="course-rate__details-row">
                              <div className="course-rate__details-row-star">
                                1<i className="fas fa-star"></i>
                              </div>
                              <div className="course-rate__details-row-value">
                                <div className="rating-gray"></div>
                                <div
                                  className="rating"
                                  style={{ width: "0%" }}
                                  title="0%"
                                ></div>
                                <span className="rating-count">0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="course-review-head">
                          <div className="review-author-thumb">
                            <img
                              src="../assets/img/courses/review-author.png"
                              alt="img"
                            />
                          </div>
                          <div className="review-author-content">
                            <div className="author-name">
                              <h5 className="name">
                                Jura Hujaor <span>2 Days ago</span>
                              </h5>
                              <div className="author-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                            </div>
                            <h4 className="title">
                              The best LMS Design System
                            </h4>
                            <p>
                              Maximus ligula eleifend id nisl quis interdum. Sed
                              malesuada tortor non turpis semper bibendum nisi
                              porta, malesuada risus nonerviverra dolor.
                              Vestibulum ante ipsum primis in faucibus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div className="courses__details-sidebar">
                  <div className="courses__details-video">
                    <img
                      src="../assets/img/courses/course_thumb02.jpg"
                      alt="img"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=YwrHGratByU"
                      className="popup-video"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                  <div className="courses__cost-wrap">
                    <span>This Course Fee:</span>
                    <h2 className="title">
                      {course && course[0].price.toFixed(2)}
                    </h2>
                  </div>
                  <div className="courses__information-wrap">
                    <h5 className="title">Course includes:</h5>
                    <ul className="list-wrap">
                      <li>
                        <img
                          src="../assets/img/icons/course_icon01.svg"
                          alt="img"
                          className="injectable"
                        />
                        Level
                        <span>Expert</span>
                      </li>
                      <li>
                        <img
                          src="../assets/img/icons/course_icon02.svg"
                          alt="img"
                          className="injectable"
                        />
                        Duration
                        <span>11h 20m</span>
                      </li>
                      <li>
                        <img
                          src="../assets/img/icons/course_icon03.svg"
                          alt="img"
                          className="injectable"
                        />
                        Lessons
                        <span>12</span>
                      </li>
                      <li>
                        <img
                          src="../assets/img/icons/course_icon04.svg"
                          alt="img"
                          className="injectable"
                        />
                        Quizzes
                        <span>145</span>
                      </li>
                      <li>
                        <img
                          src="../assets/img/icons/course_icon05.svg"
                          alt="img"
                          className="injectable"
                        />
                        Certifications
                        <span>Yes</span>
                      </li>
                      <li>
                        <img
                          src="../assets/img/icons/course_icon06.svg"
                          alt="img"
                          className="injectable"
                        />
                        Graduation
                        <span>25K</span>
                      </li>
                    </ul>
                  </div>
                  <div className="courses__payment">
                    <h5 className="title">Secure Payment:</h5>
                    <img src="../assets/img/others/payment.png" alt="img" />
                  </div>
                  <div className="courses__details-social">
                    <h5 className="title">Share this course:</h5>
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
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="courses__details-enroll">
                    <div className="tg-button-wrap">
                      <a href="courses.html" className="btn btn-two arrow-btn">
                        See All Instructors
                        <img
                          src="../assets/img/icons/right_arrow.svg"
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
        </section>
      </main>
      {/*   
    <footer className="footer__area">
        <div className="footer__top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="footer__widget">
                            <div className="logo mb-35">
                                <a href="index-2.html"><img src="../assets/img/logo/secondary_logo.svg" alt="img" /></a>
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
                                            <img src="../assets/img/icons/facebook.svg" alt="img" className="injectable" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="../assets/img/icons/twitter.svg" alt="img" className="injectable" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="../assets/img/icons/whatsapp.svg" alt="img" className="injectable" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="../assets/img/icons/instagram.svg" alt="img" className="injectable" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <img src="../assets/img/icons/youtube.svg" alt="img" className="injectable" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="app-download">
                                <a href="#"><img src="../assets/img/others/google-play.svg" alt="img" /></a>
                                <a href="#"><img src="../assets/img/others/apple-store.svg" alt="img" /></a>
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
    </footer> */}
    </React.Fragment>
  );
};

export default courseDetails;
