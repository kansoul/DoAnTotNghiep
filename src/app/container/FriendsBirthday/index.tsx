import DefaultLayout from "app/layouts";

export default function FriendsBirthday() {
  return (
    <>
      <DefaultLayout />
      <div>
        {/* Main Header Birthday */}
        <div className="main-header">
          <div className="content-bg-wrap bg-birthday" />
          <div className="container">
            <div className="row">
              <div className="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div className="main-header-content">
                  <h1>Never Miss a Birthday!</h1>
                  <p>
                    Welcome to your friends birthdays page! Here you’ll find all
                    your friends birthdays so you’ll never mis one again! In
                    addition, the dates are automatically saved to your calendar
                    to let you know, but you also have a “Create Event” button
                    in case you wanna organize a party or event on that
                    especific date.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            className="img-bottom"
            src="img/birthdays-bottom.webp"
            alt="friends"
            width={1169}
            height={161}
          />
        </div>
        {/* ... end Main Header Birthday */}
        {/* Main Content Birthday */}
        <div className="container">
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">January</h6>
                </div>
              </div>
            </div>
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
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar20-sm.webp"
                      alt="author"
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Michael Maximoff
                    </a>
                    <div className="birthday-date">January 24th, 1972</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">February</h6>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar21-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Rachel Howlett
                    </a>
                    <div className="birthday-date">February 4th, 1992</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar4-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Chris Greyson
                    </a>
                    <div className="birthday-date">February 7th, 1988</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar22-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Dave Marinara
                    </a>
                    <div className="birthday-date">February 12th, 1980</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar23-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Jessica Stevens
                    </a>
                    <div className="birthday-date">February 18th, 1986</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar1-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Mathilda Brinker
                    </a>
                    <div className="birthday-date">February 23rd, 1988</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar2-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Nicholas Grissom
                    </a>
                    <div className="birthday-date">February 27th, 1990</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">March</h6>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar10-sm.webp"
                      alt="author"
                      width={36}
                      height={36}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Elaine Dreyfuss
                    </a>
                    <div className="birthday-date">March 1st, 1984</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar67-sm.webp"
                      alt="author"
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Carol Summers
                    </a>
                    <div className="birthday-date">March 1st, 1991</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar24-sm.webp"
                      width={42}
                      height={42}
                      alt="author"
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Luke Scarred
                    </a>
                    <div className="birthday-date">March 6th, 1988</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar26-sm.webp"
                      width={42}
                      height={42}
                      alt="author"
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Marina Polson
                    </a>
                    <div className="birthday-date">March 13th, 1984</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar27-sm.webp"
                      width={42}
                      height={42}
                      alt="author"
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Sarah Knight
                    </a>
                    <div className="birthday-date">March 16th, 1994</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar28-sm.webp"
                      width={42}
                      height={42}
                      alt="author"
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Claire Roberts
                    </a>
                    <div className="birthday-date">March 22nd, 1985</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar29-sm.webp"
                      width={42}
                      height={42}
                      alt="author"
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Jet Pepelu IV
                    </a>
                    <div className="birthday-date">March 27th, 1989</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">April</h6>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar6-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      James Summers
                    </a>
                    <div className="birthday-date">April 14th, 1985</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar30-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Marie Claire Stevens
                    </a>
                    <div className="birthday-date">April 21st, 1994</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar31-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Jessy Owens
                    </a>
                    <div className="birthday-date">April 28th, 1988</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">May</h6>
                </div>
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">June</h6>
                </div>
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">July</h6>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar32-sm.webp"
                      alt="author"
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Lindsay Jeffson
                    </a>
                    <div className="birthday-date">July 5th, 1990</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar33-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Mary Jane Stark
                    </a>
                    <div className="birthday-date">July 8th, 1987</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">August</h6>
                </div>
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">September</h6>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar34-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Mark Taylor
                    </a>
                    <div className="birthday-date">September 14th, 1987</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar3-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Sarah Hetfield
                    </a>
                    <div className="birthday-date">September 17th, 1990</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar35-sm.webp"
                      alt="author"
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Tony Stevens
                    </a>
                    <div className="birthday-date">September 20th, 1984</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar36-sm.webp"
                      alt="author"
                      width={42}
                      height={42}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Ann Marie Gibson
                    </a>
                    <div className="birthday-date">September 22nd, 1988</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">October</h6>
                </div>
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">November</h6>
                </div>
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                <div className="ui-block-title">
                  <h6 className="title">December</h6>
                </div>
              </div>
            </div>
            <div className="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="ui-block">
                {/* Birthday Item */}
                <div className="birthday-item inline-items">
                  <div className="author-thumb">
                    <img
                      loading="lazy"
                      src="img/avatar8-sm.webp"
                      alt="author"
                      width={36}
                      height={36}
                    />
                  </div>
                  <div className="birthday-author-name">
                    <a href="/#" className="h6 author-name">
                      Diana Jameson
                    </a>
                    <div className="birthday-date">December 17th, 1989</div>
                  </div>
                  <a
                    href="20-CalendarAndEvents-MonthlyCalendar.html"
                    className="btn btn-sm bg-blue"
                  >
                    Create Event
                  </a>
                </div>
                {/* ... end Birthday Item */}
              </div>
            </div>
          </div>
        </div>
        {/* ... end Main Content Birthday */}
      </div>
    </>
  );
}
