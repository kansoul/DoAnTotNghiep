export default function Register() {
  return (
    <>
      <div>
        <div className="content-bg-wrap" />
        {/* Header Standard Landing  */}
        <div
          className="header--standard header--standard-landing"
          id="header--standard"
        >
          <div className="container">
            <div className="header--standard-wrap">
              <a href="/#" className="logo">
                <div className="img-wrap">
                  <img
                    loading="lazy"
                    src="img/logo.webp"
                    alt="Olympus"
                    width={34}
                    height={34}
                  />
                  <img
                    loading="lazy"
                    src="img/logo-colored-small.webp"
                    width={34}
                    height={34}
                    alt="Olympus"
                    className="logo-colored"
                  />
                </div>
                <div className="title-block">
                  <h6 className="logo-title">olympus</h6>
                  <div className="sub-title">SOCIAL NETWORK</div>
                </div>
              </a>
              <a
                href="/#"
                className="open-responsive-menu js-open-responsive-menu"
              >
                <svg className="olymp-menu-icon">
                  <use xlinkHref="#olymp-menu-icon" />
                </svg>
              </a>
              <div className="nav nav-pills nav1 header-menu">
                <div className="mCustomScrollbar">
                  <ul>
                    <li className="nav-item">
                      <a href="/#" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        data-bs-hover="dropdown"
                        data-bs-toggle="dropdown"
                        href="/#"
                        role="button"
                        aria-haspopup="false"
                        aria-expanded="false"
                        tabIndex={1}
                      >
                        Profile
                      </a>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="/#">
                          Profile Page
                        </a>
                        <a className="dropdown-item" href="/#">
                          Newsfeed
                        </a>
                        <a className="dropdown-item" href="/#">
                          Post Versions
                        </a>
                      </div>
                    </li>
                    <li className="nav-item dropdown dropdown-has-megamenu">
                      <a
                        href="/#"
                        className="nav-link dropdown-toggle"
                        data-bs-hover="dropdown"
                        data-bs-toggle="dropdown"
                        role="button"
                        aria-haspopup="false"
                        aria-expanded="false"
                        tabIndex={1}
                      >
                        Forums
                      </a>
                      <div className="dropdown-menu megamenu">
                        <div className="row">
                          <div className="col col-sm-3">
                            <h6 className="column-tittle">Main Links</h6>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                              <span className="tag-label bg-blue-light">
                                new
                              </span>
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                          </div>
                          <div className="col col-sm-3">
                            <h6 className="column-tittle">BuddyPress</h6>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                              <span className="tag-label bg-primary">HOT!</span>
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                          </div>
                          <div className="col col-sm-3">
                            <h6 className="column-tittle">Corporate</h6>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                          </div>
                          <div className="col col-sm-3">
                            <h6 className="column-tittle">Forums</h6>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                            <a className="dropdown-item" href="/#">
                              Profile Page
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a href="/#" className="nav-link">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#" className="nav-link">
                        Events
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/#" className="nav-link">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="close-responsive-menu js-close-responsive-menu">
                      <svg className="olymp-close-icon">
                        <use xlinkHref="#olymp-close-icon" />
                      </svg>
                    </li>
                    <li className="nav-item js-expanded-menu">
                      <a href="/#" className="nav-link">
                        <svg className="olymp-menu-icon">
                          <use xlinkHref="#olymp-menu-icon" />
                        </svg>
                        <svg className="olymp-close-icon">
                          <use xlinkHref="#olymp-close-icon" />
                        </svg>
                      </a>
                    </li>
                    <li className="shoping-cart more">
                      <a href="/#" className="nav-link">
                        <svg className="olymp-shopping-bag-icon">
                          <use xlinkHref="#olymp-shopping-bag-icon" />
                        </svg>
                        <span className="count-product">2</span>
                      </a>
                      <div className="more-dropdown shop-popup-cart">
                        <ul>
                          <li className="cart-product-item">
                            <div className="product-thumb">
                              <img
                                loading="lazy"
                                src="img/product1.webp"
                                alt="product"
                                width={35}
                                height={28}
                              />
                            </div>
                            <div className="product-content">
                              <h6 className="title">White Enamel Mug</h6>
                              <ul className="rait-stars">
                                <li>
                                  <svg
                                    className="star-icon c-primary"
                                    width={10}
                                    height={10}
                                  >
                                    <use xlinkHref="#olymp-star-full" />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    className="star-icon c-primary"
                                    width={10}
                                    height={10}
                                  >
                                    <use xlinkHref="#olymp-star-full" />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    className="star-icon c-primary"
                                    width={10}
                                    height={10}
                                  >
                                    <use xlinkHref="#olymp-star-full" />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    className="star-icon c-primary"
                                    width={10}
                                    height={10}
                                  >
                                    <use xlinkHref="#olymp-star-full" />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    className="star-icon"
                                    width={10}
                                    height={10}
                                  >
                                    <use xlinkHref="#olymp-star-null" />
                                  </svg>
                                </li>
                              </ul>
                              <div className="counter">x2</div>
                            </div>
                            <div className="product-price">$20</div>
                            <div className="more">
                              <svg className="olymp-little-delete">
                                <use xlinkHref="#olymp-little-delete" />
                              </svg>
                            </div>
                          </li>
                          <li className="cart-product-item">
                            <div className="product-thumb">
                              <img
                                loading="lazy"
                                src="img/product2.webp"
                                alt="product"
                                width={28}
                                height={45}
                              />
                            </div>
                            <div className="product-content">
                              <h6 className="title">Olympus Orange Shirt</h6>
                              <ul className="rait-stars">
                                <li>
                                  <svg
                                    className="star-icon c-primary"
                                    width={10}
                                    height={10}
                                  >
                                    <use xlinkHref="#olymp-star-full" />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    className="star-icon c-primary"
                                    width={10}
                                    height={10}
                                  >
                                    <use xlinkHref="#olymp-star-full" />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    className="star-icon c-primary"
                                    width={10}
                                    height={10}
                                  >
                                    <use xlinkHref="#olymp-star-full" />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    className="star-icon c-primary"
                                    width={10}
                                    height={10}
                                  >
                                    <use xlinkHref="#olymp-star-full" />
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    className="star-icon"
                                    width={10}
                                    height={10}
                                  >
                                    <use xlinkHref="#olymp-star-null" />
                                  </svg>
                                </li>
                              </ul>
                              <div className="counter">x1</div>
                            </div>
                            <div className="product-price">$40</div>
                            <div className="more">
                              <svg className="olymp-little-delete">
                                <use xlinkHref="#olymp-little-delete" />
                              </svg>
                            </div>
                          </li>
                        </ul>
                        <div className="cart-subtotal">
                          Cart Subtotal:<span>$80</span>
                        </div>
                        <div className="cart-btn-wrap">
                          <a href="/#" className="btn btn-primary btn-sm">
                            Go to Your Cart
                          </a>
                          <a href="/#" className="btn btn-purple btn-sm">
                            Go to Checkout
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="menu-search-item">
                      <a
                        href="/#"
                        className="nav-link"
                        data-bs-toggle="modal"
                        data-bs-target="#main-popup-search"
                      >
                        <svg className="olymp-magnifying-glass-icon">
                          <use xlinkHref="#olymp-magnifying-glass-icon" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ... end Header Standard Landing  */}
        <div className="header-spacer--standard" />
        <div className="container">
          <div className="row display-flex">
            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="landing-content">
                <h1>Welcome to the Biggest Social Network in the World</h1>
                <p>
                  We are the best and biggest social network with 5 billion
                  active users all around the world. Share you thoughts, write
                  blog posts, show your favourite music via Stopify, earn badges
                  and much more!
                </p>
                <a href="/#" className="btn btn-md btn-border c-white">
                  Register Now!
                </a>
              </div>
            </div>
            <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              {/* Login-Registration Form  */}
              <div className="registration-login-form">
                {/* Nav tabs */}
                <ul
                  className="nav nav-tabs"
                  id="registration-form-tabs"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="login-tab"
                      data-bs-toggle="tab"
                      href="#login"
                      role="tab"
                      aria-controls="login"
                      aria-selected="true"
                    >
                      <svg className="olymp-login-icon">
                        <use xlinkHref="#olymp-login-icon" />
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      <svg className="olymp-register-icon">
                        <use xlinkHref="#olymp-register-icon" />
                      </svg>
                    </a>
                  </li>
                </ul>
                {/* Tab panes */}
                <div
                  className="tab-content"
                  id="registration-form-tabs-content"
                >
                  <div
                    className="tab-pane fade show active"
                    id="login"
                    role="tabpanel"
                    aria-labelledby="login-tab"
                  >
                    <div className="title h6">Register to Olympus</div>
                    <form className="content">
                      <div className="row">
                        <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group label-floating">
                            <label className="control-label">First Name</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group label-floating">
                            <label className="control-label">Last Name</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group label-floating">
                            <label className="control-label">Your Email</label>
                            <input className="form-control" type="email" />
                          </div>
                          <div className="form-group label-floating">
                            <label className="control-label">
                              Your Password
                            </label>
                            <input className="form-control" type="password" />
                          </div>
                          <div className="form-group date-time-picker label-floating">
                            <label className="control-label">
                              Your Birthday
                            </label>
                            <input
                              name="datetimepicker"
                              defaultValue="10/24/1984"
                            />
                            <span className="input-group-addon">
                              <svg className="olymp-calendar-icon">
                                <use xlinkHref="#olymp-calendar-icon" />
                              </svg>
                            </span>
                          </div>
                          <div className="form-group label-floating is-select">
                            <label className="control-label">Your Gender</label>
                            <select className="form-select">
                              <option value="MA">Male</option>
                              <option value="FE">Female</option>
                            </select>
                          </div>
                          <div className="remember">
                            <div className="checkbox">
                              <label>
                                <input
                                  name="optionsCheckboxes"
                                  type="checkbox"
                                />
                                I accept the{" "}
                                <a href="/#">Terms and Conditions</a> of the
                                website
                              </label>
                            </div>
                          </div>
                          <a
                            href="/#"
                            className="btn btn-purple btn-lg full-width"
                          >
                            Complete Registration!
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="title h6">Login to your Account</div>
                    <form className="content">
                      <div className="row">
                        <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group label-floating">
                            <label className="control-label">Your Email</label>
                            <input className="form-control" type="email" />
                          </div>
                          <div className="form-group label-floating">
                            <label className="control-label">
                              Your Password
                            </label>
                            <input className="form-control" type="password" />
                          </div>
                          <div className="remember">
                            <div className="checkbox">
                              <label>
                                <input
                                  name="optionsCheckboxes"
                                  type="checkbox"
                                />
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
                          <a
                            href="/#"
                            className="btn btn-lg btn-primary full-width"
                          >
                            Login
                          </a>
                          <div className="or" />
                          <a
                            href="/#"
                            className="btn btn-lg bg-facebook full-width btn-icon-left"
                          >
                            <svg width={16} height={16}>
                              <use xlinkHref="#olymp-facebook-icon" />
                            </svg>
                            Login with Facebook
                          </a>
                          <a
                            href="/#"
                            className="btn btn-lg bg-twitter full-width btn-icon-left"
                          >
                            <svg width={16} height={16}>
                              <use xlinkHref="#olymp-twitter-icon" />
                            </svg>
                            Login with Twitter
                          </a>
                          <p>
                            Don’t you have an account?{" "}
                            <a href="/#">Register Now!</a> it’s really simple
                            and you can start enjoing all the benefits!
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* ... end Login-Registration Form  */}{" "}
            </div>
          </div>
        </div>
        {/* Window-popup Restore Password */}
        <div
          className="modal fade"
          id="restore-password"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="restore-password"
          aria-hidden="true"
        >
          <div
            className="modal-dialog window-popup restore-password-popup"
            role="document"
          >
            <div className="modal-content">
              <a
                href="/#"
                className="close icon-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg className="olymp-close-icon">
                  <use xlinkHref="#olymp-close-icon" />
                </svg>
              </a>
              <div className="modal-header">
                <h6 className="title">Restore your Password</h6>
              </div>
              <div className="modal-body">
                <form method="get">
                  <p>
                    Enter your email and click the send code button. You’ll
                    receive a code in your email. Please use that code below to
                    change the old password for a new one.
                  </p>
                  <div className="form-group label-floating">
                    <label className="control-label">Your Email</label>
                    <input
                      className="form-control"
                      type="email"
                      defaultValue="james-spiegel@yourmail.com"
                    />
                  </div>
                  <button className="btn btn-purple btn-lg full-width">
                    Send me the Code
                  </button>
                  <div className="form-group label-floating">
                    <label className="control-label">Enter the Code</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group label-floating">
                    <label className="control-label">Your New Password</label>
                    <input className="form-control" type="password" />
                  </div>
                  <button className="btn btn-primary btn-lg full-width">
                    Change your Password!
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* ... end Window-popup Restore Password */}
        {/* Window Popup Main Search */}
        <div
          className="modal fade"
          id="main-popup-search"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="main-popup-search"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered window-popup main-popup-search"
            role="document"
          >
            <div className="modal-content">
              <a
                href="/#"
                className="close icon-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg className="olymp-close-icon">
                  <use xlinkHref="#olymp-close-icon" />
                </svg>
              </a>
              <div className="modal-body">
                <form className="form-inline search-form" method="post">
                  <div className="form-group label-floating">
                    <label className="control-label">
                      What are you looking for?
                    </label>
                    <input className="form-control bg-white" type="text" />
                  </div>
                  <button className="btn btn-purple btn-lg">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
