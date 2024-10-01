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
      <div class="main-content page-register">
            <section class="section-page-register login-wrap tf-spacing-4">
                <div class="tf-container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="img-left " >
                                <img class=" ls-is-cached lazyloaded"
                                   
                                     src="assets/images/login-img.jpg" alt="" />

                            </div>

                        </div>
                        <div class="col-lg-6">
                            <div class="content-right">
                            
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
                        style={{width:'60px'}}
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
                        style={{width:'60px'}}
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
                                <h2 class="login-title fw-7 " >
                                    Create A New Account
                                </h2>
                                <div class="register">
                                    <p class="fw-5 fs-15 " >Already have an account?</p>
                                    <a href="#" class="fw-5 fs-15 " >Sign in</a>
                                </div>
                                {level == 1 ? (
                                <>
                                <form onSubmit={submitLogin} class="form-login">
                                    <div class="cols">
                                        <fieldset class="tf-field field-username" >
                                          
                                                 <input
                                type="text"
                                 class="tf-input style-1"
                                onChange={handle}
                                name="referalCode"
                                value={referral}
                                placeholder="Referral Code"
                                required="" 
                              />
                                            <label class="tf-field-label fs-15" for="field1">Referral Code</label>
                                        </fieldset>
                                    </div>
                                    <div class="cols">
                                        <fieldset class="tf-field field-email " >
                                        <input
                                type="text"
                                  class="tf-input style-1"
                                onChange={handle}
                                id="fast-name"
                                required
                                name="name"
                                placeholder="Name..."
                              />
                                            <label class="tf-field-label fs-15" for="field2">Name</label>
                                        </fieldset>
                                    </div>
                                    <div class="cols">
                                        <fieldset class="tf-field field-pass " >

                                        <input
                                type="number"
                                class="tf-input style-1"
                                onChange={handle}
                                onBlur={handleEmail}
                                id="last-name"
                                required
                                name="mobile"
                                maxLength={10}
                                placeholder="Mobile..."
                              />
                                          
                                            <label class="tf-field-label fs-15" for="field3">Mobile</label>
                                        </fieldset>
                                    </div>
                                    <div class="cols">
                                        <fieldset class="tf-field field-pass-again " >
                                        <input
                            type="email"
                            onChange={handle}
                            onBlur={handleEmail}
                            id="email"
                            required
                            name="email"
                            placeholder="email..."
                            class="tf-input style-1"
                          />
                                          
                                            <label class="tf-field-label fs-15" for="field4">Email</label>
                                        </fieldset>
                                    </div>


                                    <div class="cols">
                                        <fieldset class="tf-field field-pass-again " >
                                        <input
                            type="email"
                            onChange={handle}
                            onBlur={handleEmail}
                            id="email"
                            required
                            name="cemail"
                            placeholder="email..."
                            class="tf-input style-1"
                          />
                                          
                                            <label class="tf-field-label fs-15" for="field4">Confirm Email</label>
                                        </fieldset>
                                    </div>


                                    <div class="cols" style={{marginTop:'-15px'}}>
                                        <fieldset class="tf-field field-pass-again " >
                                        <label class="tf-field-label fs-15" for="field4">Gender</label><br /><br />
                                        <select
                             class="form-control"
                            name="gender"
                            required
                            onChange={handle}
                            style={{marginTop:'-5px'}}
                          >
                            <option value=""> select Option</option>
                            <option> Male</option>
                            <option> Female</option>
                          </select>
                                          
                                           
                                        </fieldset>
                                    </div>


                                    <div class="cols" style={{marginTop:'-17px'}}>
                                        <fieldset class="tf-field field-pass-again " >
                                        <label class="tf-field-label fs-15" for="field4">State</label>
                                        <select
                            class="form-control"
                            name="state"
                            required
                            onChange={handle}
                            style={{marginTop:'50px'}}
                          >
                            <option value=""> select State</option>
                            {state &&
                              state.map((row) => (
                                <option>{row && row.name}</option>
                              ))}
                          </select>
                                          
                                          
                                        </fieldset>
                                    </div>


                                    <div class="cols">
                                        <fieldset class="tf-field field-pass-again " >
                                        <input
                                        class="tf-input style-1"
                            type="password"
                            id="password"
                            name="password"
                            onChange={handle}
                            required
                            placeholder="password"
                          />
                                          
                                            <label class="tf-field-label fs-15" for="field4">Password</label>
                                        </fieldset>
                                    </div>


                                    <div class="cols">
                                        <fieldset class="tf-field field-pass-again " >
                                        <input
                                        class="tf-input style-1"
                            type="password"
                            id="confirm-password"
                            name="cpassword"
                            required
                            placeholder="Confirm Password"
                          />
                                          
                                            <label class="tf-field-label fs-15" for="field4">Confirm Password</label>
                                        </fieldset>
                                    </div>
                                    <button class=" button-submit tf-btn w-100 " 
                                        type="submit">
                                        Proceed to Course Selection<i class="icon-arrow-top-right"></i>
                                    </button>
                                </form>

                                </>
                  ) : null}

                      

                                <div class="swiper-slide">

                                {level == 2 ? (
                                     <>

                                {course &&
                              course.map((row) => (
                                        <div class="course-item hover-img style-2 h240">
                                            <div class="features image-wrap">
                                                <img class="lazyload" data-src={row.pictures.base_link}
                                                    src={row.pictures.base_link} alt="" />

                                            </div>
                                            <div class="content">

                                                <h5 class="fw-5 line-clamp-2">
                                                    <a href="#"> {row.name} </a>
                                                </h5>

                                                <div class="author">
                                                    By:
                                                    <a href="#" class="author">
                                                        Digital Duniyaa</a>
                                                </div>
                                                <div class="bottom">
                                                    <div class="h6 price fw-5">₹{row.price.toFixed(2)}</div>
                                                    <a href="course-single-v2.html" class="tf-btn-arrow"><span
                                                            class="fw-5 fs-15">Buy Now</span>
                                                        <i class="icon-arrow-top-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                     ))}
                                        <button class=" button-submit tf-btn w-100 " 
                                        type="button"  onClick={() => setlevel(level + 1)}>
                                        Select Course Boundle<i class="icon-arrow-top-right"></i>
                                    </button>

                                    </>
                    ) : null}

                    {level == 3 ? (
                      <>
                                    <div>
                                <img
                            src="public/dist/img/raza.png"
                            alt="img"
                            class="injectable center"
                          />
                           <button class=" button-submit tf-btn w-100 " 
                                        type="button"  onClick={() => orderCreate("2948.82")}>
                                        Make Payment for 2499<i class="icon-arrow-top-right"></i>
                                    </button>

                                </div>

                                </>
) : null}
                                 
                                    </div>


                                 

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    </React.Fragment>
  );
};
export default register;
