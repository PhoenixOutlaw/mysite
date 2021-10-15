import React from "react";
import Reactjs from "../images/Reactjs.svg";
import html5 from "../images/html5.svg";
import css from "../images/css.svg";
import js from "../images/js.gif";

export const F2 = () => {
  return (
    <div className="f2">
      <div className="content">
        <h2>my skills</h2>
        <div className="skills">
          <div class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item  active" data-bs-interval="560">
                <img src={Reactjs} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="560">
                <img src={html5} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="560">
                <img src={css} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="600">
                <img src={js} class="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
