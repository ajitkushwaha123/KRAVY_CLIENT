import axios from "axios";
import { tryCatch } from "../../utils/tryCatch";

axios.defaults.withCredentials = true;

const API_URL = `${import.meta.env.VITE_API_URL}`;

export const loginWithPassword = (data) =>
  tryCatch(
    () => axios.post(`${API_URL}/user/login`, data),
    "Error in logging in user... !"
  );

export const loginWithOtp = (data) =>
  tryCatch(
    () => axios.post(`${API_URL}/user/login-otp`, data),
    "Error in signing in with OTP... !"
  );

export const registerUser = (data) =>
  tryCatch(
    () => axios.post(`${API_URL}/user/register`, data),
    "Error in registering user... !"
  );

export const getUser = () =>
  tryCatch(
    () => axios.get(`${API_URL}/user`),
    "Error in getting user data... !"
  );

export const refreshToken = () =>
  tryCatch(
    () => axios.get(`${API_URL}/user/refresh`),
    "Error in refreshing token... !"
  );

export const sendOtp = (data) =>
  tryCatch(
    () => axios.post(`${API_URL}/user/send-otp`, data),
    "Error in sending OTP... !"
  );

export const requestResendOtp = (data) =>
  tryCatch(
    () => axios.post(`${API_URL}/user/resend-otp`, data),
    "Error in resending OTP... !"
  );

export const sendLoginOtp = (data) =>
  tryCatch(
    () => axios.post(`${API_URL}/user/send-login-otp`, data),
    "Error in sending login OTP... !"
  );

export const sendResetPasswordEmail = (data) =>
  tryCatch(
    () => axios.post(`${API_URL}/user/forget-password`, data),
    "Error in sending reset password email... !"
  );

export const resetPassword = (data) =>
  tryCatch(
    () => axios.post(`${API_URL}/user/reset-password`, data),
    "Error in resetting password... !"
  );
