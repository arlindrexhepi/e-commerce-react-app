const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");

// Get All Products
// @route GET /api/products
// @access Private
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

// Get All Products
// @route POST /api/products
// @access Private
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const newProduct = await Product.create({
    text: req.body.text
  });

  res.status(200).json(newProduct);
});

// Get All Products
// @route PUT /api/products/:id
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product does not exist!");
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedProduct);
});

// Get All Products
// @route DELETE /api/products/:id
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error(`Product doesn't exist!`);
  }

  await Product.findByIdAndRemove(req.params.id);

  res
    .status(200)
    .json({ id: req.params.id, message: "Product deleted successfully!" });
});

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct
};
