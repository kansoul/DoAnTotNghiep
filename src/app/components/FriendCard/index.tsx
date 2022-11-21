export default function FriendCard() {
  return (
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
        <span className="h6 notification-friend text-black text-black-hover">
          Tamara Romanoff
        </span>
        <span className="chat-message-item">Mutual Friend: Sarah Hetfield</span>
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
  );
}
