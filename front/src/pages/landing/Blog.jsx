import React, { useEffect, useState } from "react";

const Blog = () => {
  return (
    <React.Fragment>
      <main className="main-area fix">
        <section
          className="breadcrumb__area breadcrumb__bg"
          data-background="assets/img/bg/breadcrumb_bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb__content">
                  <h3 className="title">Blog Full Width</h3>
                  <nav className="breadcrumb">
                    <span property="itemListElement" typeof="ListItem">
                      <a href="index-2.html">Home</a>
                    </span>
                    <span className="breadcrumb-separator">
                      <i className="fas fa-angle-right"></i>
                    </span>
                    <span property="itemListElement" typeof="ListItem">
                      Blogs
                    </span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="breadcrumb__shape-wrap">
            <img
              src="assets/img/others/breadcrumb_shape01.svg"
              alt="img"
              className="alltuchtopdown"
            />
            <img
              src="assets/img/others/breadcrumb_shape02.svg"
              alt="img"
              data-aos="fade-right"
              data-aos-delay="300"
            />
            <img
              src="assets/img/others/breadcrumb_shape03.svg"
              alt="img"
              data-aos="fade-up"
              data-aos-delay="400"
            />
            <img
              src="assets/img/others/breadcrumb_shape04.svg"
              alt="img"
              data-aos="fade-down-left"
              data-aos-delay="400"
            />
            <img
              src="assets/img/others/breadcrumb_shape05.svg"
              alt="img"
              data-aos="fade-left"
              data-aos-delay="400"
            />
          </div>
        </section>

        <section className="blog-area section-py-120">
          <div className="container">
            <div className="row gutter-20">
              <div className="col-xl-3 col-lg-4 col-md-6">
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post02.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Students
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post03.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Science
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post04.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Agency
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post05.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Agency
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post06.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Agency
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post07.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Agency
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post08.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Agency
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post09.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Agency
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post10.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Agency
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post11.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Agency
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
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="blog__post-item shine__animate-item">
                  <div className="blog__post-thumb">
                    <a href="blog-details.html" className="shine__animate-link">
                      <img src="assets/img/blog/blog_post12.jpg" alt="img" />
                    </a>
                    <a href="blog.html" className="post-tag">
                      Agency
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
            <nav className="pagination__wrap mt-25">
              <ul className="list-wrap">
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="blog.html">2</a>
                </li>
                <li>
                  <a href="blog.html">3</a>
                </li>
                <li>
                  <a href="blog.html">4</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Blog;
