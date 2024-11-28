import React, { useState } from "react";

function AddProduct({ addProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isDiscounted, setIsDiscounted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;

    addProduct({ name, price: parseFloat(price), isDiscounted });
    setName("");
    setPrice("");
    setIsDiscounted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <label>
        Discounted
        <input
          type="checkbox"
          checked={isDiscounted}
          onChange={(e) => setIsDiscounted(e.target.checked)}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default AddProduct;
