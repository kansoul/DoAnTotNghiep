import { logout } from "app/services/firebase";
import { useState } from "react";

export default function NavBarLeft() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      {/* Fixed Sidebar Left */}
      <div className={`fixed-sidebar left ${openNav ? "open" : ""}`}>
        <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
          <a href="/newsfeed" className="logo">
            <div className="img-wrap">
              <img
                loading="lazy"
                src="favicon.ico"
                alt="Olympus"
                width={70}
                height={70}
              />
            </div>
          </a>
          <div className="mCustomScrollbar" data-mcs-theme="dark">
            <ul className="left-menu">
              <li>
                <a
                  href="#"
                  onClick={() => setOpenNav(true)}
                  className={`js-sidebar-open ${openNav ? "active" : ""}`}
                >
                  <svg
                    className="olymp-menu-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="OPEN MENU"
                  >
                    <use xlinkHref="#olymp-menu-icon" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/newsfeed">
                  <svg
                    className="olymp-newsfeed-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="NEWSFEED"
                  >
                    <use xlinkHref="#olymp-newsfeed-icon" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/profile">
                  <svg
                    className="olymp-star-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="FAV PAGE"
                  >
                    <use xlinkHref="#olymp-star-icon" />
                  </svg>
                </a>
              </li>

              <li>
                <a href="/todo">
                  <svg
                    className="olymp-manage-widgets-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Manage Widgets"
                  >
                    <use xlinkHref="#olymp-manage-widgets-icon" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/diary">
                  <svg
                    className="olymp-calendar-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="CALENDAR AND EVENTS"
                  >
                    <use xlinkHref="#olymp-calendar-icon" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/spending">
                  <svg
                    className="olymp-badge-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Community Badges"
                  >
                    <use xlinkHref="#olymp-badge-icon" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/chart">
                  <svg
                    className="olymp-stats-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Account Stats"
                  >
                    <use xlinkHref="#olymp-stats-icon" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/friendbirthday">
                  <svg
                    className="olymp-cupcake-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Friends Birthdays"
                  >
                    <use xlinkHref="#olymp-cupcake-icon" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
          <a href="/newsfeed" className="logo">
            <div className="img-wrap"></div>
            <div className="title-block">
              <h6 className="logo-title">Diary Social</h6>
            </div>
          </a>
          <div className="mCustomScrollbar" data-mcs-theme="dark">
            <ul className="left-menu">
              <li>
                <a
                  href="#"
                  onClick={() => setOpenNav(false)}
                  className={`js-sidebar-open ${openNav ? "active" : ""}`}
                >
                  <svg className="olymp-close-icon left-menu-icon">
                    <use xlinkHref="#olymp-close-icon" />
                  </svg>
                  <span className="left-menu-title">Collapse Menu</span>
                </a>
              </li>
              <li>
                <a href="/newsfeed">
                  <svg
                    className="olymp-newsfeed-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="NEWSFEED"
                  >
                    <use xlinkHref="#olymp-newsfeed-icon" />
                  </svg>
                  <span className="left-menu-title">Newsfeed</span>
                </a>
              </li>
              <li>
                <a href="/profile">
                  <svg
                    className="olymp-star-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="FAV PAGE"
                  >
                    <use xlinkHref="#olymp-star-icon" />
                  </svg>
                  <span className="left-menu-title">Profile</span>
                </a>
              </li>

              <li>
                <a href="/todo">
                  <svg
                    className="olymp-manage-widgets-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="To do"
                  >
                    <use xlinkHref="#olymp-manage-widgets-icon" />
                  </svg>
                  <span className="left-menu-title">To do</span>
                </a>
              </li>

              <li>
                <a href="/diary">
                  <svg
                    className="olymp-calendar-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="DIARY PAGE"
                  >
                    <use xlinkHref="#olymp-calendar-icon" />
                  </svg>
                  <span className="left-menu-title">Diary</span>
                </a>
              </li>
              <li>
                <a href="/spending">
                  <svg
                    className="olymp-badge-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Spending Page"
                  >
                    <use xlinkHref="#olymp-badge-icon" />
                  </svg>
                  <span className="left-menu-title">Spending</span>
                </a>
              </li>
              <li>
                <a href="/chart">
                  <svg
                    className="olymp-stats-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Account Chart"
                  >
                    <use xlinkHref="#olymp-stats-icon" />
                  </svg>
                  <span className="left-menu-title">Account Chart</span>
                </a>
              </li>
              <li>
                <a href="/friendbirthday">
                  <svg
                    className="olymp-cupcake-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Friends Birthdays"
                  >
                    <use xlinkHref="#olymp-cupcake-icon" />
                  </svg>
                  <span className="left-menu-title">Friends Birthdays</span>
                </a>
              </li>
            </ul>
            <div className="profile-completion">
              <div className="skills-item">
                <div className="skills-item-info">
                  <span className="skills-item-title">Profile Completion</span>
                  <span className="skills-item-count">
                    <span
                      className="count-animate"
                      data-speed={1000}
                      data-refresh-interval={50}
                      data-to={76}
                      data-from={0}
                    />
                    <span className="units">76%</span>
                  </span>
                </div>
                <div className="skills-item-meter">
                  <span
                    className="skills-item-meter-active bg-primary"
                    style={{ width: "76%" }}
                  />
                </div>
              </div>
              <span>
                Complete <a href="/profile">your profile</a> so people can know
                more about you!
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ... end Fixed Sidebar Left */}
      {/* Fixed Sidebar Left */}
      <div
        className={`fixed-sidebar left fixed-sidebar-responsive ${
          openNav ? "open" : ""
        }`}
      >
        <div
          className="fixed-sidebar-left sidebar--small"
          id="sidebar-left-responsive"
        >
          <a
            href="#"
            onClick={() => setOpenNav(true)}
            className={`logo js-sidebar-open ${openNav ? "active" : ""}`}
          >
            <img
              loading="lazy"
              src="favicon.ico"
              alt="Diary"
              width={50}
              height={50}
            />
          </a>
        </div>
        <div
          className="fixed-sidebar-left sidebar--large"
          id="sidebar-left-1-responsive"
        >
          <a href="/newsfeed" className="logo">
            <div className="img-wrap"></div>
            <div className="title-block">
              <h6 className="logo-title">Diary</h6>
            </div>
          </a>
          <div className="scroll-custom" data-mcs-theme="dark">
            <ul className="left-menu">
              <li>
                <a
                  href="#"
                  onClick={() => setOpenNav(false)}
                  className={`js-sidebar-open ${openNav ? "active" : ""}`}
                >
                  <svg className="olymp-close-icon left-menu-icon">
                    <use xlinkHref="#olymp-close-icon" />
                  </svg>
                  <span className="left-menu-title">Collapse Menu</span>
                </a>
              </li>
              <li>
                <a href="/newsfeed">
                  <svg
                    className="olymp-newsfeed-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="NEWSFEED"
                  >
                    <use xlinkHref="#olymp-newsfeed-icon" />
                  </svg>
                  <span className="left-menu-title">Newsfeed</span>
                </a>
              </li>
              <li>
                <a href="/profile">
                  <svg
                    className="olymp-star-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="FAV PAGE"
                  >
                    <use xlinkHref="#olymp-star-icon" />
                  </svg>
                  <span className="left-menu-title">Fav Pages Feed</span>
                </a>
              </li>

              <li>
                <a href="/todo">
                  <svg
                    className="olymp-manage-widgets-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="To do"
                  >
                    <use xlinkHref="#olymp-manage-widgets-icon" />
                  </svg>
                  <span className="left-menu-title">To do</span>
                </a>
              </li>
              <li>
                <a href="/diary">
                  <svg
                    className="olymp-calendar-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Diary"
                  >
                    <use xlinkHref="#olymp-calendar-icon" />
                  </svg>
                  <span className="left-menu-title">Diary</span>
                </a>
              </li>
              <li>
                <a href="/spending">
                  <svg
                    className="olymp-badge-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Spending"
                  >
                    <use xlinkHref="#olymp-badge-icon" />
                  </svg>
                  <span className="left-menu-title">Spending</span>
                </a>
              </li>
              <li>
                <a href="/chart">
                  <svg
                    className="olymp-stats-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Chart"
                  >
                    <use xlinkHref="#olymp-stats-icon" />
                  </svg>
                  <span className="left-menu-title">Chart</span>
                </a>
              </li>
              <li>
                <a href="/friendbirthday">
                  <svg
                    className="olymp-cupcake-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Friends Birthdays"
                  >
                    <use xlinkHref="#olymp-cupcake-icon" />
                  </svg>
                  <span className="left-menu-title">Friends Birthdays</span>
                </a>
              </li>
            </ul>
            <div className="ui-block-title ui-block-title-small">
              <h6 className="title">YOUR ACCOUNT</h6>
            </div>
            <ul className="account-settings">
              <li>
                <a href="/profile">
                  <svg className="olymp-menu-icon">
                    <use xlinkHref="#olymp-menu-icon" />
                  </svg>
                  <span>Profile Settings</span>
                </a>
              </li>
              <li>
                <a onClick={() => handleLogout()} href="/login">
                  <svg className="olymp-logout-icon">
                    <use xlinkHref="#olymp-logout-icon" />
                  </svg>
                  <span>Log Out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ... end Fixed Sidebar Left */}
    </div>
  );
}
