import { yupResolver } from "@hookform/resolvers/yup";
import { logInWithEmailAndPassword } from "app/services/firebase";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createSchema } from "./config/validation";

const defaultValues: any = {
  email: "",
  password: "",
};

export default function LoginPage(props: {
  setStateLogin: (value: boolean) => void;
}) {
  const { setStateLogin } = props;
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
  const handleFormSubmit = async (data: any) => {
    try {
      logInWithEmailAndPassword(data?.email, data.password);
    } catch (error) {
      toast.error("error");
    }
  };
  return (
    <>
      <div>
        <div className="header-spacer--standard" />
        <div className="container">
          <div className="row display-flex justify-center">
            <div className="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="registration-login-form">
                <div
                  className="tab-content"
                  id="registration-form-tabs-content"
                >
                  <div
                    className="tab-pane fade active show"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="title h6">Login to your Account</div>
                    <form
                      className="content"
                      onSubmit={handleSubmit(handleFormSubmit)}
                    >
                      <div className="row">
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
                          <button
                            className={`btn btn-lg btn-primary full-width ${
                              isSubmitting && "cursor-not-allowed"
                            }`}
                            type="submit"
                          >
                            Login
                          </button>

                          <p>
                            Don’t you have an account?{" "}
                            <span
                              onClick={() => setStateLogin(false)}
                              style={{ color: "#ff5e3a", cursor: "pointer" }}
                            >
                              Register Now!
                            </span>{" "}
                            it’s really simple and you can start enjoing all the
                            benefits!
                          </p>
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
