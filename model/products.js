const mongoose = require("mongoose")

const Products = new mongoose.Schema((
   {
      name: String
   },
   {
      category: String
   },
   {
      specification: {
         color: String,
         taste: String,
         origin:String,
         active_compound: String,
         details : String,
         image_url:String
      }
   }
))

const allProductSchema = mongoose.model("product" , Products)

module.exports = allProductSchema;