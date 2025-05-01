import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 699 },
  { id: 3, name: "Headphones", price: 199 },
];

const Home = () => {
  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: "flex" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
