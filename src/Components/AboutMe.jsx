import React from "react";
import "./aboutme.css";

function AboutMe() {
  return (
    <div className="container__about">
      <div className="row__about">
        <h1 className="about__title">About Us</h1>
        <div className="AboutMe__wrapper">
          <figure className="picture">
            <img src="/Motorcycle.png" alt="" className="AboutMePicture" />
          </figure>
          <div className="AboutMe__text">
            <p className="about__para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
             <p className="about__para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
