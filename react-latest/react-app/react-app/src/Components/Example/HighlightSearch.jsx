import React, { useState } from 'react';

function HighlightSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Example text to search within
  const text = "React is a JavaScript library for building user interfaces. React is widely used.";
  
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to split and highlight the search term
  const getHighlightedText = (text, searchTerm) => {
    if (!searchTerm) return text;  // If no search term, return original text

    const parts = text.replace(searchTerm, "kiran");
    // return parts.map((part, index) =>
    //   part.toLowerCase() === searchTerm.toLowerCase() ? (
    //     <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
    //   ) :
     return (
        parts  // Return the normal text part
      //)
    );
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search" 
        value={searchTerm} 
        onChange={handleChange} 
      />
      <p>{getHighlightedText(text, searchTerm)}</p>
    </div>
  );
}

export default HighlightSearch;
