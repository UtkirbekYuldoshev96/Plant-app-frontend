import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import FramOne from "../../assets/about/Frame 1.png";
import FramTue from "../../assets/about/Frame 2.png";
import FramSre from "../../assets/about/Frame 3.png";
import AboutImgs from "../../assets/about/Group.png";

export default function About() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h2>We have lots of plants collection for you and your family</h2>
            <div className="d-flex">
              <p>See all collection</p>
              <a href="#" className="mx-3">
                <AiOutlineArrowRight />
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <img src={FramOne} alt="Frame -1 " />
          </div>
          <div className="col-md-3">
            <img src={FramTue} alt="Frame -1 " />
          </div>
          <div className="col-md-3">
            <img src={FramSre} alt="Frame -1 " />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-12 col-md-6 p-5">
            <img src={AboutImgs} alt="" />
          </div>

          <div className="col-12 col-md-6 p-5">
            <div className="mt-3">
              <span className=".text-success">About Us</span>
              <h1 className="mt-2">
                Continue to Develop to Became Global Company
              </h1>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                quia iste perspiciatis dolorum delectus ullam accusantium velit
                assumenda magnam quidem sequi, beatae molestias, libero
                doloremque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nemo quaerat perferendis non qui libero?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aut quibusdam reiciendis totam quas facilis?
              </p>
              <b>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
                ullam!
              </b>
            </div>
            <div className="my-5">
              <button type="button" class="btn btn-success ">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
