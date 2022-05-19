const app = require("./app");
const dotEnv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error:: ${err.message}`);
  console.log("shutting down the server due to uncaughtException");
  process.exit(1);
});

// config
dotEnv.config({ path: "backend/config/config.env" });

// connecting to database
connectDatabase();

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on http://localhost:${process.env.PORT}`);
// });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:4000`);
});

// Unhandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("shutting down the server due to unhandled promise rejection");

  server.close(() => {
    process.exit();
  });
});
