import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {
  const visitGithub = () => {
    window.location = "https://github.com/sumitme00117";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://avatars.githubusercontent.com/sumitme00117"
              alt="Founder"
            />
            <Typography>Sumit Srivastava</Typography>
            <Button onClick={visitGithub} color="primary">
              Visit Github
            </Button>
            <span>
              This is a an ecommerce wesbite made by me. I am a MERN stack developer.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">My Profile</Typography>
            <a
              href="https://www.linkedin.com/in/sumitme00117"
              target="blank"
            >
              <LinkedInIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://github.com/sumitme00117" target="blank">
              <GitHubIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;