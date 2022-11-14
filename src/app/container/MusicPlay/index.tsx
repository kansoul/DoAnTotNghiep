export default function MusicPlay() {
  return (
    <>
      <div>
        {/* Main Header Music */}
        <div className="main-header">
          <div className="content-bg-wrap bg-music" />
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div className="main-header-content">
                  <h1>Listen and Share Music!</h1>
                  <p>
                    Here you’ll be able to manage your Spotify playlist widget
                    and listen all the saved playlists from your friends!
                    Friends playlists will update when they update their Olympus
                    playlists, that way you can build awesome playlists to share
                    with your friends every day and they will always be updated.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            className="img-bottom"
            src="img/music-bottom.webp"
            alt="friends"
            width={1169}
            height={169}
          />
        </div>
        {/* ... end Main Header Music */}
        <div className="container">
          <div className="row">
            <div className="col col-xl-9 order-xl-2 col-lg-6 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Your Playlist Widget Settings</h6>
                </div>
                <div className="ui-block-content">
                  {/* Music Playlist Form  */}
                  <form>
                    <fieldset className="form-group label-floating is-select">
                      <label className="control-label">
                        Songs Showed Before the Jump
                      </label>
                      <select className="form-select">
                        <option value="AL">Show 5 Songs</option>
                        <option value={2}>Show 7 Songs</option>
                        <option value="WY">Show 10 Songs</option>
                      </select>
                    </fieldset>
                    <fieldset className="form-group label-floating is-select">
                      <label className="control-label">
                        Album Cover Options
                      </label>
                      <select className="form-select">
                        <option value="AL">Show Album Covers</option>
                        <option value={2}>Show Album Covers</option>
                        <option value="WY">Show Album Covers</option>
                      </select>
                    </fieldset>
                  </form>
                  {/* ... end Music Playlist Form  */}
                  <p className="mt50">
                    You are logged in to Spotify as{" "}
                    <a href="/#" className="c-green">
                      {" "}
                      James Spiegel Spotify
                    </a>
                  </p>
                  <div className="row">
                    <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                      <a
                        href="/#"
                        className="btn btn-secondary btn-lg full-width"
                        data-bs-toggle="modal"
                        data-bs-target="#faqs-popup"
                      >
                        Link your Playlist FAQs
                      </a>
                    </div>
                    <div className="col col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                      <a
                        href="/#"
                        className="btn btn-green btn-lg full-width btn-icon-left"
                      >
                        <svg width={22} height={22}>
                          <use xlinkHref="#olymp-spotify-icon" />
                        </svg>
                        Spotify Account Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-xl-3 order-xl-1 col-lg-6 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">My Spotify Playlist</h6>
                  <a href="/#" className="more">
                    <svg className="olymp-three-dots-icon">
                      <use xlinkHref="#olymp-three-dots-icon" />
                    </svg>
                  </a>
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
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block responsive-flex">
                <div className="ui-block-title">
                  <div className="h6 title">Your Saved Playlists</div>
                  <div className="align-right">
                    <a
                      href="/#"
                      className="js-open-popup btn btn-md-2 btn-border-think custom-color c-grey"
                      data-popup-target=".playlist-popup"
                    >
                      Open the Music Player
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Green Goo’s Playlist</h6>
                  <a href="/#" className="more">
                    <span className="c-green">
                      <svg className="olymp-remove-playlist-icon">
                        <use xlinkHref="#olymp-remove-playlist-icon" />
                      </svg>
                    </span>
                  </a>
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
            <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Green Goo’s Playlist</h6>
                  <a href="/#" className="more">
                    <span
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="SAVE PLAYLIST"
                    >
                      <svg className="olymp-save-playlist-icon">
                        <use xlinkHref="#olymp-save-playlist-icon" />
                      </svg>
                    </span>
                  </a>
                </div>
                {/* ... end W-Playlist-Without-Cover */}
                <ol className="widget w-playlist without-cover">
                  <li
                    className="js-open-popup"
                    data-popup-target=".playlist-popup"
                  >
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
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
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
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
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
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
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
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
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
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
                {/* W-Playlist-Without-Cover */}
              </div>
            </div>
            <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Marina V’s Playlist</h6>
                  <a href="/#" className="more">
                    <span className="c-green">
                      <svg className="olymp-remove-playlist-icon">
                        <use xlinkHref="#olymp-remove-playlist-icon" />
                      </svg>
                    </span>
                  </a>
                </div>
                {/* W-Playlist */}
                <ol className="widget w-playlist">
                  <li
                    className="js-open-popup"
                    data-popup-target=".playlist-popup"
                  >
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
                      <img
                        loading="lazy"
                        src="img/playlist11.webp"
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
                        The Cowboy
                      </a>
                      <a href="/#" className="composition-author">
                        System of a Revenge
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        4:02
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
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
                      <img
                        loading="lazy"
                        src="img/playlist12.webp"
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
                        The Astronaut
                      </a>
                      <a href="/#" className="composition-author">
                        Jason Bowie
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        3:54
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
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
                      <img
                        loading="lazy"
                        src="img/playlist13.webp"
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
                        City’s Hero
                      </a>
                      <a href="/#" className="composition-author">
                        Kung Fighters
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        4:36
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
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
                      <img
                        loading="lazy"
                        src="img/playlist14.webp"
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
                        Enter Madman
                      </a>
                      <a href="/#" className="composition-author">
                        MetalDeath
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        5:27
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
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
                      <img
                        loading="lazy"
                        src="img/playlist15.webp"
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
                        Wunderbuss
                      </a>
                      <a href="/#" className="composition-author">
                        James White
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        4:09
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
                {/* ... end W-Playlist */}
              </div>
            </div>
            <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">Elaine D’s Playlist</h6>
                  <a href="/#" className="more">
                    <span className="c-green">
                      <svg className="olymp-remove-playlist-icon">
                        <use xlinkHref="#olymp-remove-playlist-icon" />
                      </svg>
                    </span>
                  </a>
                </div>
                {/* W-Playlist */}
                <ol className="widget w-playlist">
                  <li
                    className="js-open-popup"
                    data-popup-target=".playlist-popup"
                  >
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
                      <img
                        loading="lazy"
                        src="img/playlist16.webp"
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
                        The Juggler
                      </a>
                      <a href="/#" className="composition-author">
                        Poison Apple
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        5:17
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
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
                      <img
                        loading="lazy"
                        src="img/playlist17.webp"
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
                        Leap of Faith
                      </a>
                      <a href="/#" className="composition-author">
                        Eden Artifact
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        8:24
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
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
                      <img
                        loading="lazy"
                        src="img/playlist18.webp"
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
                        Bat Tornado
                      </a>
                      <a href="/#" className="composition-author">
                        The Revengers
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        4:57
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
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
                      <img
                        loading="lazy"
                        src="img/playlist19.webp"
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
                        Top Pressure
                      </a>
                      <a href="/#" className="composition-author">
                        Jason Bowie
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        3:21
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
                    <div
                      className="playlist-thumb"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="PLAY / ADD TO PLAYER"
                    >
                      <img
                        loading="lazy"
                        src="img/playlist20.webp"
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
                        Night Troopers
                      </a>
                      <a href="/#" className="composition-author">
                        Iron Maid
                      </a>
                    </div>
                    <div className="composition-time">
                      <time className="published" dateTime="2017-03-24T18:18">
                        5:54
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
                {/* ... end W-Playlist */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
