import DefaultLayout from "app/layouts";
import Feed from "./components/Feed";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Weather from "./components/Weather";

export default function NewsFeed() {
  return (
    <>
      <DefaultLayout />
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              {/* News Feed Form  */}
              <div className="news-feed-form">
                <div className="add-options-message">
                  <a
                    href="/#"
                    className="options-message"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-original-title="ADD PHOTOS"
                  >
                    <svg
                      className="olymp-camera-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#update-header-photo"
                    >
                      <use xlinkHref="#olymp-camera-icon" />
                    </svg>
                  </a>
                  <button className="btn btn-primary btn-md-2">
                    Thêm nhật kí
                  </button>
                  <button className="btn btn-primary btn-md-2">
                    Thêm chi tiêu
                  </button>
                </div>
              </div>
              {/* ... end News Feed Form  */}{" "}
            </div>

            <div id="newsfeed-items-grid">
              <Feed />
            </div>
            <a
              id="load-more-button"
              href="/#"
              className="btn btn-control btn-more"
              data-load-link="items-to-load.html"
              data-container="newsfeed-items-grid"
            >
              <svg className="olymp-three-dots-icon">
                <use xlinkHref="#olymp-three-dots-icon" />
              </svg>
            </a>
          </main>
          {/* ... end Main Content */}
          {/* Left Sidebar */}
          <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              <Weather />
            </div>
            <div className="ui-block">
              <DatePicker
                onChange={() => {}}
                inline
                selected={new Date()}
                minDate={new Date()}
              />
            </div>
          </aside>
          {/* ... end Left Sidebar */}
          {/* Right Sidebar */}
          <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              <div className="ui-block-title">
                <h6 className="title">Friend Suggestions</h6>
                <a href="/#" className="more">
                  <svg className="olymp-three-dots-icon">
                    <use xlinkHref="#olymp-three-dots-icon" />
                  </svg>
                </a>
              </div>
              {/* W-Action */}
              <ul className="widget w-friend-pages-added notification-list friend-requests">
                <li className="inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar38-sm.webp"
                      alt="author"
                      width={36}
                      height={36}
                    />
                  </div>
                  <div className="notification-event">
                    <a href="/#" className="h6 notification-friend">
                      Francine Smith
                    </a>
                    <span className="chat-message-item">
                      8 Friends in Common
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
                  </span>
                </li>
                <li className="inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar39-sm.webp"
                      alt="author"
                      width={36}
                      height={36}
                    />
                  </div>
                  <div className="notification-event">
                    <a href="/#" className="h6 notification-friend">
                      Hugh Wilson
                    </a>
                    <span className="chat-message-item">
                      6 Friends in Common
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
                  </span>
                </li>
                <li className="inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar40-sm.webp"
                      alt="author"
                      width={36}
                      height={36}
                    />
                  </div>
                  <div className="notification-event">
                    <a href="/#" className="h6 notification-friend">
                      Karen Masters
                    </a>
                    <span className="chat-message-item">
                      6 Friends in Common
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
                  </span>
                </li>
              </ul>
              {/* ... end W-Action */}
            </div>
          </aside>
          {/* ... end Right Sidebar */}
        </div>
      </div>
    </>
  );
}
