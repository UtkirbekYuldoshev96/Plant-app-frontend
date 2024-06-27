import React from "react";

export default function BestProducts() {
  const productBtn = ["New Plants", "New Arrivals", "Sale"];
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h1>Our Best Products</h1>
          <div className="">
            {productBtn.map((proItem, proIndex) => {
              return (
                <button key={proIndex} className="btn btn-outline-danger mx-2">
                  <a href="#" className="nav-link">
                    {proItem}
                  </a>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}