export default function FriendCardAdd() {
  return (
    <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
      <div className="ui-block">
        {/* Birthday Item */}
        <div className="birthday-item inline-items">
          <div className="author-thumb">
            <img
              loading="lazy"
              src="img/avatar7-sm.webp"
              alt="author"
              width={42}
              height={42}
            />
          </div>
          <div className="birthday-author-name">
            <a href="/#" className="h6 author-name">
              Marina Valentine{" "}
            </a>
            <div className="birthday-date">January 16th, 1989</div>
          </div>
          <a
            href="20-CalendarAndEvents-MonthlyCalendar.html"
            className="btn btn-sm bg-blue"
          >
            Add Friend
          </a>
        </div>
        {/* ... end Birthday Item */}
      </div>
    </div>
  );
}
