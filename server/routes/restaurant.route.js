import express from "express";
import auth from "../middleware/auth";
import Restaurant from "../models/Restaurant";

const restaurant = express.Router();

restaurant.post("/", auth, async (req, res) => {
  try {
    const {
      restaurantName,
      ownerName,
      phone,
      email,
      address,
      addressLocation,
      city,
      pincode,
      fssai,
      gstin,
      cuisines,
      openTime,
      closeTime,
      website,
      services,
      logo,
    } = req.body;

    if (!restaurantName || !ownerName || !phone || !email || !address) {
      return res.status(400).json({
        success: false,
        msg: "Please fill in all required fields.",
      });
    }

    const newRestaurant = new Restaurant({
      restaurantName,
      ownerName,
      phone,
      email,
      address,
      addressLocation,
      city,
      pincode,
      fssai,
      gstin,
      cuisines,
      openTime,
      closeTime,
      website,
      services,
      logo,
      createdBy: req.user._id,
    });

    await newRestaurant.save();

    res.status(201).json({
      success: true,
      msg: "Restaurant created successfully.",
      restaurant: newRestaurant,
    });
  } catch (error) {
    console.error("Error creating restaurant:", error);
    res.status(500).json({
      success: false,
      msg: "Server error. Please try again later.",
    });
  }
});

export default restaurant;
