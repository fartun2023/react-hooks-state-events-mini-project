import React from "react";

function CategoryFilter({ categories }) {
  const handleClick = (category) => {
    // handle the click event here
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={category} onClick={() => handleClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;