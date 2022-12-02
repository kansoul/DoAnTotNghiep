import { auth, db } from "app/services/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { dateTimeFormat } from "utils/datetime";

export default function LastMesenger(props: {
  dataLastMesenger: any;
  idDoc: string;
  setDataUser: (value: any) => void;
  setOpenMessage: (value: boolean) => void;
}) {
  const { dataLastMesenger, setDataUser, setOpenMessage, idDoc } = props;
  const [user] = useAuthState(auth);
  const dataUser =
    dataLastMesenger.receiver?.uid === user?.uid
      ? dataLastMesenger.sender
      : dataLastMesenger.receiver;

  const handleUpdateLastMesenger = () => {
    const dataMessage = doc(db, "Message", idDoc);

    updateDoc(dataMessage, {
      lastMessage: {
        ...dataLastMesenger,
        status: "SEEN",
      },
    })
      .then(() => {
        setDataUser(dataUser);
        setOpenMessage(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <li
        style={
          dataLastMesenger?.status === "UNSEND"
            ? { background: "#918c8c12" }
            : {}
        }
      >
        <div className="author-thumb">
          <img
            loading="lazy"
            src={
              dataUser?.imgURL ||
              "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
            }
            alt="author"
            width={34}
            height={34}
          />
        </div>
        <div className="notification-event">
          <a href="/#" className="h6 notification-friend">
            {dataUser?.firstName} {dataUser?.lastName}
          </a>
          <span
            className="chat-message-item"
            style={
              dataLastMesenger?.status === "UNSEND" &&
              dataLastMesenger.receiver?.uid === user?.uid
                ? { fontWeight: "600", color: "black" }
                : {}
            }
          >
            {dataLastMesenger.receiver?.uid === user?.uid
              ? dataLastMesenger?.text
              : `Me: ${dataLastMesenger?.text}`}
          </span>
          <span className="notification-date">
            <time className="entry-date updated" dateTime="2004-07-24T18:18">
              {dataLastMesenger?.sendAt &&
                dateTimeFormat(dataLastMesenger?.sendAt?.toDate())}
            </time>
          </span>
        </div>
        <span
          className="notification-icon"
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleUpdateLastMesenger();
          }}
        >
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
    </>
  );
}
