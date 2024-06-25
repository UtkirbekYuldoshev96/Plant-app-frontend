import React from "react";
import navImag from "./../../assets/imgs/nav.png";

export default function Nav() {
  let randomNumberList = [2000, 1200, 1000];
  let runText = ["Delivery", "Customers", "Product"];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-3">
            <div className="d-inline my-5 p-3">
              <h1 className="" style={{ fontSize: "4.4rem" }}>
                Growing Beautiful Plants at Home
              </h1>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt architecto non itaque impedit facere consequatur
                accusamus, recusandae accusantium officia saepe natus debitis
                maiores optio quia deserunt sit obcaecati amet possimus.
              </p>
              <button className="btn btn-success">Learn More</button>
              <div className="d-flex justify-content-between my-4">
                {randomNumberList.map((runItem, runIndex) => {
                  return (
                    <div className="mx-2">
                      <h2>{runItem}+</h2>
                      <p>{runText[runIndex]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-3">
            <img
              src={navImag}
              className="img-fluid rounded float-end"
              width={420}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
