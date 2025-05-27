import React from "react";
import { dashboardVideo, logo } from "../assets";
import { GoogleLoginButton } from "../component/popular";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = ({
  title,
  subtitle,
  children,
  footerLink,
  showGoogle = false,
}) => {
  return (
    <div className="w-full bg-backy bg-cover bg-repeat h-screen flex justify-center items-center">
      <div className="w-[100%] lg:w-[40%] px-5 md:px-10 flex justify-center items-center h-full">
        <div className="w-full md:max-w-md p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="bg-white w-[50px] h-[50px] flex justify-center items-center rounded-xl">
              <img src={logo} alt="Logo" className="w-3/4" />
            </div>
          </div>

          {title && (
            <p className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
              {title}
            </p>
          )}
          {subtitle && (
            <p className="mt-1 text-sm text-center text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          )}

          {showGoogle && <GoogleLoginButton />}

          {footerLink && (
            <div className="flex items-center justify-between mt-6">
              <span className="w-1/5 border-b lg:w-1/4 dark:border-gray-600" />
              <Link
                to={footerLink.link}
                className="text-xs text-center text-gray-500 dark:text-gray-400 uppercase hover:underline"
              >
                {footerLink.text}
              </Link>
              <span className="w-1/5 border-b lg:w-1/4 dark:border-gray-600" />
            </div>
          )}

          <div className="mt-6">{children ?? <Outlet />}</div>
        </div>
      </div>

      <div className="lg:w-[60%] lg:block hidden h-full bg-gray-100 dark:bg-gray-800">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={dashboardVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default AuthLayout;
