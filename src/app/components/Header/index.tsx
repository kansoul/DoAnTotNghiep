import Message from "app/container/Message";
import { logout } from "app/services/firebase";
import { useState } from "react";

export default function Header() {
  const param = window.location.pathname;
  const [openChat, setOpenChat] = useState<boolean>(false);

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div>
        <header className="header" id="site-header">
          <div className="page-title">
            <h6>Profile Page</h6>
          </div>
          <div className="header-content-wrapper">
            <form className="search-bar w-search notification-list friend-requests">
              <div className="form-group with-button">
                <input
                  className="form-control js-user-search"
                  placeholder="Search here people or pages..."
                  type="text"
                />
                <button>
                  <svg className="olymp-magnifying-glass-icon">
                    <use xlinkHref="#olymp-magnifying-glass-icon" />
                  </svg>
                </button>
              </div>
            </form>
            <a href="/#" className="link-find-friend">
              Find Friends
            </a>
            <div className="control-block">
              <div className="control-icon more has-items">
                <svg className="olymp-happy-face-icon">
                  <use xlinkHref="#olymp-happy-face-icon" />
                </svg>
                <div className="label-avatar bg-blue">6</div>
                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">FRIEND REQUESTS</h6>
                    <a href="/#">Find Friends</a>
                    <a href="/#">Settings</a>
                  </div>
                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list friend-requests">
                      <li>
                        <div className="author-thumb">
                          <img
                            loading="lazy"
                            src="img/avatar55-sm.webp"
                            alt="author"
                            width={34}
                            height={34}
                          />
                        </div>
                        <div className="notification-event">
                          <a href="/#" className="h6 notification-friend">
                            Tamara Romanoff
                          </a>
                          <span className="chat-message-item">
                            Mutual Friend: Sarah Hetfield
                          </span>
                        </div>
                        <span className="notification-icon">
                          <a href="/#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </a>
                          <a href="/#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </a>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img
                            loading="lazy"
                            src="img/avatar56-sm.webp"
                            alt="author"
                            width={34}
                            height={34}
                          />
                        </div>
                        <div className="notification-event">
                          <a href="/#" className="h6 notification-friend">
                            Tony Stevens
                          </a>
                          <span className="chat-message-item">
                            4 Friends in Common
                          </span>
                        </div>
                        <span className="notification-icon">
                          <a href="/#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </a>
                          <a href="/#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </a>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img
                            loading="lazy"
                            src="img/avatar58-sm.webp"
                            alt="author"
                            width={34}
                            height={34}
                          />
                        </div>
                        <div className="notification-event">
                          <a href="/#" className="h6 notification-friend">
                            Stagg Clothing
                          </a>
                          <span className="chat-message-item">
                            9 Friends in Common
                          </span>
                        </div>
                        <span className="notification-icon">
                          <a href="/#" className="accept-request">
                            <span className="icon-add without-text">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </a>
                          <a href="/#" className="accept-request request-del">
                            <span className="icon-minus">
                              <svg className="olymp-happy-face-icon">
                                <use xlinkHref="#olymp-happy-face-icon" />
                              </svg>
                            </span>
                          </a>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a href="/#" className="view-all bg-blue">
                    Check all your friend requests
                  </a>
                </div>
              </div>
              <div className="control-icon more has-items">
                <svg className="olymp-chat---messages-icon">
                  <use xlinkHref="#olymp-chat---messages-icon" />
                </svg>
                <div className="label-avatar bg-purple">2</div>
                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Chat / Messages</h6>
                    <a href="/#">Mark all as read</a>
                    <a href="/#">Settings</a>
                  </div>
                  <div className="mCustomScrollbar" data-mcs-theme="dark">
                    <ul className="notification-list chat-message">
                      <li className="message-unread">
                        <div className="author-thumb">
                          <img
                            loading="lazy"
                            src="img/avatar59-sm.webp"
                            alt="author"
                            width={34}
                            height={34}
                          />
                        </div>
                        <div className="notification-event">
                          <a href="/#" className="h6 notification-friend">
                            Diana Jameson
                          </a>
                          <span className="chat-message-item">
                            Hi James! It’s Diana, I just wanted to let you know
                            that we have to reschedule...
                          </span>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              4 hours ago
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <button
                            type="button"
                            onClick={() => setOpenChat(true)}
                          >
                            <svg className="olymp-chat---messages-icon">
                              <use xlinkHref="#olymp-chat---messages-icon" />
                            </svg>
                          </button>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img
                            loading="lazy"
                            src="img/avatar60-sm.webp"
                            alt="author"
                            width={34}
                            height={34}
                          />
                        </div>
                        <div className="notification-event">
                          <a href="/#" className="h6 notification-friend">
                            Jake Parker
                          </a>
                          <span className="chat-message-item">
                            Great, I’ll see you tomorrow!.
                          </span>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              4 hours ago
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <button
                            type="button"
                            onClick={() => setOpenChat(true)}
                          >
                            <svg className="olymp-chat---messages-icon">
                              <use xlinkHref="#olymp-chat---messages-icon" />
                            </svg>
                          </button>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img
                            loading="lazy"
                            src="img/avatar61-sm.webp"
                            alt="author"
                            width={34}
                            height={34}
                          />
                        </div>
                        <div className="notification-event">
                          <a href="/#" className="h6 notification-friend">
                            Elaine Dreyfuss
                          </a>
                          <span className="chat-message-item">
                            We’ll have to check that at the office and see if
                            the client is on board with...
                          </span>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              Yesterday at 9:56pm
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <button
                            type="button"
                            onClick={() => setOpenChat(true)}
                          >
                            <svg className="olymp-chat---messages-icon">
                              <use xlinkHref="#olymp-chat---messages-icon" />
                            </svg>
                          </button>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a href="/#" className="view-all bg-purple">
                    View All Messages
                  </a>
                </div>
              </div>
              <div className="author-page author vcard inline-items more">
                <div className="author-thumb">
                  <img
                    alt="author"
                    src="img/author-page.webp"
                    width={36}
                    height={36}
                    className="avatar"
                  />
                  <span className="icon-status online" />
                  <div className="more-dropdown more-with-triangle">
                    <div className="mCustomScrollbar" data-mcs-theme="dark">
                      <div className="ui-block-title ui-block-title-small">
                        <h6 className="title">Your Account</h6>
                      </div>
                      <ul className="account-settings">
                        <li>
                          <a href="29-YourAccount-AccountSettings.html">
                            <svg className="olymp-menu-icon">
                              <use xlinkHref="#olymp-menu-icon" />
                            </svg>
                            <span>Profile Settings</span>
                          </a>
                        </li>
                        <li>
                          <a href="36-FavPage-SettingsAndCreatePopup.html">
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
                          <a onClick={() => handleLogout()} href="/login">
                            <svg className="olymp-logout-icon">
                              <use xlinkHref="#olymp-logout-icon" />
                            </svg>
                            <span>Log Out</span>
                          </a>
                        </li>

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
                <a href="/profile" className="author-name fn">
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
          </div>
        </header>
        {/* ... end Header-BP */}
        {/* Responsive Header-BP */}
        <header
          className="header header-responsive"
          id="site-header-responsive"
        >
          <div className="header-content-wrapper">
            <ul
              className="nav nav-tabs mobile-notification-tabs"
              id="mobile-notification-tabs"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="request-tab"
                  data-bs-toggle="tab"
                  href="#request"
                  role="tab"
                  aria-controls="request"
                  aria-selected="false"
                >
                  <div className="control-icon has-items">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkHref="#olymp-happy-face-icon" />
                    </svg>
                    <div className="label-avatar bg-blue">6</div>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="chat-tab"
                  data-bs-toggle="tab"
                  href="#chat"
                  role="tab"
                  aria-controls="chat"
                  aria-selected="false"
                >
                  <div className="control-icon has-items">
                    <svg className="olymp-chat---messages-icon">
                      <use xlinkHref="#olymp-chat---messages-icon" />
                    </svg>
                    <div className="label-avatar bg-purple">2</div>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="notification-tab"
                  data-bs-toggle="tab"
                  href="#notification"
                  role="tab"
                  aria-controls="notification"
                  aria-selected="false"
                >
                  <div className="control-icon has-items">
                    <svg className="olymp-thunder-icon">
                      <use xlinkHref="#olymp-thunder-icon" />
                    </svg>
                    <div className="label-avatar bg-primary">8</div>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="search-tab"
                  data-bs-toggle="tab"
                  href="#search"
                  role="tab"
                  aria-controls="search"
                  aria-selected="false"
                >
                  <svg className="olymp-magnifying-glass-icon">
                    <use xlinkHref="#olymp-magnifying-glass-icon" />
                  </svg>
                  <svg className="olymp-close-icon">
                    <use xlinkHref="#olymp-close-icon" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          {/* Tab panes */}
          <div className="tab-content tab-content-responsive">
            <div
              className="tab-pane fade"
              id="request"
              role="tabpanel"
              aria-labelledby="request-tab"
            >
              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">FRIEND REQUESTS</h6>
                  <a href="/#">Find Friends</a>
                  <a href="/#">Settings</a>
                </div>
                <ul className="notification-list friend-requests">
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar55-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Tamara Romanoff
                      </a>
                      <span className="chat-message-item">
                        Mutual Friend: Sarah Hetfield
                      </span>
                    </div>
                    <span className="notification-icon">
                      <a href="/#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="#olymp-happy-face-icon" />
                          </svg>
                        </span>
                      </a>
                      <a href="/#" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="#olymp-happy-face-icon" />
                          </svg>
                        </span>
                      </a>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar56-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Tony Stevens
                      </a>
                      <span className="chat-message-item">
                        4 Friends in Common
                      </span>
                    </div>
                    <span className="notification-icon">
                      <a href="/#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="#olymp-happy-face-icon" />
                          </svg>
                        </span>
                      </a>
                      <a href="/#" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="#olymp-happy-face-icon" />
                          </svg>
                        </span>
                      </a>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>
                  <li className="accepted">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar57-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      You and
                      <a href="/#" className="h6 notification-friend">
                        Mary Jane Stark
                      </a>{" "}
                      just became friends. Write on
                      <a href="/#" className="notification-link">
                        her wall
                      </a>
                      .
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-happy-face-icon">
                        <use xlinkHref="#olymp-happy-face-icon" />
                      </svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                      <svg className="olymp-little-delete">
                        <use xlinkHref="#olymp-little-delete" />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar58-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Stagg Clothing
                      </a>
                      <span className="chat-message-item">
                        9 Friends in Common
                      </span>
                    </div>
                    <span className="notification-icon">
                      <a href="/#" className="accept-request">
                        <span className="icon-add without-text">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="#olymp-happy-face-icon" />
                          </svg>
                        </span>
                      </a>
                      <a href="/#" className="accept-request request-del">
                        <span className="icon-minus">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="#olymp-happy-face-icon" />
                          </svg>
                        </span>
                      </a>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>
                </ul>
                <a href="/#" className="view-all bg-blue">
                  Check all your Events
                </a>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="chat"
              role="tabpanel"
              aria-labelledby="chat-tab"
            >
              <div className="mCustomScrollbar" data-mcs-theme="dark">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Chat / Messages</h6>
                  <a href="/#">Mark all as read</a>
                  <a href="/#">Settings</a>
                </div>
                <ul className="notification-list chat-message">
                  <li className="message-unread">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar59-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Diana Jameson
                      </a>
                      <span className="chat-message-item">
                        Hi James! It’s Diana, I just wanted to let you know that
                        we have to reschedule...
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          4 hours ago
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon">
                        <use xlinkHref="#olymp-chat---messages-icon" />
                      </svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar60-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Jake Parker
                      </a>
                      <span className="chat-message-item">
                        Great, I’ll see you tomorrow!.
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          4 hours ago
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon">
                        <use xlinkHref="#olymp-chat---messages-icon" />
                      </svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar61-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Elaine Dreyfuss
                      </a>
                      <span className="chat-message-item">
                        We’ll have to check that at the office and see if the
                        client is on board with...
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          Yesterday at 9:56pm
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon">
                        <use xlinkHref="#olymp-chat---messages-icon" />
                      </svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>
                  <li className="chat-group">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar11-sm.webp"
                        alt="author"
                        width={16}
                        height={16}
                      />
                      <img
                        loading="lazy"
                        src="img/avatar12-sm.webp"
                        alt="author"
                        width={16}
                        height={16}
                      />
                      <img
                        loading="lazy"
                        src="img/avatar13-sm.webp"
                        alt="author"
                        width={16}
                        height={16}
                      />
                      <img
                        loading="lazy"
                        src="img/avatar10-sm.webp"
                        alt="author"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        You, Faye, Ed &amp; Jet +3
                      </a>
                      <span className="last-message-author">Ed:</span>
                      <span className="chat-message-item">
                        Yeah! Seems fine by me!
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          March 16th at 10:23am
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-chat---messages-icon">
                        <use xlinkHref="#olymp-chat---messages-icon" />
                      </svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                    </div>
                  </li>
                </ul>
                <a href="/#" className="view-all bg-purple">
                  View All Messages
                </a>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="search"
              role="tabpanel"
              aria-labelledby="search-tab"
            >
              <form className="search-bar w-search notification-list friend-requests">
                <div className="form-group with-button">
                  <input
                    className="form-control js-user-search"
                    placeholder="Search here people or pages..."
                    type="text"
                  />
                </div>
              </form>
            </div>
          </div>
          {/* ... end  Tab panes */}
        </header>
        {/* ... end Responsive Header-BP */}
        <div
          className={`header-spacer ${
            (param === "/musicplay" ||
              param === "/friendbirthday" ||
              param === "/chart" ||
              param === "/profile" ||
              param === "/accountprofile") &&
            "header-spacer-small"
          }`}
        />
      </div>
      <Message openChat={openChat} setOpenChat={setOpenChat} />
    </>
  );
}
