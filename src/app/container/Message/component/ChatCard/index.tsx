import { auth } from "app/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { dateTimeFormat } from "utils/datetime";

export default function ChatCard(props: { dataChat: any }) {
  const { dataChat } = props;
  const [user] = useAuthState(auth);
  const navigator = useNavigate();
  return user?.uid === dataChat?.sender?.uid ? (
    <li style={{ display: "flex", padding: "5px" }}>
      <div
        style={{
          marginLeft: "30%",
          width: "70%",
        }}
      >
        <span
          style={{
            marginLeft: "88%",
            fontWeight: "bold",
          }}
        >
          Me
        </span>
        <div
          style={{
            background: "#2aebcb",
            color: "#fff",
            borderRadius: "7px",
            padding: "8px",
          }}
        >
          {dataChat.type === "TEXT" ? (
            <span style={{ width: "100%", wordBreak: "break-word" }}>
              {dataChat?.text}
            </span>
          ) : (
            <img src={dataChat?.text} />
          )}
        </div>
        <span
          style={{
            fontSize: "8px",
            marginLeft: "40%",
          }}
        >
          {dateTimeFormat(dataChat?.sendAt?.toDate())}
        </span>
      </div>
      <img
        loading="lazy"
        src={
          dataChat?.sender?.imgUrl ||
          "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
        }
        width={28}
        height={28}
        alt="author"
        style={{
          borderRadius: "20px",
          margin: "2px",
          marginTop: "15px",
        }}
      />
    </li>
  ) : (
    <li style={{ display: "flex", padding: "5px" }}>
      <img
        loading="lazy"
        src={
          dataChat?.sender?.imgUrl ||
          "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
        }
        width={28}
        height={28}
        alt="author"
        style={{
          borderRadius: "20px",
          margin: "2px",
          marginTop: "15px",
        }}
      />
      <div
        style={{
          marginRight: "30%",
          width: "70%",
        }}
      >
        <span
          onClick={() => {
            navigator(`/profileoffriend?userID=${dataChat?.sender?.uid}`);
          }}
          style={{
            fontWeight: "bold",
          }}
        >
          {dataChat?.sender?.firstName} {dataChat?.sender?.lastName}
        </span>
        <div
          style={{
            background: "#defce6",
            borderRadius: "7px",
            color: "black",
            padding: "8px",
          }}
        >
          {dataChat.type === "TEXT" ? (
            <span style={{ width: "100%", wordBreak: "break-word" }}>
              {dataChat?.text}
            </span>
          ) : (
            <img src={dataChat?.text} />
          )}
        </div>
        <span
          style={{
            fontSize: "8px",
          }}
        >
          {dateTimeFormat(dataChat?.sendAt?.toDate())}
        </span>
      </div>
    </li>
  );
}
