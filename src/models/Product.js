import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { String, required: true },
  price: { Number, required: true },
  image: { String, required: true },
  category: String,
  description: String,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
