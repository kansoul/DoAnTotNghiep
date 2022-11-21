import DefaultLayout from "app/layouts";
import { db } from "app/services/firebase";
import {
  collection,
  endAt,
  getDocs,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FriendCardAdd from "./component/FriendCardAdd";

export default function SearchFriend() {
  const [searchParams] = useSearchParams();
  const dataCollectionUsers = collection(db, "Users");
  const searchName = searchParams.get("name");
  const [peopelList, setPeopleList] = useState<any>([]);

  const fetchFriendInfor = async () => {
    if (!searchName) return;
    const q = query(
      dataCollectionUsers,
      orderBy("lastName"),
      startAt(searchName),
      endAt(`${searchName}\uf8ff`)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc: any) => {
      setPeopleList((oldArray) => [...oldArray, doc.data()]);
    });
  };
  useEffect(() => {
    fetchFriendInfor();
    // eslint-disable-next-line
  }, [searchName]);

  console.log(peopelList);
  return (
    <>
      <DefaultLayout />
      <div className="container">
        <div className="row">
          <FriendCardAdd />
        </div>
      </div>
    </>
  );
}
