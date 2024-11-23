import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import data from "../../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";
const showResults = "Showing 01 - 12 of 139 Results";
const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(data);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  } 


  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop"></PageHeader>
      {/* shop page  */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and article here  */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a onClick={() => setGridList(!GridList)} className="grid">
                      <i className="icofont-ghost"></i>
                    </a>
                    <a onClick={() => setGridList(!GridList)} className="list">
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <ProductCards
                    GridList={GridList}
                    products={currentProducts}
                  ></ProductCards>
                </div>
                {/* pagination */}
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                ></Pagination>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList}></Search>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
