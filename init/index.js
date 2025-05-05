const mongoose = require("mongoose");
const MongoURL = "mongodb://127.0.0.1:27017/minibnb";
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MongoURL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68142826ea3f2431c8a44ed5",
  })); // Add owner id to each listing
  await Listing.insertMany(initData.data);
  console.log("Successfully initialized sample data");
};

initDB();
