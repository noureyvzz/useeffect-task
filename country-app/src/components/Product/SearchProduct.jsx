function SearchProduct({ setSearchTerm }) {
    return (
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    );
  }
  
  export default SearchProduct;
  