import { useState } from 'react';
import ProductList from './components/ProductList';


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

  return (
     <div>
      <h1>Items Manager</h1>

      <button onClick={loadProducts}>
        Load Products
      </button>

      <ProductList products={products} />
    </div>
  );
}

export default App;

