import Comment from "app/components/Comment";
import { auth, db } from "app/services/firebase";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { Markup } from "interweave";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Diary } from "types/Diary";
import { dateTimeFormatVietNam } from "utils/datetime";

export default function Feed(props: { diary: Diary }) {
  const { diary } = props;
  const [user] = useAuthState(auth);

  const dataCollectionUsers = collection(db, "Users");
  const dataCollectionDiary = collection(db, "Diary");
  const [profileInfo, setProfileInfo] = useState<any>();
  const [userInfo, setUserInfo] = useState<any>();

  const [openComment, setOpenComment] = useState<boolean>(false);

  const [contentComment, setContentComment] = useState<string>("");
  const [maxComment, setMaxComment] = useState<number>(2);

  const [diaryChange, setDiaryChange] = useState<any>(diary);

  const navigator = useNavigate();
  const addLike = () => {
    if (user?.uid && diaryChange?.idDoc) {
      const dataCollection = doc(db, "Diary", diaryChange.idDoc);
      updateDoc(dataCollection, {
        like: diaryChange.like.includes(user.uid)
          ? diaryChange.like.filter((val) => val !== user?.uid)
          : [...diaryChange.like, user.uid],
      })
        .then(() => {
          console.log("Successfully updated doc");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const addComment = () => {
    if (user?.uid && diaryChange?.idDoc && contentComment) {
      const dataCollection = doc(db, "Diary", diaryChange.idDoc);
      updateDoc(dataCollection, {
        comment: arrayUnion({
          uid: user.uid,
          content: contentComment,
          datetime: new Date(),
        }),
      })
        .then(() => {
          setContentComment("");
          console.log("Successfully updated doc");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const fetchAccountInfor = async (userId: string) => {
    const q = query(dataCollectionUsers, where("uid", "==", userId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setProfileInfo({ id: doc.id, ...doc.data() });
    });
  };

  const fetchUser = async (userId: string) => {
    const q = query(dataCollectionUsers, where("uid", "==", userId));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserInfo({ id: doc.id, ...doc.data() });
    });
  };

  useEffect(() => {
    const q = query(dataCollectionDiary, where("id", "==", diary.id));
    const test = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "modified") {
          setDiaryChange({ idDoc: change.doc.id, ...change.doc.data() });
        }
      });
    });
    return test;
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (diary) fetchAccountInfor(diary.uid);
    if (user) fetchUser(user.uid);
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
                {diaryChange?.date &&
                  dateTimeFormatVietNam(new Date(diaryChange?.date))}
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
        <h4>{diaryChange?.title}</h4>
        <Markup content={diaryChange?.content} />
        <div className="post-additional-info inline-items">
          <span
            onClick={addLike}
            className="post-add-icon inline-items"
            style={
              diaryChange.like.includes(user?.uid)
                ? { fill: "#ff5e3a", color: "#ff5e3a" }
                : {}
            }
          >
            <svg className="olymp-heart-icon">
              <use xlinkHref="#olymp-heart-icon" />
            </svg>
            <span>{diaryChange?.like?.length} Likes</span>
          </span>
          <div className="comments-shared">
            <span
              onClick={() => setOpenComment(!openComment)}
              className="post-add-icon inline-items"
            >
              <svg className="olymp-speech-balloon-icon">
                <use xlinkHref="#olymp-speech-balloon-icon"></use>
              </svg>

              <span>{diaryChange?.comment?.length}</span>
            </span>
          </div>
        </div>
        <div className="control-block-button post-control-button">
          <span
            onClick={addLike}
            className="btn btn-control"
            style={
              diaryChange.like.includes(user?.uid)
                ? { backgroundColor: "#ff5e3a" }
                : {}
            }
          >
            <svg className="olymp-like-post-icon">
              <use xlinkHref="#olymp-like-post-icon" />
            </svg>
          </span>
          <span
            onClick={() => setOpenComment(!openComment)}
            className="btn btn-control"
          >
            <svg className="olymp-comments-post-icon">
              <use xlinkHref="#olymp-comments-post-icon"></use>
            </svg>
          </span>
        </div>
      </article>
      {/* Comments */}
      {openComment && (
        <>
          <ul className="comments-list">
            {diaryChange?.comment &&
              diaryChange?.comment.length > 0 &&
              diaryChange?.comment
                .slice(0, maxComment)
                .map((comment, index) => (
                  <Comment commentData={comment} key={index} />
                ))}
          </ul>
          {diaryChange?.comment && diaryChange?.comment.length > 2 && (
            <span
              onClick={() =>
                setMaxComment(
                  maxComment === diaryChange?.comment.length
                    ? 2
                    : diaryChange?.comment.length
                )
              }
              className="more-comments"
            >
              View{" "}
              {maxComment === diaryChange?.comment.length ? "little" : "more"}{" "}
              comments <span>+</span>
            </span>
          )}

          <form className="comment-form inline-items">
            <div className="post__author author vcard inline-items">
              <img
                loading="lazy"
                src={
                  userInfo?.imgUrl ||
                  "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
                }
                width={36}
                height={36}
                alt="author"
              />
              <div className="form-group with-icon-right ">
                <textarea
                  className="form-control"
                  placeholder="Enter comment..."
                  onChange={(e) => setContentComment(e.target.value)}
                  value={contentComment}
                />
                <div className="add-options-message">
                  <a
                    href="#"
                    className="options-message"
                    data-bs-toggle="modal"
                    data-bs-target="#update-header-photo"
                  >
                    <svg className="olymp-camera-icon">
                      <use xlinkHref="#olymp-camera-icon" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-md-2 btn-primary"
              onClick={addComment}
            >
              Post Comment
            </button>
            <button
              type="button"
              onClick={() => setOpenComment(false)}
              className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color"
            >
              Cancel
            </button>
          </form>
        </>
      )}
    </div>
  );
}
