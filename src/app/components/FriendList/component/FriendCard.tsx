export default function FriendCard(props: { dataFriend: any }) {
  const { dataFriend } = props;
  return (
    <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
      <div className="ui-block">
        {/* Friend Item */}
        <div className="friend-item">
          <div className="friend-header-thumb">
            <img
              loading="lazy"
              src={
                dataFriend?.coverImg ||
                "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
              }
              alt="friend"
              width={318}
              height={122}
            />
          </div>
          <div className="friend-item-content">
            <div className="more">
              <svg className="olymp-three-dots-icon">
                <use xlinkHref="#olymp-three-dots-icon" />
              </svg>
              <ul className="more-dropdown">
                <li>
                  <a href="#">Report Profile</a>
                </li>
                <li>
                  <a href="#">Block Profile</a>
                </li>
                <li>
                  <a href="#">Turn Off Notifications</a>
                </li>
              </ul>
            </div>
            <div className="friend-avatar">
              <div className="author-thumb">
                <img
                  loading="lazy"
                  src={
                    dataFriend?.imgUrl ||
                    "https://as2.ftcdn.net/v2/jpg/03/49/49/79/1000_F_349497933_Ly4im8BDmHLaLzgyKg2f2yZOvJjBtlw5.jpg"
                  }
                  alt="author"
                  width={92}
                  height={92}
                />
              </div>
              <div className="author-content">
                <a href="#" className="h5 author-name">
                  {dataFriend?.firstName} {dataFriend?.lastName}
                </a>
                <div className="country">{dataFriend?.country}</div>
              </div>
            </div>
            <div className="swiper-container" data-slide="fade">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="friend-count" data-swiper-parallax={-500}>
                    <a href="#" className="friend-count-item">
                      <div className="h6">52</div>
                      <div className="title">Friends</div>
                    </a>
                    <a href="#" className="friend-count-item">
                      <div className="h6">240</div>
                      <div className="title">Photos</div>
                    </a>
                    <a href="#" className="friend-count-item">
                      <div className="h6">16</div>
                      <div className="title">Videos</div>
                    </a>
                  </div>
                  <div
                    className="control-block-button"
                    data-swiper-parallax={-100}
                  >
                    <a href="#" className="btn btn-control bg-blue">
                      <svg className="olymp-happy-face-icon">
                        <use xlinkHref="#olymp-happy-face-icon" />
                      </svg>
                    </a>
                    <a href="#" className="btn btn-control bg-purple">
                      <svg className="olymp-chat---messages-icon">
                        <use xlinkHref="#olymp-chat---messages-icon" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <p className="friend-about" data-swiper-parallax={-500}>
                    Hi!, I’m Marina and I’m a Community Manager for “Gametube”.
                    Gamer and full-time mother.
                  </p>
                  <div className="friend-since" data-swiper-parallax={-100}>
                    <span>Friends Since:</span>
                    <div className="h6">December 2014</div>
                  </div>
                </div>
              </div>
              {/* If we need pagination */}
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
        {/* ... end Friend Item */}{" "}
      </div>
    </div>
  );
}
