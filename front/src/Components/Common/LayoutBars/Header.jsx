import { useEffect, useState } from "react";
import logo from "../../../../public/dist/img/img1.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../store/profileReducer";

const Header = () => {
  const [show, setShow] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  const profile = useSelector((state) => state.profile?.data || {});
  const handleToggle = () => {
    setShow((p) => !p);
  };
  const logout = () => {
    localStorage.clear();
    window.location.assign("/login");
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (!profile?._id) {
      dispatch(fetchProfile());
    }
  }, []);

  useEffect(() => {
    const updateCenterSlidePercentage = () => {
      if (window.innerWidth < 768) {
        document.body.classList.remove("sidebar-collapse");
        if (showSidebar) {
          document.body.classList.remove("sidebar-open");
        } else {
          document.body.classList.add("sidebar-open");
        }
      } else {
        document.body.classList.add("sidebar-open");
        if (showSidebar) {
          document.body.classList.remove("sidebar-collapse");
        } else {
          document.body.classList.add("sidebar-collapse");
        }
      }
    };
    updateCenterSlidePercentage();
    window.addEventListener("resize", updateCenterSlidePercentage);
    return () =>
      window.removeEventListener("resize", updateCenterSlidePercentage);
  }, [showSidebar]);

  const handleSidebarClick = () => {
    setShowSidebar((p) => !p);
  };

  return (
    <>
      <header className="main-header">
        <Link to={"/my-course"}>
          <a href="javascript:void(0)" className="logo blue-bg">
            <span className="logo-mini">
              <img src="dist/img/logo-n.png" alt="" />
            </span>
            <span className="logo-lg">
              <img src="assets/images/dg-logo.svg" alt="" />
            </span>
          </a>
        </Link>

        <nav className="navbar blue-bg navbar-static-top">
          <ul className="nav navbar-nav pull-left">
            <li>
              <a className="sidebar-toggle" onClick={handleSidebarClick}></a>
            </li>
          </ul>

          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu p-ph-res">
                <a
                  href="#"
                  className="dropdown-toggle"
                  onClick={handleToggle}
                  data-toggle="dropdown"
                >
                  <img
                    src={
                      profile?.image
                        ? URL.createObjectURL(profile.image)
                        : "dist/img/img1.jpg"
                    }
                    className="user-image"
                    alt="User Image"
                  />
                  <span
                    className="hidden-xs"
                    style={{ textTransform: "capitalize" }}
                  >
                    {profile && profile.name}{" "}
                    <i className="fa fa-angle-double-down"></i>
                  </span>
                </a>
                {show && (
                  <ul
                    style={{
                      marginRight: "5px",
                      background: "white",
                      width: "200px",
                      padding: "15px",
                      position: "absolute",
                      right: "0px",
                      listStyleType: "none",
                    }}
                  >
                    <li>
                      <Link
                        to={"/profile"}
                        onClick={handleToggle}
                        style={{ color: "#635d5d" }}
                      >
                        <i
                          className="fa fa-user"
                          style={{ marginRight: "7px" }}
                        ></i>
                        My Profile
                      </Link>
                    </li>
                    <li style={{ marginTop: "10px" }}>
                      <Link
                        to={"/my-course"}
                        onClick={handleToggle}
                        style={{ color: "#635d5d" }}
                      >
                        <i
                          className="fa fa-graduation-cap"
                          style={{ marginRight: "7px" }}
                        ></i>
                        My Course
                      </Link>
                    </li>
                    <li style={{ marginTop: "10px" }}>
                      <Link
                        to={"/my-course"}
                        onClick={handleToggle}
                        style={{ color: "#635d5d" }}
                      >
                        <i
                          className="fa fa-suitcase"
                          style={{ marginRight: "7px" }}
                        ></i>
                        Wallet
                      </Link>
                    </li>
                    <li style={{ marginTop: "10px" }}>
                      <Link
                        to={"/kyc"}
                        onClick={handleToggle}
                        style={{ color: "#635d5d" }}
                      >
                        <i
                          className="fa fa-users"
                          style={{ marginRight: "7px" }}
                        ></i>
                        KYC
                      </Link>
                    </li>
                    <li style={{ marginTop: "10px" }}>
                      <Link
                        to={"/member-dashboard"}
                        onClick={handleToggle}
                        style={{ color: "#635d5d" }}
                      >
                        <i
                          className="fa fa-building"
                          style={{ marginRight: "7px" }}
                        ></i>
                        Affiliate Panel
                      </Link>
                    </li>
                    <li style={{ marginTop: "10px" }}>
                      <Link
                        to={"/referal-link"}
                        onClick={handleToggle}
                        style={{ color: "#635d5d" }}
                      >
                        <i
                          className="fa fa-refresh"
                          style={{ marginRight: "7px" }}
                        ></i>
                        Referal
                      </Link>
                    </li>
                    <li style={{ marginTop: "10px" }}>
                      <Link
                        to={"/tree"}
                        onClick={handleToggle}
                        style={{ color: "#635d5d" }}
                      >
                        <i
                          className="fa fa-sitemap"
                          aria-hidden="true"
                          style={{ marginRight: "7px" }}
                        ></i>
                        Hierarchy
                      </Link>
                    </li>

                    <li style={{ marginTop: "10px" }}>
                      <Link
                        to={"/change-password"}
                        onClick={handleToggle}
                        style={{ color: "#635d5d" }}
                      >
                        <i
                          className="fa fa-key"
                          aria-hidden="true"
                          style={{ marginRight: "7px" }}
                        ></i>
                        Change Password
                      </Link>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li style={{ marginTop: "10px" }}>
                      <a
                        href="javascript:void(0)"
                        onClick={logout}
                        style={{ color: "#635d5d" }}
                      >
                        <i
                          className="fa fa-power-off"
                          style={{ marginRight: "7px" }}
                        ></i>
                        Logout
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
