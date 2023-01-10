import { db } from "app/services/firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Friend } from "types/Friend";
import FriendCard from "./component/FriendCard";

export default function FriendList(props: { userUid: string }) {
  const { userUid } = props;
  const dataCollectionFriend = collection(db, "Friends");
  const dataCollectionUsers = collection(db, "Users");
  const [friendList, setFriendList] = useState<Friend[]>([]);

  const [dataFriend, setDataFriend] = useState<any>([]);
  const [userInfor, setUserInfor] = useState<any>([]);

  const fetchAccountInfor = async (uid: any) => {
    let data: any;
    const q = query(dataCollectionUsers, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data = { idDoc: doc.id, ...doc.data() };
    });
    return data;
  };

  useEffect(() => {
    let data: any = [];
    const q = query(
      dataCollectionFriend,
      where("relation", "array-contains", userUid),
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
  }, [userUid]);
  useEffect(() => {
    setDataFriend([]);
    friendList.forEach(async (value) => {
      const dataUID: any = value.relation;
      var index = dataUID.indexOf(userUid);
      if (index !== -1) {
        dataUID.splice(index, 1);
      }
      await fetchAccountInfor(dataUID[0]).then((val) =>
        setDataFriend((oldArray) => [...oldArray, val])
      );
    });
    // eslint-disable-next-line
  }, [friendList, userUid]);
  useEffect(() => {
    const fetchAccountUser = async () => {
      let data: any;
      const q = query(dataCollectionUsers, where("uid", "==", userUid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data = { idDoc: doc.id, ...doc.data() };
      });
      setUserInfor(data);
    };
    if (userUid) {
      fetchAccountUser();
    }
  }, [userUid]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block responsive-flex">
              <div className="ui-block-title">
                <div className="h6 title">
                  {userInfor?.firstName} {userInfor?.lastName} (
                  {dataFriend?.length})
                </div>
                <form className="w-search">
                  <div className="form-group with-button">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search Friends..."
                    />
                    <button>
                      <svg className="olymp-magnifying-glass-icon">
                        <use xlinkHref="#olymp-magnifying-glass-icon" />
                      </svg>
                    </button>
                  </div>
                </form>
                <a href="#" className="more">
                  <svg className="olymp-three-dots-icon">
                    <use xlinkHref="#olymp-three-dots-icon" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Friends */}
      <div className="container">
        <div className="row">
          {dataFriend &&
            dataFriend.length > 0 &&
            dataFriend.map((val) => <FriendCard dataFriend={val} />)}
        </div>
      </div>
    </div>
  );
}
