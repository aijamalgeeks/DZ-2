import React, { useState } from 'react';
import ProductItem from './ProductItem';

const Cart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10, count: 0 },
    { id: 2, name: 'Product 2', price: 20, count: 0 },
    { id: 3, name: 'Product 3', price: 30, count: 0 },
  ]);

  const increaseCount = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const decreaseCount = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId && product.count > 0 ? { ...product, count: product.count - 1 } : product
      )
    );
  };

  const resetCount = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, count: 0 } : product
      )
    );
  };

  return (
    <div className="cart">
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          increaseCount={() => increaseCount(product.id)}
          decreaseCount={() => decreaseCount(product.id)}
          resetCount={() => resetCount(product.id)}
        />
      ))}
    </div>
  );
};

export default Cart;