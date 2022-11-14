import Message from "app/container/Message";
import { useState } from "react";

export default function NavBarRight() {
  const [openChat, setOpenChat] = useState<boolean>(false);
  return (
    <>
      <div>
        <div className="fixed-sidebar right">
          <div
            className="fixed-sidebar-right sidebar--small"
            id="sidebar-right"
          >
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <ul className="chat-users">
                <li
                  className="inline-items js-chat-open"
                  onClick={() => setOpenChat(true)}
                >
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar67-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                </li>
                <li
                  className="inline-items js-chat-open"
                  onClick={() => setOpenChat(true)}
                >
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar62-sm.webp"
                      width={34}
                      height={34}
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                </li>
                <li
                  className="inline-items js-chat-open"
                  onClick={() => setOpenChat(true)}
                >
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar68-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                </li>
                <li
                  className="inline-items js-chat-open"
                  onClick={() => setOpenChat(true)}
                >
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar69-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status away" />
                  </div>
                </li>
                <li
                  className="inline-items js-chat-open"
                  onClick={() => setOpenChat(true)}
                >
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar70-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status disconected" />
                  </div>
                </li>
                <li
                  className="inline-items js-chat-open"
                  onClick={() => setOpenChat(true)}
                >
                  <div className="author-thumb">
                    <img
                      alt="author"
                      loading="lazy"
                      src="img/avatar64-sm.webp"
                      width={34}
                      height={34}
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                </li>
                <li
                  className="inline-items js-chat-open"
                  onClick={() => setOpenChat(true)}
                >
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar71-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                </li>
                <li
                  className="inline-items js-chat-open"
                  onClick={() => setOpenChat(true)}
                >
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar72-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status away" />
                  </div>
                </li>
                <li
                  className="inline-items js-chat-open"
                  onClick={() => setOpenChat(true)}
                >
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar63-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status status-invisible" />
                  </div>
                </li>
                <li
                  className="inline-items js-chat-open"
                  onClick={() => setOpenChat(true)}
                >
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar72-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status away" />
                  </div>
                </li>
                <li
                  className="inline-items js-chat-open"
                  onClick={() => setOpenChat(true)}
                >
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar71-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="search-friend inline-items">
              <a href="/#" className="js-sidebar-open">
                <svg className="olymp-menu-icon">
                  <use xlinkHref="#olymp-menu-icon" />
                </svg>
              </a>
            </div>
            <a href="/#" className="olympus-chat inline-items js-chat-open">
              <svg className="olymp-chat---messages-icon">
                <use xlinkHref="#olymp-chat---messages-icon" />
              </svg>
            </a>
          </div>
          <div
            className="fixed-sidebar-right sidebar--large"
            id="sidebar-right-1"
          >
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <a href="/#" className="title">
                  Close Friends
                </a>
                <a href="/#">Settings</a>
              </div>
              <ul className="chat-users">
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar67-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Carol Summers
                    </a>
                    <span className="status">ONLINE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar62-sm.webp"
                      width={34}
                      height={34}
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Mathilda Brinker
                    </a>
                    <span className="status">AT WORK!</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar68-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Carol Summers
                    </a>
                    <span className="status">ONLINE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar69-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status away" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Michael Maximoff
                    </a>
                    <span className="status">AWAY</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar70-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status disconected" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Rachel Howlett
                    </a>
                    <span className="status">OFFLINE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="ui-block-title ui-block-title-small">
                <a href="/#" className="title">
                  MY FAMILY
                </a>
                <a href="/#">Settings</a>
              </div>
              <ul className="chat-users">
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      loading="lazy"
                      src="img/avatar64-sm.webp"
                      width={34}
                      height={34}
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Sarah Hetfield
                    </a>
                    <span className="status">ONLINE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="ui-block-title ui-block-title-small">
                <a href="/#" className="title">
                  UNCATEGORIZED
                </a>
                <a href="/#">Settings</a>
              </div>
              <ul className="chat-users">
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar71-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Bruce Peterson
                    </a>
                    <span className="status">ONLINE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar72-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status away" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Chris Greyson
                    </a>
                    <span className="status">AWAY</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar63-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status status-invisible" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Nicholas Grisom
                    </a>
                    <span className="status">INVISIBLE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar72-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status away" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Chris Greyson
                    </a>
                    <span className="status">AWAY</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar71-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Bruce Peterson
                    </a>
                    <span className="status">ONLINE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="search-friend inline-items">
              <form className="form-group">
                <input
                  className="form-control"
                  placeholder="Search Friends..."
                  type="text"
                />
              </form>
              <a
                href="29-YourAccount-AccountSettings.html"
                className="settings"
              >
                <svg className="olymp-settings-icon">
                  <use xlinkHref="#olymp-settings-icon" />
                </svg>
              </a>
              <a href="/#" className="js-sidebar-open">
                <svg className="olymp-close-icon">
                  <use xlinkHref="#olymp-close-icon" />
                </svg>
              </a>
            </div>
            <a href="/#" className="olympus-chat inline-items js-chat-open">
              <h6 className="olympus-chat-title">OLYMPUS CHAT</h6>
              <svg className="olymp-chat---messages-icon">
                <use xlinkHref="#olymp-chat---messages-icon" />
              </svg>
            </a>
          </div>
        </div>
        {/* ... end Fixed Sidebar Right */}
        {/* Fixed Sidebar Right-Responsive */}
        <div
          className="fixed-sidebar right fixed-sidebar-responsive"
          id="sidebar-right-responsive"
        >
          <div className="fixed-sidebar-right sidebar--small">
            <a href="/#" className="js-sidebar-open">
              <svg className="olymp-menu-icon">
                <use xlinkHref="#olymp-menu-icon" />
              </svg>
              <svg className="olymp-close-icon">
                <use xlinkHref="#olymp-close-icon" />
              </svg>
            </a>
          </div>
          <div className="fixed-sidebar-right sidebar--large">
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <a href="/#" className="title">
                  Close Friends
                </a>
                <a href="/#">Settings</a>
              </div>
              <ul className="chat-users">
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar67-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Carol Summers
                    </a>
                    <span className="status">ONLINE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar62-sm.webp"
                      width={34}
                      height={34}
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Mathilda Brinker
                    </a>
                    <span className="status">AT WORK!</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar68-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Carol Summers
                    </a>
                    <span className="status">ONLINE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar69-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status away" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Michael Maximoff
                    </a>
                    <span className="status">AWAY</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar70-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status disconected" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Rachel Howlett
                    </a>
                    <span className="status">OFFLINE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="ui-block-title ui-block-title-small">
                <a href="/#" className="title">
                  MY FAMILY
                </a>
                <a href="/#">Settings</a>
              </div>
              <ul className="chat-users">
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      alt="author"
                      loading="lazy"
                      src="img/avatar64-sm.webp"
                      width={34}
                      height={34}
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Sarah Hetfield
                    </a>
                    <span className="status">ONLINE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div className="ui-block-title ui-block-title-small">
                <a href="/#" className="title">
                  UNCATEGORIZED
                </a>
                <a href="/#">Settings</a>
              </div>
              <ul className="chat-users">
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar71-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Bruce Peterson
                    </a>
                    <span className="status">ONLINE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar72-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status away" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Chris Greyson
                    </a>
                    <span className="status">AWAY</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar63-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status status-invisible" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Nicholas Grisom
                    </a>
                    <span className="status">INVISIBLE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar72-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status away" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Chris Greyson
                    </a>
                    <span className="status">AWAY</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar71-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Bruce Peterson
                    </a>
                    <span className="status">ONLINE</span>
                  </div>
                  <div className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                    <ul className="more-icons">
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="START CONVERSATION"
                          className="olymp-comments-post-icon"
                        >
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="ADD TO CONVERSATION"
                          className="olymp-add-to-conversation-icon"
                        >
                          <use xlinkHref="#olymp-add-to-conversation-icon" />
                        </svg>
                      </li>
                      <li>
                        <svg
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-original-title="BLOCK FROM CHAT"
                          className="olymp-block-from-chat-icon"
                        >
                          <use xlinkHref="#olymp-block-from-chat-icon" />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="search-friend inline-items">
              <form className="form-group">
                <input
                  className="form-control"
                  placeholder="Search Friends..."
                  type="text"
                />
              </form>
              <a
                href="29-YourAccount-AccountSettings.html"
                className="settings"
              >
                <svg className="olymp-settings-icon">
                  <use xlinkHref="#olymp-settings-icon" />
                </svg>
              </a>
              <a href="/#" className="js-sidebar-open">
                <svg className="olymp-close-icon">
                  <use xlinkHref="#olymp-close-icon" />
                </svg>
              </a>
            </div>
            <a href="/#" className="olympus-chat inline-items js-chat-open">
              <h6 className="olympus-chat-title">OLYMPUS CHAT</h6>
              <svg className="olymp-chat---messages-icon">
                <use xlinkHref="#olymp-chat---messages-icon" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Message openChat={openChat} setOpenChat={setOpenChat} />
    </>
  );
}
