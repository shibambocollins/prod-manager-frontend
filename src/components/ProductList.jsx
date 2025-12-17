function ProductList({ products }) {
  if (products.length === 0) {
    return <p>No products yet</p>;
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} – R{product.price}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
