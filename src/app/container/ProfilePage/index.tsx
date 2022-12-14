import FriendList from "app/components/FriendList";
import DefaultLayout from "app/layouts";
import { auth, db } from "app/services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import About from "./component/About";
import Timeline from "./component/Timeline";
import UpdatePhoto from "./component/UpdatePhoto";

export default function ProfilePage() {
  const [profileInfo, setProfileInfo] = useState<any>();
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [typeOfPhoto, setTypeOfPhoto] = useState<string>("");

  const [hobbies, setHobbies] = useState<any>();
  const [diarys, setDiarys] = useState<any>();
  const [tab, setTab] = useState<string>("timeline");

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
  const reloadData = () => {
    fetchAccountInfor();
    fetchHobbies();
    fetchDiary();
  };

  return (
    <>
      <DefaultLayout />
      <div>
        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="top-header">
                  <div className="top-header-thumb">
                    {profileInfo?.coverImg && (
                      <img
                        src={profileInfo?.coverImg}
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    )}
                  </div>
                  <div className="profile-section">
                    <div className="row">
                      <div className="col col-lg-5 col-md-5 col-sm-12 col-12">
                        <ul className="profile-menu">
                          <li>
                            <span
                              onClick={() => setTab("timeline")}
                              className={`${
                                tab === "timeline" ? "active" : ""
                              } `}
                            >
                              Timeline
                            </span>
                          </li>
                          <li>
                            <span
                              onClick={() => setTab("about")}
                              className={`${tab === "about" ? "active" : ""} `}
                            >
                              About
                            </span>
                          </li>
                          <li>
                            <span
                              onClick={() => setTab("friends")}
                              className={`${
                                tab === "friends" ? "active" : ""
                              } `}
                            >
                              Friends
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col col-lg-5 ms-auto col-md-5 col-sm-12 col-12">
                        <ul className="profile-menu">
                          <li>
                            <span
                              onClick={() => setTab("photos")}
                              className={`${tab === "photos" ? "active" : ""} `}
                            >
                              Photos
                            </span>
                          </li>
                          <li>
                            <span
                              onClick={() => setTab("videos")}
                              className={`${tab === "videos" ? "active" : ""} `}
                            >
                              Videos
                            </span>
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
                              onClick={() => {
                                setTypeOfPhoto("imgUrl");
                                setOpenPopup(true);
                              }}
                              className="text-black text-black-hover"
                              data-bs-toggle="modal"
                              data-bs-target="#update-header-photo"
                            >
                              Update Profile Photo
                            </span>
                          </li>
                          <li>
                            <span
                              onClick={() => {
                                setTypeOfPhoto("coverImg");
                                setOpenPopup(true);
                              }}
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
        {tab === "timeline" && (
          <Timeline
            diarys={diarys}
            hobbies={hobbies}
            profileInfo={profileInfo}
          />
        )}
        {tab === "about" && (
          <About hobbies={hobbies} profileInfo={profileInfo} />
        )}
        {tab === "friends" && <FriendList userUid={profileInfo?.uid} />}
      </div>

      <UpdatePhoto
        openPopup={openPopup}
        docId={profileInfo?.id}
        typeOfPhoto={typeOfPhoto}
        reloadData={reloadData}
      />
    </>
  );
}
