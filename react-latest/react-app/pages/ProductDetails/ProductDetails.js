import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 999, description: "Powerful laptop for work and play." },
  { id: 2, name: "Smartphone", price: 699, description: "Latest smartphone with great features." },
  { id: 3, name: "Headphones", price: 199, description: "Noise-canceling headphones." },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
