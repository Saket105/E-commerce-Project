const app = require("./app");
const dotEnv = require("dotenv");
const connectDatabase = require("./config/database");
// config
dotEnv.config({ path: "backend/config/config.env" });

// connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
