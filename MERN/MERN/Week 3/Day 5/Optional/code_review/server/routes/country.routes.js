const CountryController = require("../controllers/country.controller");

//! ==========Routes==========
module.exports = (app) => {
  //?==========Read ALL==========

  app.get("/api/countries", CountryController.Allcountries);

  //?==========Create==========
  app.post("/api/countries", CountryController.CreateCountry);

  //   //?==========Getting Data from a URL //  Read One  ==========
  // if we want to get a user with a specific id, we can make the id a part of the url
  // be sure to preface the id variable with a `:` colon
  app.get("/api/countries/:id", CountryController.findOneSingleCountry);

  //   //?==========Update Data==========
  app.patch("/api/countries/:id", CountryController.updateExistingCountry);

  //   //?==========Deleting Data==========
  app.delete("/api/countries/:id", CountryController.deleteAnExistingCountry);
};
