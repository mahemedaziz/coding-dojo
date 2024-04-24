const Product = require("../modules/products.model");

module.exports = {
  //?==========Read ALL==========
  Allproducts: (req, res) => {
    Product.find()
      .then((Allproducts) => {
        console.log(Allproducts);
        res.status(200).json(Allproducts);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  //?==========Create==========
  CreateProduct: (req, res) => {
    Product.create(req.body)
      .then((CreateProduct) => {
        console.log(CreateProduct);
        res.status(200).json(CreateProduct);
      })
      .catch((err) => {
        // res.json(err);
        res.status(400).json(err);
      });
  },

  //?==========Update==========
  updateExistingProduct: (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateProduct) => {
        res.status(200).json(updateProduct);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  //?==========READ ONE==========
  findOneSingleProduct: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((oneSingleProduct) => {
        res.json(oneSingleProduct);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  //?==========DELETE==========
  deleteAnExistingProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },
};
