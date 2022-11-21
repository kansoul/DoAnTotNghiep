import { yupResolver } from "@hookform/resolvers/yup";
import { InputControl } from "app/components/Base";
import {
  getAuth,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { passwordSchema } from "./config/validation";

const defaultValues: any = {
  oldPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

export default function ChangePassword() {
  const auth = getAuth();
  const user: any = auth.currentUser;

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(passwordSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues,
  });

  const handleFormSubmit = async (data: any) => {
    try {
      await signInWithEmailAndPassword(auth, user.email, data.oldPassword);
      updatePassword(user, data.newPassword)
        .then(() => {
          alert("Update success");
        })
        .catch((error) => {
          console.log(error.message);
          if (error.message === "Firebase: Error (auth/requires-recent-login).")
            alert("Dang nhap lai");
        });
    } catch (err: any) {
      console.error(err);
      alert("Sai email hoac password");
    }
  };
  return (
    <div className="ui-block">
      <div className="ui-block-title">
        <h6 className="title">Change Password</h6>
      </div>
      <div className="ui-block-content">
        {/* Change Password Form */}
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="row">
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="form-group label-floating">
                <label className="control-label">
                  Confirm Current Password
                </label>
                <InputControl
                  control={control}
                  className="form-control"
                  type="password"
                  name="oldPassword"
                />
              </div>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group label-floating is-empty">
                <label className="control-label">Your New Password</label>
                <InputControl
                  control={control}
                  className="form-control"
                  name="newPassword"
                  type="password"
                />
              </div>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="form-group label-floating is-empty">
                <label className="control-label">Confirm New Password</label>
                <InputControl
                  control={control}
                  className="form-control"
                  name="confirmNewPassword"
                  type="password"
                />
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
              </div>
            </div>
            <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <button
                className="btn btn-primary btn-lg full-width"
                type="submit"
              >
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
