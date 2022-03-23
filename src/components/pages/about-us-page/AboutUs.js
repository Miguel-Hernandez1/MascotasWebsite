import React from "react";
import classes from "./AboutUs.module.css";
import demo1 from "../../../assets/demo1.png";

function AboutUs() {
  return (
    <div id="about-us">
      <div className="container-fluid">
        <div className={`row ${classes.row}`}>
          <div className="col-12 col-md-6">
            <div className={classes.explanationAboutContainer}>
              <h1>About </h1>
              <h3>
                We are a NFT Pay-to-Earn endless runner game with the goal of
                helping pets all around the world find homes!
              </h3>
              
              <h1>How this works </h1>
              <h3>
                To start you would have to first choose any pet you would like!
                Keep in mind that the beta will only contain the character/pet
                'Dog.' Once you have chosen your desired game character, you
                would have to mint an NFT for that character and then, you would
                receive a random NFT of your character. Then you are ready to
                play! Remember, make sure your pet makes it to safety!
              </h3>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className={classes.demoImgContainer}>
              <img src={demo1} alt="game demo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
