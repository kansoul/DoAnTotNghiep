export default function FriendCardChat(props: {
  setOpenChat: (value: boolean) => void;
  dataFriend: any;
}) {
  const { setOpenChat, dataFriend } = props;
  return (
    <li className="inline-items js-chat-open" onClick={() => setOpenChat(true)}>
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
    </li>
  );
}
