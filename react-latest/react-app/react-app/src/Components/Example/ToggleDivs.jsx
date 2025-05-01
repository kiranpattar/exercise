import React, { useState } from "react";

function ToggleDivs() {
  // State to manage the visibility of the parent div
  const [showParent, setShowParent] = useState(true);

  // Toggle function to switch between showing and hiding the parent
  const toggleParent = () => {
    setShowParent(!showParent);
  };

  return (
    <div>
      {showParent && (
        <div className="parent-div" style={{ padding: "20px", background: "#eee", marginBottom: "10px" }}>
          <h2>Parent Div</h2>
          <p>This is the parent div content.</p>
          <Child toggleParent={toggleParent} />
        </div>
      )}
      {!showParent && <button onClick={toggleParent}>Show Parent</button>}
    </div>
  );
}

function Child({ toggleParent }) {
  return (
    <div className="child-div">
      <h4>Child Div</h4>
      <button onClick={toggleParent}>Toggle Parent Visibility</button>
    </div>
  );
}

export default ToggleDivs;
