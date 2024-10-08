import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { axios } from "../../helper/httpHelper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Landing() {
  const [product, setProduct] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [productId, setproductId] = useState("");
  const [cci, setCci] = useState(0);
  const [uap, setUap] = useState(0);
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(33.33);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("vimeo/courses");
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextCourse = () => {
    if (cci < 4 + product.length) {
      setCci(cci + 1);
    }
  };

  const handlePrevousCourse = () => {
    if (cci > 1) {
      setCci(cci - 1);
    }
  };
  const handleNextUpcoming = () => {
    if (uap < 3) {
      setUap(uap + 1);
    }
  };

  const handlePrevousUpcoming = () => {
    if (uap > 1) {
      setUap(uap - 1);
    }
  };

  useEffect(() => {
    fetchProduct();
    const updateCenterSlidePercentage = () => {
      if (window.innerWidth < 768) {
        setCenterSlidePercentage(100);
      } else if (window.innerWidth < 1024) {
        setCenterSlidePercentage(50);
      } else {
        setCenterSlidePercentage(33.33);
      }
    };

    updateCenterSlidePercentage();

    window.addEventListener("resize", updateCenterSlidePercentage);

    return () =>
      window.removeEventListener("resize", updateCenterSlidePercentage);
  }, []);

  return (
    <React.Fragment>
      <div className="page-title-home9">
        <div className="swiper-container slider-home9">
          <div className="swiper-wrapper">
            <div className="swiper-slide" data-year="Start Your Career">
              <div className="image">
                <img src="assets/images/dd-banner.jpg" alt="" />
              </div>
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="content">
                      <div>
                        <div className="widget box-sub-tag">
                          <div className="sub-tag-icon">
                            <i className="icon-flash"></i>
                          </div>
                          <div className="sub-tag-title">
                            <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                              We are Digital Duniyaa
                            </p>
                          </div>
                        </div>
                        <h1
                          className=" fw-7 "
                          style={{
                            textShadow: "0 2px black",
                            marginBottom: "-137px",
                          }}
                        >
                          हुनर से शिखर तक
                          <br />
                          <div
                            className="bottom-btns "
                            style={{ marginTop: "10px" }}
                          >
                            <Link to={"/register"}>
                              <a href="#" className="tf-btn style-secondary">
                                Join Today
                                <i className="icon-arrow-top-right"></i>
                              </a>
                            </Link>
                          </div>
                        </h1>
                      </div>
                    </div>
                    <div className="bot-wrap"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content pt-0">
        <section className="section-about-box style-1 tf-spacing-23">
          <div className="tf-container">
            <div className="row items-center">
              <div className="col-md-6 col-lg-5">
                <div className="content-wrap">
                  <div className="box-sub-tag">
                    <div className="sub-tag-icon">
                      <i className="icon-flash"></i>
                    </div>
                    <div className="sub-tag-title">
                      <p>About Us</p>
                    </div>
                  </div>
                  <div data-aos-duration="1000">
                    <h2 className="title-content fw-7 font-cardo">
                      <span className="tf-secondary-color">
                        Digital Duniyaa
                      </span>
                      : Digital Income <br /> Opportunities For Youth
                    </h2>

                    <p className="text-content">
                      MD Digital Duniyaa Pvt. Ltd. helps young people find
                      digital income opportunities by focusing on skill
                      development. Join us to gain lifelong, skill-based
                      education and explore business opportunities for a bright
                      future.
                    </p>
                    <a className="tf-btn style-secondary" href="#">
                      Learn More<i className="icon-arrow-top-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" col-md-6 col-lg-7">
                <div className="box-img">
                  <div className="wrap-image-agent">
                    <div className="image">
                      <img
                        className="lazyload"
                        data-src="assets/images/about-img1.png"
                        src="assets/images/about-img1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="wrap-images">
                    <div className="image">
                      <img
                        className="lazyload"
                        data-src="assets/images/about-2.jpg"
                        src="assets/images/about-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="image">
                      <img
                        className="lazyload"
                        data-src="assets/images/about-3.jpg"
                        src="assets/images/about-3.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-why tf-spacing-23 pt-0">
          <div className="tf-container">
            <div className="row">
              <div className="col-sm-4">
                <div className="icons-box">
                  <div className="icons has-ellipse">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      style={{ marginTop: "25px" }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.9529 40.8832C34.9529 42.8185 33.384 44.3875 31.4486 44.3875H6.35391C4.41855 44.3875 2.84961 42.8185 2.84961 40.8832C2.84961 34.9769 7.6374 30.1891 13.5383 30.1891H14.3406C15.2446 30.1891 15.9774 29.4563 15.9774 28.5523V22.5095H21.8251V28.5523C21.8251 29.4563 22.5579 30.1891 23.4619 30.1891H24.2643C30.1651 30.1891 34.9529 34.9769 34.9529 40.8832Z"
                        fill="white"
                      />
                      <path
                        d="M34.9547 40.8848C34.9547 42.8171 33.3842 44.3876 31.4473 44.3876H6.35508C4.41816 44.3876 2.84766 42.8171 2.84766 40.8848C2.84766 37.9314 4.04736 35.2575 5.97959 33.3206C7.59131 31.7042 9.71592 30.6052 12.0878 30.2893C13.379 32.7344 15.9478 34.3965 18.9012 34.3965C21.8546 34.3965 24.4232 32.7344 25.7146 30.2893C30.9299 30.9945 34.9547 35.468 34.9547 40.8848Z"
                        fill="white"
                      />
                      <path
                        d="M31.0942 31.0122V44.883H6.70996V31.0122C6.70996 29.9709 7.5541 29.1267 8.59541 29.1267H29.2088C30.2501 29.1267 31.0942 29.9709 31.0942 31.0122Z"
                        fill="#E9DECE"
                      />
                      <path
                        d="M33.2017 46.7685C33.2017 45.7272 32.3575 44.8831 31.3162 44.8831H6.48897C5.44766 44.8831 4.60352 45.7272 4.60352 46.7685C4.60352 47.8098 5.44766 48.654 6.48897 48.654H31.3161C32.3575 48.654 33.2017 47.8098 33.2017 46.7685Z"
                        fill="white"
                      />
                      <path
                        d="M19.8602 39.2803C21.1179 38.7591 21.7148 37.3169 21.1935 36.0593C20.6722 34.8017 19.2301 34.2047 17.9725 34.726C16.7148 35.2473 16.1179 36.6894 16.6392 37.9471C17.1605 39.2047 18.6026 39.8016 19.8602 39.2803Z"
                        fill="white"
                      />
                      <path
                        d="M47.1521 17.7098C47.1521 20.5021 44.8885 22.7657 42.0963 22.7657H33.8428V17.7098C33.8428 14.9175 36.1063 12.6541 38.8985 12.6541H42.0963C44.8886 12.6541 47.1521 14.9176 47.1521 17.7098Z"
                        fill="#E9DECE"
                      />
                      <path
                        d="M8.35352 21.7937V11.8933C8.35352 6.06826 13.0756 1.34619 18.9006 1.34619C24.7256 1.34619 29.4478 6.06826 29.4478 11.8933V21.7936C29.4478 23.4403 28.1128 24.7753 26.466 24.7753L11.3354 24.7754C9.68857 24.7754 8.35352 23.4404 8.35352 21.7937Z"
                        fill="#E9DECE"
                      />
                      <path
                        d="M27.3408 13.8208V19.0017C27.3408 23.6632 23.5619 27.4421 18.9004 27.4421C14.2389 27.4421 10.46 23.6632 10.46 19.0017V13.8208C10.46 12.0207 11.9193 10.5613 13.7195 10.5613H24.0812C25.8814 10.5614 27.3408 12.0207 27.3408 13.8208Z"
                        fill="white"
                      />
                      <path
                        d="M10.462 15.3365V19.1558H9.53174C8.47705 19.1558 7.62207 18.3008 7.62207 17.2461C7.62207 16.1914 8.47705 15.3364 9.53174 15.3364L10.462 15.3365Z"
                        fill="white"
                      />
                      <path
                        d="M27.3398 15.3365V19.1558H28.2701C29.3248 19.1558 30.1798 18.3008 30.1798 17.2461C30.1798 16.1914 29.3248 15.3364 28.2701 15.3364L27.3398 15.3365Z"
                        fill="white"
                      />
                      <path
                        d="M5.254 44.7339C4.56523 45.1535 4.1 45.9046 4.1 46.7685C4.1 48.0857 5.17148 49.1572 6.48867 49.1572H31.3159C32.6331 49.1572 33.7046 48.0857 33.7046 46.7685C33.7046 45.9042 33.2389 45.1529 32.5496 44.7334C34.2248 44.2533 35.4556 42.7108 35.4556 40.8833C35.4556 37.516 33.9572 34.4974 31.5978 32.444V31.0121C31.5978 29.6949 30.5261 28.6234 29.2088 28.6234H22.3369C22.3353 28.5993 22.3277 28.5769 22.3277 28.5524V27.2601C23.4359 26.7985 24.4313 26.1205 25.2622 25.2786H26.4662C28.3878 25.2786 29.9512 23.7151 29.9512 21.7936V18.9717C30.4013 18.5332 30.683 17.9228 30.683 17.2462C30.683 16.5697 30.4013 15.9594 29.9512 15.5208V11.8935C29.9512 5.80034 24.9938 0.843018 18.9007 0.843018C12.8075 0.843018 7.85029 5.80024 7.85029 11.8934V15.5208C7.4002 15.9593 7.11846 16.5696 7.11846 17.2461C7.11846 17.9227 7.4002 18.5331 7.85029 18.9716V21.7938C7.85029 23.7153 9.41377 25.2788 11.3353 25.2788H12.5395C13.3702 26.1206 14.3654 26.7985 15.4734 27.2601V28.5525C15.4734 28.5771 15.4659 28.5994 15.4643 28.6235H8.5957C7.27852 28.6235 6.20674 29.695 6.20674 31.0122V32.4418C3.84551 34.4954 2.3457 37.5146 2.3457 40.8833C2.3457 42.7114 3.57764 44.2543 5.254 44.7339ZM31.3159 48.1506H6.48857C5.72647 48.1506 5.10645 47.5306 5.10645 46.7685C5.10645 46.0064 5.72647 45.3864 6.48857 45.3864H31.3159C32.078 45.3864 32.698 46.0064 32.698 46.7685C32.698 47.5306 32.078 48.1506 31.3159 48.1506ZM34.449 40.8833C34.449 42.4876 33.1827 43.7981 31.5979 43.8768V33.8341C33.3604 35.6639 34.449 38.146 34.449 40.8833ZM28.9447 21.7935C28.9447 23.1601 27.8329 24.2719 26.4663 24.2719H26.1105C27.0733 22.9584 27.6853 21.3772 27.8111 19.6591C28.1667 19.6418 28.3967 19.7123 28.9446 19.5512V21.7935H28.9447ZM29.6766 17.246C29.6766 18.0216 29.0457 18.6525 28.2701 18.6525H27.8444V15.8399H28.2701C29.0457 15.8399 29.6766 16.4708 29.6766 17.246ZM8.85693 11.8934C8.85693 6.35513 13.3625 1.84956 18.9008 1.84956C24.4391 1.84956 28.9446 6.35513 28.9446 11.8934V14.9412C28.403 14.782 28.1744 14.85 27.8444 14.8334V13.8208C27.8444 11.7459 26.1566 10.0582 24.0817 10.0582H13.7198C11.6449 10.0582 9.95713 11.7459 9.95713 13.8208V14.8334C9.73535 14.8445 9.38418 14.7863 8.85693 14.9412V11.8934ZM8.1251 17.246C8.1251 16.4707 8.75596 15.8399 9.53154 15.8399H9.95723V18.6525H9.53154C8.75596 18.6525 8.1251 18.0217 8.1251 17.246ZM11.3354 24.2721C9.96875 24.2721 8.85693 23.1603 8.85693 21.7937V19.5512C9.40274 19.7116 9.62783 19.6415 9.99043 19.6591C10.1163 21.3773 10.7283 22.9585 11.6912 24.2721H11.3354ZM10.9649 19.026C10.9648 18.4938 10.9654 20.9541 10.9637 13.8208C10.9637 12.3011 12.2001 11.0647 13.7198 11.0647H24.0817C25.6015 11.0647 26.8379 12.301 26.8379 13.8208C26.8378 14.3531 26.8384 11.8928 26.8366 19.026C26.8233 23.3914 23.2692 26.9388 18.9008 26.9388C14.5323 26.9388 10.9783 23.3914 10.9649 19.026ZM16.4802 28.5524V27.6035C18.0743 28.0529 19.682 28.0657 21.3213 27.6036V28.5524C21.3213 28.5766 21.3255 28.5996 21.3266 28.6234H16.475C16.4759 28.5996 16.4802 28.5766 16.4802 28.5524ZM7.21338 31.0122C7.21338 30.25 7.8334 29.63 8.5957 29.63H29.2089C29.9712 29.63 30.5912 30.25 30.5912 31.0122V44.3798H7.21338V31.0122ZM6.20674 33.8408V43.877C4.62021 43.7998 3.35234 42.4887 3.35234 40.8834C3.35234 38.1466 4.44443 35.6695 6.20674 33.8408Z"
                        fill="#585D69"
                      />
                      <path
                        d="M15.1273 15.6206C14.8494 15.6206 14.624 15.846 14.624 16.1239V16.7368C14.624 17.0147 14.8494 17.2401 15.1273 17.2401C15.4053 17.2401 15.6307 17.0147 15.6307 16.7368V16.1239C15.6307 15.846 15.4054 15.6206 15.1273 15.6206Z"
                        fill="#585D69"
                      />
                      <path
                        d="M22.6742 17.2401C22.9521 17.2401 23.1775 17.0147 23.1775 16.7368V16.1239C23.1775 15.846 22.9521 15.6206 22.6742 15.6206C22.3963 15.6206 22.1709 15.846 22.1709 16.1239V16.7368C22.1709 17.0147 22.3962 17.2401 22.6742 17.2401Z"
                        fill="#585D69"
                      />
                      <path
                        d="M21.1694 22.0132C20.9728 21.8166 20.6543 21.8166 20.4577 22.0132C19.5973 22.8723 18.2005 22.8748 17.3435 22.0176C17.1469 21.821 16.8284 21.821 16.6318 22.0176C16.4352 22.2141 16.4352 22.5327 16.6318 22.7293C17.8829 23.9808 19.9189 23.9754 21.1694 22.7249C21.366 22.5286 21.366 22.2098 21.1694 22.0132Z"
                        fill="#585D69"
                      />
                      <path
                        d="M18.9022 34.0371C17.2658 34.0371 15.9346 35.3684 15.9346 37.0048C15.9346 38.6412 17.2658 39.9728 18.9022 39.9728C20.5387 39.9728 21.8699 38.6413 21.8699 37.0048C21.8699 35.3683 20.5388 34.0371 18.9022 34.0371ZM18.9022 38.9662C17.8209 38.9662 16.9411 38.0864 16.9411 37.0049C16.9411 35.9235 17.8209 35.0437 18.9022 35.0437C19.9836 35.0437 20.8634 35.9235 20.8634 37.0049C20.8634 38.0864 19.9836 38.9662 18.9022 38.9662Z"
                        fill="#585D69"
                      />
                      <path
                        d="M47.6557 17.7098C47.6557 14.6446 45.1618 12.1506 42.0965 12.1506H38.8987C35.8335 12.1506 33.3398 14.6445 33.3398 17.7098V22.7657C33.3398 23.0436 33.5652 23.269 33.8432 23.269H42.0965C45.1617 23.269 47.6557 20.7751 47.6557 17.7098ZM42.0965 22.2624H34.3465V17.7098C34.3465 15.1995 36.3887 13.1573 38.8988 13.1573H42.0966C44.6069 13.1573 46.6491 15.1995 46.6491 17.7098C46.6491 20.2202 44.6068 22.2624 42.0965 22.2624Z"
                        fill="#585D69"
                      />
                      <path
                        d="M43.4653 16.0881H37.5287C37.2508 16.0881 37.0254 16.3135 37.0254 16.5915C37.0254 16.8694 37.2508 17.0948 37.5287 17.0948H43.4653C43.7433 17.0948 43.9687 16.8694 43.9687 16.5915C43.9687 16.3135 43.7434 16.0881 43.4653 16.0881Z"
                        fill="#585D69"
                      />
                      <path
                        d="M40.914 18.325H37.5287C37.2508 18.325 37.0254 18.5503 37.0254 18.8283C37.0254 19.1062 37.2508 19.3316 37.5287 19.3316H40.914C41.1919 19.3316 41.4173 19.1062 41.4173 18.8283C41.4173 18.5503 41.1919 18.325 40.914 18.325Z"
                        fill="#585D69"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <div data-aos-duration="1000">
                      <h4>
                        <a className="fw-5" href="#">
                          Why Digital Duniyaa
                        </a>
                      </h4>
                      <p>
                        Skill-Focused Training: 20,000+ professionals and <br />
                        free exclusive training.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="icons-box ">
                  <div className="icons has-ellipse">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      style={{ marginTop: "25px" }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.4251 33.5511L28.2225 34.0748C29.245 34.1434 30.1751 33.4845 30.4494 32.4971C30.7766 31.3194 30.0627 30.105 28.8745 29.8181L18.2064 27.2419C16.5947 26.8526 14.895 27.0976 13.4589 27.9263L7.66357 31.2697L14.8642 41.7498L18.3575 40.1813L26.8048 41.7721C28.4305 42.0782 30.1117 41.7494 31.5023 40.8533L48.3097 30.0232C48.9211 29.6293 48.9429 28.743 48.3516 28.3194C45.9069 26.5685 42.6454 26.4729 40.1024 28.0776L28.9184 34.0063"
                        fill="#FEFDFE"
                      />
                      <path
                        d="M6.9405 30.2148L15.5989 42.9787C15.9433 43.4864 15.8109 44.1771 15.3032 44.5216L11.6126 47.0251C11.1049 47.3695 10.4141 47.2371 10.0697 46.7294L1.4114 33.9656C1.06697 33.4579 1.19939 32.7672 1.7071 32.4227L5.39773 29.9192C5.90534 29.5748 6.59616 29.7072 6.9405 30.2148Z"
                        fill="#E9DECE"
                      />
                      <path
                        d="M39.1546 20.1143C34.7842 24.4847 27.6455 24.4303 27.6455 24.4303C27.6455 24.4303 27.591 17.2915 31.9615 12.9211C35.0096 9.87293 39.4044 8.97723 41.7847 8.71424C42.6957 8.61355 43.4622 9.37996 43.3616 10.2911C43.0985 12.6714 42.2028 17.0662 39.1546 20.1143Z"
                        fill="#E9DECE"
                      />
                      <path
                        d="M23.3294 12.9211C27.6998 17.2915 27.6453 24.4303 27.6453 24.4303C27.6453 24.4303 20.5067 24.4847 16.1362 20.1143C13.088 17.0662 12.1923 12.6714 11.9293 10.2911C11.8286 9.38006 12.595 8.61355 13.5062 8.71424C15.8865 8.97722 20.2813 9.87293 23.3294 12.9211Z"
                        fill="#E9DECE"
                      />
                      <path
                        d="M32.7317 13.2402C32.7317 19.421 27.6454 24.4303 27.6454 24.4303C27.6454 24.4303 22.5591 19.421 22.5591 13.2402C22.5591 8.92949 25.0333 5.18857 26.5305 3.31953C27.1035 2.6041 28.1874 2.6041 28.7605 3.31953C30.2574 5.18848 32.7317 8.92939 32.7317 13.2402Z"
                        fill="#FEFDFE"
                      />
                      <path
                        d="M10.1679 30.552L13.7742 28.4727C15.0812 27.7229 16.6019 27.5032 18.057 27.8563L28.7264 30.4312C29.4137 30.5994 29.8938 31.2124 29.8938 31.9217C29.8938 32.9071 28.9971 33.4897 28.2666 33.446L20.4694 32.9197C20.1291 32.9005 19.8194 33.1599 19.7959 33.5082C19.7725 33.8565 20.0359 34.1582 20.3844 34.1816L28.1833 34.7081C28.9028 34.7532 29.6096 34.5157 30.1573 34.0636L40.4417 28.6111C42.7207 27.1746 45.7056 27.2011 47.983 28.8327C48.2132 28.998 48.2001 29.3419 47.969 29.4924L31.1604 40.3203C29.9006 41.1315 28.3963 41.4269 26.9242 41.1515L18.4748 39.5577C18.3471 39.5345 18.2159 39.5496 18.0978 39.6026L16.8734 40.1541C16.5549 40.2974 16.4128 40.672 16.5564 40.9904C16.6999 41.3089 17.0742 41.4515 17.3927 41.3074L18.4358 40.8378L26.691 42.3947C28.43 42.7199 30.2681 42.3994 31.8452 41.384L48.656 30.5546C49.637 29.9169 49.6726 28.4886 48.7202 27.8051C45.9862 25.8464 42.4226 25.8655 39.8083 27.5175L31.1465 32.108C31.1506 32.0459 31.1587 31.9838 31.1587 31.9219C31.1587 30.628 30.2821 29.5099 29.0253 29.202L18.3545 26.6269C16.5836 26.1978 14.7336 26.4638 13.1435 27.3765L9.53586 29.4563C9.23341 29.6307 9.12941 30.0176 9.30382 30.3202C9.47824 30.6229 9.86476 30.726 10.1679 30.552Z"
                        fill="#585D69"
                      />
                      <path
                        d="M9.54666 47.085C10.0893 47.8846 11.1736 48.0874 11.9676 47.5487L15.6587 45.045C16.4537 44.5055 16.6617 43.4192 16.1224 42.6238L7.46424 29.86C7.46394 29.86 7.46394 29.8597 7.46394 29.8597C6.9241 29.0642 5.83758 28.8562 5.04275 29.3959L1.35213 31.8993C0.555155 32.4399 0.346952 33.5232 0.88787 34.3208L9.54666 47.085ZM2.06219 32.9465L5.75281 30.4428C5.97059 30.2945 6.26892 30.3523 6.41726 30.5701L15.0755 43.3339C15.2237 43.5523 15.1667 43.8503 14.9485 43.9983L11.2574 46.502C11.0395 46.6497 10.7413 46.5932 10.5935 46.3747L1.93494 33.6109C1.7867 33.3924 1.84402 33.0944 2.06219 32.9465Z"
                        fill="#585D69"
                      />
                      <path
                        d="M27.6203 25.0606H27.6355C27.639 25.0607 27.6423 25.0626 27.6458 25.0626C27.6493 25.0626 27.6525 25.0606 27.656 25.0606H27.6742C28.2741 25.0606 35.2026 24.9623 39.6003 20.5597C42.7918 17.373 43.7215 12.802 43.9915 10.361C44.0611 9.73477 43.8457 9.12031 43.4005 8.67481C42.955 8.22988 42.3423 8.01367 41.7148 8.08379C39.7392 8.30205 36.1633 8.98662 33.1698 11.0955C32.5482 7.51826 30.5395 4.52871 29.2544 2.92393C28.8603 2.43232 28.274 2.15039 27.6455 2.15039C27.017 2.15039 26.4306 2.43252 26.0371 2.92422C24.7518 4.52861 22.7428 7.51807 22.1213 11.0958C19.1307 8.98613 15.5521 8.30186 13.5749 8.08379C12.9496 8.01387 12.3376 8.22881 11.8941 8.67227C11.4487 9.11768 11.2333 9.73291 11.3029 10.3606C11.5729 12.8014 12.5019 17.372 15.6889 20.5591C20.0921 24.9626 27.0212 25.0606 27.6203 25.0606ZM41.8542 9.34102C42.0953 9.31406 42.334 9.39707 42.5059 9.56953C42.6781 9.7415 42.7614 9.9792 42.7344 10.2215C42.4824 12.4979 41.6242 16.7513 38.7059 19.6651C35.7569 22.6174 31.4075 23.459 29.144 23.6992C30.6861 21.8156 33.3644 17.8776 33.3644 13.2403C33.3644 13.0074 33.3535 12.7773 33.3402 12.5479C36.1954 10.2707 39.8777 9.55957 41.8542 9.34102ZM27.0244 3.71494C27.1768 3.52471 27.4031 3.41553 27.6455 3.41553C27.8881 3.41553 28.1146 3.52471 28.2671 3.71494C29.6983 5.50215 32.0995 9.11592 32.0995 13.2403C32.0995 18.0155 28.8516 22.1357 27.6453 23.501C26.4383 22.1382 23.1918 18.0259 23.1918 13.2403C23.1917 9.11543 25.5929 5.50195 27.0244 3.71494ZM12.7885 9.56709C12.959 9.39658 13.1934 9.31309 13.4356 9.34131C15.414 9.55947 19.1002 10.2704 21.9509 12.5493C21.9378 12.7783 21.9268 13.008 21.9268 13.2404C21.9268 17.879 24.6067 21.8179 26.1487 23.7009C23.8865 23.4624 19.5416 22.6231 16.5835 19.665C13.6696 16.7512 12.8121 12.4979 12.5601 10.2217C12.5331 9.97764 12.6163 9.73926 12.7885 9.56709Z"
                        fill="#585D69"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <div data-aos-duration="1000">
                      <h4>
                        <a className="fw-5" href="#">
                          Our Vision
                        </a>
                      </h4>
                      <p>
                        Empowering youth to earn multiple incomes <br />
                        through skill development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="icons-box " data-wow-delay="0.45s">
                  <div className="icons has-ellipse">
                    <svg
                      width="50"
                      height="61"
                      viewBox="0 0 50 51"
                      fill="none"
                      style={{ marginTop: "25px" }}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.8605 4.92455V34.4411C30.8605 36.383 29.2863 37.9572 27.3445 37.9572H5.37109V4.92455C5.37109 4.40127 5.79531 3.97705 6.31859 3.97705H29.913C30.4363 3.97705 30.8605 4.40127 30.8605 4.92455Z"
                        fill="white"
                      />
                      <path
                        d="M34.6296 19.3567H38.6487V35.0997H34.6296V19.3567Z"
                        fill="#E9DECE"
                      />
                      <path
                        d="M34.6295 35.0996L34.6294 37.0084C34.6294 37.5323 35.0541 37.957 35.578 37.957L37.6998 37.9571C38.2237 37.9571 38.6485 37.5324 38.6485 37.0085L38.6485 35.0997L34.6295 35.0996Z"
                        fill="#E9DECE"
                      />
                      <path
                        d="M34.6306 19.3582L36.6416 16.9209L38.6494 19.3582L34.6306 19.3582Z"
                        fill="white"
                      />
                      <path
                        d="M27.41 37.9571H4.8631C3.89536 37.9571 3.01638 37.5639 2.38021 36.9277C1.74411 36.2916 1.35083 35.4126 1.35083 34.441V32.1037C1.35083 31.5805 1.77505 31.1562 2.29833 31.1562H22.9501C23.4734 31.1562 23.8976 31.5805 23.8976 32.1037V34.441C23.8976 35.4126 24.2909 36.2916 24.927 36.9277C25.5633 37.5639 26.4385 37.9571 27.41 37.9571Z"
                        fill="#E9DECE"
                      />
                      <path
                        d="M29.9119 3.37354H6.31771C5.46529 3.37354 4.77147 4.06971 4.77147 4.92564V28.7484C4.77147 29.0809 5.04053 29.3499 5.37303 29.3499C5.70553 29.3499 5.97459 29.0809 5.97459 28.7484V4.92564C5.97459 4.73291 6.1285 4.57666 6.31771 4.57666H29.9119C30.1046 4.57666 30.2609 4.73291 30.2609 4.92564V34.4394C30.2609 36.0197 28.9772 37.3263 27.3998 37.3516C27.3963 37.3517 27.3934 37.3536 27.3899 37.3538C25.81 37.3431 24.4994 36.0651 24.4994 34.4412V32.1035C24.4994 31.2499 23.8044 30.5549 22.9501 30.5549H2.29811C1.44451 30.5549 0.749512 31.2499 0.749512 32.1035V34.4412C0.749512 36.6985 2.57373 38.5589 4.86311 38.5589H27.4098C27.419 38.5589 27.4268 38.5541 27.4359 38.5537C29.6586 38.5085 31.464 36.6673 31.464 34.4395V4.92564C31.464 4.06971 30.7679 3.37354 29.9119 3.37354ZM4.86311 37.3557C3.26576 37.3557 1.95271 36.0626 1.95271 34.4412V32.1035C1.95271 31.9132 2.10779 31.7581 2.29818 31.7581H22.9502C23.1412 31.7581 23.2962 31.9131 23.2962 32.1035V34.4412C23.2962 35.5416 23.7245 36.5761 24.5018 37.3534C24.5024 37.3546 24.5036 37.3552 24.5041 37.3557H4.86311Z"
                        fill="#585D69"
                      />
                      <path
                        d="M10.6682 9.85938H26.0522C26.3847 9.85938 26.6538 9.59031 26.6538 9.25781C26.6538 8.92531 26.3847 8.65625 26.0522 8.65625H10.6682C10.3357 8.65625 10.0667 8.92531 10.0667 9.25781C10.0666 9.59031 10.3356 9.85938 10.6682 9.85938Z"
                        fill="#585D69"
                      />
                      <path
                        d="M10.6682 14.2292H26.0522C26.3847 14.2292 26.6538 13.9602 26.6538 13.6277C26.6538 13.2952 26.3847 13.0261 26.0522 13.0261H10.6682C10.3357 13.0261 10.0667 13.2952 10.0667 13.6277C10.0666 13.9602 10.3356 14.2292 10.6682 14.2292Z"
                        fill="#585D69"
                      />
                      <path
                        d="M10.6682 18.5989H26.0522C26.3847 18.5989 26.6538 18.3298 26.6538 17.9973C26.6538 17.6648 26.3847 17.3958 26.0522 17.3958H10.6682C10.3357 17.3958 10.0667 17.6648 10.0667 17.9973C10.0666 18.3298 10.3356 18.5989 10.6682 18.5989Z"
                        fill="#585D69"
                      />
                      <path
                        d="M10.6682 22.9685H15.9121C16.2446 22.9685 16.5137 22.6994 16.5137 22.3669C16.5137 22.0344 16.2446 21.7654 15.9121 21.7654H10.6682C10.3357 21.7654 10.0667 22.0344 10.0667 22.3669C10.0666 22.6994 10.3356 22.9685 10.6682 22.9685Z"
                        fill="#585D69"
                      />
                      <path
                        d="M24.3877 24.2266C24.2414 24.7494 24.091 25.2905 23.7661 25.6536C23.1632 26.328 22.7624 25.8839 22.4813 25.5284C21.5149 24.3165 20.4217 24.4809 19.6719 25.4333C19.4249 25.7464 19.166 26.2622 18.9669 26.5002C18.6444 26.8826 18.1162 27.0918 17.6198 27.0201C17.1234 26.9531 16.6674 26.6153 16.4589 26.1605C16.3203 25.8586 15.9619 25.7269 15.6611 25.8644C15.3592 26.0031 15.2264 26.3603 15.365 26.6623C15.7474 27.4953 16.5494 28.0893 17.4582 28.2127C18.3607 28.3344 19.2939 27.9793 19.8875 27.2744C20.2287 26.868 20.3657 26.4958 20.6166 26.1782C21.0496 25.6293 21.2417 25.9037 21.5389 26.2775C22.5578 27.5591 23.8549 27.3608 24.6638 26.4549C25.1749 25.8833 25.3805 25.1437 25.5462 24.5497C25.6355 24.2295 25.4487 23.8976 25.1285 23.8088C24.8083 23.7177 24.477 23.9063 24.3877 24.2266Z"
                        fill="#585D69"
                      />
                      <path
                        d="M39.1137 18.9756L37.2431 16.7055V16.0869C37.2431 15.7544 36.9741 15.4854 36.6416 15.4854C36.3091 15.4854 36.04 15.7544 36.04 16.0869V16.7047L34.1665 18.975C34.0787 19.0816 34.0285 19.2455 34.0285 19.3569C34.0284 21.9787 34.0281 31.8593 34.0278 37.0086C34.0278 37.8634 34.7235 38.559 35.5782 38.559H37.6996C38.5544 38.559 39.25 37.8634 39.25 37.0086C39.2502 32.6708 39.2504 24.4246 39.2506 19.3569C39.2506 19.2321 39.202 19.0827 39.1137 18.9756ZM36.641 17.867L37.3732 18.7553H35.9081L36.641 17.867ZM35.2316 19.9596H38.0474L38.0468 34.4982H35.231L35.2316 19.9596ZM38.0468 37.0086C38.0468 37.2 37.8911 37.3557 37.6996 37.3557H35.5782C35.3867 37.3557 35.231 37.2 35.231 37.0086V35.7014H38.0469V37.0086H38.0468Z"
                        fill="#585D69"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <div data-aos-duration="1000">
                      <h4>
                        <a className="fw-5" href="#">
                          About Us
                        </a>
                      </h4>
                      <p>
                        We have come to you with a focus on <br />
                        "Siksha" (Education), "Hunar" (Skills), and "Seva"
                        (Service).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-course-style5 tf-spacing-11 bg-4">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading-section">
                  <div data-aos-duration="1000">
                    <h2
                      className="fw-7 font-cardo  animated"
                      data-wow-delay="0.1s"
                    >
                      Digital Entrepreneurship Bundles
                    </h2>
                    <div className="flex items-center justify-between flex-wrap gap-10">
                      <div className="sub fs-15 " data-wow-delay="0.2s">
                        Outpace the competition with our course
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-container slider-courses-5 "
                  data-wow-delay="0.4s"
                >
                  <div className="swiper-wrapper carousel-container">
                    <Carousel
                      className="carousel-home"
                      showThumbs={false}
                      showStatus={false}
                      interval={3000}
                      centerMode
                      autoPlay
                      centerSlidePercentage={centerSlidePercentage}
                      showIndicators={true}
                      showArrows={false}
                      selectedItem={cci}
                      onChange={(index) => setCci(index)}
                    >
                      {Array.isArray(product)
                        ? product.map((row, idx) => (
                            <div
                              key={`key=${idx}`}
                              className="swiper-slide carousel-card sliderElement"
                            >
                              <div className="course-item hover-img style-2 h240">
                                <div className="features image-wrap">
                                  <img
                                    className="lazyload"
                                    data-src={row.pictures.base_link}
                                    src={row.pictures.base_link}
                                    alt=""
                                  />
                                </div>
                                <div className="content">
                                  <h5 className="fw-5 line-clamp-2">
                                    {row.name}
                                  </h5>

                                  <div className="author">
                                    By:
                                    <a href="#" className="author">
                                      Digital Duniyaa
                                    </a>
                                  </div>
                                  <div className="bottom">
                                    <div className="h6 price fw-5">
                                      ₹{row.price.toFixed(2)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        : undefined}

                      <div className="swiper-slide carousel-card sliderElement">
                        <div className="course-item hover-img style-2 h240">
                          <div className="features image-wrap">
                            <img
                              className="lazyload"
                              data-src="assets/images/courses/courses-02.jpg"
                              src="assets/images/courses/courses-02.jpg"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h5 className="fw-5 line-clamp-2">
                              Advance Digital Marketing
                            </h5>

                            <div className="author">
                              By:
                              <a href="#" className="author">
                                Digital Duniyaa
                              </a>
                            </div>
                            <div className="bottom">
                              <div className="h6 price fw-5">₹60,000</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide carousel-card sliderElement">
                        <div className="course-item hover-img style-2 h240">
                          <div className="features image-wrap">
                            <img
                              className="lazyload"
                              data-src="assets/images/courses/courses-03.jpg"
                              src="assets/images/courses/courses-03.jpg"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h5 className="fw-5 line-clamp-2">Sales Funnel</h5>

                            <div className="author">
                              By:
                              <a href="#" className="author">
                                Digital Duniyaa
                              </a>
                            </div>
                            <div className="bottom">
                              <div className="h6 price fw-5">₹30,000</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide carousel-card sliderElement">
                        <div className="course-item hover-img style-2 h240">
                          <div className="features image-wrap">
                            <img
                              className="lazyload"
                              data-src="assets/images/courses/courses-04.jpg"
                              src="assets/images/courses/courses-04.jpg"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h5 className="fw-5 line-clamp-2">
                              Social Media Growth Program
                            </h5>

                            <div className="author">
                              By:
                              <a href="#" className="author">
                                Digital Duniyaa
                              </a>
                            </div>
                            <div className="bottom">
                              <div className="h6 price fw-5">₹20,000</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide carousel-card sliderElement">
                        <div className="course-item hover-img style-2 h240">
                          <div className="features image-wrap">
                            <img
                              className="lazyload"
                              data-src="assets/images/courses/courses-05.jpg"
                              src="assets/images/courses/courses-05.jpg"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h5 className="fw-5 line-clamp-2">Video Editing</h5>

                            <div className="author">
                              By:
                              <a href="#" className="author">
                                Digital Duniyaa
                              </a>
                            </div>
                            <div className="bottom">
                              <div className="h6 price fw-5">₹10,000</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide carousel-card sliderElement">
                        <div className="course-item hover-img style-2 h240">
                          <div className="features image-wrap">
                            <img
                              className="lazyload"
                              data-src="assets/images/courses/courses-06.jpg"
                              src="/assets/images/courses/courses-06.jpg"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h5 className="fw-5 line-clamp-2">
                              English Speaking
                            </h5>

                            <div className="author">
                              By:
                              <a href="#" className="author">
                                Digital Duniyaa
                              </a>
                            </div>
                            <div className="bottom">
                              <div className="h6 price fw-5">₹10,000</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide carousel-card sliderElement">
                        <div className="course-item hover-img style-2 h240">
                          <div className="features image-wrap">
                            <img
                              className="lazyload"
                              data-src="assets/images/courses/courses-07.jpg"
                              src="assets/images/courses/courses-07.jpg"
                              alt=""
                            />
                          </div>
                          <div className="content">
                            <h5 className="fw-5 line-clamp-2">
                              Complete Web Creation
                            </h5>

                            <div className="author">
                              By:
                              <a href="#" className="author">
                                Digital Duniyaa
                              </a>
                            </div>
                            <div className="bottom">
                              <div className="h6 price fw-5">₹50,000</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                  {/* <div className="swiper-pagination pagination-slider pagination-courses5 pt-32"></div> */}
                </div>
                <div
                  className="swiper-button-prev btns-style-arrow courses5-prev"
                  onClick={handlePrevousCourse}
                ></div>
                <div
                  className="swiper-button-next btns-style-arrow courses5-next"
                  onClick={handleNextCourse}
                ></div>
              </div>
              <div className="row ">
                <div className="col-12 d-flex justify-center">
                  <Link to={"/register"}>
                    <a href="#" className="tf-btn">
                      Buy this bundle @ ₹2948.82{" "}
                      <i className="icon-arrow-top-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-icon">
          <div className="tf-container">
            <div className="row">
              <div className="wrap-icon-box">
                <div className="icons-box style-3 " data-wow-delay="0.1s">
                  <div className="icons">
                    <i className="flaticon-play"></i>
                  </div>
                  <div className="content">
                    <p>
                      Live Training with Recorded marketing <br /> funnel
                    </p>
                  </div>
                </div>
                <div className="icons-box style-3 " data-wow-delay="0.2s">
                  <div className="icons">
                    <i className="flaticon-medal"></i>
                  </div>
                  <div className="content">
                    <p>
                      10+ expert trainers with real-world <br /> experience
                    </p>
                  </div>
                </div>
                <div className="icons-box style-3 " data-wow-delay="0.3s">
                  <div className="icons">
                    <i className="flaticon-key"></i>
                  </div>
                  <div className="content">
                    <p>
                      Learn at your own pace, with lifetime <br /> access on
                      mobile and desktop
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-academisc tf-spacing-11">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="heading-section text-center">
                  <div data-aos-duration="1000">
                    <h2
                      className="fw-7 font-cardo  animated"
                      data-wow-delay="0.1s"
                    >
                      Upcoming Academic Programs
                    </h2>
                    <div className="sub fs-15 " data-wow-delay="0.2s">
                      Unlock your future with our upskilling courses and endless
                      growth opportunities.
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-container slider-category"
                  data-preview="3"
                  data-space="28"
                >
                  <div
                    className="swiper-wrapper carousel-container"
                    id="course"
                  >
                    <Carousel
                      className="carousel-home"
                      showThumbs={false}
                      showStatus={false}
                      infiniteLoop
                      autoPlay
                      interval={3000}
                      centerMode
                      centerSlidePercentage={centerSlidePercentage}
                      showIndicators={true}
                      selectedItem={uap}
                      showArrows={false}
                      onChange={(index) => setUap(index)}
                    >
                      <div className="swiper-slide carousel-card">
                        <a href="#">
                          <div className="academisc-item">
                            <div className="image-wrap">
                              <img
                                className=" ls-is-cached lazyloaded"
                                data-src="assets/images/section/academisc-1.jpg"
                                src="assets/images/section/academisc-1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <p>
                                State wise 10th and 12th
                                <br /> Coaching className
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="swiper-slide carousel-card">
                        <a href="#">
                          <div className="academisc-item">
                            <div className="image-wrap">
                              <img
                                className=" ls-is-cached lazyloaded"
                                data-src="assets/images/section/academisc-2.jpg"
                                src="assets/images/section/academisc-2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <p>
                                CBSE Board 10th and <br /> 12th Class
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="swiper-slide carousel-card">
                        <a href="#">
                          <div className="academisc-item">
                            <div className="image-wrap">
                              <img
                                className=" ls-is-cached lazyloaded"
                                data-src="assets/images/section/academisc-3.jpg"
                                src="assets/images/section/academisc-3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <p>
                                AI (Artificial Inteligence) <br /> special crack
                                Course
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="swiper-slide carousel-card">
                        <a href="#">
                          <div className="academisc-item">
                            <div className="image-wrap">
                              <img
                                className=" ls-is-cached lazyloaded"
                                data-src="assets/images/section/academisc-4.jpg"
                                src="assets/images/section/academisc-4.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <p>
                                Online <br /> Learning
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="swiper-slide carousel-card">
                        <a href="#">
                          <div className="academisc-item">
                            <div className="image-wrap">
                              <img
                                className=" ls-is-cached lazyloaded"
                                data-src="assets/images/section/academisc-5.jpg"
                                src="assets/images/section/academisc-5.jpg"
                                alt=""
                              />
                            </div>
                            <div className="content">
                              <p>
                                Global <br /> Education
                              </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </Carousel>
                  </div>
                </div>
                <div
                  className="swiper-button-prev btns-style-arrow courses5-prev"
                  style={{ marginTop: "20px" }}
                  onClick={handlePrevousUpcoming}
                ></div>
                <div
                  className="swiper-button-next btns-style-arrow courses5-next"
                  style={{ marginTop: "20px" }}
                  onClick={handleNextUpcoming}
                ></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-key ">
          <div className="tf-container">
            <div className="row">
              <div className="col-12">
                <div className="key-wrap flex">
                  <div className="key-image">
                    <img
                      className="lazyload"
                      data-src="assets/images/whychoose.jpg"
                      src="assets/images/whychoose.jpg"
                      alt=""
                    />
                  </div>
                  <div className="content  bg-4">
                    <div data-aos-duration="1000">
                      <h2
                        className="font-cardo fw-7  animated"
                        data-wow-delay="0.1s"
                      >
                        Why Choose Us?
                      </h2>
                      <p className="" data-wow-delay="0.2s">
                        Digital Duniyaa provides skill-based classes in Digital
                        Marketing, Website Creation, Ads Campaigns, and more.
                        Earn lakhs monthly with our unique income plan and free
                        training from top trainees. Join 20,000+ trained,
                        including 1,000+ millionaires.
                      </p>
                      <div className="tags " data-wow-delay="0.3s">
                        <div className="tag">
                          <i className="flaticon-check"></i>
                          <span>Skill-Focused Training</span>
                        </div>
                        <div className="tag">
                          <i className="flaticon-check"></i>
                          <span>20,000+ Trained Professionals</span>
                        </div>
                        <div className="tag">
                          <i className="flaticon-check"></i>
                          <span>1,000 Millionaire Success Stories</span>
                        </div>
                        <div className="tag">
                          <i className="flaticon-check"></i>
                          <span>Earn Lakhs Each Month</span>
                        </div>
                        <div className="tag">
                          <i className="flaticon-check"></i>
                          <span>
                            Exclusive Free Training by Our Top Trainees
                          </span>
                        </div>
                      </div>
                      <a href="#" className="tf-btn " data-wow-delay="0.4s">
                        Join Today<i className="icon-arrow-top-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-teachers-1 tf-spacing-23 pb-0">
          <div className="tf-container">
            <div className="row">
              <div className="col-md-6">
                <div className="teachers-content">
                  <div data-aos-duration="1000">
                    <h2
                      className="title font-cardo fw-7 lesp-1  animated"
                      data-wow-delay="0.1s"
                    >
                      Meet <br />
                      <span className="tf-secondary-color">Our Founders </span>
                    </h2>
                    <p className="fs-15 " data-wow-delay="0.2s">
                      Sir Devendra Maurya (Founder) and Miss Mahima Maurya{" "}
                      <br />
                      (Co-Founder) are visionary founders committed to <br />
                      empowering youth through skill-focused training <br />
                      and entrepreneurship.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="teachers-image">
                  <div className="teachers-upskill-wrap">
                    <div className="teachers-upskill">
                      <div className="image">
                        <img
                          className=" ls-is-cached lazyloaded"
                          src="assets/images/devendra-founder.jpg"
                          data-src="assets/images/devendra-founder.jpg"
                          alt=""
                        />
                      </div>

                      <div className="name">
                        <span style={{ fontWeight: "bold" }}>
                          Sir Devendra Maurya{" "}
                        </span>
                      </div>
                    </div>
                    <div className="teachers-upskill">
                      <div className="image">
                        <img
                          className=" ls-is-cached lazyloaded"
                          src="assets/images/mahima-founder.jpg"
                          data-src="assets/images/mahima-founder.jpg"
                          alt=""
                        />
                      </div>
                      <div className="name">
                        <span style={{ fontWeight: "bold" }}>
                          Mahima Maurya
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-faq-page tf-spacing-23 pb-0">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-faq-content faq-1 ">
                  <div className="heading-section">
                    <div data-aos-duration="1000">
                      <h2 className="font-cardo " data-wow-delay="0s">
                        Frequently Asked Questions
                      </h2>
                      <p className="fs-15 " data-wow-delay="0s">
                        Answers to the burning questions in your mind.
                      </p>
                    </div>
                  </div>
                  <div
                    className="tf-accordion-default tf-accordion "
                    id="accordionExample"
                  >
                    <div className="tf-accordion-item " data-wow-delay="0s">
                      <h3 className="tf-accordion-header">
                        <div
                          className="tf-accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          <span className="rectangle-314"></span>
                          What is Digital Duniyaa?
                        </div>
                      </h3>
                      <div
                        id="collapseOne"
                        className="tf-accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="tf-accordion-content">
                          <p className="fs-15">
                            MD Digital Duniyaa pvt ltd. is a leading digital
                            solutions company, dedicated to empowering youth. We
                            are giving digital income opportunities to the youth
                            by skilling them. Our services include digital
                            marketing, web design, social media management,
                            branding, sales, and academic tuition classes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tf-accordion-item " data-wow-delay="0s">
                      <h3 className="tf-accordion-header">
                        <span
                          className="tf-accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          <span className="rectangle-314"></span>
                          What opportunity does Digital Duniyaa provide?
                        </span>
                      </h3>
                      <div
                        id="collapseTwo"
                        className="tf-accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="tf-accordion-content">
                          <p>
                            Digital Duniyaa offers numerous opportunities for
                            skilled youth, focusing on teaching them better ways
                            to earn multiple streams of income. In addition, it
                            provides training in digital marketing skills to
                            help young people thrive in the digital economy.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tf-accordion-item " data-wow-delay="0s">
                      <h3 className="tf-accordion-header">
                        <span
                          className="tf-accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          <span className="rectangle-314"></span>
                          What kind of skill-based courses or classes do you
                          provide?
                        </span>
                      </h3>
                      <div
                        id="collapseThree"
                        className="tf-accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="tf-accordion-content">
                          <p>
                            Digital Duniyaa is providing you Skill based courses
                            like Digital Marketing, website creation, ads
                            Campaigns, Social media marketing, and Sales Expert.
                            Check out our courses section to know more.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tf-accordion-item " data-wow-delay="0s">
                      <h3 className="tf-accordion-header">
                        <span
                          className="tf-accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          <span className="rectangle-314"></span>
                          Is Digital Duniyaa government verified?
                        </span>
                      </h3>
                      <div
                        id="collapseFour"
                        className="tf-accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="tf-accordion-content">
                          <p>
                            Yes, of course! Digital Duniyaa is registered as MD
                            Digital Duniyaa Pvt. Ltd. under the Companies Act
                            2013, with the Ministry of Corporate Affairs,
                            Registrar of Companies (RoC) Kanpur. All necessary
                            information is available in detail on our website.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="tf-accordion-item " data-wow-delay="0s">
                      <h3 className="tf-accordion-header">
                        <span
                          className="tf-accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="true"
                          aria-controls="collapseFive"
                        >
                          <span className="rectangle-314"></span>
                          What is our customer support number?
                        </span>
                      </h3>
                      <div
                        id="collapseFive"
                        className="tf-accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="tf-accordion-content">
                          <p>
                            If you need any assistance, you can contact our
                            customer support number +91 9170355968 which is
                            available from Monday to Sunday(9:30 a.m. to 06:00
                            p.m.)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section-become-instructor bg-darksky pt-0 "
          data-wow-delay="0.2s"
        >
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-section">
                  <div className="content-inner">
                    <div data-aos-duration="1000">
                      <h2 className="font-cardo fw-7">Business Opportunity</h2>
                      <p className="fs-15">
                        Digital Duniyaa empowers youth aged 15 to 35 to achieve
                        financial freedom and break free from job dependency,
                        enabling them to pursue their dreams independently.
                      </p>
                    </div>
                    <ul className="wrap-list-text-check1">
                      <li>
                        <i className="icon-check"></i>
                        Enroll
                      </li>
                      <li>
                        <i className="icon-check"></i>
                        Learn
                      </li>
                      <li>
                        <i className="icon-check"></i>
                        Earn
                      </li>
                    </ul>
                  </div>
                  <div className="content-user">
                    <div className=" box-agent style2">
                      <ul className="agent-img-list">
                        <li className="agent-img-item">
                          <img
                            className="lazyload"
                            data-src="assets/images/avatar/user-1.png"
                            src="assets/images/avatar/user-1.png"
                            alt=""
                          />
                        </li>
                        <li className="agent-img-item">
                          <img
                            className="lazyload"
                            data-src="assets/images/avatar/user-2.png"
                            src="assets/images/avatar/user-2.png"
                            alt=""
                          />
                        </li>
                        <li className="agent-img-item">
                          <img
                            className="lazyload"
                            data-src="assets/images/avatar/user-3.png"
                            src="assets/images/avatar/user-3.png"
                            alt=""
                          />
                        </li>
                        <li className="agent-img-item">
                          <p>1M+</p>
                        </li>
                      </ul>
                      <a href="#" className="tf-btn">
                        Start Earning Today
                        <i className="icon-arrow-top-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="content-img">
                    <img
                      className="lazyload item-1"
                      data-src="assets/images/happy-man.png"
                      src="assets/images/happy-man.png"
                      alt=""
                    />
                    <img
                      className="lazyload item-2"
                      data-src="assets/images/item/item-4.png"
                      src="assets/images/item/item-4.png"
                      alt=""
                    />
                    <img
                      className="lazyload item-3"
                      data-src="assets/images/item/item-20.png"
                      src="assets/images/item/item-20.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Landing;
