// import { IoMdHome } from "react-icons/io";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../../public/dist/img/img1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../store/profileReducer";
import { menuItems } from "./constants";

const SideBar = () => {
  const navigator = useNavigate();
  const { pathname } = useLocation();

  const profile = useSelector((state) => state.profile?.data || {});
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    navigator("/login");
  };

  useEffect(() => {
    if (!profile?._id) {
      dispatch(fetchProfile());
    }
  }, []);

  return (
    <>
      <aside className="main-sidebar">
        <div className="sidebar">
          <div className="user-panel">
            <div className="image text-center">
              <img
                src={profile?.image ? URL.createObjectURL(profile.image) : logo}
                className="img-circle sidebar-profile-image"
                alt="User Image"
              />
            </div>
            <div className="info">
              <p style={{ textTransform: "capitalize" }}>
                {profile && profile.name}
              </p>
              <a href="#">
                <i className="fa fa-cog"></i>
              </a>
              <a href="#">
                <i className="fa fa-envelope-o"></i>
              </a>
              <a href="javascript:void(0)" onClick={logout}>
                <i className="fa fa-power-off"></i>
              </a>
            </div>
          </div>

          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">PERSONAL</li>
            {menuItems.map((item) => (
              <li
                key={item.title}
                className={item.url === pathname ? "selected" : ""}
              >
                <Link to={item.url}>
                  <i className={item.icon} style={{ marginRight: "7px" }}></i>
                  {item.title}
                </Link>
              </li>
            ))}

            {profile && profile.role == "admin" ? (
              <>
                <li className={pathname === "/assoc-report" ? "selected" : ""}>
                  <Link to={"/assoc-report"}>
                    <i
                      className="fa fa-level-up"
                      aria-hidden="true"
                      style={{ marginRight: "7px" }}
                    ></i>
                    Associate Report
                  </Link>
                </li>
                <li
                  className={
                    pathname === "/direct-team-report" ? "selected" : ""
                  }
                >
                  <Link to={"/direct-team-report"}>
                    <i
                      className="fa fa-level-up"
                      aria-hidden="true"
                      style={{ marginRight: "7px" }}
                    ></i>
                    Direct Team Report
                  </Link>
                </li>

                <li className={pathname === "/all-student-report" ? "selected" : ""}>
                  <Link to={"/all-student-report"}>
                    <i
                      className="fa fa-level-up"
                      aria-hidden="true"
                      style={{ marginRight: "7px" }}
                    ></i>
                    All Student
                  </Link>
                </li>
                
                <li className={pathname === "/level" ? "selected" : ""}>
                  <Link to={"/level"}>
                    <i
                      className="fa fa-level-up"
                      aria-hidden="true"
                      style={{ marginRight: "7px" }}
                    ></i>
                    Update Level
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
