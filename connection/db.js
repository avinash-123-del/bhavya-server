const mongoose = require("mongoose");

const url = "mongodb+srv://avinashsj:avinashsj@cluster0.ppq1vkz.mongodb.net/bhavya01"

const mongoConnection =  mongoose.connect(url).then(() => console.log("connected to DB")).catch((e) => console.log("error aa" , e))


module.exports = mongoConnection