const mongoose = require("mongoose")

const enquiryForm = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   message: {
      type: String,
      required: true
   },
   contact: {
      type: Number,
      required: true,
   },
} , {
   timestamps : true
})

const enquirySchema = mongoose.model("enquiryform" , enquiryForm);

module.exports = enquirySchema ;