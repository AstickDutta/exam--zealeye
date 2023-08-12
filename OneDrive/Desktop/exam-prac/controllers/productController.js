import productModel from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export const createproduct = async (req, res) => {
  try {
    const { name, quantity, price } = req.body;
    const newProduct = new productModel({ name, quantity, price });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const upadateProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!product) {
      return res.status(404).send({ message: "product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "product is found" });
    }
    res.json({ message: "product deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
