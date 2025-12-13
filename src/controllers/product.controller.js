import Product from '../models/product.model.js'; 

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const productData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      category: req.body.category,
      sizes: req.body.sizes,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null
    };

    const newProduct = new Product(productData);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productData = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      stock: req.body.stock,
      category: req.body.category,
      sizes: req.body.sizes,
    };

    if (req.file) {
      productData.imageUrl = `/uploads/${req.file.filename}`;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, 
      productData, 
      { new: true }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};