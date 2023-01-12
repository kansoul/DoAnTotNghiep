import { auth } from "app/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { filterLastMessenger } from "utils/helper";
import LastMesenger from "./component/LastMesenger";

export default function MessengerUnseen(props: {
  setDataUser: (value: any) => void;
  setOpenMessage: (value: boolean) => void;
  lastMessages: any;
}) {
  const { setDataUser, setOpenMessage, lastMessages } = props;
  const [user] = useAuthState(auth);
  return (
    <div className="control-icon more has-items">
      <svg className="olymp-chat---messages-icon">
        <use xlinkHref="#olymp-chat---messages-icon" />
      </svg>
      <div className="label-avatar bg-purple">
        {lastMessages &&
          lastMessages.filter(
            (val) =>
              val?.lastMessage?.status === "UNSEND" &&
              val?.lastMessage?.sender?.uid !== user?.uid
          ).length}
      </div>
      <div className="more-dropdown more-with-triangle triangle-top-center">
        <div className="ui-block-title ui-block-title-small">
          <h6 className="title">Chat / Messages</h6>
          <a href="/#">Mark all as read</a>
          <a href="/#">Settings</a>
        </div>
        <div
          className="scroll-custom"
          data-mcs-theme="dark"
          style={{ maxHeight: "300px" }}
        >
          <ul className="notification-list chat-message">
            {lastMessages &&
              lastMessages.length > 0 &&
              filterLastMessenger(lastMessages).map((val) =>
                val?.lastMessage ? (
                  <LastMesenger
                    setDataUser={setDataUser}
                    setOpenMessage={setOpenMessage}
                    dataLastMesenger={val?.lastMessage}
                    idDoc={val?.idDoc}
                    key={val?.idDoc}
                  />
                ) : null
              )}
          </ul>
        </div>
        <a href="/#" className="view-all bg-purple">
          View All Messages
        </a>
      </div>
    </div>
  );
}
