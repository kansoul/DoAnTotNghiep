import { dateTimeFormatVietNam } from "utils/datetime";
import { Markup } from "interweave";
import { useEffect, useState } from "react";
import {
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "app/services/firebase";
import Comment from "app/components/Comment";

export default function Post(props: { profileInfo: any; diaryData: any }) {
  const { profileInfo, diaryData } = props;
  const [diaryChange, setDiaryChange] = useState<any>(diaryData);
  const dataCollectionDiary = collection(db, "Diary");
  const [openComment, setOpenComment] = useState<boolean>(false);

  const [contentComment, setContentComment] = useState<string>("");
  const addComment = () => {
    if (profileInfo?.uid && diaryChange?.idDoc && contentComment) {
      const dataCollection = doc(db, "Diary", diaryChange.idDoc);
      updateDoc(dataCollection, {
        comment: arrayUnion({
          uid: profileInfo.uid,
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
  const addLike = () => {
    if (profileInfo?.uid && diaryChange?.idDoc) {
      const dataCollection = doc(db, "Diary", diaryChange.idDoc);
      updateDoc(dataCollection, {
        like: diaryChange.like.includes(profileInfo.uid)
          ? diaryChange.like.filter((val) => val !== profileInfo?.uid)
          : [...diaryChange.like, profileInfo.uid],
      })
        .then(() => {
          console.log("Successfully updated doc");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    const q = query(dataCollectionDiary, where("id", "==", diaryData.id));
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
  return (
    <div className="ui-block">
      <article className="hentry post">
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
            <a className="h6 post__author-name fn" href="/profile">
              {profileInfo?.firstName} {profileInfo?.lastName}
            </a>
            <div className="post__date">
              <time className="published">
                Ngày {dateTimeFormatVietNam(new Date(diaryChange?.date))}
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
            </ul>
          </div>
        </div>
        <div style={{}}>
          <h4>{diaryChange?.title}</h4>
          {/* <div>{diaryChange?.content}</div> */}
          <Markup content={diaryChange?.content} />
        </div>
        <div className="post-additional-info inline-items">
          <span
            onClick={addLike}
            className="post-add-icon inline-items"
            style={
              diaryChange.like.includes(profileInfo?.uid)
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
              diaryChange.like.includes(profileInfo?.uid)
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
      {openComment && (
        <>
          <ul className="comments-list">
            {diaryChange?.comment &&
              diaryChange?.comment.length > 0 &&
              diaryChange?.comment.map((comment, index) => (
                <Comment commentData={comment} key={index} />
              ))}
          </ul>
          {diaryChange?.comment && diaryChange?.comment.length > 0 && (
            <a href="#" className="more-comments">
              View more comments <span>+</span>
            </a>
          )}

          <form className="comment-form inline-items">
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
