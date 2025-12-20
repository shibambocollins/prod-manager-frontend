import { useState } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import headerImage from "./assets/design1.png";
import "./App.css";

import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "./api/productApi";

function App() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const addProduct = async (product) => {
    const savedProduct = await createProduct(product);
    setProducts((prev) => [...prev, savedProduct]);
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const editProduct = async (product) => {
    const updated = await updateProduct(product);
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  return (
    <div
      className="app"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F3E9DC",
        padding: "20px",
      }}
    >
      <img
        src={headerImage}
        alt="Items Manager"
        style={{
          width: "100%",
          maxHeight: "220px",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />

      <ProductForm onAddProduct={addProduct} />

      <button onClick={loadProducts}>Load Products</button>

      <ProductList
        products={products}
        removeProduct={removeProduct}
        editProduct={editProduct}
      />
    </div>
  );
}

export default App;
