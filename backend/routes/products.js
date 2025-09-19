const router = require('express').Router();
const Product = require('../models/product.model');

// Get all products
router.route('/').get(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a new product 
router.route('/add').post(async (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = new Product({ name, price, description });
  try {
    await newProduct.save();
    res.status(201).json('Product added!');
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
module.exports = router;