import * as Yup from "yup";

export const emailValidate = Yup.object({
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
});

export const validateLoginWithPassword = Yup.object({
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const registerValidate = Yup.object({
  username: Yup.string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .required("Username is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const registerWithOtpValidate = Yup.object({
  username: Yup.string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    )
    .required("Username is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  otp: Yup.string()
    .length(4, "OTP must be 4 characters")
    .required("OTP is required"),
});

export const loginWithOtpValidate = Yup.object({
  email: Yup.string()
    .trim()
    .required("Username or Email is required"),
  otp: Yup.string()
    .length(4, "OTP must be 4 characters")
    .required("OTP is required"),
});

export const resetPasswordValidate = Yup.object({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
