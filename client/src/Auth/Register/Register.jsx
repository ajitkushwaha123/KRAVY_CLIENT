import { useState, useEffect } from "react";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import { Button, TextField, Otp } from "../../component/popular";
import {
  registerValidate,
  registerWithOtpValidate,
} from "../../helper/validator";
import { registerUser, sendOtp, requestResendOtp } from "../../helper/helper";
import { handleFormSubmit } from "../../../utils/formUtils";

const Register = () => {
  const [showOtpField, setShowOtpField] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const resendOtp = async () => {
    setIsLoading(true);
    await handleFormSubmit(
      { email: formik.values.email, subject: formik.values.subject },
      {},
      {
        helperFunction: requestResendOtp,
        loadingMsg: "Resending OTP...",
        successMsg: "OTP resent successfully!",
        setIsLoading,
        onSuccess: () => setTimer(60),
      }
    );
  };

  const getHelperFunction = () => {
    if (!showOtpField) {
      return {
        onValidate: registerValidate,
        func: sendOtp,
        onSuccess: () => {
          setShowOtpField(true);
          setTimer(60);
        },
        successMsg: "OTP sent successfully!",
        loadingMsg: "Sending OTP...",
      };
    } else {
      return {
        onValidate: registerWithOtpValidate,
        func: registerUser,
        onSuccess: () => navigate("/profile"),
        successMsg: "Registration successful!",
        loadingMsg: "Registering user...",
      };
    }
  };

  const { func, onValidate, onSuccess, successMsg, loadingMsg } =
    getHelperFunction();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      otp: "",
      subject: "✨ Verify Your Email for Kravy 🍴🥗 - Your OTP Code is Ready!",
      role: "restaurant",
    },
    validationSchema: onValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, formikHelpers) => {
      setIsLoading(true);
      await handleFormSubmit(values, formikHelpers, {
        helperFunction: func,
        setIsLoading,
        successMsg,
        loadingMsg,
        onSuccess,
      });
    },
  });

  const hasSubmitted = formik.submitCount > 0;
  const errorMessage =
    (hasSubmitted && formik.errors.username) ||
    formik.errors.email ||
    formik.errors.password;

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join Kravy and enjoy personalized meals!"
      footerLink={{
        text: "Already have an account?",
        link: "/restaurant/login",
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      <form
        onSubmit={formik.handleSubmit}
        className={`space-y-4 transition-opacity duration-200 ${
          isLoading ? "pointer-events-none opacity-70" : ""
        }`}
      >
        {!showOtpField && (
          <>
            <TextField
              title="USERNAME"
              name="username"
              type="text"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            <TextField
              title="EMAIL"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <TextField
              title="PASSWORD"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </>
        )}

        {showOtpField && (
          <>
            <Otp otpEntered={(val) => formik.setFieldValue("otp", val)} />
            <div className="flex justify-end mt-1">
              <button
                onClick={resendOtp}
                disabled={timer > 0 || isLoading}
                type="button"
                className={`text-xs uppercase font-medium transition duration-150 ease-in-out ${
                  timer > 0 || isLoading
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-indigo-600 dark:text-indigo-400 hover:underline"
                }`}
              >
                {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
              </button>
            </div>
          </>
        )}

        {hasSubmitted && errorMessage && (
          <div className="text-red-500 dark:text-red-400 text-sm text-start font-medium mt-2">
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          title={
            isLoading ? "LOADING..." : showOtpField ? "REGISTER" : "SEND OTP"
          }
          disabled={isLoading}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 disabled:opacity-50"
        />
      </form>

      {!showOtpField && (
        <div className="flex items-center justify-between mt-6">
          <span className="w-1/5 border-b border-gray-300 dark:border-gray-600 md:w-1/4" />
          <Link
            to="/login"
            className="text-xs text-gray-500 dark:text-gray-400 uppercase hover:underline"
          >
            Or Login
          </Link>
          <span className="w-1/5 border-b border-gray-300 dark:border-gray-600 md:w-1/4" />
        </div>
      )}
    </AuthLayout>
  );
};

export default Register;
