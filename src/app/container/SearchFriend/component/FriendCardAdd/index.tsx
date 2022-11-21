import { auth, db } from "app/services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { v4 as uuidv4 } from "uuid";

export default function FriendCardAdd(props: {
  dataFriend: any;
  reloadData: any;
  status: any;
}) {
  const { dataFriend, reloadData, status } = props;

  const options: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [user] = useAuthState(auth);
  const handleAddFriend = async () => {
    const data = {
      id: uuidv4(),
      relation: [user?.uid, dataFriend?.uuid],
      request: user?.uid,
      status: "WAITING",
      timeShape: new Date(),
    };
    try {
      await addDoc(collection(db, "Friends"), data);
      reloadData();
    } catch (err: any) {
      console.error(err);
      alert("Co loi xay ra");
    }
  };
  return (
    <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
      <div className="ui-block">
        <div className="birthday-item inline-items">
          <div className="author-thumb">
            <img
              loading="lazy"
              src={
                dataFriend?.imgUrl ||
                "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
              }
              alt="author"
              width={42}
              height={42}
            />
          </div>
          <div className="birthday-author-name">
            <a href="/#" className="h6 author-name">
              {dataFriend?.firstName} {dataFriend?.lastName}{" "}
            </a>
            <div className="birthday-date">
              {dataFriend?.birthday &&
                new Date(dataFriend?.birthday).toLocaleDateString(
                  "de-DE",
                  options
                )}
            </div>
          </div>
          {status === "NO" && (
            <button
              type="button"
              className="btn btn-sm bg-blue"
              onClick={() => handleAddFriend()}
            >
              Add Friend
            </button>
          )}
          {status === "WAITING" && (
            <button type="button" className="btn btn-sm bg-blue" disabled>
              Waiting
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
