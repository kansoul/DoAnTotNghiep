import { dateTimeFormatVietNam } from "utils/datetime";
import { Markup } from "interweave";

export default function Post(props: { profileInfo: any; diaryData: any }) {
  const { profileInfo, diaryData } = props;
  return (
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
              Ngày {dateTimeFormatVietNam(new Date(diaryData?.date))}
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
        <h4>{diaryData?.title}</h4>
        {/* <div>{diaryData?.content}</div> */}
        <Markup content={diaryData?.content} />
      </div>
      <div className="post-additional-info inline-items">
        <a href="/#" className="post-add-icon inline-items">
          <svg className="olymp-heart-icon">
            <use xlinkHref="#olymp-heart-icon" />
          </svg>
          <span>8</span>
        </a>
        <div className="names-people-likes"></div>
        <div className="comments-shared"></div>
      </div>
      <div className="control-block-button post-control-button">
        <a href="/#" className="btn btn-control">
          <svg className="olymp-like-post-icon">
            <use xlinkHref="#olymp-like-post-icon" />
          </svg>
        </a>
      </div>
    </article>
  );
}
