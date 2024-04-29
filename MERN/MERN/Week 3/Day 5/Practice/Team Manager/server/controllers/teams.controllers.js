const Team = require("../models/teams.model");

module.exports = {
  //?==========Read ALL==========
  Allteams: (req, res) => {
    Team.find()
      .then((Allteams) => {
        console.log(Allteams);
        res.json(Allteams);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  //?==========Create==========
  CreateTeam: (req, res) => {
    Team.create(req.body)
      .then((CreateTeam) => {
        console.log(CreateTeam);
        res.status(200).json(CreateTeam);
      })
      .catch((err) => {
        // res.json(err);
        res.status(400).json(err);
      });
  },

  //?==========Update==========
  updateExistingTeam: (req, res) => {
    Team.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateTeam) => {
        res.json(updateTeam);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  //?==========READ ONE==========
  findOneSingleTeam: (req, res) => {
    Team.findOne({ _id: req.params.id })
      .then((oneSingleTeam) => {
        res.json(oneSingleTeam);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  //?==========DELETE==========
  deleteAnExistingTeam: (req, res) => {
    Team.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
