export default function FriendList() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="ui-block responsive-flex">
              <div className="ui-block-title">
                <div className="h6 title">James’s Friends (86)</div>
                <form className="w-search">
                  <div className="form-group with-button">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search Friends..."
                    />
                    <button>
                      <svg className="olymp-magnifying-glass-icon">
                        <use xlinkHref="#olymp-magnifying-glass-icon" />
                      </svg>
                    </button>
                  </div>
                </form>
                <a href="#" className="more">
                  <svg className="olymp-three-dots-icon">
                    <use xlinkHref="#olymp-three-dots-icon" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Friends */}
      <div className="container">
        <div className="row">
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img
                    loading="lazy"
                    src="img/friend1.webp"
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
                        src="img/avatar1.webp"
                        alt="author"
                        width={92}
                        height={92}
                      />
                    </div>
                    <div className="author-content">
                      <a href="#" className="h5 author-name">
                        Nicholas Grissom
                      </a>
                      <div className="country">San Francisco, CA</div>
                    </div>
                  </div>
                  <div className="swiper-container" data-slide="fade">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div
                          className="friend-count"
                          data-swiper-parallax={-500}
                        >
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
                          Hi!, I’m Marina and I’m a Community Manager for
                          “Gametube”. Gamer and full-time mother.
                        </p>
                        <div
                          className="friend-since"
                          data-swiper-parallax={-100}
                        >
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
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img
                    loading="lazy"
                    src="img/friend2.webp"
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
                        src="img/avatar2.webp"
                        alt="author"
                        width={92}
                        height={92}
                      />
                    </div>
                    <div className="author-content">
                      <a href="#" className="h5 author-name">
                        Marina Valentine
                      </a>
                      <div className="country">Long Island, NY</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div
                          className="friend-count"
                          data-swiper-parallax={-500}
                        >
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
                          Hi!, I’m Marina and I’m a Community Manager for
                          “Gametube”. Gamer and full-time mother.
                        </p>
                        <div
                          className="friend-since"
                          data-swiper-parallax={-100}
                        >
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
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img
                    loading="lazy"
                    src="img/friend3.webp"
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
                        src="img/avatar3.webp"
                        alt="author"
                        width={92}
                        height={92}
                      />
                    </div>
                    <div className="author-content">
                      <a href="#" className="h5 author-name">
                        Nicholas Grissom
                      </a>
                      <div className="country">Los Angeles, CA</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div
                          className="friend-count"
                          data-swiper-parallax={-500}
                        >
                          <a href="#" className="friend-count-item">
                            <div className="h6">49</div>
                            <div className="title">Friends</div>
                          </a>
                          <a href="#" className="friend-count-item">
                            <div className="h6">132</div>
                            <div className="title">Photos</div>
                          </a>
                          <a href="#" className="friend-count-item">
                            <div className="h6">5</div>
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
                          Hi!, I’m Marina and I’m a Community Manager for
                          “Gametube”. Gamer and full-time mother.
                        </p>
                        <div
                          className="friend-since"
                          data-swiper-parallax={-100}
                        >
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
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img
                    loading="lazy"
                    src="img/friend4.webp"
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
                        src="img/avatar4.webp"
                        alt="author"
                        width={92}
                        height={92}
                      />
                    </div>
                    <div className="author-content">
                      <a href="#" className="h5 author-name">
                        Chris Greyson
                      </a>
                      <div className="country">Austin, TX</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div
                          className="friend-count"
                          data-swiper-parallax={-500}
                        >
                          <a href="#" className="friend-count-item">
                            <div className="h6">65</div>
                            <div className="title">Friends</div>
                          </a>
                          <a href="#" className="friend-count-item">
                            <div className="h6">104</div>
                            <div className="title">Photos</div>
                          </a>
                          <a href="#" className="friend-count-item">
                            <div className="h6">12</div>
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
                          Hi!, I’m Marina and I’m a Community Manager for
                          “Gametube”. Gamer and full-time mother.
                        </p>
                        <div
                          className="friend-since"
                          data-swiper-parallax={-100}
                        >
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
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img
                    loading="lazy"
                    src="img/friend5.webp"
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
                        src="img/avatar5.webp"
                        width={92}
                        height={92}
                        alt="author"
                      />
                    </div>
                    <div className="author-content">
                      <a href="#" className="h5 author-name">
                        Elaine Dreifuss
                      </a>
                      <div className="country">New York, NY</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div
                          className="friend-count"
                          data-swiper-parallax={-500}
                        >
                          <a href="#" className="friend-count-item">
                            <div className="h6">82</div>
                            <div className="title">Friends</div>
                          </a>
                          <a href="#" className="friend-count-item">
                            <div className="h6">204</div>
                            <div className="title">Photos</div>
                          </a>
                          <a href="#" className="friend-count-item">
                            <div className="h6">27</div>
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
                          Hi!, I’m Marina and I’m a Community Manager for
                          “Gametube”. Gamer and full-time mother.
                        </p>
                        <div
                          className="friend-since"
                          data-swiper-parallax={-100}
                        >
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
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img
                    loading="lazy"
                    src="img/friend6.webp"
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
                        src="img/avatar6.webp"
                        alt="author"
                        width={92}
                        height={92}
                      />
                    </div>
                    <div className="author-content">
                      <a href="#" className="h5 author-name">
                        Bruce Peterson
                      </a>
                      <div className="country">Austin, TX</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div
                          className="friend-count"
                          data-swiper-parallax={-500}
                        >
                          <a href="#" className="friend-count-item">
                            <div className="h6">73</div>
                            <div className="title">Friends</div>
                          </a>
                          <a href="#" className="friend-count-item">
                            <div className="h6">360</div>
                            <div className="title">Photos</div>
                          </a>
                          <a href="#" className="friend-count-item">
                            <div className="h6">11</div>
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
                          Hi!, I’m Marina and I’m a Community Manager for
                          “Gametube”. Gamer and full-time mother.
                        </p>
                        <div
                          className="friend-since"
                          data-swiper-parallax={-100}
                        >
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
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img
                    loading="lazy"
                    src="img/friend7.webp"
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
                        src="img/avatar7.webp"
                        alt="author"
                        width={92}
                        height={92}
                      />
                    </div>
                    <div className="author-content">
                      <a href="#" className="h5 author-name">
                        Carol Summers
                      </a>
                      <div className="country">Los Angeles, CA</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div
                          className="friend-count"
                          data-swiper-parallax={-500}
                        >
                          <a href="#" className="friend-count-item">
                            <div className="h6">49</div>
                            <div className="title">Friends</div>
                          </a>
                          <a href="#" className="friend-count-item">
                            <div className="h6">132</div>
                            <div className="title">Photos</div>
                          </a>
                          <a href="#" className="friend-count-item">
                            <div className="h6">5</div>
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
                          Hi!, I’m Marina and I’m a Community Manager for
                          “Gametube”. Gamer and full-time mother.
                        </p>
                        <div
                          className="friend-since"
                          data-swiper-parallax={-100}
                        >
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
          <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
            <div className="ui-block">
              {/* Friend Item */}
              <div className="friend-item">
                <div className="friend-header-thumb">
                  <img
                    loading="lazy"
                    src="img/friend8.webp"
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
                        src="img/avatar8.webp"
                        alt="author"
                        width={92}
                        height={92}
                      />
                    </div>
                    <div className="author-content">
                      <a href="#" className="h5 author-name">
                        Michael Maximoff
                      </a>
                      <div className="country">Portland, OR</div>
                    </div>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div
                          className="friend-count"
                          data-swiper-parallax={-500}
                        >
                          <a href="#" className="friend-count-item">
                            <div className="h6">58</div>
                            <div className="title">Friends</div>
                          </a>
                          <a href="#" className="friend-count-item">
                            <div className="h6">304</div>
                            <div className="title">Photos</div>
                          </a>
                          <a href="#" className="friend-count-item">
                            <div className="h6">19</div>
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
                          Hi!, I’m Marina and I’m a Community Manager for
                          “Gametube”. Gamer and full-time mother.
                        </p>
                        <div
                          className="friend-since"
                          data-swiper-parallax={-100}
                        >
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
        </div>
      </div>
    </div>
  );
}
