import DefaultLayout from "app/layouts";
import { auth, db } from "app/services/firebase";
import {
  collection,
  endAt,
  getDocs,
  orderBy,
  query,
  startAt,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSearchParams } from "react-router-dom";
import FriendCardAdd from "./component/FriendCardAdd";

export default function SearchFriend() {
  const [searchParams] = useSearchParams();
  const dataCollectionUsers = collection(db, "Users");
  const dataCollectionFriend = collection(db, "Friends");
  const searchName = searchParams.get("name");
  const [searchList, setSearchList] = useState<any>([]);
  const [friendList, setFriendList] = useState<any>([]);
  const [friendAddList, setFriendAddList] = useState<any>([]);
  const [friendWaitingList, setFriendWaitingList] = useState<any>([]);
  const [friendWaitingAcceptList, setFriendWaitingAcceptList] = useState<any>(
    []
  );

  const [user] = useAuthState(auth);

  const fetchFriends = async () => {
    const q = query(
      dataCollectionFriend,
      where("relation", "array-contains", user?.uid)
    );
    const querySnapshot = await getDocs(q);
    const data: any = [];
    querySnapshot.forEach((doc: any) => {
      data.push(doc.data());
    });
    setFriendList(data);
  };
  const fetchFriendInfor = async () => {
    if (!searchName) return;
    const q = query(
      dataCollectionUsers,
      orderBy("lastName"),
      startAt(searchName),
      endAt(`${searchName}\uf8ff`)
    );

    const querySnapshot = await getDocs(q);
    let data: any = [];
    querySnapshot.forEach((doc: any) => {
      if (doc.data().uid !== user?.uid) {
        data.push(doc.data());
      }
    });

    setSearchList(data);
  };
  useEffect(() => {
    fetchFriendInfor();
    fetchFriends();
    // eslint-disable-next-line
  }, [searchName, user]);

  const reloadData = () => {
    fetchFriendInfor();
    fetchFriends();
  };

  useEffect(() => {
    setFriendWaitingList([]);
    setFriendAddList([]);
    setFriendWaitingAcceptList([]);

    searchList.forEach((valSearch) => {
      if (friendList.length > 0) {
        friendList.forEach((element) => {
          if (element?.relation?.includes(valSearch.uid)) {
            if (element?.status === "WAITING") {
              if (element?.request === user?.uid) {
                setFriendWaitingList((prevArray) => [...prevArray, valSearch]);
              } else
                setFriendWaitingAcceptList((prevArray) => [
                  ...prevArray,
                  valSearch,
                ]);
            } else setFriendAddList((prevArray) => [...prevArray, valSearch]);
          }
        });
      }
    });
    // eslint-disable-next-line
  }, [friendList]);
  useEffect(() => {
    const searchFriend = searchList.filter(function (cv) {
      return !friendWaitingList.find(function (e) {
        return e.uid === cv.uid;
      });
    });
    const removeFriendList = searchFriend.filter(function (cv) {
      return !friendAddList.find(function (e) {
        return e.uid === cv.uid;
      });
    });
    const removeWaitingAcceptList = removeFriendList.filter(function (cv) {
      return !friendWaitingAcceptList.find(function (e) {
        return e.uid === cv.uid;
      });
    });
    setSearchList(removeWaitingAcceptList);
    // eslint-disable-next-line
  }, [friendWaitingList, friendAddList, friendWaitingAcceptList]);

  return (
    <>
      <DefaultLayout />
      <div className="container">
        <div className="row">
          {friendAddList &&
            friendAddList.length > 0 &&
            friendAddList.map((value, index) => (
              <FriendCardAdd
                dataFriend={value}
                key={index}
                reloadData={reloadData}
                status={"ACCEPT"}
              />
            ))}
          {friendWaitingAcceptList &&
            friendWaitingAcceptList.length > 0 &&
            friendWaitingAcceptList.map((value, index) => (
              <FriendCardAdd
                dataFriend={value}
                key={index}
                reloadData={reloadData}
                status={"WAITING_ACCEPT"}
              />
            ))}
          {searchList &&
            searchList.length > 0 &&
            searchList.map((value, index) => (
              <FriendCardAdd
                dataFriend={value}
                key={index}
                reloadData={reloadData}
                status={"NO"}
              />
            ))}
          {friendWaitingList &&
            friendWaitingList.length > 0 &&
            friendWaitingList.map((value, index) => (
              <FriendCardAdd
                dataFriend={value}
                key={index}
                reloadData={reloadData}
                status={"WAITING"}
              />
            ))}
        </div>
      </div>
    </>
  );
}
