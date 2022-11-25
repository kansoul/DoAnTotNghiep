import { auth, db } from "app/services/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Friend } from "types/Friend";
import FriendCardChat from "./Component/FriendCardChat";
import FriendChatDetail from "./Component/FriendChatDetail";

export default function NavBarRight() {
  const [openRightNav, setRightNav] = useState<boolean>(false);
  const [user] = useAuthState(auth);
  const dataCollectionFriend = collection(db, "Friends");
  const dataCollectionUsers = collection(db, "Users");
  const [friendList, setFriendList] = useState<Friend[]>([]);
  const [dataFriend, setDataFriend] = useState<any>([]);

  const fetchAccountInfor = async (uid: any, arr: any) => {
    const q = query(dataCollectionUsers, where("uuid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      arr.push({ idDoc: doc.id, ...doc.data() });
    });
    return arr;
  };

  useEffect(() => {
    let data: any = [];
    const q = query(
      dataCollectionFriend,
      where("relation", "array-contains", user?.uid),
      where("status", "==", "ACCEPT")
    );
    const test = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          data = data.filter((val) => val.idDoc);
          data.push({ idDoc: change.doc.id, ...change.doc.data() });
        }
        if (change.type === "modified") {
          data = data.filter((val) => val.idDoc !== change.doc.id);
          data.push({ idDoc: change.doc.id, ...change.doc.data() });
        }
        if (change.type === "removed") {
          data = data.filter((val) => val.idDoc !== change.doc.id);
        }
        setFriendList(data);
      });
    });
    return test;
    // eslint-disable-next-line
  }, []);
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
    // eslint-disable-next-line
  }, [friendList]);
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
                  <FriendCardChat key={user.uuid} dataFriend={user} />
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
            <div className="scroll-custom" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <a href="/#" className="title">
                  Close Friends
                </a>
              </div>
              <ul className="chat-users">
                {dataFriend.map((user) => (
                  <FriendChatDetail key={user.uuid} dataFriend={user} />
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
            <div className="scroll-custom" data-mcs-theme="dark">
              <div className="ui-block-title ui-block-title-small">
                <a href="/#" className="title">
                  Close Friends
                </a>
              </div>
              <ul className="chat-users">
                {dataFriend.map((user) => (
                  <FriendChatDetail key={user.uuid} dataFriend={user} />
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
      </div>
    </>
  );
}
