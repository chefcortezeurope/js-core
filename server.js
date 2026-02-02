const express = require("express");

const app = express();

//Middleware 

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

//Route
app.get("/", (req, res) => {
    res.status(200).send("Hello from Express API");
});

//Start server 
app.listen(3000, () => {
    console.log("Server running on port 3000");
});