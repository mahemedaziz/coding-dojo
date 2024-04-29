const TeamController = require("../controllers/teams.controllers");

//! ==========Routes==========
module.exports = (app) => {
  //?==========Read ALL==========

  app.get("/api/teams", TeamController.Allteams);

  //?==========Create==========
  app.post("/api/teams", TeamController.CreateTeam);

  //   //?==========Getting Data from a URL //  Read One  ==========
  // if we want to get a user with a specific id, we can make the id a part of the url
  // be sure to preface the id variable with a `:` colon
  app.get("/api/teams/:id", TeamController.findOneSingleTeam);

  //   //?==========Update Data==========
  app.patch("/api/teams/:id", TeamController.updateExistingTeam);

  //   //?==========Deleting Data==========
  app.delete("/api/teams/:id", TeamController.deleteAnExistingTeam);
};
