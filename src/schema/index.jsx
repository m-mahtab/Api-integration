import * as Yup from "yup";

export const signUpSchema = Yup.object({
    username: Yup.string().min(2).max(25).required("Please enter your username"),
    password: Yup.string().min(6).required("Please enter your password")
})