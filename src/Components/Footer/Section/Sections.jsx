import React from "react";

export default function Sections() {
  let navigation = ["Home", "About", "Help & Support", "Product"];
  const aboutList = ["Contact", "Address", "Blog", "About Us"];
  const helpList = ["Coustomers Services", "FAQs", "We Are Hiring", "Returns"];
  return (
    <>
      <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          {navigation.map((navItem, navIndex) => {
            return (
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {navItem}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          {aboutList.map((navItem, navIndex) => {
            return (
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {navItem}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="col mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          {helpList.map((navItem, navIndex) => {
            return (
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  {navItem}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
