export default function AccountInformation() {
  return (
    <div className="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
      <div className="ui-block">
        <div className="ui-block-title">
          <h6 className="title">Personal Information</h6>
        </div>
        <div className="ui-block-content">
          {/* Personal Information Form  */}
          <form>
            <div className="row">
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group label-floating">
                  <label className="control-label">First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="James"
                  />
                </div>
                <div className="form-group label-floating">
                  <label className="control-label">Your Email</label>
                  <input
                    className="form-control"
                    type="email"
                    defaultValue="jspiegel@yourmail.com"
                  />
                </div>
                <div className="form-group date-time-picker label-floating">
                  <label className="control-label">Your Birthday</label>
                  <input name="datetimepicker" defaultValue="10/24/1984" />
                  <span className="input-group-addon">
                    <svg className="olymp-month-calendar-icon icon">
                      <use xlinkHref="#olymp-month-calendar-icon" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group label-floating">
                  <label className="control-label">Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="Spiegel"
                  />
                </div>
                <div className="form-group label-floating">
                  <label className="control-label">Your Website</label>
                  <input
                    className="form-control"
                    type="email"
                    defaultValue="daydreamzagency.com"
                  />
                </div>
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Your Phone Number</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">Your Country</label>
                  <select className="form-select">
                    <option value="US">United States</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>
              </div>
              <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">Your State / Province</label>
                  <select className="form-select">
                    <option value="CA">California</option>
                    <option value="TE">Texas</option>
                  </select>
                </div>
              </div>
              <div className="col col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="form-group label-floating is-select">
                  <label className="control-label">Your City</label>
                  <select className="form-select">
                    <option value="SF">San Francisco</option>
                    <option value="NY">New York</option>
                  </select>
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Write a little description about you"
                    defaultValue={
                      "Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56"
                    }
                  />
                </div>
                <div className="form-group label-floating is-select">
                  <label className="control-label">Your Gender</label>
                  <select className="form-select">
                    <option value="MA">Male</option>
                    <option value="FE">Female</option>
                  </select>
                </div>
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Religious Belifs</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="form-group label-floating is-empty">
                  <label className="control-label">Your Birthplace</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group label-floating">
                  <label className="control-label">Your Occupation</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="UI/UX Designer"
                  />
                </div>
                <div className="form-group label-floating is-select">
                  <label className="control-label">Status</label>
                  <select className="form-select">
                    <option value="MA">Married</option>
                    <option value="FE">Not Married</option>
                  </select>
                </div>
                <div className="form-group label-floating">
                  <label className="control-label">Political Incline</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="Democrat"
                  />
                </div>
              </div>
              <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="form-group with-icon label-floating">
                  <label className="control-label">Your Facebook Account</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="www.facebook.com/james-spiegel95321"
                  />
                  <svg className="c-facebook" width={20} height={20}>
                    <use xlinkHref="#olymp-facebook-icon" />
                  </svg>
                </div>
                <div className="form-group with-icon label-floating">
                  <label className="control-label">Your Twitter Account</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="www.twitter.com/james_spiegelOK"
                  />
                  <svg className="c-twitter" width={20} height={20}>
                    <use xlinkHref="#olymp-twitter-icon" />
                  </svg>
                </div>
                <div className="form-group with-icon label-floating is-empty">
                  <label className="control-label">Your RSS Feed Account</label>
                  <input className="form-control" type="text" />
                  <svg className="c-rss" width={20} height={20}>
                    <use xlinkHref="#olymp-rss-icon" />
                  </svg>
                </div>
                <div className="form-group with-icon label-floating">
                  <label className="control-label">Your Dribbble Account</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue="www.dribbble.com/thecowboydesigner"
                  />
                  <svg className="c-dribbble" width={20} height={20}>
                    <use xlinkHref="#olymp-dribble-icon" />
                  </svg>
                </div>
                <div className="form-group with-icon label-floating is-empty">
                  <label className="control-label">Your Spotify Account</label>
                  <input className="form-control" type="text" />
                  <svg className="c-spotify" width={20} height={20}>
                    <use xlinkHref="#olymp-spotify-icon" />
                  </svg>
                </div>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <button className="btn btn-secondary btn-lg full-width">
                  Restore all Attributes
                </button>
              </div>
              <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                <button className="btn btn-primary btn-lg full-width">
                  Save all Changes
                </button>
              </div>
            </div>
          </form>
          {/* ... end Personal Information Form  */}
        </div>
      </div>
    </div>
  );
}
