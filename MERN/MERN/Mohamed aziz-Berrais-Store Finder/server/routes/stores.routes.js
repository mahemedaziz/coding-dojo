const StoreController = require("../controllers/stores.controllers");

//! ==========Routes==========
module.exports = (app) => {
  //?==========Read ALL==========

  app.get("/api/stores", StoreController.Allstores);

  //?==========Create==========
  app.post("/api/stores", StoreController.CreateStore);

  //   //?==========Getting Data from a URL //  Read One  ==========
  // if we want to get a user with a specific id, we can make the id a part of the url
  // be sure to preface the id variable with a `:` colon
  app.get("/api/stores/:id", StoreController.findOneSingleStore);

  //   //?==========Update Data==========
  app.patch("/api/stores/:id", StoreController.updateExistingStore);

  //   //?==========Deleting Data==========
  app.delete("/api/stores/:id", StoreController.deleteAnExistingStore);
};
