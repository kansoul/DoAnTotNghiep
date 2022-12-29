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
import LastMesenger from "./component/MessageUnseen/component/LastMesenger";

export default function Header() {
  const param = window.location.pathname;
  const navigate = useNavigate();
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [openMessage, setOpenMessage] = useState<boolean>(false);
  const [dataUser, setDataUser] = useState<any>();

  const [openFriendRequest, setOpenFriendRequest] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);

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
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>
        <header className="header" id="site-header">
          <div className="page-title">
            <h6>Diary</h6>
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
              <div className="control-icon more has-items">
                <svg className="olymp-thunder-icon">
                  <use xlinkHref="#olymp-thunder-icon" />
                </svg>
                <div className="label-avatar bg-primary">8</div>
                <div className="more-dropdown more-with-triangle triangle-top-center">
                  <div className="ui-block-title ui-block-title-small">
                    <h6 className="title">Notifications</h6>
                    <a href="#">Mark all as read</a>
                    <a href="#">Settings</a>
                  </div>
                  <div
                    className="scroll-custom"
                    data-mcs-theme="dark"
                    style={{ maxHeight: "300px" }}
                  >
                    <ul className="notification-list">
                      <li>
                        <div className="author-thumb">
                          <img
                            loading="lazy"
                            src="img/avatar62-sm.webp"
                            width={34}
                            height={34}
                            alt="author"
                          />
                        </div>
                        <div className="notification-event">
                          <div>
                            <a href="#" className="h6 notification-friend">
                              Mathilda Brinker
                            </a>{" "}
                            commented on your new
                            <a href="#" className="notification-link">
                              profile status
                            </a>
                            .
                          </div>
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
                          <svg className="olymp-comments-post-icon">
                            <use xlinkHref="#olymp-comments-post-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkHref="#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>
                      <li className="un-read">
                        <div className="author-thumb">
                          <img
                            loading="lazy"
                            src="img/avatar63-sm.webp"
                            alt="author"
                            width={34}
                            height={34}
                          />
                        </div>
                        <div className="notification-event">
                          <div>
                            You and
                            <a href="#" className="h6 notification-friend">
                              Nicholas Grissom
                            </a>{" "}
                            just became friends. Write on
                            <a href="#" className="notification-link">
                              his wall
                            </a>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              9 hours ago
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="#olymp-happy-face-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkHref="#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>
                      <li className="with-comment-photo-wrap">
                        <div className="with-comment-photo">
                          <div className="author-thumb">
                            <img
                              loading="lazy"
                              src="img/avatar64-sm.webp"
                              width={34}
                              height={34}
                              alt="author"
                            />
                          </div>
                          <div className="notification-event">
                            <div>
                              <a href="#" className="h6 notification-friend">
                                Sarah Hetfield
                              </a>{" "}
                              commented on your
                              <a href="#" className="notification-link">
                                photo
                              </a>
                              .
                            </div>
                            <span className="notification-date">
                              <time
                                className="entry-date updated"
                                dateTime="2004-07-24T18:18"
                              >
                                Yesterday at 5:32am
                              </time>
                            </span>
                          </div>
                          <span className="notification-icon">
                            {" "}
                            <svg className="olymp-comments-post-icon">
                              <use xlinkHref="#olymp-comments-post-icon" />
                            </svg>{" "}
                          </span>
                        </div>
                        <div className="comment-photo">
                          <img
                            loading="lazy"
                            src="img/comment-photo1.webp"
                            alt="photo"
                            width={40}
                            height={40}
                          />
                          <span>
                            “She looks incredible in that outfit! We should see
                            each...”
                          </span>
                        </div>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkHref="#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img
                            loading="lazy"
                            src="img/avatar65-sm.webp"
                            alt="author"
                            width={34}
                            height={34}
                          />
                        </div>
                        <div className="notification-event">
                          <div>
                            <a href="#" className="h6 notification-friend">
                              Green Goo Rock
                            </a>{" "}
                            invited you to attend to his event Goo in
                            <a href="#" className="notification-link">
                              Gotham Bar
                            </a>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              March 5th at 6:43pm
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-happy-face-icon">
                            <use xlinkHref="#olymp-happy-face-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkHref="#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>
                      <li>
                        <div className="author-thumb">
                          <img
                            loading="lazy"
                            src="img/avatar66-sm.webp"
                            alt="author"
                            width={34}
                            height={34}
                          />
                        </div>
                        <div className="notification-event">
                          <div>
                            <a href="#" className="h6 notification-friend">
                              James Summers
                            </a>{" "}
                            commented on your new
                            <a href="#" className="notification-link">
                              profile status
                            </a>
                            .
                          </div>
                          <span className="notification-date">
                            <time
                              className="entry-date updated"
                              dateTime="2004-07-24T18:18"
                            >
                              March 2nd at 8:29pm
                            </time>
                          </span>
                        </div>
                        <span className="notification-icon">
                          <svg className="olymp-heart-icon">
                            <use xlinkHref="#olymp-heart-icon" />
                          </svg>
                        </span>
                        <div className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                          <svg className="olymp-little-delete">
                            <use xlinkHref="#olymp-little-delete" />
                          </svg>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <a href="#" className="view-all bg-primary">
                    View All Notifications
                  </a>
                </div>
              </div>

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
                          <a href="/profile">
                            <svg className="olymp-menu-icon">
                              <use xlinkHref="#olymp-menu-icon" />
                            </svg>
                            <span>Profile Settings</span>
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
                    setNotification(false);
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
                    setNotification(false);
                  }}
                  role="tab"
                  aria-controls="chat"
                  aria-selected="false"
                >
                  <div className="control-icon has-items">
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
                  </div>
                </span>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="notification-tab"
                  data-bs-toggle="tab"
                  href="#notification"
                  onClick={() => {
                    setOpenFriendRequest(false);
                    setOpenChat(false);
                    setOpenSearch(false);
                    setNotification(!notification);
                  }}
                  role="tab"
                  aria-controls="notification"
                  aria-selected="false"
                >
                  <div className="control-icon has-items">
                    <svg className="olymp-thunder-icon">
                      <use xlinkHref="#olymp-thunder-icon" />
                    </svg>
                    <div className="label-avatar bg-primary">8</div>
                  </div>
                </a>
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
                    setNotification(false);
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
                  {lastMessages &&
                    lastMessages.length > 0 &&
                    lastMessages.map((val) =>
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
                <a href="/#" className="view-all bg-purple">
                  View All Messages
                </a>
              </div>
            </div>
            <div
              className={`tab-pane fade ${notification ? "active show" : ""}`}
              id="notification"
              role="tabpanel"
              aria-labelledby="notification-tab"
              style={{ maxHeight: "300px" }}
            >
              <div className="scroll-custom" data-mcs-theme="dark">
                <div className="ui-block-title ui-block-title-small">
                  <h6 className="title">Notifications</h6>
                  <a href="#">Mark all as read</a>
                  <a href="#">Settings</a>
                </div>
                <ul className="notification-list">
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar62-sm.webp"
                        width={34}
                        height={34}
                        alt="author"
                      />
                    </div>
                    <div className="notification-event">
                      <div>
                        <a href="#" className="h6 notification-friend">
                          Mathilda Brinker
                        </a>{" "}
                        commented on your new
                        <a href="#" className="notification-link">
                          profile status
                        </a>
                        .
                      </div>
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
                      <svg className="olymp-comments-post-icon">
                        <use xlinkHref="#olymp-comments-post-icon" />
                      </svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                      <svg className="olymp-little-delete">
                        <use xlinkHref="#olymp-little-delete" />
                      </svg>
                    </div>
                  </li>
                  <li className="un-read">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar63-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      <div>
                        You and
                        <a href="#" className="h6 notification-friend">
                          Nicholas Grissom
                        </a>{" "}
                        just became friends. Write on
                        <a href="#" className="notification-link">
                          his wall
                        </a>
                        .
                      </div>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          9 hours ago
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-happy-face-icon">
                        <use xlinkHref="#olymp-happy-face-icon" />
                      </svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                      <svg className="olymp-little-delete">
                        <use xlinkHref="#olymp-little-delete" />
                      </svg>
                    </div>
                  </li>
                  <li className="with-comment-photo-wrap">
                    <div className="with-comment-photo">
                      <div className="author-thumb">
                        <img
                          loading="lazy"
                          src="img/avatar64-sm.webp"
                          width={34}
                          height={34}
                          alt="author"
                        />
                      </div>
                      <div className="notification-event">
                        <div>
                          <a href="#" className="h6 notification-friend">
                            Sarah Hetfield
                          </a>{" "}
                          commented on your
                          <a href="#" className="notification-link">
                            photo
                          </a>
                          .
                        </div>
                        <span className="notification-date">
                          <time
                            className="entry-date updated"
                            dateTime="2004-07-24T18:18"
                          >
                            Yesterday at 5:32am
                          </time>
                        </span>
                      </div>
                      <span className="notification-icon">
                        {" "}
                        <svg className="olymp-comments-post-icon">
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>{" "}
                      </span>
                    </div>
                    <div className="comment-photo">
                      <img
                        loading="lazy"
                        src="img/comment-photo1.webp"
                        alt="photo"
                        width={40}
                        height={40}
                      />
                      <span>
                        “She looks incredible in that outfit! We should see
                        each...”
                      </span>
                    </div>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                      <svg className="olymp-little-delete">
                        <use xlinkHref="#olymp-little-delete" />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar65-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      <div>
                        <a href="#" className="h6 notification-friend">
                          Green Goo Rock
                        </a>{" "}
                        invited you to attend to his event Goo in
                        <a href="#" className="notification-link">
                          Gotham Bar
                        </a>
                        .
                      </div>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          March 5th at 6:43pm
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-happy-face-icon">
                        <use xlinkHref="#olymp-happy-face-icon" />
                      </svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                      <svg className="olymp-little-delete">
                        <use xlinkHref="#olymp-little-delete" />
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar66-sm.webp"
                        alt="author"
                        width={34}
                        height={34}
                      />
                    </div>
                    <div className="notification-event">
                      <div>
                        <a href="#" className="h6 notification-friend">
                          James Summers
                        </a>{" "}
                        commented on your new
                        <a href="#" className="notification-link">
                          profile status
                        </a>
                        .
                      </div>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          March 2nd at 8:29pm
                        </time>
                      </span>
                    </div>
                    <span className="notification-icon">
                      <svg className="olymp-heart-icon">
                        <use xlinkHref="#olymp-heart-icon" />
                      </svg>
                    </span>
                    <div className="more">
                      <svg className="olymp-three-dots-icon">
                        <use xlinkHref="#olymp-three-dots-icon" />
                      </svg>
                      <svg className="olymp-little-delete">
                        <use xlinkHref="#olymp-little-delete" />
                      </svg>
                    </div>
                  </li>
                </ul>
                <a href="#" className="view-all bg-primary">
                  View All Notifications
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
              param === "/profileoffriend" ||
              param === "/spending" ||
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
