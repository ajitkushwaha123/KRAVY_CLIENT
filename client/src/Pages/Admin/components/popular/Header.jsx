import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Bell,
  ChevronDown,
  LogOut,
  Settings,
  HelpCircle,
  User,
} from "lucide-react";
import { fetchUser, logout } from "../../../../Redux/Slice/userSlice";
import axios from "axios";
import { userIcon } from "../../../../assets";

const Header = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {};

  const username = user?.username || user?.name || "Guest";
  const userEmail = user?.email || "guest@example.com";
  const profilePic = user?.profilePic || userIcon;

  return (
    <header className="w-full bg-white dark:bg-zinc-900 px-6 py-4 shadow-sm flex items-center justify-between border-b dark:border-zinc-800">
      <h1 className="text-xl font-semibold text-zinc-800 dark:text-white">
        Dashboard
      </h1>

      <div className="flex items-center gap-6">
        {/* Bell */}
        <div className="relative cursor-pointer group">
          <Bell className="text-zinc-600 dark:text-zinc-300 w-5 h-5" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500 animate-ping" />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
          <div className="absolute hidden group-hover:block top-8 right-0 z-10 w-56 text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg p-4">
            <p className="text-zinc-700 dark:text-zinc-300 font-medium">
              You have 2 new alerts
            </p>
          </div>
        </div>

        {/* CTA */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition text-sm shadow">
          + New Task
        </button>

        {/* User Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            {loading ? (
              <>
                <div className="w-10 h-10 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-pulse" />
                <div className="hidden md:flex flex-col gap-1">
                  <div className="w-20 h-3 bg-zinc-300 dark:bg-zinc-700 rounded animate-pulse" />
                  <div className="w-28 h-2 bg-zinc-300 dark:bg-zinc-700 rounded animate-pulse" />
                </div>
              </>
            ) : (
              <>
                <img
                  src={profilePic}
                  alt={username}
                  className="w-10 h-10 rounded-full border-2 border-indigo-500 object-cover"
                />
                <div className="hidden md:flex flex-col max-w-[120px] truncate">
                  <span className="text-sm font-semibold text-zinc-800 dark:text-white">
                    {username}
                  </span>
                  <span
                    className="text-xs text-zinc-500 dark:text-zinc-400 truncate"
                    title={userEmail}
                  >
                    {userEmail}
                  </span>
                </div>
              </>
            )}
            <ChevronDown
              className={`text-zinc-500 w-4 h-4 transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {dropdownOpen && !loading && (
            <div className="absolute top-14 right-0 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-md p-3 w-56 text-sm z-50 animate-fade-in">
              {error ? (
                <div className="text-red-500 text-sm px-3 py-2">
                  Failed to load user!
                </div>
              ) : (
                <>
                  <div className="mb-2">
                    <p className="text-zinc-800 dark:text-white font-medium">
                      {username}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {userEmail}
                    </p>
                  </div>
                  <button className="hover:bg-zinc-100 w-full dark:hover:bg-zinc-700 px-3 py-2 rounded text-left flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Profile
                  </button>
                  <button className="hover:bg-zinc-100 w-full dark:hover:bg-zinc-700 px-3 py-2 rounded text-left flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    Account Settings
                  </button>
                  <button className="hover:bg-zinc-100 w-full dark:hover:bg-zinc-700 px-3 py-2 rounded text-left flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" />
                    Help & Support
                  </button>
                  <hr className="my-2 border-zinc-200 w-full dark:border-zinc-700" />
                  <button
                    onClick={handleLogout}
                    className="hover:bg-zinc-100 w-full dark:hover:bg-zinc-700 px-3 py-2 rounded text-left flex items-center gap-2 text-red-500"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
