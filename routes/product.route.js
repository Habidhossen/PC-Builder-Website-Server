const express = require("express");
const {
  createProduct,
  getAllProducts,
  getOneProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.post("/product", createProduct);
router.get("/product", getAllProducts);
router.get("/product/:id", getOneProduct);

module.exports = router;
