const productModel = require("../models/product.model");

// create Product
exports.createProduct = async (req, res) => {
  try {
    const data = req.body;
    const productData = new productModel(data);
    await productData.save();
    res.status(201).json({
      status: "success",
      message: "Data inserted successfully",
      data: productData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};

// Get all Products
exports.getAllProducts = async (req, res) => {
  try {
    const productData = await productModel.find();
    res.status(200).json({
      status: "success",
      data: productData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// Get One Product
exports.getOneProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const productData = await productModel.findById(productId);
    res.status(200).json({
      status: "success",
      data: productData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
