import React from "react";
import "../css/main.css";
import { F1 } from "./F1";
import { F2 } from "./F2";
import { F3 } from "./F3";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <div className="fcontainer">
      <div>
        <F1 />
        <section className="s1">
          <h2>ABOUT ME</h2>
          <h5>
            Hi there , my name is Harsh yadav i am front-end developer . i am 20
            years old .I have done my schooling from GD GOENKA PUBLIC SCHOOL
            ,curretly doing btech from dronacharya college of engineering
          </h5>
        </section>
        <F2 />
        <section className="s2"></section>
        <F3 />
        <Footer />
      </div>
    </div>
  );
};
