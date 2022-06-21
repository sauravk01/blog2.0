const mongoose = require("mongoose");

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const productSchema = new Schema(
  {
    title: String,
    discription: String,
    image: String,
    category: String,
    timeToCook: Number,
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.productSchema || mongoose.model("Product", productSchema);
