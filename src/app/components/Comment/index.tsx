import { db } from "app/services/firebase";
import { query, where, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dateTimeFormat } from "utils/datetime";

export default function Comment(props: { commentData: any }) {
  const { commentData } = props;
  const [profileInfo, setProfileInfo] = useState<any>();
  const dataCollectionUsers = collection(db, "Users");
  const navigator = useNavigate();

  const fetchAccountInfor = async (userId: string) => {
    const q = query(dataCollectionUsers, where("uid", "==", userId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setProfileInfo({ id: doc.id, ...doc.data() });
    });
  };

  useEffect(() => {
    if (commentData) fetchAccountInfor(commentData.uid);
  }, [commentData]);
  return (
    <li className="comment-item">
      <div className="post__author author vcard inline-items">
        <img
          loading="lazy"
          src={
            profileInfo?.imgUrl ||
            "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
          }
          width={36}
          height={36}
          alt="author"
        />
        <div className="author-date">
          <a
            href="#"
            className="h6 post__author-name fn"
            onClick={() => {
              navigator(`/profileoffriend?userID=${profileInfo?.uid}`);
            }}
          >
            {profileInfo?.firstName} {profileInfo?.lastName}
          </a>
          <div className="post__date">
            <time className="published" dateTime="2004-07-24T18:18">
              {commentData?.datetime &&
                dateTimeFormat(commentData?.datetime?.toDate())}
            </time>
          </div>
        </div>
        <a href="#" className="more">
          <svg className="olymp-three-dots-icon">
            <use xlinkHref="#olymp-three-dots-icon" />
          </svg>
        </a>
      </div>
      <p>{commentData?.content}</p>
    </li>
  );
}
