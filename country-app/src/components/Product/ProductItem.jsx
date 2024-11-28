function ProductItem({ product, deleteProduct }) {
    return (
      <li style={{ color: product.isDiscounted ? "green" : "black" }}>
        {product.name} - ${product.price}
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
      </li>
    );
  }
  
  export default ProductItem;
  