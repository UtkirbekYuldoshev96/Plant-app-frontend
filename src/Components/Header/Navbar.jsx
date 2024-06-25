import React from "react";
import Nav from "./Nav";

export default function Navbar() {
  const navbarMenu = ["Home", "Services", "About Us", "Blog", "Contact"];

  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <h3>
                <b>Plant</b>
              </h3>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            {navbarMenu.map((item, index) => {
              return (
                <li className="nav-item d-flex">
                  <a href="#" className="nav-link text-black">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          <div class="col-md-3 text-end">
            <button type="button" className="btn btn-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-success">
              Sign-up
            </button>
          </div>
        </header>
      </div>

      <Nav />
    </>
  );
}
