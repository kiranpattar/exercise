import React, { useState } from "react";

const ProductList = () => {
  const [list, setList] = useState([
    { name: "apple", price: "20", count: 0 },
    { name: "orange", price: "30", count: 0 },
    { name: "pineapple", price: "40", count: 0 },
  ]);
  // const arr = [...list]
  // Function to update count using spread and destructuring
  const updateCount = (index) => {
    setList(prevList => {
      const newList = [...prevList]; // Create a shallow copy of the array
      newList[index] = { ...newList[index], count: newList[index].count + 1 }; // Update the specific item
      return newList;
    });
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {list.map(({ name, price, count }, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {name} - Price: {price} - Count: {count}
            <button onClick={() => updateCount(index)} style={{ marginLeft: "10px" }}>
              Increase Count
            </button>
          </li>
        ))}
      </ul>
      {list.reduce((acc,item)=> (item.count*item.price + acc) ,0)}
      {/* {list.reduce((accumulator, currentValue) => accumulator + currentValue.count*currentValue.price,0,)} */}
    </div>
  );
};

export default ProductList;
