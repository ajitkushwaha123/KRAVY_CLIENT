import Address from "../models/Address";

export const saveAddress = async (req, res) => {
  try {
    const { street, city, pincode, location } = req.body;
    if (!street || !city || !pincode) {
      return res.status(400).json({
        success: false,
        msg: "Please fill in all required fields.",
      });
    }

    const pincodeRegex = /^\d{6}$/;
    if (!pincodeRegex.test(pincode)) {
      return res.status(400).json({
        success: false,
        msg: "Invalid pincode format. It should be a 6-digit number.",
      });
    }

    const newAddress = {
      street: street.trim(),
      city: city.trim(),
      pincode: pincode.trim(),
      location: {
        lat: location?.lat || null,
        lng: location?.lng || null,
      },
      admin: req.user._id,
      restaurant: req.params.restaurantId,
    };

    const savedAddress = await Address.create(newAddress);
    if (!savedAddress) {
      return res.status(500).json({
        success: false,
        msg: "Failed to save address. Please try again.",
      });
    }

    return res.status(201).json({
      success: true,
      msg: "Address saved successfully.",
      address: savedAddress,
    });
  } catch (error) {
    console.error("Error saving address:", error);
    return res
      .status(500)
      .json({ success: false, msg: "Internal server error." });
  }
};
