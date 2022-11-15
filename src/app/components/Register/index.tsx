import { yupResolver } from "@hookform/resolvers/yup";
import { auth, registerWithEmailAndPassword } from "app/services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { createSchema } from "./config/validation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";

const defaultValues: any = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthday: "",
  gender: "",
};
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver(createSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues,
  });

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/profile");
    // eslint-disable-next-line
  }, [user, loading]);
  const handleFormSubmit = async (data: any) => {
    try {
      registerWithEmailAndPassword(data);
    } catch (error) {
      toast.error("error");
    }
  };
  return (
    <>
      <div>
        <div className="content-bg-wrap" />
        <div className="header-spacer--standard" />
        <div className="container">
          <div className="row display-flex">
            <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              {/* Login-Registration Form  */}
              <div className="registration-login-form">
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
                    <form
                      className="content"
                      onSubmit={handleSubmit(handleFormSubmit)}
                    >
                      <div className="row">
                        <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group label-floating">
                            <label className="control-label">First Name</label>
                            <input
                              className="form-control"
                              {...register("firstName")}
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group label-floating">
                            <label className="control-label">Last Name</label>
                            <input
                              className="form-control"
                              {...register("lastName")}
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group label-floating">
                            <label className="control-label">Your Email</label>
                            <input
                              className="form-control"
                              {...register("email")}
                              type="email"
                            />
                          </div>
                          <div className="form-group label-floating">
                            <label className="control-label">
                              Your Password
                            </label>
                            <input
                              className="form-control"
                              {...register("password")}
                              type="password"
                            />
                          </div>
                          <div className="form-group date-time-picker label-floating">
                            <label className="control-label">
                              Your Birthday
                            </label>
                            <input type="date" {...register("birthday")} />
                            <span className="input-group-addon">
                              <svg className="olymp-calendar-icon">
                                <use xlinkHref="#olymp-calendar-icon" />
                              </svg>
                            </span>
                          </div>
                          <div className="form-group label-floating is-select">
                            <label className="control-label">Your Gender</label>
                            <select
                              className="form-select"
                              {...register("gender")}
                            >
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
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-purple btn-lg full-width"
                          >
                            Complete Registration!
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
