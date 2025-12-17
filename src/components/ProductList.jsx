import { useState } from 'react';

function ProductList({ products, onDeleteProduct, onUpdateProduct }) {
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editPrice, setEditPrice] = useState('');

  const startEdit = (product) => {
    setEditingId(product.id);
    setEditName(product.name);
    setEditPrice(product.price);
  };

  const saveEdit = () => {
    onUpdateProduct({
      id: editingId,
      name: editName,
      price: Number(editPrice)
    });

    setEditingId(null);
  };

  if (products.length === 0) {
    return <p>No products yet</p>;
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {editingId === product.id ? (
            <>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <input
                type="number"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
              />
              <button onClick={saveEdit}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              {product.name} – R{product.price}{' '}
              <button onClick={() => startEdit(product)}>Edit</button>
              <button onClick={() => onDeleteProduct(product.id)}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;

