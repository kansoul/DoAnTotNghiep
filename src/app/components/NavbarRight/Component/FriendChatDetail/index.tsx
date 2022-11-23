export default function FriendChatDetail(props: {
  setOpenChat: (value: boolean) => void;
  dataFriend: any;
}) {
  const { dataFriend, setOpenChat } = props;
  return (
    <li className="inline-items js-chat-open">
      <div className="author-thumb">
        <img
          loading="lazy"
          alt="author"
          src={
            dataFriend?.imgUrl ||
            "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
          }
          className="avatar"
          width={34}
          height={34}
        />
        <span className="icon-status online" />
      </div>
      <div className="author-status">
        <span className="h6 author-name text-span-card-chat text-span-card-chat-hover">
          {dataFriend.firstName} {dataFriend.lastName}
        </span>
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
  );
}
