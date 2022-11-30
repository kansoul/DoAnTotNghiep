import { auth, db } from "app/services/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Message } from "types/Message";
import ChatCard from "./component/ChatCard";

export default function MessageScreen(props: {
  openChat: boolean;
  setOpenChat: (value: boolean) => void;
  dataFriend: any;
}) {
  const { openChat, setOpenChat, dataFriend } = props;
  const [dataMessage, setDataMessage] = useState<Message | null>(null);
  const dataCollectionMessage = collection(db, "Message");
  const [user] = useAuthState(auth);
  const [valueMessage, setValueMessage] = useState<string>("");
  const dataCollectionUsers = collection(db, "Users");
  const [profile, setProfile] = useState<any>();

  const fetchAccountInfor = async () => {
    const q = query(dataCollectionUsers, where("uuid", "==", user?.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setProfile({ id: doc.id, ...doc.data() });
    });
  };
  useEffect(() => {
    fetchAccountInfor();
    // eslint-disable-next-line
  }, [user]);
  useEffect(() => {
    let data: any = {};
    const q = query(
      dataCollectionMessage,
      where("relationMessage", "in", [
        [user?.uid, dataFriend?.uuid],
        [dataFriend?.uuid, user?.uid],
      ])
    );
    const test = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          data = { idDoc: change.doc.id, ...change.doc.data() };
        }
        if (change.type === "modified") {
          data = { idDoc: change.doc.id, ...change.doc.data() };
        }
        setDataMessage(data);
      });
    });
    return test;
    // eslint-disable-next-line
  }, []);
  const handleSendMessage = () => {
    if (dataMessage && dataMessage.idDoc) {
      const dataCollection = doc(db, "Message", dataMessage.idDoc);

      updateDoc(dataCollection, {
        message: arrayUnion({
          receiver: {
            firstName: dataFriend?.firstName,
            imgURL: dataFriend?.imgUrl || "",
            lastName: dataFriend?.lastName,
            uid: dataFriend?.uuid,
          },
          sender: {
            firstName: profile?.firstName,
            imgURL: profile?.imgUrl || "",
            lastName: profile?.lastName,
            uid: user?.uid,
          },
          sendAt: new Date(),
          status: "UNSEND",
          text: valueMessage,
          type: "TEXT",
        }),
      })
        .then(() => {
          setValueMessage("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const messagesEndRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [dataMessage]);

  return (
    <div
      className={`ui-block popup-chat popup-chat-responsive ${
        openChat && "open-chat"
      }`}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="popup-chat-responsive"
      aria-hidden="true"
    >
      <div className="modal-content">
        <div className="modal-header">
          <span className="icon-status online" />
          <h6 className="title">Chat</h6>
          <div className="more">
            <svg className="olymp-three-dots-icon">
              <use xlinkHref="#olymp-three-dots-icon" />
            </svg>
            <svg
              className="olymp-little-delete js-chat-open"
              onClick={() => setOpenChat(false)}
            >
              <use xlinkHref="#olymp-little-delete" />
            </svg>
          </div>
        </div>
        <div className="modal-body">
          <div className="scroll-custom" style={{ height: "300px" }}>
            <ul>
              {dataMessage?.message &&
                dataMessage?.message.length > 0 &&
                dataMessage?.message.map((val, index) => (
                  <ChatCard dataChat={val} key={index} />
                ))}
              <div ref={messagesEndRef} />
            </ul>
          </div>
          <form className="need-validation">
            <div className="form-group">
              <textarea
                className="form-control scroll-custom"
                placeholder="Press enter to post..."
                value={valueMessage}
                onChange={(e) => setValueMessage(e.target.value)}
                style={{ paddingRight: "80px" }}
              />
              <div className="add-options-message">
                <span className="options-message">
                  <svg className="olymp-computer-icon">
                    <use xlinkHref="#olymp-computer-icon" />
                  </svg>
                </span>
                <span
                  className="options-message"
                  onClick={() => handleSendMessage()}
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0,0,256,256"
                    style={{ width: "30px", height: "30px" }}
                  >
                    <g
                      fill="#71a4ec"
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
                    >
                      <g transform="scale(8.53333,8.53333)">
                        <path d="M26,3c-0.09597,0.00066 -0.19135,0.01513 -0.2832,0.04297c-0.02704,0.00734 -0.05375,0.01581 -0.08008,0.02539l-21.98633,6.99219v0.00391c-0.39063,0.14577 -0.64983,0.5186 -0.65039,0.93555c0.00074,0.34922 0.18361,0.67277 0.48242,0.85352l6.68164,5.30078l13.20899,-10.52734l-10.52734,13.20898l5.29688,6.67773c0.18051,0.3015 0.50602,0.48613 0.85742,0.48633c0.41694,-0.00056 0.78978,-0.25976 0.93555,-0.65039h0.00391l6.99805,-22.00586c0.00715,-0.01997 0.01366,-0.04016 0.01953,-0.06055c0.02784,-0.09185 0.04231,-0.18723 0.04297,-0.2832c0,-0.55228 -0.44772,-1 -1,-1z"></path>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
