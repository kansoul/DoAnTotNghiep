import Message from "app/container/Message";
import { auth, db } from "app/services/firebase";
import { reload } from "firebase/auth";
import {
  query,
  where,
  onSnapshot,
  collection,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Friend } from "types/Friend";
import FriendCardChat from "./Component/FriendCardChat";
import FriendChatDetail from "./Component/FriendChatDetail";

export default function NavBarRight() {
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [openRightNav, setRightNav] = useState<boolean>(false);
  const [user] = useAuthState(auth);
  const dataCollectionFriend = collection(db, "Friends");
  const dataCollectionUsers = collection(db, "Users");
  const [friendList, setFriendList] = useState<Friend[]>([]);
  const [onChangeState, setChangeState] = useState<any>("");
  const [dataFriend, setDataFriend] = useState<any>([]);

  const reload = () => {
    fetchFriends();
  };
  const fetchAccountInfor = async (uid: any, arr: any) => {
    const q = query(dataCollectionUsers, where("uuid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr.push({ idDoc: doc.id, ...doc.data() });
    });
    return arr;
  };
  const fetchFriends = async () => {
    let data: any = [];
    const q = query(
      dataCollectionFriend,
      where("relation", "array-contains", user?.uid),
      where("status", "==", "ACCEPT")
    );
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        setChangeState(change);
        if (change.type === "added") {
          data.push({ idDoc: change.doc.id, ...change.doc.data() });
        }
        if (change.type === "modified") {
          reload();
        }
        if (change.type === "removed") {
          reload();
        }
      });
    });
    setFriendList(data);
  };
  useEffect(() => {
    fetchFriends();
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    // eslint-disable-next-line
  }, [onChangeState]);

  useEffect(() => {
    const data: any = [];
    friendList.forEach(async (value) => {
      const dataUID: any = value.relation;
      var index = dataUID.indexOf(user?.uid);
      if (index !== -1) {
        dataUID.splice(index, 1);
      }
      const dataUser: any = await fetchAccountInfor(dataUID[0], data);
      setDataFriend(dataUser);
    });
    // setDataFriend(data);
  }, [friendList.length > 0]);
  console.log("dataFriend", dataFriend);
  return (
    <>
      <div>
        <div className={`fixed-sidebar right ${openRightNav ? "open" : ""}`}>
          <div
            className="fixed-sidebar-right sidebar--small"
            id="sidebar-right"
          >
            <div className="scroll-custom" data-mcs-theme="dark">
              <ul className="chat-users">
                {dataFriend.map((user) => (
                  <FriendCardChat
                    setOpenChat={setOpenChat}
                    key={user.uuid}
                    dataFriend={user}
                  />
                ))}
              </ul>
            </div>
            <div className="search-friend inline-items">
              <span
                onClick={() => setRightNav(true)}
                className="js-sidebar-open"
                style={{ cursor: "pointer" }}
              >
                <svg className="olymp-menu-icon">
                  <use xlinkHref="#olymp-menu-icon" />
                </svg>
              </span>
            </div>
            <a href="/#" className="olympus-chat inline-items js-chat-open">
              <svg className="olymp-chat---messages-icon">
                <use xlinkHref="#olymp-chat---messages-icon" />
              </svg>
            </a>
          </div>
          <div
            className="fixed-sidebar-right sidebar--large"
            id="sidebar-right-1"
          >
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <a href="/#" className="title">
                  Close Friends
                </a>
              </div>
              <ul className="chat-users">
                {dataFriend.map((user) => (
                  <FriendChatDetail
                    key={user.uuid}
                    dataFriend={user}
                    setOpenChat={setOpenChat}
                  />
                ))}
              </ul>
            </div>
            <div className="search-friend inline-items">
              <form className="form-group">
                <input
                  className="form-control"
                  placeholder="Search Friends..."
                  type="text"
                />
              </form>
              <span
                onClick={() => setRightNav(false)}
                style={{ cursor: "pointer" }}
                className="js-sidebar-open"
              >
                <svg className="olymp-close-icon">
                  <use xlinkHref="#olymp-close-icon" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        {/* ... end Fixed Sidebar Right */}
        {/* Fixed Sidebar Right-Responsive */}
        <div
          className={`fixed-sidebar right fixed-sidebar-responsive ${
            openRightNav ? "open" : ""
          }`}
          id="sidebar-right-responsive"
        >
          <div className="fixed-sidebar-right sidebar--small">
            <span
              onClick={() => setRightNav(true)}
              style={{ cursor: "pointer" }}
              className="js-sidebar-open"
            >
              <svg className="olymp-menu-icon">
                <use xlinkHref="#olymp-menu-icon" />
              </svg>
              <svg className="olymp-close-icon">
                <use xlinkHref="#olymp-close-icon" />
              </svg>
            </span>
          </div>
          <div className="fixed-sidebar-right sidebar--large">
            <div className="mCustomScrollbar" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <a href="/#" className="title">
                  Close Friends
                </a>
                <a href="/#">Settings</a>
              </div>
              <ul className="chat-users">
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar67-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Carol Summers
                    </a>
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
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar62-sm.webp"
                      width={34}
                      height={34}
                      className="avatar"
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Mathilda Brinker
                    </a>
                    <span className="status">AT WORK!</span>
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
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar68-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status online" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Carol Summers
                    </a>
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
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar69-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status away" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Michael Maximoff
                    </a>
                    <span className="status">AWAY</span>
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
                <li className="inline-items js-chat-open">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      alt="author"
                      src="img/avatar70-sm.webp"
                      className="avatar"
                      width={34}
                      height={34}
                    />
                    <span className="icon-status disconected" />
                  </div>
                  <div className="author-status">
                    <a href="/#" className="h6 author-name">
                      Rachel Howlett
                    </a>
                    <span className="status">OFFLINE</span>
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
              </ul>
            </div>
            <div className="search-friend inline-items">
              <form className="form-group">
                <input
                  className="form-control"
                  placeholder="Search Friends..."
                  type="text"
                />
              </form>
              <span
                onClick={() => setRightNav(false)}
                style={{ cursor: "pointer" }}
                className="js-sidebar-open"
              >
                <img
                  src="svg-icons/close.svg"
                  alt="Close"
                  width={30}
                  height={30}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Message openChat={openChat} setOpenChat={setOpenChat} />
    </>
  );
}
