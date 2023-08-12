import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timeStamp: true }
);

export default mongoose.model("Product", productSchema);
