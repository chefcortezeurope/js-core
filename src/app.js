const express = require("express");
const userRoutes = require("./routes/user.routes");
const app = express();

//Middleware
app.use(express.json());

//Routes 
app.use("/api/users", userRoutes);

//Start server 
app.listen(3000, () => {
    console.log("API running on port 3000");
});
