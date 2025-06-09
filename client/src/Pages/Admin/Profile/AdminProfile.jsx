import React from "react";

const AdminProfile = () => {
  const user = {
    username: "ajitsharma",
    name: "Ajit Sharma",
    email: "ajit@example.com",
    phone: "9876543210",
    role: "Admin",
    isActive: true,
    profilePicture: "https://api.dicebear.com/7.x/adventurer/svg?seed=ajit", // cartoon avatar
    createdAt: "2024-01-15T10:00:00Z",
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border dark:border-zinc-700 p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
          <img
            src={user.profilePicture}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-bold text-zinc-800 dark:text-white">
            {user.name}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400">@{user.username}</p>

          <div className="text-zinc-600 dark:text-zinc-300 space-y-1">
            <p>
              Email: <span className="font-medium">{user.email}</span>
            </p>
            <p>
              Phone: <span className="font-medium">{user.phone}</span>
            </p>
            <p>
              Joined:{" "}
              <span className="text-sm">
                {new Date(user.createdAt).toLocaleDateString()}
              </span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
            <span className="px-4 py-1 text-sm font-semibold bg-indigo-100 text-indigo-600 dark:bg-indigo-800 dark:text-indigo-200 rounded-full">
              {user.role}
            </span>
            <span
              className={`px-4 py-1 text-sm font-semibold rounded-full ${
                user.isActive
                  ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                  : "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
              }`}
            >
              {user.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        <div className="mt-6 md:mt-0">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl transition-all shadow-md">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
