import React, { useEffect, useState } from "react";
import style from './home.module.css';
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";
const register = () => {
  const[product,setProduct]=useState(null);
  const [orderId, setOrderId] = useState("");
  const [productId, setproductId] = useState("");
  const [referral, setReferral] = useState(null);
  const [level, setlevel] = useState(1);
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  const[course,setcourse]=useState(null);
    const fetchCourse = async()=>{
        try{
            const response = await axios.get('vimeo/courses');
            setcourse(response.data);
        }catch(error){
            console.log(error)
        }
        
    }

    

 

  const handle = (e) => {
    setData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const submitLogin = async (e) => {
    e.preventDefault();

    setlevel( level + 1);

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

  const fetchProduct = async()=>{
    try{
      const response =  await axios.get('vimeo/courses');
      setProduct(response.data);
    }catch(error){
      console.log(error)
    }
    
  }

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get('referral');

  const orderCreate = async(price)=>{
    try{
     
      var token = localStorage.getItem("token");
      
        

     const response =  await axios.post('product/create/order',{
        amount: price * 100,
        currency: "INR",
        receipt: "xyz product purchased",
      });
      setOrderId(response.data.order_id);
    
      handlePayment(price);
    }catch(error){
      console.log(error)
    }
  }
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
        console.log('payment data '+ JSON.stringify(response));
          // Send this data to your server to verify the payment
          try{
            // const result = await axios.post('product/payment-verification', response);
            // if(result.status==200){
                const userReponse = await axios.post('user/register',data); 
                //response.razorpay_order_id
                const response = await axios.post("user/login", {email:data.email,password:data.password});
                localStorage.setItem("token", response.data.token);
                // if (response.data.code == "801") {
                  
                //   navigate("/my-course");
                //   toast.success(response.data.message);
                // } else {
                //   toast.error(response.data.error);
                // }
              const productOrder= await axios.post('product/order',{"amount":price,"paymentId":response.razorpay_payment_id,"orderId":orderId, "paymentMethod":"upi", "status":"success","signature":"123sddfgdf"});
              
              navigate('/my-course');
              toast.success(result.data.msg);
            // }else{
            //   toast.error(result.data.msg);
            // }
          }catch(error){
          console.log(error)
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

  useEffect(()=>{
    const queryParams = new URLSearchParams(window.location.search);
    const value = queryParams.get('referralCode'); // 'myParam' is the name of the query parameter
    setReferral(value);
    setData(value);
    fetchProduct();
    fetchCourse();
  },[])

    return (

        <React.Fragment>


 

   

    
    <main class="main-area fix">

       
        <section class="breadcrumb__area breadcrumb__bg" data-background="assets/img/bg/breadcrumb_bg.jpg" >
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
                <img src="assets/img/others/breadcrumb_shape01.svg" alt="img" class="alltuchtopdown" />
                <img src="assets/img/others/breadcrumb_shape02.svg" alt="img" data-aos="fade-right" data-aos-delay="300" />
                <img src="assets/img/others/breadcrumb_shape03.svg" alt="img" data-aos="fade-up" data-aos-delay="400" />
                <img src="assets/img/others/breadcrumb_shape04.svg" alt="img" data-aos="fade-down-left" data-aos-delay="400" />
                <img src="assets/img/others/breadcrumb_shape05.svg" alt="img" data-aos="fade-left" data-aos-delay="400" />
            </div>
        </section>
       
        {(level == 1) ? (
        <>
        <section class="singUp-area section-py-0">
            <div class="container">
                <div class="row justify-content-center" style={{marginTop:'-45px'}}>
                <div class="col-xl-6 col-lg-8">
                        <div class="singUp-wrap">
                            <h2 class="title">Create Your Account</h2>
                            <p>Hey there! Ready to join the party? We just need a few details from you to get <br /> started. Let's do this!</p>
                            
                          
                            <form  onSubmit={submitLogin} class="account__form">
                                <div class="row gutter-20">
                                <div class="col-md-12">
                                        <div class="form-grp">
                                            <label for="fast-name">Referral Code</label>
                                            <input type="text" onChange={handle} name="referalCode" value={referral} required placeholder="Referral Code" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-grp">
                                            <label for="fast-name"> Name</label>
                                            <input type="text" onChange={handle} id="fast-name" required name="name" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-grp">
                                            <label for="last-name">Mobile </label>
                                            <input type="text" onChange={handle} id="last-name" required name="mobile" placeholder="Last name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-grp">
                                    <label for="email">Email</label>
                                    <input type="email" onChange={handle} id="email" required name="email" placeholder="email" />
                                </div>
                                <div class="form-grp">
                                    <label for="email">Confirm Email</label>
                                    <input type="email"  id="email" required name="cemail" placeholder="email" />
                                </div>
                                 <div class="form-grp">
                                    <label for="email">Gender</label>
                                    <select class="form-control" name="gender" required onChange={handle}>
                                        <option value=""> select Option</option>
                                        <option> Male</option>
                                         <option> Female</option>
                                        
                                    </select>
                                </div>
                                <div class="form-grp">
                                    <label for="email">State</label>
                                    <select class="form-control" name="state" required onChange={handle}>
                                        <option value=""> select State</option>
                                        <option> Allahabad</option>
                                    </select>
                                </div>
                                <div class="form-grp">
                                    <label for="password">Password</label>
                                    <input type="password" id="password" name="password" onChange={handle} required placeholder="password" />
                                </div>
                                <div class="form-grp">
                                    <label for="confirm-password">Confirm Password</label>
                                    <input type="password" id="confirm-password" name="cpassword" required placeholder="Confirm Password" />
                                </div>

                                
                                <button type="submit" class="btn btn-two arrow-btn">Proceed to Course Selection<img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable" /></button>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>):null}
         
        {(level == 2) ? (
        <>
        <section className="all-courses-area section-py-120">
            <div className="container">
                <div className="row">
                  
                    <div className="col-xl-12 col-lg-12">
                        {/* <div className="courses-top-wrap courses-top-wrap">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <div className="courses-top-left">
                                        <p>Showing 250 total results</p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="d-flex justify-content-center justify-content-md-end align-items-center flex-wrap">
                                        <div className="courses-top-right m-0 ms-md-auto">
                                            <span className="sort-by">Sort By:</span>
                                            <div className="courses-top-right-select">
                                                <select name="orderby" className="orderby">
                                                    <option value="Most Popular">Most Popular</option>
                                                    <option value="popularity">popularity</option>
                                                    <option value="average rating">average rating</option>
                                                    <option value="latest">latest</option>
                                                    <option value="latest">latest</option>
                                                </select>
                                            </div>
                                        </div>
                                        <ul className="nav nav-tabs courses__nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="grid-tab" data-bs-toggle="tab" data-bs-target="#grid" type="button" role="tab" aria-controls="grid" aria-selected="true">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6 1H2C1.44772 1 1 1.44772 1 2V6C1 6.55228 1.44772 7 2 7H6C6.55228 7 7 6.55228 7 6V2C7 1.44772 6.55228 1 6 1Z"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M16 1H12C11.4477 1 11 1.44772 11 2V6C11 6.55228 11.4477 7 12 7H16C16.5523 7 17 6.55228 17 6V2C17 1.44772 16.5523 1 16 1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M6 11H2C1.44772 11 1 11.4477 1 12V16C1 16.5523 1.44772 17 2 17H6C6.55228 17 7 16.5523 7 16V12C7 11.4477 6.55228 11 6 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M16 11H12C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17H16C16.5523 17 17 16.5523 17 16V12C17 11.4477 16.5523 11 16 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="list-tab" data-bs-toggle="tab" data-bs-target="#list" type="button" role="tab" aria-controls="list" aria-selected="false">
                                                    <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.5 6C0.67 6 0 6.67 0 7.5C0 8.33 0.67 9 1.5 9C2.33 9 3 8.33 3 7.5C3 6.67 2.33 6 1.5 6ZM1.5 0C0.67 0 0 0.67 0 1.5C0 2.33 0.67 3 1.5 3C2.33 3 3 2.33 3 1.5C3 0.67 2.33 0 1.5 0ZM1.5 12C0.67 12 0 12.68 0 13.5C0 14.32 0.68 15 1.5 15C2.32 15 3 14.32 3 13.5C3 12.68 2.33 12 1.5 12ZM5.5 14.5H17.5C18.05 14.5 18.5 14.05 18.5 13.5C18.5 12.95 18.05 12.5 17.5 12.5H5.5C4.95 12.5 4.5 12.95 4.5 13.5C4.5 14.05 4.95 14.5 5.5 14.5ZM5.5 8.5H17.5C18.05 8.5 18.5 8.05 18.5 7.5C18.5 6.95 18.05 6.5 17.5 6.5H5.5C4.95 6.5 4.5 6.95 4.5 7.5C4.5 8.05 4.95 8.5 5.5 8.5ZM4.5 1.5C4.5 2.05 4.95 2.5 5.5 2.5H17.5C18.05 2.5 18.5 2.05 18.5 1.5C18.5 0.95 18.05 0.5 17.5 0.5H5.5C4.95 0.5 4.5 0.95 4.5 1.5Z" fill="currentColor" />
                                                    </svg>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                                <div className="row courses__grid-wrap row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
                                    
                                {course && course.map(row =>(

                                  
<div className={style.cal}>
    <div className="courses__item shine__animate-item">
        <div className="courses__item-thumb">
            <a href="course-details.html" className="shine__animate-link">
                <img src={row.pictures.base_link} alt="img" />
            </a>
        </div>
        <div className="courses__item-content">
            <ul className="courses__item-meta list-wrap">
                <li className="courses__item-tag">
                    <a href="course.html">Development</a>
                </li>
                <li className="avg-rating"><i className="fas fa-star"></i> (4.8 Reviews)</li>
            </ul>
         
            <h5 className="title"><Link to={`/courses-details-all/${row.courseId}`}>{row.name}</Link></h5>
            <p className="author">By <a href="#">David Millar</a></p>
            <div className="courses__item-bottom">
                <div className="button">
                    <a href="course-details.html">
                        <span className="text">Enroll Now</span>
                        <i className="flaticon-arrow-right"></i>
                    </a>
                </div>
                <h5 className="price">{row.price.toFixed(2)}</h5>
            </div>
        </div>
    </div>
</div>
  ))}

                                    {/* <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb01.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Development</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.8 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                                <p className="author">By <a href="#">David Millar</a></p>
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

                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb02.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Design</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.5 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">The Complete Graphic Design for Beginners</a></h5>
                                                <p className="author">By <a href="#">Jenny Wilson</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb03.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Marketing</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.3 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Learning Digital Marketing on Facebook</a></h5>
                                                <p className="author">By <a href="#">Wade Warren</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb04.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Business</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.8 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Financial Analyst Training & Investing Course</a></h5>
                                                <p className="author">By <a href="#">Robert Fox</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb05.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Data Science</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.5 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Data Analysis & Visualization MasterclassName</a></h5>
                                                <p className="author">By <a href="#">Guy Hawkins</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb06.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Mathematic</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.7 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Master the Fundamentals of Math</a></h5>
                                                <p className="author">By <a href="#">Sawpawlo Mark</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb07.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Business</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.8 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">How To Build A Localized Website With Hugo And Strapi</a></h5>
                                                <p className="author">By <a href="#">David Millar</a></p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">$11.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb08.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Desing</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.5 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Designing Effective Pricing Plans UX</a></h5>
                                                <p className="author">By <a href="#">Sawpawlo Mark</a></p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">$17.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb09.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Language</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.6 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Accelerating UX Maturity With A Breakthrough Project</a></h5>
                                                <p className="author">By <a href="#">David Millar</a></p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">$22.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb10.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Creative</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.7 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Demystifying The New Gatsby Framework</a></h5>
                                                <p className="author">By <a href="#">Jack & Jon</a></p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">$29.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb11.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Data</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.8 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Voice Control Usability Considerations For Partially</a></h5>
                                                <p className="author">By <a href="#">Lily Rebeca</a></p>
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
                                    <div className={style.cal}>
                                        <div className="courses__item shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb12.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Finance</a>
                                                    </li>
                                                    <li className="avg-rating"><i className="fas fa-star"></i> (4.5 Reviews)</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Things I Wish I’d Known Earlier In My Career</a></h5>
                                                <p className="author">By <a href="#">Sawpawlo Mark</a></p>
                                                <div className="courses__item-bottom">
                                                    <div className="button">
                                                        <a href="course-details.html">
                                                            <span className="text">Enroll Now</span>
                                                            <i className="flaticon-arrow-right"></i>
                                                        </a>
                                                    </div>
                                                    <h5 className="price">$9.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <nav className="pagination__wrap mt-30">
                                <button type="button" onClick={() => orderCreate('2499')} class="btn btn-two arrow-btn">Make Payment for 2499<img src="assets/img/icons/right_arrow.svg" alt="img" class="injectable" /></button>
                                </nav>
                            </div>
                            <div className="tab-pane fade" id="list" role="tabpanel" aria-labelledby="list-tab">
                                <div className="row courses__list-wrap row-cols-1">
                                    <div className={style.cal}>
                                        <div className="courses__item courses__item-three shine__animate-item">
                                            <div className="courses__item-thumb">
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb01.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Development</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.8 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price"><del>$29.00</del>$15.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Resolving Conflicts Between Designers And Engineers</a></h5>
                                                <p className="author">By <a href="#">David Millar</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
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
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb02.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Design</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.5 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price">$41.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Powerful Image Optimization Tools for this year</a></h5>
                                                <p className="author">By <a href="#">Jenny Wilson</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
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
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb03.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Marketing</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.6 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price"><del>$24.00</del>$12.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Learning JavaScript With Imagination</a></h5>
                                                <p className="author">By <a href="#">Wade Warren</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
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
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb04.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Finance</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.9 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price"><del>$32.00</del>$19.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">Resolving Conflicts Between Designers And Engineers</a></h5>
                                                <p className="author">By <a href="#">Robert Fox</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
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
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb05.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Data Science</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.7 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price"><del>$50.00</del>$40.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">A Look At Remix And The Differences With Next.js</a></h5>
                                                <p className="author">By <a href="#">Guy Hawkins</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
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
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb06.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Mathematic</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.8 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price"><del>$30.00</del>$19.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">An Accessibility-First Approach To Chart Visual</a></h5>
                                                <p className="author">By <a href="#">Sawpawlo Mark</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
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
                                                <a href="course-details.html" className="shine__animate-link">
                                                    <img src="assets/img/courses/course_thumb07.jpg" alt="img" />
                                                </a>
                                            </div>
                                            <div className="courses__item-content">
                                                <ul className="courses__item-meta list-wrap">
                                                    <li className="courses__item-tag">
                                                        <a href="course.html">Development</a>
                                                        <div className="avg-rating">
                                                            <i className="fas fa-star"></i> (4.6 Reviews)
                                                        </div>
                                                    </li>
                                                    <li className="price">$11.00</li>
                                                </ul>
                                                <h5 className="title"><a href="course-details.html">How To Build A Localized Website With Hugo And Strapi</a></h5>
                                                <p className="author">By <a href="#">Robert Fox</a></p>
                                                <p className="info">when an unknown printer took a galley of type and scrambled type specimen book It has survived not only.</p>
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
        </section>
        </>):null}
    </main>
 
   
        </React.Fragment>

    )
}
export default register;