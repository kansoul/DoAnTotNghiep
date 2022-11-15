import * as yup from "yup";

const REGEX_EMAIL =
  /^(([a-zA-Z0-9-_]+(\.[^.]+)*)|(\".+\"))[a-zA-Z0-9-_]@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

export const createSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("This field is required!")
    .max(50, "Email khong duoc qua 50 ki tu"),
  lastName: yup
    .string()
    .required("This field is required!")
    .max(50, "Email khong duoc qua 50 ki tu"),
  email: yup
    .string()
    .required("This field is required!")
    .max(50, "Email khong duoc qua 50 ki tu")
    .matches(REGEX_EMAIL, "Phai nhap dung dinh dang"),
  password: yup.string().required("This field is required!"),
  birthday: yup.string().required("This field is required!"),
  gender: yup.string().required("This field is required!"),
});
