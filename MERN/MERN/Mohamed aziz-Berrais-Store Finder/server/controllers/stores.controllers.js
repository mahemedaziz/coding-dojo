const Store = require("../models/stores.model");

module.exports = {
  //?==========Read ALL==========
  Allstores: (req, res) => {
    Store.find()
      .then((Allstores) => {
        console.log(Allstores);
        res.status(200).json(Allstores);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  //?==========Create==========
  CreateStore: (req, res) => {
    Store.create(req.body)
      .then((CreateStore) => {
        console.log(CreateStore);
        res.status(200).json(CreateStore);
      })
      .catch((err) => {
        // res.json(err);
        res.status(400).json(err);
      });
  },

  //?==========Update==========
  updateExistingStore: (req, res) => {
    Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateStore) => {
        res.status(200).json(updateStore);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  //?==========READ ONE==========
  findOneSingleStore: (req, res) => {
    Store.findOne({ _id: req.params.id })
      .then((oneSingleStore) => {
        res.status(200).json(oneSingleStore);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
  //?==========DELETE==========
  deleteAnExistingStore: (req, res) => {
    Store.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
