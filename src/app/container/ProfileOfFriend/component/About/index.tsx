import { Hobbies } from "types/Hobbies";
import { Profile } from "types/Profile";

export default function About(props: {
  profileInfo: Profile;
  hobbies: Hobbies;
}) {
  const { profileInfo, hobbies } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col col-xl-8 order-xl-2 col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">Hobbies and Interests</h6>
              <a href="#" className="more">
                <svg className="olymp-three-dots-icon">
                  <use xlinkHref="#olymp-three-dots-icon" />
                </svg>
              </a>
            </div>
            <div className="ui-block-content">
              <div className="row">
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12 mb-3 mb-md-0">
                  {/* W-Personal-Info */}
                  <ul className="widget w-personal-info item-block">
                    <li>
                      <span className="title">Hobbies:</span>
                      <span className="text">{hobbies?.sport}</span>
                    </li>
                    <li>
                      <span className="title">Favourite TV Shows:</span>
                      <span className="text">{hobbies?.tvShow}</span>
                    </li>
                    <li>
                      <span className="title">Favourite Movies:</span>
                      <span className="text">{hobbies?.movies}</span>
                    </li>
                    <li>
                      <span className="title">Favourite Games:</span>
                      <span className="text">{hobbies?.games}</span>
                    </li>
                  </ul>
                  {/* ... end W-Personal-Info */}
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                  {/* W-Personal-Info */}
                  <ul className="widget w-personal-info item-block">
                    <li>
                      <span className="title">
                        Favourite Music Bands / Artists:
                      </span>
                      <span className="text">{hobbies?.musics}</span>
                    </li>
                    <li>
                      <span className="title">Favourite Books:</span>
                      <span className="text">{hobbies?.books}</span>
                    </li>
                    <li>
                      <span className="title">Favourite Writers:</span>
                      <span className="text">{hobbies?.writer}</span>
                    </li>
                    <li>
                      <span className="title">Other Interests:</span>
                      <span className="text">{hobbies?.other}</span>
                    </li>
                  </ul>
                  {/* ... end W-Personal-Info */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-xl-4 order-xl-1 col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12">
          <div className="ui-block">
            <div className="ui-block-title">
              <h6 className="title">Personal Info</h6>
              <a href="#" className="more">
                <svg className="olymp-three-dots-icon">
                  <use xlinkHref="#olymp-three-dots-icon" />
                </svg>
              </a>
            </div>
            <div className="ui-block-content">
              {/* W-Personal-Info */}
              <ul className="widget w-personal-info">
                <li>
                  <span className="title">About Me:</span>
                  <span className="text">{profileInfo?.about}</span>
                </li>
                <li>
                  <span className="title">Birthday:</span>
                  <span className="text">{profileInfo?.birthday}</span>
                </li>
                <li>
                  <span className="title">Birthplace:</span>
                  <span className="text">{profileInfo?.birthplace}</span>
                </li>
                <li>
                  <span className="title">Lives in:</span>
                  <span className="text">{profileInfo?.city}</span>
                </li>
                <li>
                  <span className="title">Country:</span>
                  <span className="text">{profileInfo?.country}</span>
                </li>
                <li>
                  <span className="title">Gender:</span>
                  <span className="text">{profileInfo?.gender}</span>
                </li>
                <li>
                  <span className="title">Status:</span>
                  <span className="text">{profileInfo?.status}</span>
                </li>
                <li>
                  <span className="title">Occupation:</span>
                  <span className="text">{profileInfo?.occupation}</span>
                </li>
                <li>
                  <span className="title">Email:</span>
                  <a href="#" className="text">
                    {profileInfo?.email}
                  </a>
                </li>
                <li>
                  <span className="title">Phone Number:</span>
                  <span className="text">{profileInfo?.phoneNumber}</span>
                </li>
                <li>
                  <span className="title">Religious Belifs:</span>
                  <span className="text">{profileInfo?.belifs}</span>
                </li>
                <li>
                  <span className="title">Political Incline:</span>
                  <span className="text">{profileInfo?.incline}</span>
                </li>
              </ul>
              {/* ... end W-Personal-Info */}
              {/* W-Socials */}
              <div className="widget w-socials">
                <h6 className="title">Other Social Networks:</h6>
                <a href={profileInfo?.fb} className="social-item bg-facebook">
                  <svg width={16} height={16}>
                    <use xlinkHref="#olymp-facebook-icon" />
                  </svg>
                  Facebook
                </a>
                <a
                  href={profileInfo?.twitter}
                  className="social-item bg-twitter"
                >
                  <svg width={16} height={16}>
                    <use xlinkHref="#olymp-twitter-icon" />
                  </svg>
                  Twitter
                </a>
                <a
                  href={profileInfo?.dribbble}
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
      </div>
    </div>
  );
}
