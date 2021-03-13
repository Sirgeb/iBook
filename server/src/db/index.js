const mongoose = require('mongoose');

// make connection to mongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }); 
  
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (e) {
    console.log(e.message)
  }
}

module.exports = connectDB;
