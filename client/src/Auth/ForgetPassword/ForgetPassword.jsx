import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

import AuthLayout from "../AuthLayout";
import { TextField, Button, EmailSent } from "../../component/popular";
import { sendResetPasswordEmail, resetPassword } from "../../helper/helper";
import { emailValidate, resetPasswordValidate } from "../../helper/validator";

const ForgetPassword = () => {
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenFromURL, setTokenFromURL] = useState("");

  const navigate = useNavigate();

  // Check for reset token in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      setTokenFromURL(token);
      setResetEmailSent(true);
      formik.setFieldValue("resetPasswordToken", token);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      resetPasswordToken: "",
    },
    validationSchema: tokenFromURL ? resetPasswordValidate : emailValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setIsLoading(true);
      const func = tokenFromURL ? resetPassword : sendResetPasswordEmail;
      const loadingMsg = tokenFromURL
        ? "Resetting password..."
        : "Sending reset link...";
      const successMsg = tokenFromURL
        ? "Password reset successfully!"
        : "Reset link sent to your email!";

      try {
        await toast.promise(func(values), {
          loading: loadingMsg,
          success: successMsg,
          error: (err) => err?.message || "Something went wrong",
        });

        if (tokenFromURL) {
          navigate("/login");
        } else {
          setResetEmailSent(true);
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  const hasSubmitted = formik.submitCount > 0;
  const errorMessage =
    (hasSubmitted && formik.errors.email) ||
    formik.errors.password ||
    formik.errors.confirmPassword;

  const isEmailSentPage = resetEmailSent && !tokenFromURL;

  return (
    <AuthLayout
      title={
        !resetEmailSent
          ? "Reset your password"
          : tokenFromURL
          ? "Set new password"
          : "Check your email"
      }
      subtitle={
        !resetEmailSent
          ? "We’ll help you recover your account"
          : tokenFromURL
          ? "Create a new password to access your account"
          : "We’ve sent you a reset link. Please follow the instructions in your inbox."
      }
      footerLink={{
        text:
          !resetEmailSent || tokenFromURL
            ? "Back to Login"
            : "Try a different email",
        link: !resetEmailSent || tokenFromURL ? "/login" : "/forget-password",
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />

      {isEmailSentPage ? (
        <EmailSent email={formik.values.email} />
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          className={`space-y-4 transition-opacity duration-200 ${
            isLoading ? "pointer-events-none opacity-70" : ""
          }`}
        >
          {!resetEmailSent || tokenFromURL ? (
            <>
              {!tokenFromURL ? (
                <TextField
                  title="EMAIL"
                  name="email"
                  type="text"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              ) : (
                <>
                  <TextField
                    title="NEW PASSWORD"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  <TextField
                    title="CONFIRM PASSWORD"
                    name="confirmPassword"
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />
                </>
              )}
            </>
          ) : null}

          {hasSubmitted && errorMessage && (
            <div className="text-red-500 dark:text-red-400 text-sm text-start font-medium mt-2">
              {errorMessage}
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            title={
              isLoading
                ? "LOADING..."
                : tokenFromURL
                ? "SET NEW PASSWORD"
                : "SEND RESET LINK"
            }
            className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 disabled:opacity-50"
          />
        </form>
      )}
    </AuthLayout>
  );
};

export default ForgetPassword;
