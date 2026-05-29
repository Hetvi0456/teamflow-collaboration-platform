// this file is used for connecting to our mongodb database

const mongoose = require("mongoose"); 
// Import Mongoose library to interact with MongoDB

// Define an async function to handle database connection
const connectDB = async () => {

  console.log("connectDB function started");

  try {
    await mongoose.connect(process.env.MONGO_URI);
    // Try connecting to MongoDB using connection string stored in environment variable

    console.log("MongoDB Connected");
    // Log success message if connection works
  } catch (error) {
    console.log("Database connection failed:", error.message);
    // Log error message if connection fails
    process.exit(1);
    // Exit program with error code (1 = failure)
  }
};

module.exports = connectDB;
// Export the function so other files can import and use it
