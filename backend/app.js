const cookieParser = require("cookie-parser");
const express = require("express");
const errorMiddleWare = require("./middleware/error");
const app = express();

app.use(express.json());
app.use(cookieParser());
// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);

// Middleware for Error
app.use(errorMiddleWare);
module.exports = app;
