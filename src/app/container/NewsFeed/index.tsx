import DefaultLayout from "app/layouts";
import Feed from "./components/Feed";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Weather from "./components/Weather";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { Diary } from "types/Diary";
import { auth, db } from "app/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { Friend } from "types/Friend";
import { filterDiarys } from "utils/helper";
import FriendSuggest from "./components/FriendSuggest";
import { useNavigate } from "react-router-dom";

export default function NewsFeed() {
  const [user] = useAuthState(auth);
  const dataCollectionFriend = collection(db, "Friends");
  const dataCollectionDiary = collection(db, "Diary");
  const dataCollectionUser = collection(db, "Users");
  const navigator = useNavigate();

  const [friendList, setFriendList] = useState<Friend[]>([]);
  const [friendSuggest, setFriendSuggest] = useState<Friend[]>([]);

  const [newFeedDiary, setNewFeedDiary] = useState<Diary[]>([]);
  const [uidOfFriend, setUidOfFriend] = useState([]);

  const fetchNewDiary = async (uid: any) => {
    let data: any = [];
    setNewFeedDiary([]);
    const q = query(dataCollectionDiary, where("uid", "in", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ idDoc: doc.id, ...doc.data() });
    });
    setNewFeedDiary(data);
  };

  const fetchFriendSuggest = async (uid: any) => {
    let data: any = [];
    setFriendSuggest([]);
    const q = query(dataCollectionUser, where("uid", "not-in", uid), limit(5));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ idDoc: doc.id, ...doc.data() });
    });
    setFriendSuggest(data);
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
  }, [user]);
  useEffect(() => {
    setUidOfFriend([]);
    const uidList: any = [];
    friendList.forEach(async (value) => {
      const dataUID: any = value?.relation;
      var index = dataUID.indexOf(user?.uid);
      if (index !== -1) {
        dataUID.splice(index, 1);
      }
      uidList.push(dataUID[0]);
    });
    setUidOfFriend(uidList);
    // eslint-disable-next-line
  }, [friendList, user]);

  useEffect(() => {
    fetchNewDiary(uidOfFriend);
    fetchFriendSuggest(uidOfFriend);
    // eslint-disable-next-line
  }, [uidOfFriend]);

  return (
    <>
      <DefaultLayout />
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
            <div className="ui-block">
              {/* News Feed Form  */}
              <div className="news-feed-form">
                <div className="add-options-message">
                  <a
                    href="/#"
                    className="options-message"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-original-title="ADD PHOTOS"
                  >
                    <svg
                      className="olymp-camera-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#update-header-photo"
                    >
                      <use xlinkHref="#olymp-camera-icon" />
                    </svg>
                  </a>
                  <button
                    className="btn btn-primary btn-md-2"
                    onClick={() => navigator(`/diary`)}
                  >
                    Thêm nhật kí
                  </button>
                  <button
                    className="btn btn-primary btn-md-2"
                    onClick={() => navigator(`/spending`)}
                  >
                    Thêm chi tiêu
                  </button>
                </div>
              </div>
              {/* ... end News Feed Form  */}{" "}
            </div>

            <div id="newsfeed-items-grid">
              {newFeedDiary &&
                filterDiarys(newFeedDiary) &&
                filterDiarys(newFeedDiary).length > 0 &&
                filterDiarys(newFeedDiary).map((diary) => (
                  <Feed diary={diary} />
                ))}
            </div>
            <a
              id="load-more-button"
              href="/#"
              className="btn btn-control btn-more"
              data-load-link="items-to-load.html"
              data-container="newsfeed-items-grid"
            >
              <svg className="olymp-three-dots-icon">
                <use xlinkHref="#olymp-three-dots-icon" />
              </svg>
            </a>
          </main>
          {/* ... end Main Content */}
          {/* Left Sidebar */}
          <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              <Weather />
            </div>
            <div className="ui-block">
              <DatePicker
                onChange={() => {}}
                inline
                selected={new Date()}
                minDate={new Date()}
              />
            </div>
          </aside>
          {/* ... end Left Sidebar */}
          {/* Right Sidebar */}
          <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              <div className="ui-block-title">
                <h6 className="title">Friend Suggestions</h6>
                <a href="/#" className="more">
                  <svg className="olymp-three-dots-icon">
                    <use xlinkHref="#olymp-three-dots-icon" />
                  </svg>
                </a>
              </div>
              {/* W-Action */}
              <ul className="widget w-friend-pages-added notification-list friend-requests">
                {friendSuggest &&
                  friendSuggest.length > 0 &&
                  friendSuggest.map((friendData) => (
                    <FriendSuggest friendData={friendData} />
                  ))}
              </ul>
              {/* ... end W-Action */}
            </div>
          </aside>
          {/* ... end Right Sidebar */}
        </div>
      </div>
    </>
  );
}
