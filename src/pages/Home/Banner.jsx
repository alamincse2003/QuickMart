import React, { useState } from "react";
import productsData from "../../products.json";
import { Link } from "react-router-dom";
import SelectCategory from "../../components/SelectCategory";
const title = (
  <h2>
    Search Your One From <span>Thousand</span> of Products
  </h2>
);
const desc = "We have the largest collection of products";
const bannerList = [
  { iconName: "icofont-users-alt-4", text: "1.5 Million Customers" },
  { iconName: "icofont-notification", text: "More then 2000 Marchent" },
  { iconName: "icofont-globe", text: "Buy Anything Online" },
];
const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  // console.log(productsData);

  // search functionality
  const handleSearch = (e) => {
    const searchTearm = e.target.value;
    setSearchInput(searchTearm);

    // filtering products based on search
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(searchTearm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectCategory select={"all"}></SelectCategory>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
