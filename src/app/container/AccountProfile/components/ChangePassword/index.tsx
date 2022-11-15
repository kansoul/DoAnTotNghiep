export default function ChangePassword() {
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Change Password</h6>
      </div>
      <div className="ui-block-content">
        {/* Change Password Form */}
        <form>
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="form-group label-floating">
                <label className="control-label">
                  Confirm Current Password
                </label>
                <input
                  className="form-control"
                  type="password"
                  defaultValue="Olympus-2017"
                />
              </div>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group label-floating is-empty">
                <label className="control-label">Your New Password</label>
                <input className="form-control" type="password" />
              </div>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group label-floating is-empty">
                <label className="control-label">Confirm New Password</label>
                <input className="form-control" type="password" />
              </div>
            </div>
            <div className="col col-lg-12 col-sm-12 col-sm-12 col-12">
              <div className="remember">
                <div className="checkbox">
                  <label>
                    <input name="optionsCheckboxes" type="checkbox" />
                    Remember Me
                  </label>
                </div>
                <a
                  href="/#"
                  className="forgot"
                  data-bs-toggle="modal"
                  data-bs-target="#restore-password"
                >
                  Forgot my Password
                </a>
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <button className="btn btn-primary btn-lg full-width">
                Change Password Now!
              </button>
            </div>
          </div>
        </form>
        {/* ... end Change Password Form */}
      </div>
    </div>
  );
}
