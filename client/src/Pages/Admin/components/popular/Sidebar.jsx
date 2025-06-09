import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronDown, Menu, X, Star } from "lucide-react";

import { menuItems } from "../../../../constants/menuItem";
import { logo } from "../../../../assets";

const Sidebar = ({ collapsed, setCollapsed }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [activePath, setActivePath] = useState("/dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  const handleNav = (path) => {
    setActivePath(path);
    navigate(path);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile hamburger */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-white bg-opacity-80 dark:bg-zinc-800 bg-blur-md backdrop-blur-md shadow border border-zinc-300 dark:border-zinc-700"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      <aside
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        className={`fixed top-0 left-0 h-screen z-40 shadow-md border-r border-zinc-200 dark:border-zinc-800 transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0
          bg-white dark:bg-zinc-900 bg-opacity-80 backdrop-blur-lg text-gray-800 dark:text-gray-100 flex flex-col`}
      >
        <div className="px-4 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
          <div className="bg-indigo-600 p-1.5 rounded-md">
            <img src={logo} className="w-7 h-7" alt="logo" />
          </div>
          {!collapsed && (
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 whitespace-nowrap transition">
              Kravy
            </span>
          )}
        </div>

        <div className="flex-1 overflow-y-auto px-2 pt-4 pb-6">
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleMenu(item.name)}
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-lg transition hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                        openMenu === item.name && !collapsed
                          ? "bg-zinc-100 dark:bg-zinc-800"
                          : ""
                      }`}
                    >
                      <span className="flex items-center gap-3 text-sm font-medium">
                        {item.icon}
                        {!collapsed && <span>{item.name}</span>}
                      </span>
                      {!collapsed && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openMenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>

                    {openMenu === item.name && !collapsed && (
                      <div className="ml-6 border-l border-zinc-300 dark:border-zinc-700 pl-4 space-y-1 relative">
                        {item.subItems.map((sub, i) => (
                          <button
                            key={i}
                            onClick={() => handleNav(sub.path)}
                            className={`relative flex items-center w-full text-left py-2 px-3 rounded-md transition
          ${
            activePath === sub.path
              ? "bg-indigo-100 dark:bg-indigo-500/20 font-semibold text-indigo-600 dark:text-indigo-300"
              : "hover:bg-zinc-100 dark:hover:bg-zinc-700"
          }`}
                          >
                            <div className="absolute left-[-14px] top-1/2 transform -translate-y-1/2 h-[1px] w-3 bg-zinc-400 dark:bg-zinc-600 transition-all duration-200" />
                            <span className="transition-all duration-200 group-hover:pl-1">
                              {sub.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNav(item.path)}
                    className={`flex items-center gap-3 w-full text-left px-3 py-3 rounded-lg text-sm transition ${
                      activePath === item.path
                        ? "bg-indigo-100 dark:bg-indigo-500/20 font-semibold text-indigo-600 dark:text-indigo-300"
                        : "hover:bg-zinc-100 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {item.icon}
                    {!collapsed && <span>{item.name}</span>}
                  </button>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="sticky bottom-0 px-4 py-4 bg-white dark:bg-zinc-900 bg-opacity-80 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800">
          <button
            onClick={() => handleNav("/upgrade")}
            className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg text-sm font-medium bg-yellow-50 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-100 dark:hover:bg-yellow-500/30 transition"
          >
            <Star className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="truncate">Upgrade Plan</span>}
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
