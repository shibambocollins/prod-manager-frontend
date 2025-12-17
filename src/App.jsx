import { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';


function App() {
   const [products, setProducts] = useState([]);

  const loadProducts = () => {
    const fakeProducts = [
      { id: 1, name: 'Laptop', price: 12000 },
      { id: 2, name: 'Mouse', price: 250 },
      { id: 3, name: 'Keyboard', price: 800 }
    ];

    setProducts(fakeProducts);
  };

  const addProduct = (product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

   const deleteProduct = (id) => {
    setProducts(prev =>
      prev.filter(product => product.id !== id)
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
      />
    </div>
  );
}

export default App;

