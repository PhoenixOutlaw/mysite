import React from "react";
import Typical from "react-typical";
export const F1 = () => {
  return (
    <div className="f1" id="top">
      <div className="content">
        <h2>welcome</h2>
        <p id="typical">
          <Typical
            wrapper="b"
            loop={Infinity}
            steps={[
              " hi! my name is harsh",
              1500,
              " i am a webdeveloper !",
              1500,
              "frontend developer !!",
              1500,
              "in progress to be full-stack developer.",
              1500,
            ]}
          />
        </p>
      </div>
    </div>
  );
};
