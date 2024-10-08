import React, { useEffect, useState } from "react";

const Refund = () => {
  return (
    <React.Fragment>
      <div className="page-title page-title-terms">
        <div className="tf-container">
          <div className="row">
            <div className="col-12">
              <div className="content text-center">
                <h2 className="font-cardo fw-7">Refund Policy</h2>
                <ul className="breadcrumbs flex items-center justify-center gap-10">
                  <li>
                    <a href="#" className="flex">
                      <i className="icon-home"></i>
                    </a>
                  </li>
                  <li>
                    <i className="icon-arrow-right"></i>
                  </li>
                  <li>Refund Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content pt-0">
        <section className="section-page-terms">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="content">
                  <h2>General Information</h2>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    Refunds for any eligible transactions may take 7-10 working
                    days to reflect in your account. This timeframe is dependent
                    on the processing times of our third-party payment gateways.
                    We appreciate your patience and understanding as we work
                    diligently to ensure a smooth refund process. In certain
                    cases, delays may occur due to processing times by banks,
                    and we actively work to resolve them by maintaining constant
                    communication with the payment gateways.
                  </p>
                  <h3>(II) Refund Available</h3>
                  <br />
                  <h4>Digital Duniyaa Bundle Courses</h4>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    Our policy allows customers to request a refund for their
                    purchase within 24 hours of the original transaction.
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    <strong>*Disclaimer*</strong>
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    Please note that our company does not entertain refund
                    requests after 24 hours of the transaction.
                    <br />A payment gateway fee @ 2% of the paid amount and
                    processing fee @5% of the paid amount will be deducted from
                    the amount to be refunded.
                  </p>
                  <h4>Process for Refund Request</h4>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    For the refund request, you need to mail at
                    info@digitalduniyaa.in. In the following format with
                    registered email ID only-:
                  </p>
                  <ul>
                    <li>Full Name &#8211;</li>
                    <li>Registered e-mail ID &#8211;</li>
                    <li>Registration date &#8211;</li>
                    <li>
                      Screenshot of Payment Invoice with date and time (You must
                      have received on e-mail/message when you paid) &#8211;
                    </li>
                    <li>Reason for refund &#8211;</li>
                  </ul>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    Note-: For the &#8220;Refund&#8221; you need to mail us only
                    at info@digitalduniyaa.in
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    <strong>Refund Cancellation Policy</strong>
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    Once you cancel your refund request, this claim will not be
                    reversed in the future.
                  </p>
                  <h3>(II) No Refund Available</h3>
                  <br />
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    No Refund will be given to the customer for the purchase of
                    any package made by the customer directly from the Digital
                    Duniyaa website &#8220;www.digitalduniyaa.in&#8221; or
                    through the affiliate link of the person who referred
                    him/her to the Digital Duniyaa website after 24 hours of the
                    purchase under any circumstances.
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    <strong>Digital Duniyaa Prime</strong>
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    Digital Duniyaa Prime subscription is non refundable that
                    means once purchased, it can&#8217;t be refunded under any
                    circumstances whatsoever as per the company norms.
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    <strong>Digital Duniyaa Upskilling</strong>
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    Digital Duniyaa Upskilling subscription is non refundable
                    that means once purchased, it can&#8217;t be refunded under
                    any circumstances whatsoever as per the company norms.
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    <strong>Content Creation Webinar</strong>
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    The registration fee for the workshop is non-refundable. It
                    can&#8217;t be cancelled or refunded under any circumstances
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    <strong>One-on-One Consultation</strong>
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    The registration fee for the session is non-refundable. It
                    can&#8217;t be cancelled or refunded under any circumstances
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    <strong>
                      Sunday Special Training Powered by Digital Duniyaa
                    </strong>
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    The registration fee for the workshop is non-refundable. It
                    can&#8217;t be cancelled or refunded under any circumstances
                  </p>
                  <h2>Contact Us</h2>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    Please send your feedback, complaints, comments, requests
                    for technical support on support@digitalduniyaa.in
                  </p>
                  <p className="text-1 fs-15 " data-wow-delay="0s">
                    For any requirement of information, please mail us on
                    info@digitalduniyaa.in
                    <br />
                    For any refund related queries, Kindly mail us on
                    info@digitalduniyaa.in
                    <br />
                    For any enrolment queries and money related concerns, Kindly
                    WhatsApp us on: +91 9170355968
                    <br />
                    Customer Support Number: +91 9170355968
                    <br />
                    (Available: Monday &#8211; Sunday 9:30 AM-6:00 PM)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Refund;
