const mongoose = require("mongoose")

// Define the product schema
const products = new mongoose.Schema({
  category_name: {
    type: String,
    required: true
  },
  products: [{
    name: {
      type: String,
//       required: true
    },
    specification: {
      color: String,
      taste: String,
      origin: String,
      active_compound: String
    },
    details: String,
    usage: String,
    image_url: String
  }]
});

// Create the Product model
const ProductSchema = mongoose.model('productCategory', products);

module.exports = ProductSchema;
