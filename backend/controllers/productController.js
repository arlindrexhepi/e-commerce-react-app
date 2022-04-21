const asyncHandler = require("express-async-handler");

// Get All Products
// @route GET /api/products
// @access Private
const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get All Products" });
});

// Get All Products
// @route POST /api/products
// @access Private
const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json(req.body.text);
});

// Get All Products
// @route PUT /api/products/:id
// @access Private
const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update Single Product" });
});

// Get All Products
// @route DELETE /api/products/:id
// @access Private
const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete Single Product" });
});

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct
};
