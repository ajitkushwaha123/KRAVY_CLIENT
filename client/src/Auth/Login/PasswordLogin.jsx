import { useState, useEffect } from "react";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import { Button, TextField, Otp } from "../../component/popular"
import {
  emailValidate,
  loginWithOtpValidate,
  validateLoginWithPassword,
} from "../../helper/validator";
import {
  loginWithPassword,
  sendLoginOtp,
  loginWithOtp,
} from "../../helper/helper";
import { handleFormSubmit } from "../../../utils/formUtils";

const PasswordLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginWithOtpMode, setLoginWithOtpMode] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
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
    try {
      await sendLoginOtp({ email: formik.values.email });
      toast.success("OTP resent successfully!");
      setTimer(60);
    } catch (err) {
      toast.error(err?.message || "Failed to resend OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const getHelperFunction = () => {
    if (!loginWithOtpMode) {
      return {
        onValidate: validateLoginWithPassword,
        func: loginWithPassword,
        onSuccess: () => navigate("/profile"),
        successMsg: "Logged in successfully!",
        loadingMsg: "Logging in...",
      };
    } else {
      if (!showOtpField) {
        return {
          onValidate: emailValidate,
          func: sendLoginOtp,
          onSuccess: () => {
            setShowOtpField(true);
            setTimer(60);
          },
          successMsg: "OTP sent successfully!",
          loadingMsg: "Sending OTP...",
        };
      } else {
        return {
          onValidate: loginWithOtpValidate,
          func: loginWithOtp,
          onSuccess: () => navigate("/profile"),
          successMsg: "OTP verified successfully!",
          loadingMsg: "Verifying OTP...",
        };
      }
    }
  };

  const { func, onValidate, onSuccess, successMsg, loadingMsg } =
    getHelperFunction();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      otp: "",
    },
    validationSchema: onValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, formikHelpers) => {
      setIsLoading(true); // 💡 Disable immediately
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
    (hasSubmitted && formik.errors.email) ||
    formik.errors.password ||
    formik.errors.otp;

  return (
    <AuthLayout
      title="Welcome back!"
      footerLink={{ text: "or Register with email", link: "/register" }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      <form
        onSubmit={formik.handleSubmit}
        className={`space-y-5 transition-opacity duration-200 ${
          isLoading ? "pointer-events-none opacity-70" : ""
        }`}
      >
        {!showOtpField && (
          <TextField
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            title="EMAIL"
          />
        )}

        {!loginWithOtpMode && (
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <TextField
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                title="PASSWORD"
              />
            </div>
          </div>
        )}

        {loginWithOtpMode && showOtpField && (
          <Otp otpEntered={(val) => formik.setFieldValue("otp", val)} />
        )}

        <div className="flex justify-between items-center text-xs mt-1">
          <span
            onClick={() => {
              setLoginWithOtpMode(!loginWithOtpMode);
              setShowOtpField(false);
              formik.resetForm();
            }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 uppercase hover:underline cursor-pointer transition"
          >
            {loginWithOtpMode ? "Login with Password?" : "Login with OTP?"}
          </span>

          {!loginWithOtpMode && (
            <Link
              to="/reset-password"
              className="text-blue-600 dark:text-blue-400 hover:underline uppercase transition"
            >
              Forgot Password?
            </Link>
          )}

          {showOtpField && (
            <button
              type="button"
              onClick={resendOtp}
              disabled={timer > 0 || isLoading}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline disabled:opacity-50 whitespace-nowrap mb-1 transition"
            >
              {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP?"}
            </button>
          )}
        </div>

        {hasSubmitted && errorMessage && (
          <div className="text-red-600 dark:text-red-400 text-sm text-start font-medium mt-2">
            {errorMessage}
          </div>
        )}

        <Button
          type="submit"
          title={
            isLoading ? "LOADING..." : showOtpField ? "VERIFY OTP" : "LOGIN"
          }
          disabled={isLoading}
          className="w-full py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors disabled:opacity-50"
        />
      </form>

      <div className="flex items-center justify-between mt-6">
        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
        <Link
          to="/register"
          className="text-xs text-gray-600 dark:text-gray-400 uppercase hover:underline"
        >
          or Register
        </Link>
        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
      </div>
    </AuthLayout>
  );
};

export default PasswordLogin;
