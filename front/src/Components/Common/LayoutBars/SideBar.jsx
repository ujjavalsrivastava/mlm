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

            {/* <li class="treeview"> <a href="#"> <i class="fa fa-bullseye"></i> <span>Apps</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
        <ul class="treeview-menu">
          <li><a href="apps-calendar.html">Calendar</a></li>
          <li><a href="apps-support-ticket.html">Support Ticket</a></li>
          <li><a href="apps-contacts.html">Contact / Employee</a></li>
          <li><a href="apps-contact-grid.html">Contact Grid</a></li>
          <li><a href="apps-contact-details.html">Contact Detail</a></li>
        </ul>
      </li>
      <li class="treeview"> <a href="#"> <i class="fa fa-envelope-o "></i> <span>Inbox</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
        <ul class="treeview-menu">
          <li><a href="apps-mailbox.html">Mailbox</a></li>
          <li><a href="apps-mailbox-detail.html">Mailbox Detail</a></li>
          <li><a href="apps-compose-mail.html">Compose Mail</a></li>
        </ul>
      </li>
      <li class="treeview"> <a href="#"> <i class="fa fa-briefcase"></i> <span>UI Elements</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
        <ul class="treeview-menu">
          <li><a href="ui-cards.html" class="active">Cards</a></li>
          <li><a href="ui-user-card.html">User Cards</a></li>
          <li><a href="ui-tab.html">Tab</a></li>
          <li><a href="ui-grid.html">Grid</a></li>
          <li><a href="ui-buttons.html">Buttons</a></li>
          <li><a href="ui-notification.html">Notification</a></li>
          <li><a href="ui-progressbar.html">Progressbar</a></li>
          <li><a href="ui-range-slider.html">Range slider</a></li>
          <li><a href="ui-timeline.html">Timeline</a></li>
          <li><a href="ui-horizontal-timeline.html">Horizontal Timeline</a></li>
          <li><a href="ui-breadcrumb.html">Breadcrumb</a></li>
          <li><a href="ui-typography.html">Typography</a></li>
          <li><a href="ui-bootstrap-switch.html">Bootstrap Switch</a></li>
          <li><a href="ui-tooltip-popover.html">Tooltip &amp; Popover</a></li>
          <li><a href="ui-list-media.html">List Media</a></li>
          <li><a href="ui-carousel.html">Carousel</a></li>
        </ul>
      </li>
      <li class="header">FORMS, TABLE & WIDGETS</li>
      <li class="active treeview"> <a href="#"> <i class="fa fa-edit"></i> <span>Forms</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
        <ul class="treeview-menu">
          <li><a href="form-elements.html">Form Elements</a></li>
          <li><a href="form-validation.html">Form Validation</a></li>
          <li class="active"><a href="form-wizard.html">Form Wizard</a></li>
          <li><a href="form-layouts.html">Form Layouts</a></li>
          <li><a href="form-uploads.html">Form File Upload</a></li>
          
          <li><a href="form-summernote.html">Summernote</a></li>
        </ul>
      </li>
      <li class="treeview"> <a href="#"> <i class="fa fa-table"></i> <span>Tables</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
        <ul class="treeview-menu">
          <li><a href="table-basic.html">Basic Tables</a></li>
          <li><a href="table-layout.html">Table Layouts</a></li>
          <li><a href="table-data-table.html">Data Tables</a></li>
          <li><a href="table-jsgrid.html">Js Grid Table</a></li>
        </ul>
      </li>
      <li class="treeview"> <a href="#"> <i class="fa fa-th"></i> <span>Widgets</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
        <ul class="treeview-menu">
          <li><a href="widget-data.html">Data Widgets</a></li>
          <li><a href="widget-apps.html">Apps Widgets</a></li>
        </ul>
      </li>
      <li class="header">EXTRA COMPONENTS</li>
      <li class="treeview"> <a href="#"><i class="fa fa-bar-chart"></i> <span>Charts</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
        <ul class="treeview-menu">
          <li><a href="chart-morris.html">Morris Chart</a></li>
          <li><a href="chart-chartist.html">Chartis Chart</a></li>
          
          <li><a href="chart-knob.html">Knob Chart</a></li>
          <li><a href="chart-chart-js.html">Chartjs</a></li>
          <li><a href="chart-peity.html">Peity Chart</a></li>
        </ul>
      </li>
      <li class="treeview"> <a href="#"> <i class="fa fa-files-o"></i> <span>Sample Pages</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
        <ul class="treeview-menu">
          <li><a href="pages-blank.html">Blank page</a></li>
          <li class="treeview"><a href="#">Authentication <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
            <ul class="treeview-menu">
              <li><a href="pages-login.html">Login 1</a></li>
              <li><a href="pages-login-2.html">Login 2</a></li>
              <li><a href="pages-register.html">Register</a></li>
              <li><a href="pages-register2.html">Register 2</a></li>
              <li><a href="pages-lockscreen.html">Lockscreen</a></li>
              <li><a href="pages-recover-password.html">Recover password</a></li>
            </ul>
          </li>
          <li><a href="pages-profile.html">Profile page</a></li>
          <li><a href="pages-invoice.html">Invoice</a></li>
          <li><a href="pages-treeview.html">Treeview</a></li>
          <li><a href="pages-pricing.html">Pricing</a></li>
          <li><a href="pages-gallery.html">Gallery</a></li>
          <li><a href="pages-faq.html">Faqs</a></li>
          <li><a href="pages-404.html">404 Error Page</a></li>
        </ul>
      </li>
      <li class="treeview"> <a href="#"> <i class="fa fa-map-marker"></i> <span>Maps</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
        <ul class="treeview-menu">
          <li><a href="map-google.html">Google Maps</a></li>
          <li><a href="map-vector.html" class="active">Vector Maps</a></li>
        </ul>
      </li>
      <li class="treeview"> <a href="#"> <i class="fa fa-paint-brush"></i> <span>Icons</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
        <ul class="treeview-menu">
          <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
          <li><a href="icon-themify.html">Themify Icons</a></li>
          <li><a href="icon-linea.html">Linea Icons</a></li>
          <li><a href="icon-weather.html">Weather Icons</a></li>
          <li><a href="icon-simple-lineicon.html">Simple Lineicons</a></li>
          <li><a href="icon-flag.html">Flag Icons</a></li>
        </ul>
      </li>
      <li class="treeview"> <a href="#"> <i class="fa fa-share"></i> <span>Multilevel</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
        <ul class="treeview-menu">
          <li><a href="#">Level One</a></li>
          <li class="treeview"> <a href="#">Level One <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
            <ul class="treeview-menu">
              <li><a href="#"> Level Two</a></li>
              <li class="treeview"> <a href="#">Level Two <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a>
                <ul class="treeview-menu">
                  <li><a href="#">Level Three</a></li>
                  <li><a href="#">Level Three</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Level One</a></li>
        </ul>
      </li> */}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
