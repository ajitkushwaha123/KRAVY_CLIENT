import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  dineIn: { type: Boolean, default: false },
  delivery: { type: Boolean, default: false },
  takeaway: { type: Boolean, default: false },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
});

export default serviceSchema;
