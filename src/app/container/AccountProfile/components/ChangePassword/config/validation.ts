import * as yup from "yup";

export const passwordSchema = yup.object().shape({
  oldPassword: yup.string().min(8, `Can phai dung dinh dang`),
  newPassword: yup.string().min(8, `Can phai dung dinh dang`),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});
