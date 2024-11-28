import ProductItem from "./ProductItem";

function ProductList({ products, deleteProduct }) {
  return (
    <ul>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} deleteProduct={deleteProduct} />
      ))}
    </ul>
  );
}

export default ProductList;
