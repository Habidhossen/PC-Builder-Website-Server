const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    keyFeatures: [{ key: String, value: String }],
    individualRating: {
      type: Number,
    },
    averageRating: {
      type: Number,
    },
    imageUrl: {
      type: String,
    },
    reviews: [
      {
        username: {
          type: String,
        },
        comments: {
          type: String,
        },
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", productSchema);
