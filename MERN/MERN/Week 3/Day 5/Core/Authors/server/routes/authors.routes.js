const AuthorController = require("../controllers/authors.controllers");

//! ==========Routes==========
module.exports = (app) => {
  //?==========Read ALL==========

  app.get("/api/authors", AuthorController.Allauthors);

  //?==========Create==========
  app.post("/api/authors", AuthorController.CreateAuthor);

  //   //?==========Getting Data from a URL //  Read One  ==========
  // if we want to get a user with a specific id, we can make the id a part of the url
  // be sure to preface the id variable with a `:` colon
  app.get("/api/authors/:id", AuthorController.findOneSingleAuthor);

  //   //?==========Update Data==========
  app.patch("/api/authors/:id", AuthorController.updateExistingAuthor);

  //   //?==========Deleting Data==========
  app.delete("/api/authors/:id", AuthorController.deleteAnExistingAuthor);
};
