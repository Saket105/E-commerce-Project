const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    require: [true, "Please Enter Product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Product Price"],
    maxlength: [8, "Price cannot exceed 8 figures"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter product category"],
  },
  stock: {
    type: Number,
    required: true,
    maxlength: [4, "Stock can not exceed 4 figure"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        require: true,
      },
      rating: {
        type: Number,
        require: true,
      },
      comment: {
        type: String,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
