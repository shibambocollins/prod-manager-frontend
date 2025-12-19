const BASE_URL = 'http://localhost:8081/api/products';

export const getProducts = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const createProduct = async (product) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  return response.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
};

export const updateProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
  return response.json();
};
