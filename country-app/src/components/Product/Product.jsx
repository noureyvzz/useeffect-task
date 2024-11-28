import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import SearchProduct from "./SearchProduct";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const addProduct = async (newProduct) => {
    const response = await axios.post("http://localhost:5000/products", newProduct);
    setProducts([...products, response.data]);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <AddProduct addProduct={addProduct} />
      <SearchProduct setSearchTerm={setSearchTerm} />
      <ProductList products={filteredProducts} deleteProduct={deleteProduct} />
    </div>
  );
}

export default Product;
