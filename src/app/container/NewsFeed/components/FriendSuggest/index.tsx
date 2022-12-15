import { useNavigate } from "react-router-dom";
import { Profile } from "types/Profile";

export default function FriendSuggest(props: { friendData: Profile }) {
  const { friendData } = props;
  const navigator = useNavigate();

  return (
    <li className="inline-items">
      <div className="author-thumb">
        <img
          loading="lazy"
          src={
            friendData?.imgUrl ||
            "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
          }
          alt="author"
          width={36}
          height={36}
        />
      </div>
      <div className="notification-event">
        <a
          href="#"
          onClick={() => {
            navigator(`/profileoffriend?userID=${friendData?.uid}`);
          }}
          className="h6 notification-friend"
        >
          {friendData?.firstName} {friendData?.lastName}
        </a>
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
  );
}
