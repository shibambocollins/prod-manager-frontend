import { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct
} from './api/productApi';


function App() {
   const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

   const addProduct = async (product) => {
    const savedProduct = await createProduct(product);
    setProducts(prev => [...prev, savedProduct]);
  };

  const removeProduct = async (id) => {
    await deleteProduct(id);
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const editProduct = async (product) => {
    const updated = await updateProduct(product);
    setProducts(prev =>
      prev.map(p => (p.id === updated.id ? updated : p))
    );
  };

  return (
     <div>
      <h1>Items Manager</h1>

      <ProductForm onAddProduct={addProduct} />

      <button onClick={loadProducts}>
        Load Products
      </button>

      <ProductList products={products} 
      onDeleteProduct={deleteProduct} 
      onUpdateProduct={updateProduct}
      />
    </div>
  );
}

export default App;

