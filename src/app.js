const express = require("express");

//this change from original config, reads.env
require("dotenv").config();

const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");

//this change from original config, starts MongoDB connection 
// Connect to MongoDB
connectDB();

const app = express();

//Middleware
app.use(express.json());

//Routes 
app.use("/api/users", userRoutes);

//Start server 
//this change from original config, use env PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});
