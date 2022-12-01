import MessageScreen from "app/container/Message";
import { auth, db, logout } from "app/services/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Friend } from "types/Friend";
import FriendCard from "../FriendCard";
import MessengerUnseen from "./component/MessageUnseen";

export default function Header() {
  const param = window.location.pathname;
  const navigate = useNavigate();
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<any>();

  const [openFriendRequest, setOpenFriendRequest] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const [friendList, setFriendList] = useState<Friend[]>([]);
  const [searchFriend, setSearchFriend] = useState<string>("");
  const [profile, setProfile] = useState<any>();
  const [user] = useAuthState(auth);
  const dataCollectionFriend = collection(db, "Friends");
  const dataCollectionUsers = collection(db, "Users");
  const [onChangeState, setChangeState] = useState<any>("");
  const fetchAccountInfor = async () => {
    const q = query(dataCollectionUsers, where("uid", "==", user?.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setProfile({ id: doc.id, ...doc.data() });
    });
  };
  useEffect(() => {
    fetchAccountInfor();
    // eslint-disable-next-line
  }, [user]);
  const reload = () => {
    fetchFriends();
    fetchAccountInfor();
  };
  const fetchFriends = async () => {
    let data: any = [];
    const q = query(
      dataCollectionFriend,
      where("relation", "array-contains", user?.uid),
      where("request", "!=", user?.uid),
      where("status", "==", "WAITING")
    );
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc: any) => {
    //   data.push({ idDoc: doc.id, ...doc.data() });
    // });
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

  const handleLogout = () => {
    logout();
  };
  const dataCollectionMessage = collection(db, "Message");
  const [lastMessages, setLastMessages] = useState<any>([]);

  useEffect(() => {
    let data: any = [];
    const q = query(
      dataCollectionMessage,
      where("relationMessage", "array-contains", user?.uid)
    );
    const lastMessages = onSnapshot(q, (snapshot) => {
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
        setLastMessages(data);
      });
    });
    return lastMessages;
  }, []);

  return (
    <>
      <div>
        <header className="header" id="site-header">
          <div className="page-title">
            <h6>Profile Page</h6>
          </div>
          <div className="header-content-wrapper">
            <form className="search-bar w-search notification-list friend-requests">
              <div className="form-group with-button">
                <input
                  className="form-control"
                  placeholder="Search here people or pages..."
                  type="text"
                  onChange={(e) => setSearchFriend(e.target.value)}
                  value={searchFriend}
                />
                <button
                  onClick={() => {
                    navigate(`/searchfriend?name=${searchFriend}`);
                  }}
                >
                  <svg className="olymp-magnifying-glass-icon">
                    <use xlinkHref="#olymp-magnifying-glass-icon" />
                  </svg>
                </button>
              </div>
            </form>
            <a href="/#" className="link-find-friend">
              Find Friends
            </a>
            <div className="control-block">
              <div className="control-icon more has-items">
                <svg className="olymp-happy-face-icon">
                  <use xlinkHref="#olymp-happy-face-icon" />
                </svg>
                <div className="label-avatar bg-blue">{friendList.length}</div>
                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">FRIEND REQUESTS</h6>
                    <a href="/#">Find Friends</a>
                    <a href="/#">Settings</a>
                  </div>
                  <div
                    className="scroll-custom"
                    data-mcs-theme="dark"
                    style={{ maxHeight: "300px" }}
                  >
                    <ul className="notification-list friend-requests">
                      {friendList.map((value: any) => (
                        <FriendCard
                          valueFriend={value}
                          key={value.id}
                          reload={reload}
                        />
                      ))}
                    </ul>
                  </div>
                  <a href="/#" className="view-all bg-blue">
                    Check all your friend requests
                  </a>
                </div>
              </div>
              <MessengerUnseen
                setDataUser={setDataUser}
                setOpenMessage={setOpenMessage}
                lastMessages={lastMessages}
              />
              <div className="author-page author vcard inline-items more">
                <div className="author-thumb">
                  <img
                    alt="author"
                    src={
                      profile?.imgUrl ||
                      "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
                    }
                    width={40}
                    height={40}
                    className="avatar"
                  />
                  <span className="icon-status online" />
                  <div className="more-dropdown more-with-triangle">
                    <div
                      className="scroll-custom"
                      data-mcs-theme="dark"
                      style={{ maxHeight: "300px" }}
                    >
                      <div className="ui-block-title ui-block-title-small">
                        <h6 className="title">Your Account</h6>
                      </div>
                      <ul className="account-settings">
                        <li>
                          <a href="29-YourAccount-AccountSettings.html">
                            <svg className="olymp-menu-icon">
                              <use xlinkHref="#olymp-menu-icon" />
                            </svg>
                            <span>Profile Settings</span>
                          </a>
                        </li>
                        <li>
                          <a href="36-FavPage-SettingsAndCreatePopup.html">
                            <svg
                              className="olymp-star-icon left-menu-icon"
                              data-bs-toggle="tooltip"
                              data-bs-placement="right"
                              data-bs-original-title="FAV PAGE"
                            >
                              <use xlinkHref="#olymp-star-icon" />
                            </svg>
                            <span>Create Fav Page</span>
                          </a>
                        </li>
                        <li>
                          <a onClick={() => handleLogout()} href="/login">
                            <svg className="olymp-logout-icon">
                              <use xlinkHref="#olymp-logout-icon" />
                            </svg>
                            <span>Log Out</span>
                          </a>
                        </li>

                        <li>
                          <a href="/#">
                            <span>Terms and Conditions</span>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <span>FAQs</span>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <span>Careers</span>
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <span>Contact</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a href="/profile" className="author-name fn">
                  <div className="author-title">
                    {profile?.firstName} {profile?.lastName}
                    <svg className="olymp-dropdown-arrow-icon">
                      <use xlinkHref="#olymp-dropdown-arrow-icon" />
                    </svg>
                  </div>
                  <span className="author-subtitle">SPACE COWBOY</span>
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* ... end Header-BP */}
        {/* Responsive Header-BP */}
        <header
          className="header header-responsive"
          id="site-header-responsive"
        >
          <div className="header-content-wrapper">
            <ul
              className="nav nav-tabs mobile-notification-tabs"
              id="mobile-notification-tabs"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <span
                  className="nav-link"
                  id="request-tab"
                  data-bs-toggle="tab"
                  onClick={() => {
                    setOpenFriendRequest(!openFriendRequest);
                    setOpenChat(false);
                    setOpenSearch(false);
                  }}
                  role="tab"
                  aria-controls="request"
                  aria-selected="false"
                >
                  <div className="control-icon has-items">
                    <svg className="olymp-happy-face-icon">
                      <use xlinkHref="#olymp-happy-face-icon" />
                    </svg>
                    <div className="label-avatar bg-blue">
                      {friendList.length}
                    </div>
                  </div>
                </span>
              </li>
              <li className="nav-item" role="presentation">
                <span
                  className="nav-link"
                  id="chat-tab"
                  data-bs-toggle="tab"
                  onClick={() => {
                    setOpenFriendRequest(false);
                    setOpenChat(!openChat);
                    setOpenSearch(false);
                  }}
                  role="tab"
                  aria-controls="chat"
                  aria-selected="false"
                >
                  <div className="control-icon has-items">
                    <svg className="olymp-chat---messages-icon">
                      <use xlinkHref="#olymp-chat---messages-icon" />
                    </svg>
                    <div className="label-avatar bg-purple">2</div>
                  </div>
                </span>
              </li>
              <li className="nav-item" role="presentation">
                <span
                  className="nav-link"
                  id="search-tab"
                  data-bs-toggle="tab"
                  onClick={() => {
                    setOpenFriendRequest(false);
                    setOpenChat(false);
                    setOpenSearch(!openSearch);
                  }}
                  role="tab"
                  aria-controls="search"
                  aria-selected="false"
                >
                  <svg className="olymp-magnifying-glass-icon">
                    <use xlinkHref="#olymp-magnifying-glass-icon" />
                  </svg>
                  <svg className="olymp-close-icon">
                    <use xlinkHref="#olymp-close-icon" />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          {/* Tab panes */}
          <div className="tab-content tab-content-responsive">
            <div
              className={`tab-pane fade ${
                openFriendRequest ? "active show" : ""
              }`}
              id="request"
              role="tabpanel"
              aria-labelledby="request-tab"
            >
              <div
                className="scroll-custom"
                data-mcs-theme="dark"
                style={{ maxHeight: "300px" }}
              >
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">FRIEND REQUESTS</h6>
                  <a href="/#">Find Friends</a>
                  <a href="/#">Settings</a>
                </div>
                <ul className="notification-list friend-requests">
                  {friendList.map((value: any) => (
                    <FriendCard
                      valueFriend={value}
                      key={value.id}
                      reload={reload}
                    />
                  ))}
                </ul>
                <a href="/#" className="view-all bg-blue">
                  Check all your Events
                </a>
              </div>
            </div>
            <div
              className={`tab-pane fade ${openChat ? "active show" : ""}`}
              id="chat"
              role="tabpanel"
              aria-labelledby="chat-tab"
            >
              <div
                className="scroll-custom"
                data-mcs-theme="dark"
                style={{ maxHeight: "300px" }}
              >
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Chat / Messages</h6>
                  <a href="/#">Mark all as read</a>
                  <a href="/#">Settings</a>
                </div>
                <ul className="notification-list chat-message">
                  <li className="message-unread">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar59-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Diana Jameson
                      </a>
                      <span className="chat-message-item">
                        Hi James! It’s Diana, I just wanted to let you know that
                        we have to reschedule...
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          4 hours ago
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
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
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar60-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Jake Parker
                      </a>
                      <span className="chat-message-item">
                        Great, I’ll see you tomorrow!.
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          4 hours ago
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
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
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar61-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Elaine Dreyfuss
                      </a>
                      <span className="chat-message-item">
                        We’ll have to check that at the office and see if the
                        client is on board with...
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          Yesterday at 9:56pm
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
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
                  <li className="chat-group">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar11-sm.webp"
                        alt="author"
                        width={16}
                        height={16}
                      />
                      <img
                        loading="lazy"
                        src="img/avatar12-sm.webp"
                        alt="author"
                        width={16}
                        height={16}
                      />
                      <img
                        loading="lazy"
                        src="img/avatar13-sm.webp"
                        alt="author"
                        width={16}
                        height={16}
                      />
                      <img
                        loading="lazy"
                        src="img/avatar10-sm.webp"
                        alt="author"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        You, Faye, Ed &amp; Jet +3
                      </a>
                      <span className="last-message-author">Ed:</span>
                      <span className="chat-message-item">
                        Yeah! Seems fine by me!
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          March 16th at 10:23am
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
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
                </ul>
                <a href="/#" className="view-all bg-purple">
                  View All Messages
                </a>
              </div>
            </div>
            <div
              className={`tab-pane fade ${openSearch ? "active show" : ""}`}
              id="search"
              role="tabpanel"
              aria-labelledby="search-tab"
            >
              <form className="search-bar w-search notification-list friend-requests">
                <div className="form-group with-button">
                  <input
                    className="form-control"
                    placeholder="Search here people or pages..."
                    type="text"
                    onChange={(e) => setSearchFriend(e.target.value)}
                    value={searchFriend}
                  />
                  <button
                    onClick={() => {
                      navigate(`/searchfriend?name=${searchFriend}`);
                    }}
                  >
                    <svg className="olymp-magnifying-glass-icon">
                      <use xlinkHref="#olymp-magnifying-glass-icon" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* ... end  Tab panes */}
        </header>
        {/* ... end Responsive Header-BP */}
        <div
          className={`header-spacer ${
            (param === "/musicplay" ||
              param === "/friendbirthday" ||
              param === "/chart" ||
              param === "/profile" ||
              param === "/accountprofile" ||
              param === "/diary") &&
            "header-spacer-small"
          }`}
        />
      </div>
      {openMessage && dataUser && (
        <MessageScreen
          openChat={openMessage}
          setOpenChat={setOpenMessage}
          dataFriend={dataUser}
        />
      )}
      {/* <Message openChat={openChatBox} setOpenChat={setOpenChatBox} /> */}
    </>
  );
}
