import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AddressAutocomplete from "../../../component/ui/AutoComplete";

const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  touched,
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-600">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`w-full px-4 py-2 rounded-lg border ${
        error && touched ? "border-red-500" : "border-gray-300"
      } shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition`}
    />
    {error && touched && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const validationSchema = Yup.object().shape({
  restaurantName: Yup.string().required("Restaurant name is required"),
  ownerName: Yup.string().required("Owner name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Must be a valid 10-digit phone number")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
  addressLocation: Yup.object().shape({
    lat: Yup.number().required(),
    lng: Yup.number().required(),
  }),
  city: Yup.string().required("City is required"),
  pincode: Yup.string().matches(/^\d{6}$/, "Invalid pincode"),
  fssai: Yup.string().min(14, "FSSAI must be at least 14 digits"),
  gstin: Yup.string().matches(/^.{15}$/, "Invalid GSTIN"),
  cuisines: Yup.string().required("Cuisine types are required"),
  openTime: Yup.string().required("Opening time is required"),
  closeTime: Yup.string().required("Closing time is required"),
  website: Yup.string().url("Invalid URL"),
  services: Yup.object().shape({
    dineIn: Yup.boolean(),
    delivery: Yup.boolean(),
    takeaway: Yup.boolean(),
  }),
  logo: Yup.mixed().nullable(),
});

export default function RestaurantOnboardingForm() {
  const formik = useFormik({
    initialValues: {
      restaurantName: "Spice Villa",
      ownerName: "John Doe",
      phone: "9876543210",
      email: "contact@spicevilla.com",
      address: "123 Street, Mumbai",
      addressLocation: {
        lat: 19.076,
        lng: 72.8777,
      },
      city: "Mumbai",
      pincode: "400001",
      fssai: "12345678901234",
      gstin: "27ABCDE1234F1Z5",
      cuisines: "North Indian, Chinese",
      openTime: "10:00 AM",
      closeTime: "11:00 PM",
      website: "https://spicevilla.in",
      services: {
        dineIn: true,
        delivery: true,
        takeaway: false,
      },
      logo: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("✅ Submitted Values:", values);
    },
  });

  const onAddressSelect = ({ address, location, fullResult }) => {
    formik.setFieldValue("address", address);
    formik.setFieldValue("addressLocation", location);

    const components = fullResult.address_components;
    let city = "";
    let pincode = "";

    components.forEach((component) => {
      if (component.types.includes("locality")) {
        city = component.long_name;
      }
      if (component.types.includes("postal_code")) {
        pincode = component.long_name;
      }
    });

    if (city) formik.setFieldValue("city", city);
    if (pincode) formik.setFieldValue("pincode", pincode);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-4 sm:p-6 bg-white rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 border border-gray-200 w-full max-w-screen-xl mx-auto"
    >
      {/* Input Fields */}
      <InputField
        {...formik.getFieldProps("restaurantName")}
        label="Restaurant Name"
        placeholder="Spice Villa"
        error={formik.errors.restaurantName}
        touched={formik.touched.restaurantName}
      />
      <InputField
        {...formik.getFieldProps("ownerName")}
        label="Owner's Full Name"
        placeholder="John Doe"
        error={formik.errors.ownerName}
        touched={formik.touched.ownerName}
      />
      <InputField
        {...formik.getFieldProps("phone")}
        label="Phone Number"
        placeholder="9876543210"
        error={formik.errors.phone}
        touched={formik.touched.phone}
      />
      <InputField
        {...formik.getFieldProps("email")}
        label="Email Address"
        placeholder="contact@spicevilla.com"
        type="email"
        error={formik.errors.email}
        touched={formik.touched.email}
      />
      <AddressAutocomplete
        label="Business Address"
        name="address"
        value={formik.values.address}
        onChange={(val) => formik.setFieldValue("address", val)}
        onSelect={onAddressSelect}
      />
      <InputField
        {...formik.getFieldProps("city")}
        label="City"
        placeholder="Mumbai"
        error={formik.errors.city}
        touched={formik.touched.city}
      />
      <InputField
        {...formik.getFieldProps("pincode")}
        label="Pincode"
        placeholder="400001"
        error={formik.errors.pincode}
        touched={formik.touched.pincode}
      />
      <InputField
        {...formik.getFieldProps("fssai")}
        label="FSSAI Number"
        placeholder="12345678901234"
        error={formik.errors.fssai}
        touched={formik.touched.fssai}
      />
      <InputField
        {...formik.getFieldProps("gstin")}
        label="GSTIN"
        placeholder="27ABCDE1234F1Z5"
        error={formik.errors.gstin}
        touched={formik.touched.gstin}
      />
      <InputField
        {...formik.getFieldProps("cuisines")}
        label="Cuisine Types"
        placeholder="North Indian, Chinese"
        error={formik.errors.cuisines}
        touched={formik.touched.cuisines}
      />
      <InputField
        {...formik.getFieldProps("openTime")}
        label="Opening Time"
        placeholder="10:00 AM"
        error={formik.errors.openTime}
        touched={formik.touched.openTime}
      />
      <InputField
        {...formik.getFieldProps("closeTime")}
        label="Closing Time"
        placeholder="11:00 PM"
        error={formik.errors.closeTime}
        touched={formik.touched.closeTime}
      />
      <InputField
        {...formik.getFieldProps("website")}
        label="Website URL"
        placeholder="https://spicevilla.in"
        error={formik.errors.website}
        touched={formik.touched.website}
      />

      {/* Services */}
      <div className="flex flex-col gap-2 col-span-1 sm:col-span-2">
        <label className="text-sm font-medium text-gray-600">
          Services Offered
        </label>
        <div className="flex flex-wrap gap-4">
          {["dineIn", "delivery", "takeaway"].map((service) => (
            <label
              key={service}
              className="inline-flex items-center gap-2 text-sm text-gray-700"
            >
              <input
                type="checkbox"
                name={`services.${service}`}
                checked={formik.values.services[service]}
                onChange={formik.handleChange}
                className="accent-primary w-4 h-4"
              />
              {service.charAt(0).toUpperCase() + service.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Logo Upload */}
      <div className="flex flex-col gap-2 col-span-1 sm:col-span-2">
        <label className="text-sm font-medium text-gray-600">Upload Logo</label>
        <input
          type="file"
          name="logo"
          accept="image/*"
          onChange={(e) =>
            formik.setFieldValue("logo", e.currentTarget.files[0])
          }
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-500 file:text-white file:font-semibold file:transition hover:file:brightness-110"
        />
      </div>

      {/* Submit Button */}
      <div className="col-span-1 sm:col-span-2 flex justify-end">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-indigo-700 transition w-full sm:w-auto"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
