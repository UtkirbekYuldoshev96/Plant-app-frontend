import React from "react";
import Sections from "./Section/Sections";
import Instagram from "../../assets/icon/Instagram (filled).png";
import Facebook from "../../assets/icon/Facebook.png";
import Twitter from "../../assets/icon/Twitter.png";

export default function Footer() {

  const iconList = [Instagram, Facebook, Twitter];
  console.log(iconList);

  return (
    <>
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div className="col mb-3" style={{width: "400px"}}>
            <a
              href="/"
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <h3><b>Plant</b></h3>
            </a>
            <p className="text-body-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsum voluptatibus deserunt qui veniam nemo</p>
            <div className="d-flex">
              <div className="bg-success">
                
              </div>
              {
                iconList.map((iconItem, iconIndex) => {
                  return <div className="mt-2">
                    <img src={iconItem} className="px-2" alt="" />
                  </div>
                })
              }
            </div>
          </div>

          <Sections />
        </footer>
      </div>
    </>
  );
}
