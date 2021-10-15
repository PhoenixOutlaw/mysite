import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

export const Footer = () => {
  return (
    <div className="footer" id="fo">
      <div>
        <div className="leftf">
          <span>
            <LocalPhoneIcon /> <p>9582571333</p>
          </span>
          <span>
            <GoogleIcon /> <p>harshyadavv615@gmail.com</p>
          </span>
        </div>
        <div className="rightf">
          <span>
            <GitHubIcon /> <p>https://github.com/PhoenixOutlaw</p>
          </span>
          <span>
            <LinkedInIcon />{" "}
            <p>https://www.linkedin.com/in/harsh-yadav-1048231b0</p>
          </span>
        </div>
      </div>
    </div>
  );
};
