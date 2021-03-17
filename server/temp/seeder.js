const connectDB = require("../src/db");

// Connect to DB
connectDB();

// import Models 
const User = require('../src/models/User');
const Listing = require('../src/models/Listing');

// import Mock Data 
const listings = require('./data/listings');
const users = require('./data/users');

const importData = async () => {
  try {
    console.log("in progress...");
    for (const listing of listings) {
      await Listing.create(listing)
    }

    for (const user of users) {
      await User.create(user);
    }
    console.log("data imported successfully");
  } catch {
    throw new Error("failed to import data");
  }
};

const recycleData = async () => {
  try {
    console.log("recycling data...");
    await Listing.deleteMany();
    await User.deleteMany();
    console.log("data recycled successfully");
  } catch {
    throw new Error("failed to recycle data");
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-r') {
  recycleData();
} 
