// src/pages/auth/EmailSent.jsx
import React from "react";
import { MailCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../component/popular";

const EmailSent = ({ email }) => {
  return (
    <div className="text-center py-10 px-6">
      {/* <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
        <MailCheck size={36} />
      </div>
      <h2 className="text-2xl font-semibold mb-2">Check your email</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        We sent a password reset link to{" "}
        <span className="font-medium">{email}</span>
      </p> */}
      <div className="flex flex-col items-center gap-3">
        <Button
          title="Open Email App"
          className="w-full bg-indigo-600 text-white hover:bg-indigo-500"
          onSubmit={() => window.open("https://mail.google.com", "_blank")}
        />
        <Link
          to="/login"
          className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline mt-2"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default EmailSent;
