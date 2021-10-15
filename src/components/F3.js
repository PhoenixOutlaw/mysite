import React from "react";
import pr1 from "../images/pr1.png";
import pr2 from "../images/pr2.png";
import pr3 from "../images/pr3.png";
import pr4 from "../images/pr4.png";
import pr5 from "../images/pr5.png";
import pr7 from "../images/pr7.png";
import pr6 from "../images/pr6.png";
import pr8 from "../images/pr8.png";

export const F3 = () => {
  return (
    <div className="f3">
      <div className="content">
        <h2>My Personal Projects</h2>
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="6"
              aria-label="Slide 7"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="7"
              aria-label="Slide 8"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" id="f3c">
              <img src={pr3} alt="..." />
              <div class="carousel-caption d-none d-md-block" id="f3ci">
                <h5>LINKDIN CLONE</h5>
                <p>NORMAL VIEW</p>
              </div>
            </div>
            <div class="carousel-item" id="f3c">
              <img src={pr7} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="f3ci">
                <h5>LINKDIN CLONEl</h5>
                <p>MOBILE VIEW</p>
              </div>
            </div>
            <div class="carousel-item" id="f3c">
              <img src={pr1} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="f3ci">
                <h5>GMAIL CLONE</h5>
                <p>NORMAL VIEW PG1</p>
              </div>
            </div>
            <div class="carousel-item" id="f3c">
              <img src={pr2} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="f3ci">
                <h5>GMAIL CLONE</h5>
                <p>NORMAL VIEW PG2</p>
              </div>
            </div>
            <div class="carousel-item" id="f3c">
              <img src={pr8} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="f3ci">
                <h5>GMAIL CLONE</h5>
                <p>MOBILE VIEW</p>
              </div>
            </div>
            <div class="carousel-item" id="f3c">
              <img src={pr4} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="f3ci">
                <h5>INSTAGRAM CLONE</h5>
                <p>NORMAL VIEW PG1</p>
              </div>
            </div>
            <div class="carousel-item" id="f3c">
              <img src={pr5} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="f3ci">
                <h5>INSTAGRAM CLONE</h5>
                <p>NORMAL VIEW PG2</p>
              </div>
            </div>
            <div class="carousel-item" id="f3c">
              <img src={pr6} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="f3ci">
                <h5>INSTAGRAM CLONE</h5>
                <p>MOBILE VIEW</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
