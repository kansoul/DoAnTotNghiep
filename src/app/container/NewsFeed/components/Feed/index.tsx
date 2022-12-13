export default function Feed() {
  return (
    <div className="ui-block">
      <article className="hentry post has-post-thumbnail">
        <div className="post__author author vcard inline-items">
          <img
            loading="lazy"
            src="img/avatar3-sm.webp"
            alt="author"
            width={42}
            height={42}
          />
          <div className="author-date">
            <a className="h6 post__author-name fn" href="/#">
              Sarah Hetfield
            </a>
            <div className="post__date">
              <time className="published" dateTime="2004-07-24T18:18">
                March 2 at 9:06am
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
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque.
        </p>
        <div className="post-additional-info inline-items">
          <a href="/#" className="post-add-icon inline-items">
            <svg className="olymp-heart-icon">
              <use xlinkHref="#olymp-heart-icon" />
            </svg>
            <span>0 Likes</span>
          </a>
          <div className="comments-shared">
            <a href="/#" className="post-add-icon inline-items">
              <svg className="olymp-speech-balloon-icon">
                <use xlinkHref="#olymp-speech-balloon-icon" />
              </svg>
              <span>0 Comments</span>
            </a>
            <a href="/#" className="post-add-icon inline-items">
              <svg className="olymp-share-icon">
                <use xlinkHref="#olymp-share-icon" />
              </svg>
              <span>2 Shares</span>
            </a>
          </div>
        </div>
        <div className="control-block-button post-control-button">
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
    </div>
  );
}
