import DefaultLayout from "app/layouts";
import { auth, db } from "app/services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { filterDiarys } from "utils/helper";
import Post from "./component/Post";
import UpdatePhoto from "./component/UpdatePhoto";

export default function ProfilePage() {
  const [profileInfo, setProfileInfo] = useState<any>();
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [hobbies, setHobbies] = useState<any>();
  const [diarys, setDiarys] = useState<any>();

  const dataCollectionUsers = collection(db, "Users");
  const dataCollectionHobbies = collection(db, "HobbiesAndInterests");
  const dataCollectionDiary = collection(db, "Diary");

  const [user] = useAuthState(auth);

  const fetchAccountInfor = async () => {
    const q = query(dataCollectionUsers, where("uid", "==", user?.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setProfileInfo({ id: doc.id, ...doc.data() });
    });
  };
  const fetchHobbies = async () => {
    const q = query(dataCollectionHobbies, where("uid", "==", user?.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setHobbies({ id: doc.id, ...doc.data() });
    });
  };

  const fetchDiary = async () => {
    const data: any = [];
    const q = query(dataCollectionDiary, where("uid", "==", user?.uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({ idDoc: doc.id, ...doc.data() });
    });
    setDiarys(data);
  };

  useEffect(() => {
    fetchAccountInfor();
    fetchHobbies();
    fetchDiary();
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
                  {diarys &&
                    filterDiarys(diarys) &&
                    filterDiarys(diarys).length > 0 &&
                    filterDiarys(diarys).map((diary) => (
                      <Post
                        diaryData={diary}
                        profileInfo={profileInfo}
                        key={diary.id}
                      />
                    ))}
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
            </div>
            {/* ... end Left Sidebar */}
            {/* Right Sidebar */}
            <div className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
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
            </div>
            {/* ... end Right Sidebar */}
          </div>
        </div>
      </div>
      <UpdatePhoto openPopup={openPopup} docId={profileInfo?.id} />
    </>
  );
}
