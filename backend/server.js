const app = require("./app");
const dotEnv = require("dotenv");

// config
dotEnv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
