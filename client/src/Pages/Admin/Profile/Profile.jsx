import { useState } from "react";
import RestaurantOnboardingForm from "./GeneralInfo";
import AdminProfile from "./AdminProfile";

export default function AdminProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  const [formValues, setFormValues] = useState({
    fullName: "",
    phone: "",
    restaurantName: "",
    description: "",
    address: "",
    headline: "",
    subtext: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const tabButtonClass = (tab) =>
    `px-4 py-2 text-sm font-medium rounded-t-md transition-colors duration-200 ${
      activeTab === tab
        ? "bg-white border-t-2 border-blue-500 text-blue-600"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="mx-auto">
        <div className="flex space-x-4 mb-6 border-b">
          {["profile", "restaurant", "content", "security"].map((tab) => (
            <button
              key={tab}
              className={tabButtonClass(tab)}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "profile"
                ? "Profile Info"
                : tab === "restaurant"
                ? "Restaurant Info"
                : tab === "content"
                ? "Website Content"
                : "Security"}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow space-y-4 p-4">
          {activeTab === "profile" && (
            <div>
              <AdminProfile />
            </div>
          )}

          {activeTab === "restaurant" && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Restaurant Name
                </label>
                <input
                  name="restaurantName"
                  value={formValues.restaurantName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Delish Diner"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formValues.description}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows="3"
                  placeholder="A cozy place with amazing food..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="123 Foodie St, Flavor Town"
                />
              </div>
            </>
          )}

          {activeTab === "content" && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Homepage Headline
                </label>
                <input
                  name="headline"
                  value={formValues.headline}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="Taste The Magic"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Subtext
                </label>
                <textarea
                  name="subtext"
                  value={formValues.subtext}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  rows="3"
                  placeholder="Experience the finest cuisines delivered to your doorstep."
                />
              </div>
            </>
          )}

          {activeTab === "security" && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  placeholder="••••••••"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
