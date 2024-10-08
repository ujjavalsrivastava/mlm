import React, { useEffect, useState } from "react";

const aboutUs = () => {
  return (
    <React.Fragment>
      <div className="page-title page-title-terms">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content text-center">
                <h2 className="font-cardo fw-7">About Us</h2>
                <ul className="breadcrumbs flex items-center justify-center gap-10">
                  <li>
                    <a href="#" className="flex">
                      <i className="icon-home"></i>
                    </a>
                  </li>
                  <li>
                    <i className="icon-arrow-right"></i>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content pt-0">
        <section className="flat-about ">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-7">
                <div className="heading-content ">
                  <div className="widget box-sub-tag ">
                    <div className="sub-tag-icon">
                      <i className="icon-flash"></i>
                    </div>
                    <div className="sub-tag-title">
                      <p>Digital Duniyaa</p>
                    </div>
                  </div>
                  <h2 className="font-cardo ">
                    Welcome to MD Digital Duniyaa Pvt Ltd to join a lifelong
                    skill base education and business opportunities with us. We
                    have come to all of you for "SIKSHA" , "HUNAR" , and "SEVA"
                    .
                  </h2>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="content-right " data-wow-delay="0.1s">
                  <p>
                    We are giving digital income opportunities to the youth by
                    skilling them. MD Digital Duniyaa pvt ltd. is a leading
                    digital solutions company, dedicated to empowering youth.
                    Our services include digital marketing, web design, social
                    media management, branding, sales, and academic tuition
                    classes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="section-why tf-spacing-3 pt-0 page-about">
        <div className="tf-container">
          <div className="row">
            <div className="col-12 col-md-6 mx-auto">
              <div className="heading-section text-center">
                <h2 className="fw-7 font-cardo ">OUR MISSION</h2>
              </div>
              <p>
                Our mission is to guide the youth toward success in the digital
                landscape. Helping them understand the complexities of digital
                marketing and making them self relevant. With Digital Duniyaa,
                we promise to elevate your business to new heights of digital
                success
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-why tf-spacing-3 pt-0 page-about">
        <div className="tf-container">
          <div className="row">
            <div className="col-12 col-md-6 mx-auto">
              <div className="heading-section text-center">
                <h2 className="fw-7 font-cardo ">OUR VISION</h2>
              </div>
              <p>
                Digital Duniyaa, was created with the objective of making every
                youth skilled, wants the youth to learn better ways of earning
                multiple incomes along with digital marketing skills
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-why tf-spacing-3 pt-0 page-about">
        <div className="tf-container">
          <div className="row">
            <div className="col-12 col-md-6 mx-auto">
              <div className="heading-section text-center">
                <h2 className="fw-7 font-cardo ">OUR AIM</h2>
              </div>
              <p>
                {" "}
                Coming out of the frustration, disappointment, and pain that the
                youth are going through due to a lack of jobs, we are providing
                them with correct financial guidance and multiple sources of
                income through the Digital Duniyaa. We aim to give you mental
                strength along with financial strength so that you can easily
                reach on the top of every stage of life. OUR AIM The Digital
                Duniyaa wants youth between 15 to 35 years of age to get
                financial freedom. And by coming out of the mentality of a job,
                you can fulfill your dreams independently. Our aim is to give
                every partner who joins us an easy income of 5 to 10 lakhs per
                month by making them technically skilled and focusing on their
                overall financial development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default aboutUs;
