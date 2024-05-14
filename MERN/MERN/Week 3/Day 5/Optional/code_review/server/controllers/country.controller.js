const Country = require("../models/country.model");

module.exports = {
  //?==========Read ALL==========
  Allcountries: (req, res) => {
    Country.find()
      .then((Allcountries) => {
        console.log(Allcountries);
        res.json(Allcountries);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  //?==========Create==========
  CreateCountry: (req, res) => {
    Country.create(req.body)
      .then((CreateCountry) => {
        console.log(CreateCountry);
        res.status(200).json(CreateCountry);
      })
      .catch((err) => {
        // res.json(err);
        res.status(400).json(err);
      });
  },

  //?==========Update==========
  updateExistingCountry: (req, res) => {
    Country.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateCountry) => {
        res.json(updateCountry);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  //?==========READ ONE==========
  findOneSingleCountry: (req, res) => {
    Country.findOne({ _id: req.params.id })
      .then((oneSingleCountry) => {
        res.json(oneSingleCountry);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  //?==========DELETE==========
  deleteAnExistingCountry: (req, res) => {
    Country.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
