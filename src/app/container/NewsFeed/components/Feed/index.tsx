import { db } from "app/services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Markup } from "interweave";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Diary } from "types/Diary";
import { dateTimeFormatVietNam } from "utils/datetime";

export default function Feed(props: { diary: Diary }) {
  const { diary } = props;
  const dataCollectionUsers = collection(db, "Users");
  const [profileInfo, setProfileInfo] = useState<any>();
  const navigator = useNavigate();

  const fetchAccountInfor = async (userId: string) => {
    const q = query(dataCollectionUsers, where("uid", "==", userId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setProfileInfo({ id: doc.id, ...doc.data() });
    });
  };
  useEffect(() => {
    if (diary) fetchAccountInfor(diary.uid);
  }, [diary]);
  return (
    <div className="ui-block">
      <article className="hentry post has-post-thumbnail">
        <div className="post__author author vcard inline-items">
          <img
            loading="lazy"
            src={
              profileInfo?.imgUrl ||
              "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
            }
            alt="author"
            width={42}
            height={42}
          />
          <div className="author-date">
            <a
              className="h6 post__author-name fn"
              href="#"
              onClick={() => {
                navigator(`/profileoffriend?userID=${profileInfo?.uid}`);
              }}
            >
              {profileInfo?.firstName} {profileInfo?.lastName}
            </a>
            <div className="post__date">
              <time className="published" dateTime="2004-07-24T18:18">
                {dateTimeFormatVietNam(new Date(diary?.date))}
              </time>
            </div>
          </div>
          <div className="more">
            <svg className="olymp-three-dots-icon">
              <use xlinkHref="#olymp-three-dots-icon" />
            </svg>
            <ul className="more-dropdown">
              <li>
                <a href="/#">Edit Post</a>
              </li>
              <li>
                <a href="/#">Delete Post</a>
              </li>
              <li>
                <a href="/#">Turn Off Notifications</a>
              </li>
              <li>
                <a href="/#">Select as Featured</a>
              </li>
            </ul>
          </div>
        </div>
        <h4>{diary?.title}</h4>
        <Markup content={diary?.content} />
        <div className="post-additional-info inline-items">
          <a href="/#" className="post-add-icon inline-items">
            <svg className="olymp-heart-icon">
              <use xlinkHref="#olymp-heart-icon" />
            </svg>
            <span>0 Likes</span>
          </a>
        </div>
        <div className="control-block-button post-control-button">
          <a href="/#" className="btn btn-control">
            <svg className="olymp-like-post-icon">
              <use xlinkHref="#olymp-like-post-icon" />
            </svg>
          </a>
        </div>
      </article>
    </div>
  );
}
