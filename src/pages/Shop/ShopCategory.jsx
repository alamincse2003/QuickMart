import React from "react";
import data from "../../products.json";
const ShopCategory = ({
  filterItem,
  setItem,
  menuItem,
  setProducts,
  selectedCategory,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Category</h5>
      </div>
      <div>
        <button
          onClick={() => setProducts(data)}
          className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>
        {menuItem.map((value, id) => {
          return (
            <button
              key={id}
              className={`m-2 ${
                selectedCategory === value ? "bg-warning" : ""
              }`}
              onClick={() => filterItem(value)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
