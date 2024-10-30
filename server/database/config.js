const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    // Ensure the connection URL is correct and environment variable is set
    if (!process.env.MONGODB_CNN) {
      throw new Error("MongoDB connection string is not defined in environment variables.");
    }

    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log("MongoDB database connection established successfully!");
  } catch (error) {
    console.error("Database initialization error:", error.message);
    throw new Error("Database initialization error");
  }
};

module.exports = dbConnection;
