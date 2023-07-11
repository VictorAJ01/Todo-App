import * as yup from "yup";

export const authSchema = yup
  .object({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter password"),
  })
  .required();
