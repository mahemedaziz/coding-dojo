const ProductController = require("../controllers/products.controllers");

//! ==========Routes==========
module.exports = (app) => {
  //?==========Read ALL==========

  app.get("/api/products", ProductController.Allproducts);

  //?==========Create==========
  app.post("/api/products", ProductController.CreateProduct);

  //   //?==========Getting Data from a URL //  Read One  ==========
  // if we want to get a user with a specific id, we can make the id a part of the url
  // be sure to preface the id variable with a `:` colon
  app.get("/api/products/:id", ProductController.findOneSingleProduct);

  //   //?==========Update Data==========
  app.patch("/api/products/:id", ProductController.updateExistingProduct);

  //   //?==========Deleting Data==========
  app.delete("/api/products/:id", ProductController.deleteAnExistingProduct);
};
