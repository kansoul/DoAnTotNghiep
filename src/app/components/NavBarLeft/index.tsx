import { useState } from "react";

export default function NavBarLeft() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <div>
      {/* Fixed Sidebar Left */}
      <div className={`fixed-sidebar left ${openNav ? "open" : ""}`}>
        <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">
          <a href="/newsfeed" className="logo">
            <div className="img-wrap">
              <img
                loading="lazy"
                src="img/logo.webp"
                alt="Olympus"
                width={34}
                height={34}
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
                <a href="/todos">
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
                <a href="17-FriendGroups.html">
                  <svg
                    className="olymp-happy-faces-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="FRIEND GROUPS"
                  >
                    <use xlinkHref="#olymp-happy-faces-icon" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="/musicplay">
                  <svg
                    className="olymp-headphones-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="MUSIC&PLAYLISTS"
                  >
                    <use xlinkHref="#olymp-headphones-icon" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="19-WeatherWidget.html">
                  <svg
                    className="olymp-weather-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="WEATHER APP"
                  >
                    <use xlinkHref="#olymp-weather-icon" />
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
            </ul>
          </div>
        </div>
        <div className="fixed-sidebar-left sidebar--large" id="sidebar-left-1">
          <a href="02-ProfilePage.html" className="logo">
            <div className="img-wrap">
              <img
                loading="lazy"
                src="img/logo.webp"
                alt="Olympus"
                width={34}
                height={34}
              />
            </div>
            <div className="title-block">
              <h6 className="logo-title">olympus</h6>
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
                <a href="03-Newsfeed.html">
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
                <a href="16-FavPagesFeed.html">
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
                <a href="17-FriendGroups.html">
                  <svg
                    className="olymp-happy-faces-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="FRIEND GROUPS"
                  >
                    <use xlinkHref="#olymp-happy-faces-icon" />
                  </svg>
                  <span className="left-menu-title">Friend Groups</span>
                </a>
              </li>
              <li>
                <a href="18-MusicAndPlaylists.html">
                  <svg
                    className="olymp-headphones-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="MUSIC&PLAYLISTS"
                  >
                    <use xlinkHref="#olymp-headphones-icon" />
                  </svg>
                  <span className="left-menu-title">Music &amp; Playlists</span>
                </a>
              </li>
              <li>
                <a href="19-WeatherWidget.html">
                  <svg
                    className="olymp-weather-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="WEATHER APP"
                  >
                    <use xlinkHref="#olymp-weather-icon" />
                  </svg>
                  <span className="left-menu-title">Weather App</span>
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
                  <span className="left-menu-title">Calendar and Events</span>
                </a>
              </li>
              <li>
                <a href="24-CommunityBadges.html">
                  <svg
                    className="olymp-badge-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Community Badges"
                  >
                    <use xlinkHref="#olymp-badge-icon" />
                  </svg>
                  <span className="left-menu-title">Community Badges</span>
                </a>
              </li>
              <li>
                <a href="25-FriendsBirthday.html">
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
              <li>
                <a href="26-Statistics.html">
                  <svg
                    className="olymp-stats-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Account Stats"
                  >
                    <use xlinkHref="#olymp-stats-icon" />
                  </svg>
                  <span className="left-menu-title">Account Stats</span>
                </a>
              </li>
              <li>
                <a href="27-ManageWidgets.html">
                  <svg
                    className="olymp-manage-widgets-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Manage Widgets"
                  >
                    <use xlinkHref="#olymp-manage-widgets-icon" />
                  </svg>
                  <span className="left-menu-title">Manage Widgets</span>
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
                Complete <a href="/#">your profile</a> so people can know more
                about you!
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
              src="img/logo.webp"
              alt="Olympus"
              width={34}
              height={34}
            />
          </a>
        </div>
        <div
          className="fixed-sidebar-left sidebar--large"
          id="sidebar-left-1-responsive"
        >
          <a href="/#" className="logo">
            <div className="img-wrap">
              <img
                loading="lazy"
                src="img/logo.webp"
                alt="Olympus"
                width={34}
                height={34}
              />
            </div>
            <div className="title-block">
              <h6 className="logo-title">olympus</h6>
            </div>
          </a>
          <div className="mCustomScrollbar" data-mcs-theme="dark">
            <div className="control-block">
              <div className="author-page author vcard inline-items">
                <div className="author-thumb">
                  <img
                    alt="author"
                    src="img/author-page.webp"
                    width={36}
                    height={36}
                    className="avatar"
                  />
                  <span className="icon-status online" />
                </div>
                <a href="02-ProfilePage.html" className="author-name fn">
                  <div className="author-title">
                    James Spiegel
                    <svg className="olymp-dropdown-arrow-icon">
                      <use xlinkHref="#olymp-dropdown-arrow-icon" />
                    </svg>
                  </div>
                  <span className="author-subtitle">SPACE COWBOY</span>
                </a>
              </div>
            </div>
            <div className="ui-block-title ui-block-title-small">
              <h6 className="title">MAIN SECTIONS</h6>
            </div>
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
                <a href="mobile-index.html">
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
                <a href="Mobile-28-YourAccount-PersonalInformation.html">
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
                <a href="/friend">
                  <svg
                    className="olymp-happy-faces-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="FRIEND GROUPS"
                  >
                    <use xlinkHref="#olymp-happy-faces-icon" />
                  </svg>
                  <span className="left-menu-title">Friend Groups</span>
                </a>
              </li>
              <li>
                <a href="/music">
                  <svg
                    className="olymp-headphones-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="MUSIC&PLAYLISTS"
                  >
                    <use xlinkHref="#olymp-headphones-icon" />
                  </svg>
                  <span className="left-menu-title">Music &amp; Playlists</span>
                </a>
              </li>
              <li>
                <a href="/weather">
                  <svg
                    className="olymp-weather-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="WEATHER APP"
                  >
                    <use xlinkHref="#olymp-weather-icon" />
                  </svg>
                  <span className="left-menu-title">Weather App</span>
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
                  <span className="left-menu-title">Calendar and Events</span>
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
                  <span className="left-menu-title">Community Badges</span>
                </a>
              </li>
              <li>
                <a href="Mobile-34-YourAccount-ChatMessages.html">
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
              <li>
                <a href="Mobile-35-YourAccount-FriendsRequests.html">
                  <svg
                    className="olymp-stats-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Account Stats"
                  >
                    <use xlinkHref="#olymp-stats-icon" />
                  </svg>
                  <span className="left-menu-title">Account Stats</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <svg
                    className="olymp-manage-widgets-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Manage Widgets"
                  >
                    <use xlinkHref="#olymp-manage-widgets-icon" />
                  </svg>
                  <span className="left-menu-title">Manage Widgets</span>
                </a>
              </li>
            </ul>
            <div className="ui-block-title ui-block-title-small">
              <h6 className="title">YOUR ACCOUNT</h6>
            </div>
            <ul className="account-settings">
              <li>
                <a href="/#">
                  <svg className="olymp-menu-icon">
                    <use xlinkHref="#olymp-menu-icon" />
                  </svg>
                  <span>Profile Settings</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <svg
                    className="olymp-star-icon left-menu-icon"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="FAV PAGE"
                  >
                    <use xlinkHref="#olymp-star-icon" />
                  </svg>
                  <span>Create Fav Page</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <svg className="olymp-logout-icon">
                    <use xlinkHref="#olymp-logout-icon" />
                  </svg>
                  <span>Log Out</span>
                </a>
              </li>
            </ul>
            <div className="ui-block-title ui-block-title-small">
              <h6 className="title">About Olympus</h6>
            </div>
            <ul className="about-olympus">
              <li>
                <a href="/#">
                  <span>Terms and Conditions</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>FAQs</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Contact</span>
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
