import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { axios } from "../../helper/httpHelper";
import process from './../../../public/dist/img/process.png';
import line from './../../../public/dist/img/line.png';
import axios1 from "axios";
import { toast } from "react-toastify";
const register = () => {
  const [product, setProduct] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [productId, setproductId] = useState("");
  const [referral, setReferral] = useState(null);
  const [error, setError] = useState(false);

  const [level, setlevel] = useState(1);
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [state, setState] = useState(null);
  const [course, setcourse] = useState(null);

  const stateFun = async () => {
    try {
      const response = await axios1.post(
        "https://countriesnow.space/api/v0.1/countries/states",
        {
          country: "India",
        }
      );
      setState(response.data.data.states);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("state " + state);

  const fetchCourse = async () => {
    try {
      const response = await axios.get("vimeo/courses");
      setcourse(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handle = (e) => {
    setData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const submitLogin = async (e) => {
    e.preventDefault();

    setlevel(level + 1);

    // try {
    //   const response = await axios.post("user/register", data);
    //    console.log(response)
    //   if (response.status == "200") {

    //     navigate("/login");
    //     toast.success(response.data.message);
    //   } else {
    //     toast.error(response.data.error);
    //   }
    // } catch (error) {
    //   toast.error(error.message);
    // }
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get("vimeo/courses");
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmail = async (e) => {
    const value = e.target.value;
    if (e.target.name === "mobile" && value.length !== 10) {
      setError(true);
      toast.error("Invalid mobile");
      return;
    }
    if (e.target.name === "email") {
      const emailUser = await axios.get(`/user/valid?email=${value}`);

      if (emailUser?.data && emailUser.data.inValid) {
        setError(true);
        toast.error("User with this email already exist please login");
        return;
      }
    }
    setError(false);
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("referral");

  const orderCreate = async (price) => {
    try {
      var token = localStorage.getItem("token");

      const response = await axios.post("product/create/order", {
        amount: price * 100,
        currency: "INR",
        receipt: "xyz product purchased",
      });
      setOrderId(response.data.order_id);

      handlePayment(price);
    } catch (error) {
      console.log(error);
    }
  };
  // const handlePaymentComplete = async(response) => {
  //   const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
  //     response;
  //   const response = await axios.post('product/order',{"productId":"66ca081771a6103598651071", "paymentId":razorpay_payment_id,"orderId":razorpay_order_id, "paymentMethod":"upi", "status":"created","signature":razorpay_signature})
  // };
  const handlePayment = (price) => {
    const options = {
      key: import.meta.env.VITE_PAYMENT_KEY, // Enter the Key ID generated from the Dashboard
      amount: price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Merchant Name",
      description: "Test Transaction",
      order_id: orderId, // This is a sample Order ID. Pass the `id` obtained in the previous step
      handler: async function (response) {
        console.log("payment data " + JSON.stringify(response));
        // Send this data to your server to verify the payment
        try {
          // const result = await axios.post('product/payment-verification', response);
          // if(result.status==200){
          const userReponse = await axios.post("user/register", data);
          //response.razorpay_order_id
          const response = await axios.post("user/login", {
            email: data.email,
            password: data.password,
          });
          localStorage.setItem("token", response.data.token);
          // if (response.data.code == "801") {

          //   navigate("/my-course");
          //   toast.success(response.data.message);
          // } else {
          //   toast.error(response.data.error);
          // }
          const productOrder = await axios.post("product/order", {
            amount: price,
            paymentId: response.razorpay_payment_id,
            orderId: orderId,
            paymentMethod: "upi",
            status: "success",
            signature: "123sddfgdf",
          });

          navigate("/my-course");
          toast.success(result.data.msg);
          // }else{
          //   toast.error(result.data.msg);
          // }
        } catch (error) {
          console.log(error);
        }
      },
      prefill: {
        name: "Test User",
        email: "test.user@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Test Address",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
console.log('data...........'+data);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const value = queryParams.get("referralCode"); // 'myParam' is the name of the query parameter
    setReferral(value);
    setData(value);
    fetchProduct();
    fetchCourse();
    stateFun();
  }, []);

  return (
    <React.Fragment>
      <main class="main-area fix">
        <section
          class="breadcrumb__area breadcrumb__bg"
          data-background="assets/img/bg/breadcrumb_bg.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="breadcrumb__content">
                  <h3 class="title">Student Signup</h3>
                  <nav class="breadcrumb">
                    <span property="itemListElement" typeof="ListItem">
                      <a href="index-2.html">Home / Signup</a>
                    </span>
                    {/* <span class="breadcrumb-separator"><i class="fas fa-angle-right"></i></span>
                                <span property="itemListElement" typeof="ListItem">Login</span> */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="breadcrumb__shape-wrap">
            <img
              src="assets/img/others/breadcrumb_shape01.svg"
              alt="img"
              class="alltuchtopdown"
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

        <section class="singUp-area section-py-0">
          <div class="container">
            <div
              class="row justify-content-center"
              style={{ marginTop: "-45px" }}
            >
              <div class="col-xl-6 col-lg-8">
                <div class="singUp-wrap">
                  <h2 class="title">Create Your Account</h2>
                  <p>
                    Hey there! Ready to join the party? We just need a few
                    details from you to get <br /> started. Let's do this!
                  </p>
                  <div class="signup_head">
                    <div
                      class={
                        level == 1
                          ? "sign_head_card personal_head present_head"
                          : "sign_head_card personal_head present_head testimgblur"
                      }
                    >
                      <img
                        src={process}
                        class="personal_image"
                        style={{width:'40px'}}
                      />
                      <h6 class="">Personal info</h6>
                    </div>
                    <div class="sign_head_card">
                      <img
                        src={line}
                        class="head_line"
                      />
                    </div>
                    <div
                      class={
                        level == 2
                          ? "sign_head_card course_head fade_head"
                          : "sign_head_card course_head fade_head testimgblur"
                      }
                    >
                      <img
                        src={process}
                        class="course_image"
                        style={{width:'40px'}}
                      />
                      <h6>Course Selection</h6>
                    </div>
                    <div class="sign_head_card">
                      <img
                        src={line}
                        class="head_line"
                      />
                    </div>
                    <div
                      class={
                        level == 3
                          ? "sign_head_card payment_head fade_head"
                          : "sign_head_card payment_head fade_head testimgblur"
                      }
                    >
                      <img
                        src={process}
                        class="payment_image"
                        style={{width:'40px'}}
                      />
                      <h6>Payment info</h6>
                    </div>
                  </div>
                  {level == 1 ? (
                    <>
                      <form onSubmit={submitLogin} class="account__form">
                        <div class="row gutter-20">
                          <div class="col-md-12">
                            <div class="form-grp">
                              <label for="fast-name">Referral Code</label>
                              <input
                                type="text"
                                onChange={handle}
                                name="referalCode"
                                value={referral}
                                placeholder="Referral Code"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-grp">
                              <label for="fast-name"> Name</label>
                              <input
                                type="text"
                                onChange={handle}
                                id="fast-name"
                                required
                                name="name"
                                placeholder="Name..."
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-grp">
                              <label for="last-name">Mobile </label>
                              <input
                                type="number"
                                onChange={handle}
                                onBlur={handleEmail}
                                id="last-name"
                                required
                                name="mobile"
                                maxLength={10}
                                placeholder="Mobile..."
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-grp">
                          <label for="email">Email</label>
                          <input
                            type="email"
                            onChange={handle}
                            onBlur={handleEmail}
                            id="email"
                            required
                            name="email"
                            placeholder="email..."
                          />
                        </div>
                        <div class="form-grp">
                          <label for="email">Confirm Email</label>
                          <input
                            type="email"
                            id="email"
                            required
                            name="cemail"
                            placeholder="Confirm email..."
                          />
                        </div>
                        <div class="form-grp">
                          <label for="email">Gender</label>
                          <select
                            class="form-control"
                            name="gender"
                            required
                            onChange={handle}
                          >
                            <option value=""> select Option</option>
                            <option> Male</option>
                            <option> Female</option>
                          </select>
                        </div>
                        <div class="form-grp">
                          <label for="email">State</label>
                          <select
                            class="form-control"
                            name="state"
                            required
                            onChange={handle}
                          >
                            <option value=""> select State</option>
                            {state &&
                              state.map((row) => (
                                <option>{row && row.name}</option>
                              ))}
                          </select>
                        </div>
                        <div class="form-grp">
                          <label for="password">Password</label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={handle}
                            required
                            placeholder="password"
                          />
                        </div>
                        <div class="form-grp">
                          <label for="confirm-password">Confirm Password</label>
                          <input
                            type="password"
                            id="confirm-password"
                            name="cpassword"
                            required
                            placeholder="Confirm Password"
                          />
                        </div>
                        <button
                          type="submit"
                          class="btn btn-two arrow-btn"
                          disabled={error}
                          style={{ marginBottom: "20px" }}
                        >
                          Proceed to Course Selection
                          <img
                            src="assets/img/icons/right_arrow.svg"
                            alt="img"
                            class="injectable"
                          />
                        </button>
                      </form>
                    </>
                  ) : null}

                  <div className="tab-content" id="myTabContent">
                    {level == 2 ? (
                      <>
                        <div
                          className="tab-pane fade show active"
                          id="grid"
                          role="tabpanel"
                          aria-labelledby="grid-tab"
                        >
                          <div className="">
                            {course &&
                              course.map((row) => (
                                <div className={style.cal}>
                                  <div className="courses__item shine__animate-item">
                                    <div className="courses__item-thumb">
                                      <a
                                        href="course-details.html"
                                        className="shine__animate-link"
                                      >
                                        <img
                                          src={row.pictures.base_link}
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
                                          <i className="fas fa-star"></i> (4.8
                                          Reviews)
                                        </li>
                                      </ul>

                                      <h5 className="title">
                                        <Link
                                          to={`/courses-details-all/${row.courseId}`}
                                        >
                                          {row.name}
                                        </Link>
                                      </h5>
                                      <p className="author">
                                        By <a href="#">David Millar</a>
                                      </p>
                                      <div className="courses__item-bottom">
                                        <div className="button">
                                          {/* <a href="course-details.html">
                                          <span className="text">
                                            Enroll Now
                                          </span>
                                          <i className="flaticon-arrow-right"></i>
                                        </a> */}
                                        </div>
                                        <h5 className="price">
                                          {row.price.toFixed(2)}
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                          <nav className="pagination__wrap mt-30">
                            <button
                              type="button"
                              onClick={() => setlevel(level + 1)}
                              class="btn btn-two arrow-btn"
                              style={{ marginBottom: "20px" }}
                            >
                              Make Payment for 2499
                              <img
                                src="assets/img/icons/right_arrow.svg"
                                alt="img"
                                class="injectable"
                              />
                            </button>
                          </nav>
                        </div>
                      </>
                    ) : null}

                    {level == 3 ? (
                      <>
                        <div>
                          <img
                            src="assets/img/raza.png"
                            alt="img"
                            class="injectable center"
                          />
                          <nav className="pagination__wrap mt-30">
                            <button
                              type="button"
                              onClick={() => orderCreate("2499")}
                              class="btn btn-two arrow-btn"
                            >
                              Make Payment
                              <img
                                src="assets/img/icons/right_arrow.svg"
                                alt="img"
                                class="injectable"
                              />
                            </button>
                          </nav>
                        </div>
                      </>
                    ) : null}
                    <div
                      className="tab-pane fade"
                      id="list"
                      role="tabpanel"
                      aria-labelledby="list-tab"
                    >
                      <div className="row courses__list-wrap row-cols-1">
                        <div className={style.cal}>
                          <div className="courses__item courses__item-three shine__animate-item">
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
                                  <div className="avg-rating">
                                    <i className="fas fa-star"></i> (4.8
                                    Reviews)
                                  </div>
                                </li>
                                <li className="price">
                                  <del>$29.00</del>$15.00
                                </li>
                              </ul>
                              <h5 className="title">
                                <a href="course-details.html">
                                  Resolving Conflicts Between Designers And
                                  Engineers
                                </a>
                              </h5>
                              <p className="author">
                                By <a href="#">David Millar</a>
                              </p>
                              <p className="info">
                                when an unknown printer took a galley of type
                                and scrambled type specimen book It has survived
                                not only.
                              </p>
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
                                  <div className="avg-rating">
                                    <i className="fas fa-star"></i> (4.5
                                    Reviews)
                                  </div>
                                </li>
                                <li className="price">$41.00</li>
                              </ul>
                              <h5 className="title">
                                <a href="course-details.html">
                                  Powerful Image Optimization Tools for this
                                  year
                                </a>
                              </h5>
                              <p className="author">
                                By <a href="#">Jenny Wilson</a>
                              </p>
                              <p className="info">
                                when an unknown printer took a galley of type
                                and scrambled type specimen book It has survived
                                not only.
                              </p>
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
                                  <div className="avg-rating">
                                    <i className="fas fa-star"></i> (4.6
                                    Reviews)
                                  </div>
                                </li>
                                <li className="price">
                                  <del>$24.00</del>$12.00
                                </li>
                              </ul>
                              <h5 className="title">
                                <a href="course-details.html">
                                  Learning JavaScript With Imagination
                                </a>
                              </h5>
                              <p className="author">
                                By <a href="#">Wade Warren</a>
                              </p>
                              <p className="info">
                                when an unknown printer took a galley of type
                                and scrambled type specimen book It has survived
                                not only.
                              </p>
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
                                  <a href="course.html">Finance</a>
                                  <div className="avg-rating">
                                    <i className="fas fa-star"></i> (4.9
                                    Reviews)
                                  </div>
                                </li>
                                <li className="price">
                                  <del>$32.00</del>$19.00
                                </li>
                              </ul>
                              <h5 className="title">
                                <a href="course-details.html">
                                  Resolving Conflicts Between Designers And
                                  Engineers
                                </a>
                              </h5>
                              <p className="author">
                                By <a href="#">Robert Fox</a>
                              </p>
                              <p className="info">
                                when an unknown printer took a galley of type
                                and scrambled type specimen book It has survived
                                not only.
                              </p>
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
                                  <div className="avg-rating">
                                    <i className="fas fa-star"></i> (4.7
                                    Reviews)
                                  </div>
                                </li>
                                <li className="price">
                                  <del>$50.00</del>$40.00
                                </li>
                              </ul>
                              <h5 className="title">
                                <a href="course-details.html">
                                  A Look At Remix And The Differences With
                                  Next.js
                                </a>
                              </h5>
                              <p className="author">
                                By <a href="#">Guy Hawkins</a>
                              </p>
                              <p className="info">
                                when an unknown printer took a galley of type
                                and scrambled type specimen book It has survived
                                not only.
                              </p>
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
                                  <div className="avg-rating">
                                    <i className="fas fa-star"></i> (4.8
                                    Reviews)
                                  </div>
                                </li>
                                <li className="price">
                                  <del>$30.00</del>$19.00
                                </li>
                              </ul>
                              <h5 className="title">
                                <a href="course-details.html">
                                  An Accessibility-First Approach To Chart
                                  Visual
                                </a>
                              </h5>
                              <p className="author">
                                By <a href="#">Sawpawlo Mark</a>
                              </p>
                              <p className="info">
                                when an unknown printer took a galley of type
                                and scrambled type specimen book It has survived
                                not only.
                              </p>
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
                              <a
                                href="course-details.html"
                                className="shine__animate-link"
                              >
                                <img
                                  src="assets/img/courses/course_thumb07.jpg"
                                  alt="img"
                                />
                              </a>
                            </div>
                            <div className="courses__item-content">
                              <ul className="courses__item-meta list-wrap">
                                <li className="courses__item-tag">
                                  <a href="course.html">Development</a>
                                  <div className="avg-rating">
                                    <i className="fas fa-star"></i> (4.6
                                    Reviews)
                                  </div>
                                </li>
                                <li className="price">$11.00</li>
                              </ul>
                              <h5 className="title">
                                <a href="course-details.html">
                                  How To Build A Localized Website With Hugo And
                                  Strapi
                                </a>
                              </h5>
                              <p className="author">
                                By <a href="#">Robert Fox</a>
                              </p>
                              <p className="info">
                                when an unknown printer took a galley of type
                                and scrambled type specimen book It has survived
                                not only.
                              </p>
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
                      {/* <nav className="pagination__wrap mt-30">
                                    <ul className="list-wrap">
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="courses.html">2</a></li>
                                        <li><a href="courses.html">3</a></li>
                                        <li><a href="courses.html">4</a></li>
                                    </ul>
                                </nav> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};
export default register;
