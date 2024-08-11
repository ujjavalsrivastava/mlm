import { initDropdowns } from "flowbite";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const [data, setdata] = useState(null);

  //   const fetchProfile = async()=>{
  //     const response = await axios.get('user/profile');
  //     setdata(response.data)
  //   }

  // useEffect(()=>{
  //   fetchProfile();
  // },[])

  return (
    <>
      <header class="main-header">
        <Link to={"/dashboard"}>
          <a href="javascript:void(0)" class="logo blue-bg">
            <span class="logo-mini">
              <img src="dist/img/logo-n.png" alt="" />
            </span>
            <span class="logo-lg">
              <img src="dist/img/logo.png" alt="" />
            </span>{" "}
          </a>
        </Link>

        <nav class="navbar blue-bg navbar-static-top">
          <ul class="nav navbar-nav pull-left">
            <li>
              <a class="sidebar-toggle" data-toggle="push-menu" href="#"></a>{" "}
            </li>
          </ul>
          <div class="pull-left search-box">
            <form action="#" method="get" class="search-form">
              <div class="input-group">
                <input
                  name="search"
                  class="form-control"
                  placeholder="Search..."
                  type="text"
                />
                <span class="input-group-btn">
                  <button
                    type="submit"
                    name="search"
                    id="search-btn"
                    class="btn btn-flat"
                  >
                    <i class="fa fa-search"></i>{" "}
                  </button>
                </span>
              </div>
            </form>
          </div>
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">
              <li class="dropdown messages-menu">
                {" "}
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  {" "}
                  <i class="fa fa-envelope-o"></i>
                  <div class="notify">
                    {" "}
                    <span class="heartbit"></span> <span class="point"></span>{" "}
                  </div>
                </a>
                <ul class="dropdown-menu">
                  <li class="header">You have 4 new messages</li>
                  <li>
                    <ul class="menu">
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img
                              src="dist/img/img1.jpg"
                              class="img-circle"
                              alt="User Image"
                            />{" "}
                            <span class="profile-status online pull-right"></span>
                          </div>
                          <h4>Alex C. Patton</h4>
                          <p>I've finished it! See you so...</p>
                          <p>
                            <span class="time">9:30 AM</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img
                              src="dist/img/img3.jpg"
                              class="img-circle"
                              alt="User Image"
                            />{" "}
                            <span class="profile-status offline pull-right"></span>
                          </div>
                          <h4>Nikolaj S. Henriksen</h4>
                          <p>I've finished it! See you so...</p>
                          <p>
                            <span class="time">10:15 AM</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img
                              src="dist/img/img2.jpg"
                              class="img-circle"
                              alt="User Image"
                            />{" "}
                            <span class="profile-status away pull-right"></span>
                          </div>
                          <h4>Kasper S. Jessen</h4>
                          <p>I've finished it! See you so...</p>
                          <p>
                            <span class="time">8:45 AM</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left">
                            <img
                              src="dist/img/img4.jpg"
                              class="img-circle"
                              alt="User Image"
                            />{" "}
                            <span class="profile-status busy pull-right"></span>
                          </div>
                          <h4>Florence S. Kasper</h4>
                          <p>I've finished it! See you so...</p>
                          <p>
                            <span class="time">12:15 AM</span>
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="footer">
                    <a href="#">View All Messages</a>
                  </li>
                </ul>
              </li>

              <li class="dropdown messages-menu">
                {" "}
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  {" "}
                  <i class="fa fa-bell-o"></i>
                  <div class="notify">
                    {" "}
                    <span class="heartbit"></span> <span class="point"></span>{" "}
                  </div>
                </a>
                <ul class="dropdown-menu">
                  <li class="header">Notifications</li>
                  <li>
                    <ul class="menu">
                      <li>
                        <a href="#">
                          <div class="pull-left icon-circle red">
                            <i class="icon-lightbulb"></i>
                          </div>
                          <h4>Alex C. Patton</h4>
                          <p>I've finished it! See you so...</p>
                          <p>
                            <span class="time">9:30 AM</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left icon-circle blue">
                            <i class="fa fa-coffee"></i>
                          </div>
                          <h4>Nikolaj S. Henriksen</h4>
                          <p>I've finished it! See you so...</p>
                          <p>
                            <span class="time">1:30 AM</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left icon-circle green">
                            <i class="fa fa-paperclip"></i>
                          </div>
                          <h4>Kasper S. Jessen</h4>
                          <p>I've finished it! See you so...</p>
                          <p>
                            <span class="time">9:30 AM</span>
                          </p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div class="pull-left icon-circle yellow">
                            <i class="fa  fa-plane"></i>
                          </div>
                          <h4>Florence S. Kasper</h4>
                          <p>I've finished it! See you so...</p>
                          <p>
                            <span class="time">11:10 AM</span>
                          </p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="footer">
                    <a href="#">Check all Notifications</a>
                  </li>
                </ul>
              </li>

              <li class="dropdown user user-menu p-ph-res">
                {" "}
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  {" "}
                  <img
                    src="dist/img/img1.jpg"
                    class="user-image"
                    alt="User Image"
                  />{" "}
                  <span class="hidden-xs">Alexander Pierce</span>{" "}
                </a>
                <ul class="dropdown-menu">
                  <li class="user-header">
                    <div class="pull-left user-img">
                      <img
                        src="dist/img/img1.jpg"
                        class="img-responsive"
                        alt="User"
                      />
                    </div>
                    <p class="text-left">
                      Florence Douglas <small>florence@gmail.com</small>{" "}
                    </p>
                    <div class="view-link text-left">
                      <a href="#">View Profile</a>{" "}
                    </div>
                  </li>

                  <li>
                    <Link to={"/profile"}>
                      <i class="icon-profile-male"></i> My Profile
                    </Link>
                  </li>
                  <li>
                    <Link to={"/kyc"}>
                      <i class="icon-profile-male"></i> My KYC
                    </Link>
                  </li>
                  <li>
                    <Link to={"/member-dashboard"}>
                      <i class="icon-profile-male"></i> Affiliate Panel
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-wallet"></i> My Balance
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-envelope"></i> Inbox
                    </a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="#">
                      <i class="icon-gears"></i> Account Setting
                    </a>
                  </li>
                  <li role="separator" class="divider"></li>
                  <li>
                    <a href="javascript:void(0)" onClick={logout}>
                      <i class="fa fa-power-off"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
