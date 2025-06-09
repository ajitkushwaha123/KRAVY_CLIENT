import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/popular/Sidebar";
import Header from "./components/popular/Header";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`transition-all duration-300 h-full flex flex-col ${
          collapsed ? "md:ml-20" : "md:ml-64"
        }`}
      >
        <Header />
        <div className="bg-[#f4f1f9]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
