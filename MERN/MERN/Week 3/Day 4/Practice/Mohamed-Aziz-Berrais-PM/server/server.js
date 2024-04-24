const express = require("express");

const cors = require("cors");
const app = express();

app.use(express.json(), express.urlencoded({ extended: true }), cors());

require("dotenv").config();

require("./config/mongoose.config");

const PORT = process.env.PORT;
const AllProductsRoutes = require("./routes/products.routes");
AllProductsRoutes(app);

app.listen(PORT, () => {
  console.log(
    `🤩🤩🤩🤩 server is up and running on port ${PORT} ⚡ and ready for your Request an Response`
  );
});
