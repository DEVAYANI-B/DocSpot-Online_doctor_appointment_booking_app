const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();


const client = mongoose
  .connect('mongodb+srv://Gobika13:sudhagobi@cluster0.azzscvw.mongodb.net/doctor?retryWrites=true&w=majority') 
  
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;
