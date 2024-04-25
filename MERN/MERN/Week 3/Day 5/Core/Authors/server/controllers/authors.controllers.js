const Author = require("../models/authors.model");

module.exports = {
  //?==========Read ALL==========
  Allauthors: (req, res) => {
    Author.find()
      .then((Allauthors) => {
        console.log(Allauthors);
        res.json(Allauthors);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  //?==========Create==========
  CreateAuthor: (req, res) => {
    Author.create(req.body)
      .then((CreateAuthor) => {
        console.log(CreateAuthor);
        res.status(200).json(CreateAuthor);
      })
      .catch((err) => {
        // res.json(err);
        res.status(400).json(err);
      });
  },

  //?==========Update==========
  updateExistingAuthor: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateAuthor) => {
        res.json(updateAuthor);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  //?==========READ ONE==========
  findOneSingleAuthor: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((oneSingleAuthor) => {
        res.json(oneSingleAuthor);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  //?==========DELETE==========
  deleteAnExistingAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
