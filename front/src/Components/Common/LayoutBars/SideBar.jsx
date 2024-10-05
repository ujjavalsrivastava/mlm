// import { IoMdHome } from "react-icons/io";

import { Link, useNavigate } from "react-router-dom";
import { axios } from "../../../helper/httpHelper";
import { useEffect, useState } from "react";
import logo from "../../../../public/dist/img/img1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../../store/profileReducer";
const SideBar = () => {
  const navigator = useNavigate();
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
      <aside class="main-sidebar">
        <div class="sidebar">
          <div class="user-panel">
            <div class="image text-center">
              <img src={logo} class="img-circle" alt="User Image" />{" "}
            </div>
            <div class="info">
              <p style={{ textTransform: "capitalize" }}>
                {profile && profile.name}
              </p>
              <a href="#">
                <i class="fa fa-cog"></i>
              </a>{" "}
              <a href="#">
                <i class="fa fa-envelope-o"></i>
              </a>{" "}
              <a href="javascript:void(0)" onClick={logout}>
                <i class="fa fa-power-off"></i>
              </a>{" "}
            </div>
          </div>

          <ul class="sidebar-menu" data-widget="tree">
            <li class="header">PERSONAL</li>
            <li>
              <Link to={"/profile"}>
                <i class="fa fa-user" style={{ marginRight: "7px" }}></i> My
                Profile
              </Link>
            </li>
            <li>
              <Link to={"/my-course"}>
                <i
                  class="fa fa-graduation-cap"
                  style={{ marginRight: "7px" }}
                ></i>{" "}
                My Course
              </Link>
            </li>
            <li>
              <Link to={"/kyc"}>
                <i class="fa fa-users" style={{ marginRight: "7px" }}></i> KYC
              </Link>
            </li>
            <li>
              <Link to={"/member-dashboard"}>
                <i class="fa fa-building" style={{ marginRight: "7px" }}></i>{" "}
                Affiliate Panel
              </Link>
            </li>
            <li>
              <Link to={"/referal-link"}>
                <i class="fa fa-refresh" style={{ marginRight: "7px" }}></i>{" "}
                Referal
              </Link>
            </li>
            <li>
              <Link to={"/profile-upload"}>
                <i class="fa fa-upload" style={{ marginRight: "7px" }}></i>{" "}
                Profile Upload
              </Link>
            </li>
            <li>
              <Link to={"/tree"}>
                <i
                  class="fa fa-sitemap"
                  aria-hidden="true"
                  style={{ marginRight: "7px" }}
                ></i>{" "}
                Hierarchy
              </Link>
            </li>
            <li>
              <Link to={"/level-wise-report"}>
                <i
                  class="fa fa-sort-amount-asc"
                  style={{ marginRight: "7px" }}
                ></i>
                Level Wise Income
              </Link>
            </li>

            <li>
              <Link to={"/team-size"}>
                <i class="fa fa-steam" style={{ marginRight: "7px" }}></i> Level
                Wise Team Size
              </Link>
            </li>

            <li>
              <Link to={"/invoice"}>
                <i class="fa fa-steam" style={{ marginRight: "7px" }}></i>{" "}
                Invoice
              </Link>
            </li>

            <li>
              <Link to={"/passive-income"}>
                <i
                  class="fa fa-trophy"
                  aria-hidden="true"
                  style={{ marginRight: "7px" }}
                ></i>
                Passive income
              </Link>
            </li>

            <li>
              <Link to={"/rewards"}>
                <i
                  class="fa fa-trophy"
                  aria-hidden="true"
                  style={{ marginRight: "7px" }}
                ></i>
                Rewards
              </Link>
            </li>

            <li>
              <Link to={"/change-password"}>
                <i
                  class="fa fa-key"
                  aria-hidden="true"
                  style={{ marginRight: "7px" }}
                ></i>{" "}
                Change Password
              </Link>
            </li>

            {profile && profile.role == "admin" ? (
              <>
                <li>
                  <Link to={"/level"}>
                    <i
                      class="fa fa-level-up"
                      aria-hidden="true"
                      style={{ marginRight: "7px" }}
                    ></i>{" "}
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
