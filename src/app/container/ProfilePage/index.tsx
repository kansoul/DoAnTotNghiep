import DefaultLayout from "app/layouts";
import { auth, db } from "app/services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import UpdatePhoto from "./component/UpdatePhoto";

export default function ProfilePage() {
  const [profileInfo, setProfileInfo] = useState<any>();
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [hobbies, setHobbies] = useState<any>();
  const dataCollectionUsers = collection(db, "Users");
  const dataCollectionHobbies = collection(db, "HobbiesAndInterests");
  const [user] = useAuthState(auth);

  const fetchAccountInfor = async () => {
    const q = query(dataCollectionUsers, where("uuid", "==", user?.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setProfileInfo({ id: doc.id, ...doc.data() });
    });
  };
  const fetchHobbies = async () => {
    const q = query(dataCollectionHobbies, where("uuid", "==", user?.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setHobbies({ id: doc.id, ...doc.data() });
    });
  };
  useEffect(() => {
    fetchAccountInfor();
    fetchHobbies();
    // eslint-disable-next-line
  }, [user]);

  return (
    <>
      <DefaultLayout />
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="top-header">
                  <div className="top-header-thumb"></div>
                  <div className="profile-section">
                    <div className="row">
                      <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                        <ul className="profile-menu">
                          <li>
                            <a href="/profile" className="active">
                              Timeline
                            </a>
                          </li>
                          <li>
                            <a href="05-ProfilePage-About.html">About</a>
                          </li>
                          <li>
                            <a href="06-ProfilePage.html">Friends</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col col-lg-5 ms-auto col-md-5 col-sm-12 col-12">
                        <ul className="profile-menu">
                          <li>
                            <a href="07-ProfilePage-Photos.html">Photos</a>
                          </li>
                          <li>
                            <a href="09-ProfilePage-Videos.html">Videos</a>
                          </li>
                          <li>
                            <div className="more">
                              <svg className="olymp-three-dots-icon">
                                <use xlinkHref="#olymp-three-dots-icon" />
                              </svg>
                              <ul className="more-dropdown more-with-triangle">
                                <li>
                                  <a href="/#">Report Profile</a>
                                </li>
                                <li>
                                  <a href="/#">Block Profile</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="control-block-button">
                      <a
                        href="35-YourAccount-FriendsRequests.html"
                        className="btn btn-control bg-blue"
                      >
                        <svg className="olymp-happy-face-icon">
                          <use xlinkHref="#olymp-happy-face-icon" />
                        </svg>
                      </a>
                      <a href="/#" className="btn btn-control bg-purple">
                        <svg className="olymp-chat---messages-icon">
                          <use xlinkHref="#olymp-chat---messages-icon" />
                        </svg>
                      </a>
                      <div className="btn btn-control bg-primary more">
                        <svg className="olymp-settings-icon">
                          <use xlinkHref="#olymp-settings-icon" />
                        </svg>
                        <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                          <li>
                            <span
                              onClick={() => setOpenPopup}
                              className="text-black text-black-hover"
                              data-bs-toggle="modal"
                              data-bs-target="#update-header-photo"
                            >
                              Update Profile Photo
                            </span>
                          </li>
                          <li>
                            <span
                              onClick={() => setOpenPopup}
                              className="text-black text-black-hover"
                              data-bs-toggle="modal"
                              data-bs-target="#update-header-photo"
                            >
                              Update Header Photo
                            </span>
                          </li>
                          <li>
                            <a href="/accountprofile">Account Settings</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="top-header-author">
                    <a href="/profile" className="author-thumb avatar">
                      <img
                        loading="lazy"
                        src={
                          profileInfo?.imgUrl ||
                          "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
                        }
                        alt="author"
                        style={{ height: "full" }}
                        width={124}
                        height={124}
                      />
                    </a>
                    <div className="author-content">
                      <a href="/profile" className="h4 author-name">
                        {profileInfo?.firstName} {profileInfo?.lastName}
                      </a>
                      <div className="country">
                        {profileInfo?.country}, {profileInfo?.city}{" "}
                        {profileInfo?.province}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ... end Top Header-Profile */}
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div id="newsfeed-items-grid">
                <div className="ui-block">
                  {/* Post */}
                  <article className="hentry post">
                    <div className="post__author author vcard inline-items">
                      <img
                        loading="lazy"
                        src="img/author-page.webp"
                        width={36}
                        height={36}
                        alt="author"
                      />
                      <div className="author-date">
                        <a className="h6 post__author-name fn" href="/profile">
                          James Spiegel
                        </a>
                        <div className="post__date">
                          <time
                            className="published"
                            dateTime="2017-03-24T18:18"
                          >
                            19 hours ago
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
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque.
                    </p>
                    <div className="post-additional-info inline-items">
                      <a href="/#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon">
                          <use xlinkHref="#olymp-heart-icon" />
                        </svg>
                        <span>8</span>
                      </a>
                      <ul className="friends-harmonic">
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic7.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic8.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic9.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic10.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic11.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                      </ul>
                      <div className="names-people-likes">
                        <a href="/#">Jenny</a>, <a href="/#">Robert</a> and
                        <br />6 more liked this
                      </div>
                      <div className="comments-shared">
                        <a href="/#" className="post-add-icon inline-items">
                          <svg className="olymp-speech-balloon-icon">
                            <use xlinkHref="#olymp-speech-balloon-icon" />
                          </svg>
                          <span>17</span>
                        </a>
                        <a href="/#" className="post-add-icon inline-items">
                          <svg className="olymp-share-icon">
                            <use xlinkHref="#olymp-share-icon" />
                          </svg>
                          <span>24</span>
                        </a>
                      </div>
                    </div>
                    <div className="control-block-button post-control-button">
                      <a href="/#" className="btn btn-control featured-post">
                        <svg className="olymp-trophy-icon">
                          <use xlinkHref="#olymp-trophy-icon" />
                        </svg>
                      </a>
                      <a href="/#" className="btn btn-control">
                        <svg className="olymp-like-post-icon">
                          <use xlinkHref="#olymp-like-post-icon" />
                        </svg>
                      </a>
                      <a href="/#" className="btn btn-control">
                        <svg className="olymp-comments-post-icon">
                          <use xlinkHref="#olymp-comments-post-icon" />
                        </svg>
                      </a>
                      <a href="/#" className="btn btn-control">
                        <svg className="olymp-share-icon">
                          <use xlinkHref="#olymp-share-icon" />
                        </svg>
                      </a>
                    </div>
                  </article>
                  {/* .. end Post */}{" "}
                </div>
                <div className="ui-block">
                  {/* Post */}
                  <article className="hentry post video">
                    <div className="post__author author vcard inline-items">
                      <img
                        loading="lazy"
                        src="img/author-page.webp"
                        width={36}
                        height={36}
                        alt="author"
                      />
                      <div className="author-date">
                        <a className="h6 post__author-name fn" href="/profile">
                          James Spiegel
                        </a>{" "}
                        shared a<a href="/#">link</a>
                        <div className="post__date">
                          <time
                            className="published"
                            dateTime="2017-03-24T18:18"
                          >
                            7 hours ago
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
                    <p>
                      If someone missed it, check out the new song by System of
                      a Revenge! I thinks they are going back to their roots...
                    </p>
                    <div className="post-video">
                      <div className="video-thumb">
                        <img
                          loading="lazy"
                          src="img/video5.webp"
                          alt="hihi"
                          width={178}
                          height={178}
                        />
                        <a
                          href="https://youtube.com/watch?v=excVFQ2TWig"
                          className="play-video"
                        >
                          <svg className="olymp-play-icon">
                            <use xlinkHref="#olymp-play-icon" />
                          </svg>
                        </a>
                      </div>
                      <div className="video-content">
                        <a href="/#" className="h4 title">
                          System of a Revenge - Nothing Else Matters (LIVE)
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur ipisicing
                          elit, sed do eiusmod tempo incididunt ut labore..
                        </p>
                        <a href="/#" className="link-site">
                          YOUTUBE.COM
                        </a>
                      </div>
                    </div>
                    <div className="post-additional-info inline-items">
                      <a href="/#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon">
                          <use xlinkHref="#olymp-heart-icon" />
                        </svg>
                        <span>15</span>
                      </a>
                      <ul className="friends-harmonic">
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic9.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic10.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic7.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic8.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic11.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                      </ul>
                      <div className="names-people-likes">
                        <a href="/#">Jenny</a>, <a href="/#">Robert</a> and
                        <br />
                        13 more liked this
                      </div>
                      <div className="comments-shared">
                        <a href="/#" className="post-add-icon inline-items">
                          <svg className="olymp-speech-balloon-icon">
                            <use xlinkHref="#olymp-speech-balloon-icon" />
                          </svg>
                          <span>1</span>
                        </a>
                        <a href="/#" className="post-add-icon inline-items">
                          <svg className="olymp-share-icon">
                            <use xlinkHref="#olymp-share-icon" />
                          </svg>
                          <span>16</span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* .. end Post */}{" "}
                </div>
                <div className="ui-block">
                  {/* Post */}
                  <article className="hentry post">
                    <div className="post__author author vcard inline-items">
                      <img
                        loading="lazy"
                        src="img/author-page.webp"
                        width={36}
                        height={36}
                        alt="author"
                      />
                      <div className="author-date">
                        <a className="h6 post__author-name fn" href="/profile">
                          James Spiegel
                        </a>
                        <div className="post__date">
                          <time
                            className="published"
                            dateTime="2017-03-24T18:18"
                          >
                            2 hours ago
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempo incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris consequat.
                    </p>
                    <div className="post-additional-info inline-items">
                      <a href="/#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon">
                          <use xlinkHref="#olymp-heart-icon" />
                        </svg>
                        <span>36</span>
                      </a>
                      <ul className="friends-harmonic">
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic7.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic8.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic9.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic10.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic11.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                      </ul>
                      <div className="names-people-likes">
                        <a href="/#">You</a>, <a href="/#">Elaine</a> and
                        <br />
                        34 more liked this
                      </div>
                      <div className="comments-shared">
                        <a href="/#" className="post-add-icon inline-items">
                          <svg className="olymp-speech-balloon-icon">
                            <use xlinkHref="#olymp-speech-balloon-icon" />
                          </svg>
                          <span>17</span>
                        </a>
                        <a href="/#" className="post-add-icon inline-items">
                          <svg className="olymp-share-icon">
                            <use xlinkHref="#olymp-share-icon" />
                          </svg>
                          <span>24</span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* .. end Post */}
                  {/* Comments */}
                  <ul className="comments-list">
                    <li className="comment-item">
                      <div className="post__author author vcard inline-items">
                        <img
                          loading="lazy"
                          src="img/avatar10-sm.webp"
                          alt="author"
                          width={36}
                          height={36}
                        />
                        <div className="author-date">
                          <a className="h6 post__author-name fn" href="/#">
                            Elaine Dreyfuss
                          </a>
                          <div className="post__date">
                            <time
                              className="published"
                              dateTime="2017-03-24T18:18"
                            >
                              5 mins ago
                            </time>
                          </div>
                        </div>
                        <a href="/#" className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                        </a>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium der doloremque laudantium.
                      </p>
                      <a href="/#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon">
                          <use xlinkHref="#olymp-heart-icon" />
                        </svg>
                        <span>8</span>
                      </a>
                      <a href="/#" className="reply">
                        Reply
                      </a>
                    </li>
                    <li className="comment-item has-children">
                      <div className="post__author author vcard inline-items">
                        <img
                          loading="lazy"
                          src="img/avatar5-sm.webp"
                          alt="author"
                          width={42}
                          height={42}
                        />
                        <div className="author-date">
                          <a className="h6 post__author-name fn" href="/#">
                            Green Goo Rock
                          </a>
                          <div className="post__date">
                            <time
                              className="published"
                              dateTime="2017-03-24T18:18"
                            >
                              1 hour ago
                            </time>
                          </div>
                        </div>
                        <a href="/#" className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                        </a>
                      </div>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugiten, sed quia consequuntur magni
                        dolores eos qui ratione voluptatem sequi en lod
                        nesciunt. Neque porro quisquam est, qui dolorem ipsum
                        quia dolor sit amet, consectetur adipisci velit en lorem
                        ipsum der.
                      </p>
                      <a href="/#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon">
                          <use xlinkHref="#olymp-heart-icon" />
                        </svg>
                        <span>5</span>
                      </a>
                      <a href="/#" className="reply">
                        Reply
                      </a>
                      <ul className="children">
                        <li className="comment-item">
                          <div className="post__author author vcard inline-items">
                            <img
                              loading="lazy"
                              src="img/avatar8-sm.webp"
                              alt="author"
                              width={36}
                              height={36}
                            />
                            <div className="author-date">
                              <a className="h6 post__author-name fn" href="/#">
                                Diana Jameson
                              </a>
                              <div className="post__date">
                                <time
                                  className="published"
                                  dateTime="2017-03-24T18:18"
                                >
                                  39 mins ago
                                </time>
                              </div>
                            </div>
                            <a href="/#" className="more">
                              <svg className="olymp-three-dots-icon">
                                <use xlinkHref="#olymp-three-dots-icon" />
                              </svg>
                            </a>
                          </div>
                          <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                          </p>
                          <a href="/#" className="post-add-icon inline-items">
                            <svg className="olymp-heart-icon">
                              <use xlinkHref="#olymp-heart-icon" />
                            </svg>
                            <span>2</span>
                          </a>
                          <a href="/#" className="reply">
                            Reply
                          </a>
                        </li>
                        <li className="comment-item">
                          <div className="post__author author vcard inline-items">
                            <img
                              loading="lazy"
                              src="img/avatar2-sm.webp"
                              alt="author"
                              width={42}
                              height={42}
                            />
                            <div className="author-date">
                              <a className="h6 post__author-name fn" href="/#">
                                Nicholas Grisom
                              </a>
                              <div className="post__date">
                                <time
                                  className="published"
                                  dateTime="2017-03-24T18:18"
                                >
                                  24 mins ago
                                </time>
                              </div>
                            </div>
                            <a href="/#" className="more">
                              <svg className="olymp-three-dots-icon">
                                <use xlinkHref="#olymp-three-dots-icon" />
                              </svg>
                            </a>
                          </div>
                          <p>Excepteur sint occaecat cupidatat non proident.</p>
                          <a href="/#" className="post-add-icon inline-items">
                            <svg className="olymp-heart-icon">
                              <use xlinkHref="#olymp-heart-icon" />
                            </svg>
                            <span>0</span>
                          </a>
                          <a href="/#" className="reply">
                            Reply
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="comment-item">
                      <div className="post__author author vcard inline-items">
                        <img
                          loading="lazy"
                          src="img/avatar4-sm.webp"
                          alt="author"
                          width={42}
                          height={42}
                        />
                        <div className="author-date">
                          <a className="h6 post__author-name fn" href="/#">
                            Chris Greyson
                          </a>
                          <div className="post__date">
                            <time
                              className="published"
                              dateTime="2017-03-24T18:18"
                            >
                              1 hour ago
                            </time>
                          </div>
                        </div>
                        <a href="/#" className="more">
                          <svg className="olymp-three-dots-icon">
                            <use xlinkHref="#olymp-three-dots-icon" />
                          </svg>
                        </a>
                      </div>
                      <p>
                        Dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit.
                      </p>
                      <a href="/#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon">
                          <use xlinkHref="#olymp-heart-icon" />
                        </svg>
                        <span>7</span>
                      </a>
                      <a href="/#" className="reply">
                        Reply
                      </a>
                    </li>
                  </ul>
                  {/* ... end Comments */}
                  <a href="/#" className="more-comments">
                    View more comments <span>+</span>
                  </a>
                  {/* Comment Form  */}
                  <form className="comment-form inline-items">
                    <div className="post__author author vcard inline-items">
                      <img
                        loading="lazy"
                        src="img/author-page.webp"
                        width={36}
                        height={36}
                        alt="author"
                      />
                      <div className="form-group with-icon-right ">
                        <textarea
                          className="form-control"
                          placeholder=""
                          defaultValue={""}
                        />
                        <div className="add-options-message">
                          <a
                            href="/#"
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
                    <button className="btn btn-md-2 btn-primary">
                      Post Comment
                    </button>
                    <button className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">
                      Cancel
                    </button>
                  </form>
                  {/* ... end Comment Form  */}{" "}
                </div>
                <div className="ui-block">
                  {/* Post */}
                  <article className="hentry post has-post-thumbnail shared-photo">
                    <div className="post__author author vcard inline-items">
                      <img
                        loading="lazy"
                        src="img/author-page.webp"
                        width={36}
                        height={36}
                        alt="author"
                      />
                      <div className="author-date">
                        <a className="h6 post__author-name fn" href="/profile">
                          James Spiegel
                        </a>{" "}
                        shared
                        <a href="/#">Diana Jameson</a>’s <a href="/#">photo</a>
                        <div className="post__date">
                          <time
                            className="published"
                            dateTime="2017-03-24T18:18"
                          >
                            7 hours ago
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
                    <p>
                      Hi! Everyone should check out these amazing photographs
                      that my friend shot the past week. Here’s one of
                      them...leave a kind comment!
                    </p>
                    <div className="post-thumb">
                      <img
                        loading="lazy"
                        src="img/post-photo6.webp"
                        alt="hihi"
                        width={618}
                        height={412}
                      />
                    </div>
                    <ul className="children single-children">
                      <li className="comment-item">
                        <div className="post__author author vcard inline-items">
                          <img
                            loading="lazy"
                            src="img/avatar8-sm.webp"
                            alt="author"
                            width={36}
                            height={36}
                          />
                          <div className="author-date">
                            <a className="h6 post__author-name fn" href="/#">
                              Diana Jameson
                            </a>
                            <div className="post__date">
                              <time
                                className="published"
                                dateTime="2017-03-24T18:18"
                              >
                                16 hours ago
                              </time>
                            </div>
                          </div>
                        </div>
                        <p>
                          Here’s the first photo of our incredible photoshoot
                          from yesterday. If you like it please say so and tel
                          me what you wanna see next!
                        </p>
                      </li>
                    </ul>
                    <div className="post-additional-info inline-items">
                      <a href="/#" className="post-add-icon inline-items">
                        <svg className="olymp-heart-icon">
                          <use xlinkHref="#olymp-heart-icon" />
                        </svg>
                        <span>15</span>
                      </a>
                      <ul className="friends-harmonic">
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic5.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic10.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic7.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic8.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            <img
                              loading="lazy"
                              src="img/friend-harmonic2.webp"
                              alt="friend"
                              width={28}
                              height={28}
                            />
                          </a>
                        </li>
                      </ul>
                      <div className="names-people-likes">
                        <a href="/#">Diana</a>, <a href="/#">Nicholas</a> and
                        <br />
                        13 more liked this
                      </div>
                      <div className="comments-shared">
                        <a href="/#" className="post-add-icon inline-items">
                          <svg className="olymp-speech-balloon-icon">
                            <use xlinkHref="#olymp-speech-balloon-icon" />
                          </svg>
                          <span>0</span>
                        </a>
                        <a href="/#" className="post-add-icon inline-items">
                          <svg className="olymp-share-icon">
                            <use xlinkHref="#olymp-share-icon" />
                          </svg>
                          <span>16</span>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/* .. end Post */}{" "}
                </div>
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
            </div>
            {/* ... end Main Content */}
            {/* Left Sidebar */}
            <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Profile Intro</h6>
                </div>
                <div className="ui-block-content">
                  {/* W-Personal-Info */}
                  <ul className="widget w-personal-info item-block">
                    <li>
                      <span className="title">About Me:</span>
                      <span className="text">{profileInfo?.about}</span>
                    </li>
                    <li>
                      <span className="title">Favourite TV Shows:</span>
                      <span className="text">{hobbies?.tvShow}</span>
                    </li>
                    <li>
                      <span className="title">
                        Favourite Music Bands / Artists:
                      </span>
                      <span className="text">{hobbies?.musics}</span>
                    </li>
                  </ul>
                  {/* .. end W-Personal-Info */}
                  {/* W-Socials */}
                  <div className="widget w-socials">
                    <h6 className="title">Other Social Networks:</h6>
                    <a
                      href={profileInfo?.fb}
                      target="t_blank"
                      rel="noreferrer"
                      className="social-item bg-facebook"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#olymp-facebook-icon" />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href={profileInfo?.twitter}
                      target="t_blank"
                      rel="noreferrer"
                      className="social-item bg-twitter"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#olymp-twitter-icon" />
                      </svg>
                      Twitter
                    </a>
                    <a
                      href={profileInfo?.dribbble}
                      target="t_blank"
                      rel="noreferrer"
                      className="social-item bg-dribbble"
                    >
                      <svg width={16} height={16}>
                        <use xlinkHref="#olymp-dribble-icon" />
                      </svg>
                      Dribbble
                    </a>
                  </div>
                  {/* ... end W-Socials */}
                </div>
              </div>
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">James’s Badges</h6>
                </div>
                <div className="ui-block-content">
                  {/* W-Badges */}
                  <ul className="widget w-badges">
                    <li>
                      <a href="24-CommunityBadges.html">
                        <img
                          loading="lazy"
                          src="img/badge1.webp"
                          alt="author"
                          width={38}
                          height={38}
                        />
                        <div className="label-avatar bg-primary">2</div>
                      </a>
                    </li>
                    <li>
                      <a href="24-CommunityBadges.html">
                        <img
                          loading="lazy"
                          src="img/badge4.webp"
                          alt="author"
                          width={38}
                          height={38}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="24-CommunityBadges.html">
                        <img
                          loading="lazy"
                          src="img/badge3.webp"
                          alt="author"
                          width={38}
                          height={38}
                        />
                        <div className="label-avatar bg-blue">4</div>
                      </a>
                    </li>
                    <li>
                      <a href="24-CommunityBadges.html">
                        <img
                          loading="lazy"
                          src="img/badge6.webp"
                          alt="author"
                          width={38}
                          height={38}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="24-CommunityBadges.html">
                        <img
                          loading="lazy"
                          src="img/badge11.webp"
                          alt="author"
                          width={38}
                          height={38}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="24-CommunityBadges.html">
                        <img
                          loading="lazy"
                          src="img/badge8.webp"
                          alt="author"
                          width={38}
                          height={38}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="24-CommunityBadges.html">
                        <img
                          loading="lazy"
                          src="img/badge10.webp"
                          alt="author"
                          width={38}
                          height={38}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="24-CommunityBadges.html">
                        <img
                          loading="lazy"
                          src="img/badge13.webp"
                          alt="author"
                          width={38}
                          height={38}
                        />
                        <div className="label-avatar bg-breez">2</div>
                      </a>
                    </li>
                    <li>
                      <a href="24-CommunityBadges.html">
                        <img
                          loading="lazy"
                          src="img/badge7.webp"
                          alt="author"
                          width={38}
                          height={38}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="24-CommunityBadges.html">
                        <img
                          loading="lazy"
                          src="img/badge12.webp"
                          alt="author"
                          width={38}
                          height={38}
                        />
                      </a>
                    </li>
                  </ul>
                  {/*.. end W-Badges */}
                </div>
              </div>
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">My Spotify Playlist</h6>
                </div>
                {/* W-Playlist */}
                <ol className="widget w-playlist">
                  <li
                    className="js-open-popup"
                    data-popup-target=".playlist-popup"
                  >
                    <div className="playlist-thumb">
                      <img
                        loading="lazy"
                        src="img/playlist6.webp"
                        alt="thumb-composition"
                        width={34}
                        height={34}
                      />
                      <div className="overlay" />
                      <a href="/#" className="play-icon">
                        <svg className="olymp-music-play-icon-big">
                          <use xlinkHref="#olymp-music-play-icon-big" />
                        </svg>
                      </a>
                    </div>
                    <div className="composition">
                      <a href="/#" className="composition-name">
                        The Past Starts Slow...
                      </a>
                      <a href="/#" className="composition-author">
                        System of a Revenge
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        3:22
                      </time>
                      <div className="more">
                        <svg className="olymp-three-dots-icon">
                          <use xlinkHref="#olymp-three-dots-icon" />
                        </svg>
                        <ul className="more-dropdown">
                          <li>
                            <a href="/#">Add Song to Player</a>
                          </li>
                          <li>
                            <a href="/#">Add Playlist to Player</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="js-open-popup"
                    data-popup-target=".playlist-popup"
                  >
                    <div className="playlist-thumb">
                      <img
                        loading="lazy"
                        src="img/playlist7.webp"
                        alt="thumb-composition"
                        width={34}
                        height={34}
                      />
                      <div className="overlay" />
                      <a href="/#" className="play-icon">
                        <svg className="olymp-music-play-icon-big">
                          <use xlinkHref="#olymp-music-play-icon-big" />
                        </svg>
                      </a>
                    </div>
                    <div className="composition">
                      <a href="/#" className="composition-name">
                        The Pretender
                      </a>
                      <a href="/#" className="composition-author">
                        Kung Fighters
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        5:48
                      </time>
                      <div className="more">
                        <svg className="olymp-three-dots-icon">
                          <use xlinkHref="#olymp-three-dots-icon" />
                        </svg>
                        <ul className="more-dropdown">
                          <li>
                            <a href="/#">Add Song to Player</a>
                          </li>
                          <li>
                            <a href="/#">Add Playlist to Player</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="js-open-popup"
                    data-popup-target=".playlist-popup"
                  >
                    <div className="playlist-thumb">
                      <img
                        loading="lazy"
                        src="img/playlist8.webp"
                        alt="thumb-composition"
                        width={34}
                        height={34}
                      />
                      <div className="overlay" />
                      <a href="/#" className="play-icon">
                        <svg className="olymp-music-play-icon-big">
                          <use xlinkHref="#olymp-music-play-icon-big" />
                        </svg>
                      </a>
                    </div>
                    <div className="composition">
                      <a href="/#" className="composition-name">
                        Blood Brothers
                      </a>
                      <a href="/#" className="composition-author">
                        Iron Maid
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        3:06
                      </time>
                      <div className="more">
                        <svg className="olymp-three-dots-icon">
                          <use xlinkHref="#olymp-three-dots-icon" />
                        </svg>
                        <ul className="more-dropdown">
                          <li>
                            <a href="/#">Add Song to Player</a>
                          </li>
                          <li>
                            <a href="/#">Add Playlist to Player</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="js-open-popup"
                    data-popup-target=".playlist-popup"
                  >
                    <div className="playlist-thumb">
                      <img
                        loading="lazy"
                        src="img/playlist9.webp"
                        alt="thumb-composition"
                        width={34}
                        height={34}
                      />
                      <div className="overlay" />
                      <a href="/#" className="play-icon">
                        <svg className="olymp-music-play-icon-big">
                          <use xlinkHref="#olymp-music-play-icon-big" />
                        </svg>
                      </a>
                    </div>
                    <div className="composition">
                      <a href="/#" className="composition-name">
                        Seven Nation Army
                      </a>
                      <a href="/#" className="composition-author">
                        The Black Stripes
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        6:17
                      </time>
                      <div className="more">
                        <svg className="olymp-three-dots-icon">
                          <use xlinkHref="#olymp-three-dots-icon" />
                        </svg>
                        <ul className="more-dropdown">
                          <li>
                            <a href="/#">Add Song to Player</a>
                          </li>
                          <li>
                            <a href="/#">Add Playlist to Player</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className="js-open-popup"
                    data-popup-target=".playlist-popup"
                  >
                    <div className="playlist-thumb">
                      <img
                        loading="lazy"
                        src="img/playlist10.webp"
                        alt="thumb-composition"
                        width={34}
                        height={34}
                      />
                      <div className="overlay" />
                      <a href="/#" className="play-icon">
                        <svg className="olymp-music-play-icon-big">
                          <use xlinkHref="#olymp-music-play-icon-big" />
                        </svg>
                      </a>
                    </div>
                    <div className="composition">
                      <a href="/#" className="composition-name">
                        Killer Queen
                      </a>
                      <a href="/#" className="composition-author">
                        Archiduke
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        5:40
                      </time>
                      <div className="more">
                        <svg className="olymp-three-dots-icon">
                          <use xlinkHref="#olymp-three-dots-icon" />
                        </svg>
                        <ul className="more-dropdown">
                          <li>
                            <a href="/#">Add Song to Player</a>
                          </li>
                          <li>
                            <a href="/#">Add Playlist to Player</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
                {/* .. end W-Playlist */}
              </div>
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Twitter Feed</h6>
                </div>
                {/* W-Twitter */}
                <ul className="widget w-twitter">
                  <li className="twitter-item">
                    <div className="author-folder">
                      <img
                        loading="lazy"
                        src="img/twitter-avatar1.webp"
                        alt="avatar"
                        width={40}
                        height={40}
                      />
                      <div className="author">
                        <a href="/#" className="author-name">
                          Space Cowboy
                        </a>
                        <a href="/#" className="group">
                          @james_spiegelOK
                        </a>
                      </div>
                    </div>
                    <p>
                      Tomorrow with the agency we will run 5 km for charity.
                      Come and give us your support!
                      <a href="/#" className="link-post">
                        #Daydream5K
                      </a>
                    </p>
                    <span className="post__date">
                      <time className="published" dateTime="2017-03-24T18:18">
                        2 hours ago
                      </time>
                    </span>
                  </li>
                  <li className="twitter-item">
                    <div className="author-folder">
                      <img
                        loading="lazy"
                        src="img/twitter-avatar1.webp"
                        alt="avatar"
                        width={40}
                        height={40}
                      />
                      <div className="author">
                        <a href="/#" className="author-name">
                          Space Cowboy
                        </a>
                        <a href="/#" className="group">
                          @james_spiegelOK
                        </a>
                      </div>
                    </div>
                    <p>
                      Check out the new website of “The Bebop Bar”!{" "}
                      <a href="/#" className="link-post">
                        bytle/thbp53f
                      </a>
                    </p>
                    <span className="post__date">
                      <time className="published" dateTime="2017-03-24T18:18">
                        16 hours ago
                      </time>
                    </span>
                  </li>
                  <li className="twitter-item">
                    <div className="author-folder">
                      <img
                        loading="lazy"
                        src="img/twitter-avatar1.webp"
                        alt="avatar"
                        width={40}
                        height={40}
                      />
                      <div className="author">
                        <a href="/#" className="author-name">
                          Space Cowboy
                        </a>
                        <a href="/#" className="group">
                          @james_spiegelOK
                        </a>
                      </div>
                    </div>
                    <p>
                      The Sunday is the annual agency camping trip and I still
                      haven’t got a tent
                      <a href="/#" className="link-post">
                        #TheWild #Indoors
                      </a>
                    </p>
                    <span className="post__date">
                      <time className="published" dateTime="2017-03-24T18:18">
                        Yesterday
                      </time>
                    </span>
                  </li>
                </ul>
                {/* .. end W-Twitter */}
              </div>
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Last Videos</h6>
                </div>
                <div className="ui-block-content">
                  {/* W-Latest-Video */}
                  <ul className="widget w-last-video">
                    <li>
                      <a
                        href="https://vimeo.com/ondemand/viewfromabluemoon4k/147865858"
                        className="play-video play-video--small"
                      >
                        <svg className="olymp-play-icon">
                          <use xlinkHref="#olymp-play-icon" />
                        </svg>
                      </a>
                      <img
                        loading="lazy"
                        src="img/video8.webp"
                        alt="video"
                        width={272}
                        height={181}
                      />
                      <div className="video-content">
                        <div className="title">
                          System of a Revenge - Hypnotize...
                        </div>
                        <time className="published" dateTime="2017-03-24T18:18">
                          3:25
                        </time>
                      </div>
                      <div className="overlay" />
                    </li>
                    <li>
                      <a
                        href="https://youtube.com/watch?v=excVFQ2TWig"
                        className="play-video play-video--small"
                      >
                        <svg className="olymp-play-icon">
                          <use xlinkHref="#olymp-play-icon" />
                        </svg>
                      </a>
                      <img
                        loading="lazy"
                        src="img/video7.webp"
                        alt="video"
                        width={272}
                        height={177}
                      />
                      <div className="video-content">
                        <div className="title">
                          Green Goo - Live at Dan’s Arena
                        </div>
                        <time className="published" dateTime="2017-03-24T18:18">
                          5:48
                        </time>
                      </div>
                      <div className="overlay" />
                    </li>
                  </ul>
                  {/* .. end W-Latest-Video */}
                </div>
              </div>
            </div>
            {/* ... end Left Sidebar */}
            {/* Right Sidebar */}
            <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Last Photos</h6>
                </div>
                <div className="ui-block-content">
                  {/* W-Latest-Photo */}
                  <ul className="widget w-last-photo js-zoom-gallery">
                    <li>
                      <a href="img/last-photo10-large.webp">
                        <img
                          loading="lazy"
                          src="img/last-photo10-large.webp"
                          alt="hihi"
                          width={600}
                          height={600}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="img/last-phot11-large.webp">
                        <img
                          loading="lazy"
                          src="img/last-phot11-large.webp"
                          alt="hihi"
                          width={600}
                          height={600}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="img/last-phot12-large.webp">
                        <img
                          loading="lazy"
                          src="img/last-phot12-large.webp"
                          alt="hihi"
                          width={600}
                          height={600}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="img/last-phot13-large.webp">
                        <img
                          loading="lazy"
                          src="img/last-phot13-large.webp"
                          alt="hihi"
                          width={600}
                          height={600}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="img/last-phot14-large.webp">
                        <img
                          loading="lazy"
                          src="img/last-phot14-large.webp"
                          alt="hihi"
                          width={600}
                          height={600}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="img/last-phot15-large.webp">
                        <img
                          loading="lazy"
                          src="img/last-phot15-large.webp"
                          alt="hihi"
                          width={600}
                          height={600}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="img/last-phot16-large.webp">
                        <img
                          loading="lazy"
                          src="img/last-phot16-large.webp"
                          alt="hihi"
                          width={600}
                          height={600}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="img/last-phot17-large.webp">
                        <img
                          loading="lazy"
                          src="img/last-phot17-large.webp"
                          alt="hihi"
                          width={600}
                          height={600}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="img/last-phot18-large.webp">
                        <img
                          loading="lazy"
                          src="img/last-phot18-large.webp"
                          alt="hihi"
                          width={600}
                          height={600}
                        />
                      </a>
                    </li>
                  </ul>
                  {/* .. end W-Latest-Photo */}
                </div>
              </div>
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Blog Posts</h6>
                </div>
                {/* W-Blog-Posts */}
                <ul className="widget w-blog-posts">
                  <li>
                    <article className="hentry post">
                      <a href="/#" className="h4">
                        My Perfect Vacations in South America and Europe
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consect adipisicing elit,
                        sed do eiusmod por incidid ut labore et.
                      </p>
                      <div className="post__date">
                        <time className="published" dateTime="2017-03-24T18:18">
                          7 hours ago
                        </time>
                      </div>
                    </article>
                  </li>
                  <li>
                    <article className="hentry post">
                      <a href="/#" className="h4">
                        The Big Experience of Travelling Alone
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consect adipisicing elit,
                        sed do eiusmod por incidid ut labore et.
                      </p>
                      <div className="post__date">
                        <time className="published" dateTime="2017-03-24T18:18">
                          March 18th, at 6:52pm
                        </time>
                      </div>
                    </article>
                  </li>
                </ul>
                {/* .. end W-Blog-Posts */}
              </div>
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Friends (86)</h6>
                </div>
                <div className="ui-block-content">
                  {/* W-Faved-Page */}
                  <ul className="widget w-faved-page js-zoom-gallery">
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar38-sm.webp"
                          alt="author"
                          width={36}
                          height={36}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar24-sm.webp"
                          width={42}
                          height={42}
                          alt="user"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar36-sm.webp"
                          alt="author"
                          width={42}
                          height={42}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar35-sm.webp"
                          alt="user"
                          width={42}
                          height={42}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar34-sm.webp"
                          alt="author"
                          width={42}
                          height={42}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar33-sm.webp"
                          alt="author"
                          width={42}
                          height={42}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar32-sm.webp"
                          alt="user"
                          width={42}
                          height={42}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar31-sm.webp"
                          alt="author"
                          width={42}
                          height={42}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar30-sm.webp"
                          alt="author"
                          width={42}
                          height={42}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar29-sm.webp"
                          width={42}
                          height={42}
                          alt="user"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar28-sm.webp"
                          width={42}
                          height={42}
                          alt="user"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar27-sm.webp"
                          width={42}
                          height={42}
                          alt="user"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar26-sm.webp"
                          width={42}
                          height={42}
                          alt="user"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img
                          loading="lazy"
                          src="img/avatar25-sm.webp"
                          width={42}
                          height={42}
                          alt="user"
                        />
                      </a>
                    </li>
                    <li className="all-users">
                      <a href="/#">+74</a>
                    </li>
                  </ul>
                  {/* .. end W-Faved-Page */}
                </div>
              </div>
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Favourite Pages</h6>
                </div>
                {/* W-Friend-Pages-Added */}
                <ul className="widget w-friend-pages-added notification-list friend-requests">
                  <li className="inline-items">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar41-sm.webp"
                        alt="author"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        The Marina Bar
                      </a>
                      <span className="chat-message-item">
                        Restaurant / Bar
                      </span>
                    </div>
                    <span
                      className="notification-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="ADD TO YOUR FAVS"
                    >
                      <a href="/#">
                        <svg className="olymp-star-icon">
                          <use xlinkHref="#olymp-star-icon" />
                        </svg>
                      </a>
                    </span>
                  </li>
                  <li className="inline-items">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar42-sm.webp"
                        alt="author"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Tapronus Rock
                      </a>
                      <span className="chat-message-item">Rock Band</span>
                    </div>
                    <span
                      className="notification-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="ADD TO YOUR FAVS"
                    >
                      <a href="/#">
                        <svg className="olymp-star-icon">
                          <use xlinkHref="#olymp-star-icon" />
                        </svg>
                      </a>
                    </span>
                  </li>
                  <li className="inline-items">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar43-sm.webp"
                        alt="author"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Pixel Digital Design
                      </a>
                      <span className="chat-message-item">Company</span>
                    </div>
                    <span
                      className="notification-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="ADD TO YOUR FAVS"
                    >
                      <a href="/#">
                        <svg className="olymp-star-icon">
                          <use xlinkHref="#olymp-star-icon" />
                        </svg>
                      </a>
                    </span>
                  </li>
                  <li className="inline-items">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar44-sm.webp"
                        alt="author"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Thompson’s Custom Clothing Boutique
                      </a>
                      <span className="chat-message-item">Clothing Store</span>
                    </div>
                    <span
                      className="notification-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="ADD TO YOUR FAVS"
                    >
                      <a href="/#">
                        <svg className="olymp-star-icon">
                          <use xlinkHref="#olymp-star-icon" />
                        </svg>
                      </a>
                    </span>
                  </li>
                  <li className="inline-items">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar45-sm.webp"
                        alt="author"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Crimson Agency
                      </a>
                      <span className="chat-message-item">Company</span>
                    </div>
                    <span
                      className="notification-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="ADD TO YOUR FAVS"
                    >
                      <a href="/#">
                        <svg className="olymp-star-icon">
                          <use xlinkHref="#olymp-star-icon" />
                        </svg>
                      </a>
                    </span>
                  </li>
                  <li className="inline-items">
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="img/avatar46-sm.webp"
                        alt="author"
                        width={38}
                        height={38}
                      />
                    </div>
                    <div className="notification-event">
                      <a href="/#" className="h6 notification-friend">
                        Mannequin Angel
                      </a>
                      <span className="chat-message-item">Clothing Store</span>
                    </div>
                    <span
                      className="notification-icon"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="ADD TO YOUR FAVS"
                    >
                      <a href="/#">
                        <svg className="olymp-star-icon">
                          <use xlinkHref="#olymp-star-icon" />
                        </svg>
                      </a>
                    </span>
                  </li>
                </ul>
                {/* .. end W-Friend-Pages-Added */}
              </div>
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">James's Poll</h6>
                </div>
                <div className="ui-block-content">
                  {/* W-Pool */}
                  <ul className="widget w-pool">
                    <li>
                      <p>
                        If you had to choose, which actor do you prefer to be
                        the next Darkman?{" "}
                      </p>
                    </li>
                    <li>
                      <div className="skills-item">
                        <div className="skills-item-info">
                          <span className="skills-item-title">
                            <span className="radio">
                              <label>
                                <input type="radio" name="optionsRadios" />
                                Thomas Bale
                              </label>
                            </span>
                          </span>
                          <span className="skills-item-count">
                            <span
                              className="count-animate"
                              data-speed={1000}
                              data-refresh-interval={50}
                              data-to={62}
                              data-from={0}
                            />
                            <span className="units">62%</span>
                          </span>
                        </div>
                        <div className="skills-item-meter">
                          <span
                            className="skills-item-meter-active bg-primary"
                            style={{ width: "62%" }}
                          />
                        </div>
                        <div className="counter-friends">
                          12 friends voted for this
                        </div>
                        <ul className="friends-harmonic">
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic1.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic2.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic3.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic4.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic5.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic6.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic7.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic8.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic9.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#" className="all-users">
                              +3
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="skills-item">
                        <div className="skills-item-info">
                          <span className="skills-item-title">
                            <span className="radio">
                              <label>
                                <input type="radio" name="optionsRadios" />
                                Ben Robertson
                              </label>
                            </span>
                          </span>
                          <span className="skills-item-count">
                            <span
                              className="count-animate"
                              data-speed={1000}
                              data-refresh-interval={50}
                              data-to={27}
                              data-from={0}
                            />
                            <span className="units">27%</span>
                          </span>
                        </div>
                        <div className="skills-item-meter">
                          <span
                            className="skills-item-meter-active bg-primary"
                            style={{ width: "27%" }}
                          />
                        </div>
                        <div className="counter-friends">
                          7 friends voted for this
                        </div>
                        <ul className="friends-harmonic">
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic7.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic8.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic9.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic10.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic11.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic12.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic13.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="skills-item">
                        <div className="skills-item-info">
                          <span className="skills-item-title">
                            <span className="radio">
                              <label>
                                <input type="radio" name="optionsRadios" />
                                Michael Streiton
                              </label>
                            </span>
                          </span>
                          <span className="skills-item-count">
                            <span
                              className="count-animate"
                              data-speed={1000}
                              data-refresh-interval={50}
                              data-to={11}
                              data-from={0}
                            />
                            <span className="units">11%</span>
                          </span>
                        </div>
                        <div className="skills-item-meter">
                          <span
                            className="skills-item-meter-active bg-primary"
                            style={{ width: "11%" }}
                          />
                        </div>
                        <div className="counter-friends">
                          2 people voted for this
                        </div>
                        <ul className="friends-harmonic">
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic14.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <img
                                loading="lazy"
                                src="img/friend-harmonic15.webp"
                                alt="friend"
                                width={28}
                                height={28}
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  {/* .. end W-Pool */}
                  <a
                    href="/#"
                    className="btn btn-md-2 btn-border-think custom-color c-grey full-width"
                  >
                    Vote Now!
                  </a>
                </div>
              </div>
            </div>
            {/* ... end Right Sidebar */}
          </div>
        </div>
      </div>
      <UpdatePhoto openPopup={openPopup} docId={profileInfo?.id} />
    </>
  );
}
