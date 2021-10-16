import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AssignmentIcon from '@mui/icons-material/Assignment';
import resume from '../HarshYadav_Resume.pdf'
import "../css/header.css";

export const Header = () => {
  return (
    <div className="headercontainer">
      {/* icons */}
      <div className="midnav">
        <a href="#top">
          <img
            src="https://images-platform.99static.com//WaSGuD1Vlk7yu8qtbDlEl-efFFg=/0x0:2039x2039/fit-in/500x500/99designs-contests-attachments/111/111613/attachment_111613874"
            alt=""
          />
        </a>
      </div>
      <div className="contacts">
        <a href={resume} download>
          RESUME<AssignmentIcon/>
        </a>
        <a href="#fo">
          <LocalPhoneIcon />
        </a>
        <a href="https://github.com/PhoenixOutlaw">
          <GitHubIcon />
        </a>
        <a href="#fo">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};
