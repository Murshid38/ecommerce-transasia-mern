const app = require("./app");

const dotenv = require("dotenv");

//connect our config
dotenv.config({
  path: "backend/config/.env",
});
//creating the server
const server = app.listen(process.env.PORT, () => {
  console.log("Server is working on http://localhost:${process.env.PORT}");
});
