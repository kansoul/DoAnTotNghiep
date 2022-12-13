import DefaultLayout from "app/layouts";
import { useState } from "react";
import AccountInformation from "./components/AccountInformation";
import ChangePassword from "./components/ChangePassword";
import FriendsRequests from "./components/FriendsRequests";
import HobbiesAndInterests from "./components/HobbiesAndInterests";

export default function AccountProfile() {
  const [tab, setTab] = useState<string>("information");
  const [openSetting, setOpenSetting] = useState<boolean>(false);
  return (
    <>
      <DefaultLayout />
      <div>
        <div
          className={`profile-settings-responsive ${openSetting ? "open" : ""}`}
        >
          <span
            onClick={() => setOpenSetting(!openSetting)}
            className="js-profile-settings-open profile-settings-open"
          >
            <svg className="settings-open-arrow" width={14} height={14}>
              <use xlinkHref="#olymp-popup-left-arrow" />
            </svg>
          </span>
          <div className="mCustomScrollbar" data-mcs-theme="dark">
            <div className="ui-block">
              <div className="your-profile">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Your PROFILE</h6>
                </div>
                <div className="accordion" id="accordionExample1">
                  <div className="accordion-item">
                    <h6 className="accordion-header" id="headingOne1">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne1"
                        aria-expanded="true"
                        aria-controls="collapseOne1"
                      >
                        Profile Settings
                        <svg className="olymp-dropdown-arrow-icon">
                          <use xlinkHref="#olymp-dropdown-arrow-icon" />
                        </svg>
                      </button>
                    </h6>
                    <div
                      id="collapseOne1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne1"
                      data-bs-parent="#accordionExample1"
                    >
                      <div className="accordion-body">
                        <ul className="your-profile-menu">
                          <li>
                            <p
                              onClick={() => setTab("information")}
                              className={`curser-custom ${
                                tab === "information" && "bold-text"
                              }`}
                            >
                              Personal Information
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => setTab("changepassword")}
                              className={`curser-custom ${
                                tab === "changepassword" && "bold-text"
                              }`}
                            >
                              Change Password
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => setTab("hobbies")}
                              className={`curser-custom ${
                                tab === "hobbies" && "bold-text"
                              }`}
                            >
                              Hobbies and Interests
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ui-block-title">
                  <p
                    onClick={() => setTab("friendsrequests")}
                    className="h6 title curser-custom"
                  >
                    Friend Requests
                  </p>
                  <a href="/#" className="items-round-little bg-blue">
                    4
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-header">
          <div className="content-bg-wrap bg-account" />
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div className="main-header-content">
                  <h1>Your Account Dashboard</h1>
                  <p>
                    Welcome to your account dashboard! Here you’ll find
                    everything you need to change your profile information,
                    settings, read notifications and requests, view your latest
                    messages, change your pasword and much more! Also you can
                    create or manage your own favourite page, have fun!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="img-bottom"
            src="img/account-bottom.webp"
            alt="Hihi"
            width={1169}
            height={153}
          />
        </div>
        {/* ... end Main Header Account */}
        <div className="container">
          <div className="row">
            <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
              {tab === "information" && <AccountInformation />}
              {tab === "changepassword" && <ChangePassword />}
              {tab === "hobbies" && <HobbiesAndInterests />}
              {tab === "friendsrequests" && <FriendsRequests />}
            </div>
            <div className="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12 responsive-display-none">
              <div className="ui-block">
                {/* Your Profile  */}
                <div className="your-profile">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Your PROFILE</h6>
                  </div>
                  <div className="accordion" id="accordionExample1">
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingOne1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne1"
                          aria-expanded="true"
                          aria-controls="collapseOne1"
                        >
                          Profile Settings
                          <svg className="olymp-dropdown-arrow-icon">
                            <use xlinkHref="#olymp-dropdown-arrow-icon" />
                          </svg>
                        </button>
                      </h6>
                      <div
                        id="collapseOne1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne1"
                        data-bs-parent="#accordionExample1"
                      >
                        <div className="accordion-body">
                          <ul className="your-profile-menu">
                            <li>
                              <p
                                onClick={() => setTab("information")}
                                className={`curser-custom ${
                                  tab === "information" && "bold-text"
                                }`}
                              >
                                Personal Information
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => setTab("changepassword")}
                                className={`curser-custom ${
                                  tab === "changepassword" && "bold-text"
                                }`}
                              >
                                Change Password
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => setTab("hobbies")}
                                className={`curser-custom ${
                                  tab === "hobbies" && "bold-text"
                                }`}
                              >
                                Hobbies and Interests
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ui-block-title">
                    <p
                      onClick={() => setTab("friendsrequests")}
                      className="h6 title curser-custom"
                    >
                      Friend Requests
                    </p>
                    <a href="/#" className="items-round-little bg-blue">
                      4
                    </a>
                  </div>
                </div>
                {/* ... end Your Profile  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
