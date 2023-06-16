import React from 'react';

const ProductItem = ({ product, increaseCount, decreaseCount, resetCount }) => {
  const { name, price, count } = product;

  return (
    <div className="product">
      <div className="product-info">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}</span>
      </div>
      <div className="counter">
        <button onClick={decreaseCount}>-</button>
        <span className="product-count">{count}</span>
        <button onClick={increaseCount}>+</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
};

export default ProductItem;