import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { axios } from "../../helper/httpHelper";
import { toast } from "react-toastify";
const Purchage = () => {
  const [product, setProduct] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [productId, setproductId] = useState("");
  const navigate = useNavigate();
  const fetchProduct = async () => {
    try {
      const response = await axios.get("vimeo/courses");
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const orderCreate = async (id, price) => {
    try {
      var token = localStorage.getItem("token");

      if (token == null) {
        toast.error("please Login First");
        return false;
      }

      const response = await axios.post("product/create/order", {
        amount: price * 100,
        currency: "INR",
        receipt: "xyz product purchased",
      });
      setOrderId(response.data.order_id);
      setproductId(id);
      handlePayment(price, id);
    } catch (error) {
      console.log(error);
    }
  };
  // const handlePaymentComplete = async(response) => {
  //   const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
  //     response;
  //   const response = await axios.post('product/order',{"productId":"66ca081771a6103598651071", "paymentId":razorpay_payment_id,"orderId":razorpay_order_id, "paymentMethod":"upi", "status":"created","signature":razorpay_signature})
  // };
  const handlePayment = (price, courseId) => {
    const options = {
      key: import.meta.env.VITE_PAYMENT_KEY, // Enter the Key ID generated from the Dashboard
      amount: price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Merchant Name",
      description: "Test Transaction",
      order_id: orderId, // This is a sample Order ID. Pass the `id` obtained in the previous step
      handler: async function (response) {
        // Send this data to your server to verify the payment
        try {
          const result = await axios.post(
            "product/payment-verification",
            response
          );
          if (result.status == 200) {
            const productOrder = await axios.post("product/order", {
              productId: courseId,
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              paymentMethod: "upi",
              status: "success",
              signature: response.razorpay_signature,
            });
            navigate("/my-course");
            toast.success(productOrder.data.message);
          } else {
            toast.error(result.data.msg);
          }
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

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header sty-one">
          <h1>My Course</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">Home </a>
            </li>
            <li>
              <i className="fa fa-angle-right"></i> My Courses
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="row">
            {Array.isArray(product) &&
              product.map((row, idx) => (
                <div className="col-lg-3 col-xs-6" key={`key=${idx}`}>
                  <div className="info-box">
                    <div className="info-box-content">
                      <img
                        src={row.pictures.base_link}
                        alt=""
                        className="responsive img-fluid img-thumbnail step1"
                      />
                    </div>
                    <span style={{ textAligh: "center" }}>{row.name}</span>
                    <div>Price : {row.price}</div>
                    <button
                      onClick={() => orderCreate(row.id, row.price)}
                      type="button"
                      className="btn btn-primary btn-sm"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              ))}

            {/* <div className="col-lg-3 col-xs-6">
            <div className="info-box">
            <div className="info-box-content">
                <img src="https://www.bizgurukul.com/Biz/img/gold-bundle.png" alt="" className="responsive img-fluid img-thumbnail step1" />
                </div>
            
              <span style={{textAligh:'center'}}>Marketing Mastery</span> 
              </div>
            </div>

            <div className="col-lg-3 col-xs-6">
            <div className="info-box">
            <div className="info-box-content">
                <img src="https://www.bizgurukul.com/Biz/img/sapphire.png" alt="" className="responsive img-fluid img-thumbnail step1" />
                </div>
            
              <span style={{textAligh:'center'}}>Marketing Mastery</span> 
              </div>
            </div>

            <div className="col-lg-3 col-xs-6">
            <div className="info-box">
            <div className="info-box-content">
                <img src="https://www.bizgurukul.com/Biz/img/platinum-bundle.png" alt="" className="responsive img-fluid img-thumbnail step1" />
                </div>
            
              <span style={{textAligh:'center'}}>Marketing Mastery</span> 
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-xs-6">
              <div className="info-box">
                {" "}
                <span className="info-box-icon bg-green">
                  <i className="icon-pencil"></i>
                </span>
                <div className="info-box-content">
                  {" "}
                  <span className="info-box-number">456</span>{" "}
                  <span className="info-box-text">Pending Project</span>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-xs-6">
              <div className="info-box">
                {" "}
                <span className="info-box-icon bg-yellow">
                  <i className="icon-wallet"></i>
                </span>
                <div className="info-box-content">
                  {" "}
                  <span className="info-box-number">$41234</span>{" "}
                  <span className="info-box-text">Total Cost</span>
                </div>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-xs-6">
              <div className="info-box">
                {" "}
                <span className="info-box-icon bg-red">
                  <i className="icon-layers"></i>
                </span>
                <div className="info-box-content">
                  {" "}
                  <span className="info-box-number">$81234</span>{" "}
                  <span className="info-box-text">Total Earnings</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* <div className="row">
            <div className="col-lg-8 col-xlg-9">
              <div className="info-box">
                <div className="d-flex flex-wrap">
                  <div>
                    <h5 className="text-black">Yearly Earning</h5>
                  </div>
                  <div className="ml-auto">
                    <ul className="list-inline">
                      <li className="text-aqua">
                        {" "}
                        <i className="fa fa-circle"></i> Sales
                      </li>
                      <li className="text-blue">
                        {" "}
                        <i className="fa fa-circle"></i> Earning ($)
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="earning"></div>
              </div>
            </div>
            <div className="col-lg-4 col-xlg-3">
              <div className="box box-widget widget-user">
                <div className="widget-user-header bg-aqua-active">
                  <h3 className="widget-user-username">Alexander Pierce</h3>
                  <h6 className="widget-user-desc">Founder &amp; CEO</h6>
                </div>
                <div className="widget-user-image">
                  {" "}
                  <img
                    className="img-circle"
                    src="dist/img/img3.jpg"
                    alt="User Avatar"
                  />{" "}
                </div>
                <div className="box-footer">
                  <div className="text-center">
                    <p>
                      {" "}
                      A small river named Duden flows by their place and with
                      the necessary.
                    </p>
                    <a
                      href="#"
                      className="btn btn-facebook btn-rounded margin-bottom"
                    >
                      Follow
                    </a>
                  </div>
                  <div className="row margin-bottom">
                    <div className="col-sm-4 border-right">
                      <div className="description-block">
                        <h5 className="description-header">3,200</h5>
                        <span className="description-text">SALES</span>{" "}
                      </div>
                    </div>
                    <div className="col-sm-4 border-right">
                      <div className="description-block">
                        <h5 className="description-header">13,000</h5>
                        <span className="description-text">FOLLOWERS</span>{" "}
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="description-block">
                        <h5 className="description-header">35</h5>
                        <span className="description-text">PRODUCTS</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col-lg-4">
              <div className="small-box bg-aqua">
                <div className="inner">
                  <div className="text-left">
                    <h2>Total Sales</h2>
                    <h6>Todays Income</h6>
                  </div>
                  <div className="text-right m-t-2">
                    <h1>
                      <sup>
                        <i className="ti-arrow-up"></i>
                      </sup>{" "}
                      $500
                    </h1>
                  </div>
                  <div className="m-b-2">
                    <span className="text-white">35%</span>
                    <div className="progress bg-lightblue">
                      <div
                        className="progress-bar bg-white"
                        role="progressbar"
                        style={{ width: "35%", height: "6px" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="small-box bg-darkblue text-white">
                <div className="inner">
                  <div className="text-left">
                    <h2>Total Sales</h2>
                    <h6>This Month Income</h6>
                  </div>
                  <div className="text-right m-t-2">
                    <h1>
                      <sup>
                        <i className="ti-arrow-up"></i>
                      </sup>{" "}
                      $2500
                    </h1>
                  </div>
                  <div className="m-b-2">
                    <span className="text-white">55%</span>
                    <div className="progress bg-lightblue">
                      <div
                        className="progress-bar bg-white"
                        role="progressbar"
                        style={{ width: "55%", height: "6px" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="small-box bg-orange">
                <div className="inner">
                  <div className="text-left">
                    <h2>Total Profit</h2>
                    <h6>This Year Income</h6>
                  </div>
                  <div className="text-right m-t-2">
                    <h1>
                      <sup>
                        <i className="ti-arrow-up"></i>
                      </sup>{" "}
                      $8500
                    </h1>
                  </div>
                  <div className="m-b-2">
                    <span className="text-white">75%</span>
                    <div className="progress bg-lightblue">
                      <div
                        className="progress-bar bg-white"
                        role="progressbar"
                        style={{ width: "75%", height: "6px" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col-lg-6">
              <div className="info-box">
                <div className="box box-warning direct-chat direct-chat-warning">
                  <div className="box-header with-border">
                    <h3 className="box-title text-black">Recent Chats</h3>
                  </div>
                  <div className="box-body">
                    <div className="direct-chat-messages">
                      <div className="direct-chat-msg">
                        <div className="direct-chat-info clearfix">
                          {" "}
                          <span className="direct-chat-name pull-left">
                            Alexander Pierce
                          </span>{" "}
                          <span className="direct-chat-timestamp pull-right">
                            23 Jan 2:00 pm
                          </span>{" "}
                        </div>
                        <img
                          className="direct-chat-img"
                          src="dist/img/img2.jpg"
                          alt="user image"
                        />
                        <div className="direct-chat-text">
                          {" "}
                          A small river named Duden flows by their place and
                          supplies it with the necessary.{" "}
                        </div>
                      </div>
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-info clearfix">
                          {" "}
                          <span className="direct-chat-name pull-right">
                            Sarah Bullock
                          </span>{" "}
                          <span className="direct-chat-timestamp pull-left">
                            23 Jan 2:05 pm
                          </span>{" "}
                        </div>
                        <img
                          className="direct-chat-img"
                          src="dist/img/img3.jpg"
                          alt="user image"
                        />

                        <div className="direct-chat-text">
                          {" "}
                          You better believe it!{" "}
                        </div>
                      </div>
                      <div className="direct-chat-msg">
                        <div className="direct-chat-info clearfix">
                          {" "}
                          <span className="direct-chat-name pull-left">
                            Alexander Pierce
                          </span>{" "}
                          <span className="direct-chat-timestamp pull-right">
                            23 Jan 5:37 pm
                          </span>{" "}
                        </div>
                        <img
                          className="direct-chat-img"
                          src="dist/img/img4.jpg"
                          alt="user image"
                        />
                        <div className="direct-chat-text">
                          {" "}
                          A small river named Duden flows by their place and
                          supplies it with the necessary.{" "}
                        </div>
                      </div>
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-info clearfix">
                          {" "}
                          <span className="direct-chat-name pull-right">
                            Sarah Bullock
                          </span>{" "}
                          <span className="direct-chat-timestamp pull-left">
                            23 Jan 6:10 pm
                          </span>{" "}
                        </div>
                        <img
                          className="direct-chat-img"
                          src="dist/img/img5.jpg"
                          alt="user image"
                        />
                        <div className="direct-chat-text"> I would love to. </div>
                      </div>
                      <div className="direct-chat-msg">
                        <div className="direct-chat-info clearfix">
                          {" "}
                          <span className="direct-chat-name pull-left">
                            Alexander Pierce
                          </span>{" "}
                          <span className="direct-chat-timestamp pull-right">
                            23 Jan 2:00 pm
                          </span>{" "}
                        </div>
                        <img
                          className="direct-chat-img"
                          src="dist/img/img6.jpg"
                          alt="user image"
                        />
                        <div className="direct-chat-text">
                          {" "}
                          A small river named Duden flows by their place and
                          supplies it with the necessary.{" "}
                        </div>
                      </div>
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-info clearfix">
                          {" "}
                          <span className="direct-chat-name pull-right">
                            Sarah Bullock
                          </span>{" "}
                          <span className="direct-chat-timestamp pull-left">
                            23 Jan 2:05 pm
                          </span>{" "}
                        </div>
                        <img
                          className="direct-chat-img"
                          src="dist/img/img3.jpg"
                          alt="user image"
                        />

                        <div className="direct-chat-text">
                          {" "}
                          You better believe it!{" "}
                        </div>
                      </div>
                      <div className="direct-chat-msg">
                        <div className="direct-chat-info clearfix">
                          {" "}
                          <span className="direct-chat-name pull-left">
                            Alexander Pierce
                          </span>{" "}
                          <span className="direct-chat-timestamp pull-right">
                            23 Jan 2:00 pm
                          </span>{" "}
                        </div>
                        <img
                          className="direct-chat-img"
                          src="dist/img/img6.jpg"
                          alt="user image"
                        />
                        <div className="direct-chat-text">
                          {" "}
                          A small river named Duden flows by their place and
                          supplies it with the necessary.{" "}
                        </div>
                      </div>
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-info clearfix">
                          {" "}
                          <span className="direct-chat-name pull-right">
                            Sarah Bullock
                          </span>{" "}
                          <span className="direct-chat-timestamp pull-left">
                            23 Jan 2:05 pm
                          </span>{" "}
                        </div>
                        <img
                          className="direct-chat-img"
                          src="dist/img/img3.jpg"
                          alt="user image"
                        />

                        <div className="direct-chat-text">
                          {" "}
                          You better believe it!{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type Message ..."
                          className="form-control"
                        />
                        <span className="input-group-btn">
                          <button
                            type="button"
                            className="btn btn-warning btn-flat"
                          >
                            Send
                          </button>
                        </span>{" "}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="info-box">
                <div className="box box-widget">
                  <div className="box-header with-border">
                    <div className="user-block">
                      {" "}
                      <img
                        className="img-circle"
                        src="dist/img/img1.jpg"
                        alt="User Image"
                      />{" "}
                      <span className="username">
                        <a href="#">Alexander Pierce</a>
                      </span>{" "}
                      <span className="description">
                        Shared publicly - 8:15 AM Today
                      </span>{" "}
                    </div>
                  </div>
                  <div className="box-body">
                    {" "}
                    <img
                      className="img-responsive pad"
                      src="dist/img/img6.jpg"
                      alt="Photo"
                    />
                    <p>
                      I took this photo this morning. What do you guys think?
                    </p>
                    <button type="button" className="btn btn-default btn-xs">
                      <i className="fa fa-share"></i> Share
                    </button>
                    <button type="button" className="btn btn-default btn-xs">
                      <i className="fa fa-thumbs-o-up"></i> Like
                    </button>
                    <span className="pull-right text-muted">
                      153 likes - 23 comments
                    </span>{" "}
                  </div>
                  <div className="box-footer box-comments">
                    <div className="box-comment">
                      {" "}
                      <img
                        className="img-circle img-sm"
                        src="dist/img/img3.jpg"
                        alt="User Image"
                      />
                      <div className="comment-text">
                        {" "}
                        <span className="username">
                          {" "}
                          Maria Gonzales{" "}
                          <span className="text-muted pull-right">
                            12:15 PM Today
                          </span>{" "}
                        </span>{" "}
                        It is a long established fact that a reader will be
                        distracted.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="box-footer">
                    <form action="#" method="post">
                      <img
                        className="img-responsive img-circle img-sm"
                        src="dist/img/img4.jpg"
                        alt="Alt Text"
                      />

                      <div className="img-push">
                        <input
                          type="text"
                          className="form-control input-sm"
                          placeholder="Press enter to post comment"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 m-b-2">
              <div
                id="carouselExampleControls3"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    {" "}
                    <img
                      src="dist/img/img7.jpg"
                      className="img-responsive img-rounded"
                      alt="User Image"
                    />
                  </div>
                  <div className="carousel-item">
                    {" "}
                    <img
                      src="dist/img/img8.jpg"
                      className="img-responsive img-rounded"
                      alt="User Image"
                    />{" "}
                  </div>
                  <div className="carousel-item">
                    {" "}
                    <img
                      src="dist/img/img9.jpg"
                      className="img-responsive img-rounded"
                      alt="User Image"
                    />{" "}
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls3"
                  role="button"
                  data-slide="prev"
                >
                  {" "}
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>{" "}
                  <span className="sr-only">Previous</span>{" "}
                </a>{" "}
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls3"
                  role="button"
                  data-slide="next"
                >
                  {" "}
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>{" "}
                  <span className="sr-only">Next</span>{" "}
                </a>{" "}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="soci-wid-box bg-twitter m-b-3">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="col-lg-12 text-center">
                        <div className="sco-icon">
                          <i className="ti-twitter-alt"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer nec odio praesent libero sed cursus
                          ante.
                        </p>
                        <p className="text-italic pt-1">- John Doe -</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-lg-12 text-center">
                        <div className="sco-icon">
                          <i className="ti-twitter-alt"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer nec odio praesent libero sed cursus
                          ante.
                        </p>
                        <p className="text-italic pt-1">- John Doe -</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-lg-12 text-center">
                        <div className="sco-icon">
                          <i className="ti-twitter-alt"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer nec odio praesent libero sed cursus
                          ante.
                        </p>
                        <p className="text-italic pt-1">- John Doe -</p>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    {" "}
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>{" "}
                    <span className="sr-only">Previous</span>{" "}
                  </a>{" "}
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    {" "}
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>{" "}
                    <span className="sr-only">Next</span>{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="soci-wid-box bg-facebook m-b-3">
                <div
                  id="carouselExampleControls1"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                      <div className="col-lg-12 text-center">
                        <div className="sco-icon">
                          <i className="ti-facebook"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer nec odio praesent libero sed cursus
                          ante.
                        </p>
                        <p className="text-italic pt-1">- John Doe -</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-lg-12 text-center">
                        <div className="sco-icon">
                          <i className="ti-facebook"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer nec odio praesent libero sed cursus
                          ante.
                        </p>
                        <p className="text-italic pt-1">- John Doe -</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="col-lg-12 text-center">
                        <div className="sco-icon">
                          <i className="ti-facebook"></i>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer nec odio praesent libero sed cursus
                          ante.
                        </p>
                        <p className="text-italic pt-1">- John Doe -</p>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls1"
                    role="button"
                    data-slide="prev"
                  >
                    {" "}
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>{" "}
                    <span className="sr-only">Previous</span>{" "}
                  </a>{" "}
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls1"
                    role="button"
                    data-slide="next"
                  >
                    {" "}
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>{" "}
                    <span className="sr-only">Next</span>{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Purchage;
