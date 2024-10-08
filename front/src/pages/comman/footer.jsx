import { Link } from "react-router-dom";

const footer = () => {
  const handleClick = () => {
    // Scroll to the top of the page when clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling
    });
  };

  return (
    <>
      <footer id="footer" className="footer style-2">
        <div className="footer-wrap">
          <div className="footer-body">
            <div className="tf-container">
              <div className="row">
                <div className="col-12">
                  <div className="footer-body-wrap flex justify-between">
                    <div className="footer-more-infor">
                      <div
                        className="footer-logo"
                        style={{ visibility: "hidden" }}
                      >
                        <a href="#">
                          <img src="images/logo/logo.svg" alt="" />
                        </a>
                      </div>
                      <p className="pb-3">
                        MD Digital Duniyaa Pvt. Ltd. is a leading digital
                        solutions company dedicated to empowering youth by
                        providing digital income opportunities through skill
                        development courses and classes.
                      </p>
                      <ul className="tf-social-icon flex items-center gap-10 pt-3">
                        <li>
                          <a href="#">
                            <i className="flaticon-facebook-1"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="icon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-linkedin-1"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="footer-menu-list">
                      <h5 className="fw-5">Company</h5>
                      <ul>
                        <li>
                          <Link to={"/about-us"} onClick={handleClick}>
                            About Us{" "}
                          </Link>{" "}
                        </li>
                        <li>
                          <Link to={"/contact-us"} onClick={handleClick}>
                            Contact Us{" "}
                          </Link>{" "}
                        </li>
                        ?
                      </ul>
                    </div>
                    <div className="footer-menu-list">
                      <h5 className="fw-5">Useful Links</h5>
                      <ul>
                        <li>
                          <Link to={"/disclaimer"} onClick={handleClick}>
                            Disclaimer{" "}
                          </Link>{" "}
                        </li>
                        <li>
                          <Link to={"/refund"} onClick={handleClick}>
                            {" "}
                            Refund Policy
                          </Link>{" "}
                        </li>
                        <li>
                          <Link to={"/terms-condition"} onClick={handleClick}>
                            {" "}
                            Terms and Conditions
                          </Link>{" "}
                        </li>
                        <li>
                          <Link to={"/privacy-policy"} onClick={handleClick}>
                            {" "}
                            Privacy Policy
                          </Link>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="tf-container">
              <div className="row">
                <div className="col-12">
                  <div className="footer-bottom-wrap flex justify-center items-center">
                    <p>
                      © 2024 DigitalDuniyaa.in (A Unit of MD Digital Duniyaa
                      Pvt. Ltd.). All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
