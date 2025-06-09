import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    restaurantName: { type: String, required: true, trim: true },
    ownerName: { type: String, required: true, trim: true },

    phone: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
      unique: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
      unique: true,
    },

    cuisines: {
      type: [String],
      required: true,
    },

    fssai: {
      type: String,
      minlength: 14,
      maxlength: 14,
    },

    gstin: {
      type: String,
      minlength: 15,
      maxlength: 15,
    },

    website: {
      type: String,
      trim: true,
    },

    logo: {
      type: String,
      trim: true,
    },

    branches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Branch",
      },
    ],

    isActive: {
      type: Boolean,
      default: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    deliveryCharges: {
      type: Number,
      required: true,
      min: [0, "Delivery charges cannot be negative"],
    },

    deliveryTime: {
      type: Number,
      required: true,
      min: [0, "Delivery time cannot be negative"],
    },

    averageCost: {
      type: Number,
      required: true,
      min: [0, "Average cost cannot be negative"],
    },

    isVerified: {
      type: Boolean,
      default: false,
      required: true,
    },

    verificationDocuments: {
      type: [String],
      validate: {
        validator: (val) => val.length > 0,
        message: "At least one document is required",
      },
    },

    socialMediaLinks: {
      facebook: {
        type: String,
        trim: true,
        match: [/^https?:\/\/.+/, "Invalid Facebook URL"],
      },
      instagram: {
        type: String,
        trim: true,
        match: [/^https?:\/\/.+/, "Invalid Instagram URL"],
      },
      twitter: {
        type: String,
        trim: true,
        match: [/^https?:\/\/.+/, "Invalid Twitter URL"],
      },
      linkedin: {
        type: String,
        trim: true,
        match: [/^https?:\/\/.+/, "Invalid LinkedIn URL"],
      },
    },

    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },

    ratings: {
      type: Number,
      min: [0, "Rating cannot be negative"],
      max: [5, "Rating cannot exceed 5"],
      default: 0,
    },
  },

  { timestamps: true }
);

export default mongoose.models.Restaurant ||
  mongoose.model("Restaurant", restaurantSchema);
