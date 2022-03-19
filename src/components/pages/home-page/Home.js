import React from "react";
import classes from "./Home.module.css";

import cityImage from "../../../assets/city@1x.png";
import tab1 from "../../../assets/tab1.png";
import tab2 from "../../../assets/tab2.png";

function Home() {
  return (
    <div>
      <div className="container-fluid">
        <div className={`row ${classes.row}`}>
          <div className="col-12 col-md-6">
            <div className={classes.callToActionContainer}>
              <h1>We believe every pet deserves a loving home. </h1>
              <h3>
                Our mission is to help pets find homes and donate to animal
                shelters so that animals can have better living conditions.
              </h3>
              <button>
                <p>Connect Wallet</p>
              </button>
              <div className={classes.tabs}>
                <div className={classes.tabImgContainer}>
                  <img src={tab1} alt="tab 1" />
                </div>
                <div className={classes.tabImgContainer}>
                  <img src={tab2} alt="tab 2" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className={classes.cityImgContainer}>
              <img src={cityImage} alt="city background" />
            </div>
          </div>
        </div>

        <div className="images-home"></div>
      </div>
    </div>
  );
}

export default Home;