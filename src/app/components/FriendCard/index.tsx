import { db } from "app/services/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function FriendCard(props: { valueFriend: any; reload: any }) {
  const { valueFriend, reload } = props;
  const [friendData, setFriendData] = useState<any>([]);
  const dataCollectionUsers = collection(db, "Users");
  const fetchAccountInfor = async () => {
    const q = query(
      dataCollectionUsers,
      where("uid", "==", valueFriend?.request)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setFriendData({ id: doc.id, ...doc.data() });
    });
  };
  useEffect(() => {
    fetchAccountInfor();
    // eslint-disable-next-line
  }, [valueFriend]);

  const addFriend = () => {
    const dataCollection = doc(db, "Friends", valueFriend?.idDoc);

    updateDoc(dataCollection, {
      status: "ACCEPT",
    })
      .then(() => {
        addDoc(collection(db, "Message"), {
          id: uuidv4(),
          message: [],
          relationMessage: valueFriend?.relation,
          lastMessage: {},
        });
        console.log("Successfully updated doc");
        reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const declineFriend = () => {
    const dataCollection = doc(db, "Friends", valueFriend?.idDoc);
    deleteDoc(dataCollection)
      .then(() => {
        console.log("Successfully updated doc");
        reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <li>
      <div className="author-thumb">
        <img
          loading="lazy"
          src={
            friendData.imgUrl ||
            "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
          }
          alt="author"
          width={34}
          height={34}
        />
      </div>
      <div className="notification-event">
        <span className="h6 notification-friend text-black text-black-hover">
          {friendData.firstName} {friendData.lastName}
        </span>
      </div>
      <span className="notification-icon">
        <span
          onClick={() => addFriend()}
          style={{ cursor: "pointer" }}
          className="accept-request"
        >
          <span className="icon-add without-text">
            <svg className="olymp-happy-face-icon">
              <use xlinkHref="#olymp-happy-face-icon" />
            </svg>
          </span>
        </span>
        <span
          onClick={() => declineFriend()}
          style={{ cursor: "pointer" }}
          className="accept-request request-del"
        >
          <span className="icon-minus">
            <svg className="olymp-happy-face-icon">
              <use xlinkHref="#olymp-happy-face-icon" />
            </svg>
          </span>
        </span>
      </span>
      <div className="more">
        <svg className="olymp-three-dots-icon">
          <use xlinkHref="#olymp-three-dots-icon" />
        </svg>
      </div>
    </li>
  );
}
