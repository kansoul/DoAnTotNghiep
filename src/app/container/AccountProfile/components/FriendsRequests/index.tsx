export default function FriendsRequests() {
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Friend Requests</h6>
        <a href="/#" className="more">
          <svg className="olymp-three-dots-icon">
            <use xlinkHref="#olymp-three-dots-icon" />
          </svg>
        </a>
      </div>
      {/* Notification List Frien Requests */}
      <ul className="notification-list friend-requests">
        <li>
          <div className="author-thumb">
            <img
              loading="lazy"
              src="img/avatar15-sm.webp"
              alt="author"
              width={42}
              height={42}
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
              <span className="icon-add">
                <svg className="olymp-happy-face-icon">
                  <use xlinkHref="#olymp-happy-face-icon" />
                </svg>
              </span>
              <span className="accept-request-text">Accept Friend Request</span>
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
            <svg className="olymp-little-delete">
              <use xlinkHref="#olymp-little-delete" />
            </svg>
          </div>
        </li>
        <li>
          <div className="author-thumb">
            <img
              loading="lazy"
              src="img/avatar16-sm.webp"
              alt="author"
              width={42}
              height={42}
            />
          </div>
          <div className="notification-event">
            <a href="/#" className="h6 notification-friend">
              Tony Stevens
            </a>
            <span className="chat-message-item">4 Friends in Common</span>
          </div>
          <span className="notification-icon">
            <a href="/#" className="accept-request">
              <span className="icon-add">
                <svg className="olymp-happy-face-icon">
                  <use xlinkHref="#olymp-happy-face-icon" />
                </svg>
              </span>
              <span className="accept-request-text">Accept Friend Request</span>
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
            <svg className="olymp-little-delete">
              <use xlinkHref="#olymp-little-delete" />
            </svg>
          </div>
        </li>
        <li className="accepted">
          <div className="author-thumb">
            <img
              loading="lazy"
              src="img/avatar17-sm.webp"
              alt="author"
              width={42}
              height={42}
            />
          </div>
          <div className="notification-event">
            You and{" "}
            <a href="/#" className="h6 notification-friend">
              Mary Jane Stark
            </a>{" "}
            just became friends. Write on{" "}
            <a href="/#" className="notification-link">
              his wall
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
              src="img/avatar18-sm.webp"
              alt="author"
              width={42}
              height={42}
            />
          </div>
          <div className="notification-event">
            <a href="/#" className="h6 notification-friend">
              Stagg Clothing
            </a>
            <span className="chat-message-item">9 Friends in Common</span>
          </div>
          <span className="notification-icon">
            <a href="/#" className="accept-request">
              <span className="icon-add">
                <svg className="olymp-happy-face-icon">
                  <use xlinkHref="#olymp-happy-face-icon" />
                </svg>
              </span>
              <span className="accept-request-text">Accept Friend Request</span>
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
            <svg className="olymp-little-delete">
              <use xlinkHref="#olymp-little-delete" />
            </svg>
          </div>
        </li>
      </ul>
      {/* ... end Notification List Frien Requests */}
    </div>
  );
}
