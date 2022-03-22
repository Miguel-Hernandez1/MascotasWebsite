import React from "react";
import classes from "./Team.module.css";

import Miguel from "../../../assets/miguelFull.png";
import Derick from "../../../assets/DerickFull.png";
import Troy from "../../../assets/TroyFull.png";

function Team() {
  return (
    <div className={classes.teamRow}>
      <div className={classes.teamContainer}>
        <h1>Our Awesome Team </h1>
        <h3>This game was created by three highschool students!</h3>
      </div>

      <div className={classes.tabsContainer}>
        <div className={classes.tabImgContainerDerick}>
          <img src={Derick} alt="Derick full image" />
          <h1>Derick Barientos</h1>
          <h2>Lead Developer</h2>
        </div>
        <div className={classes.tabImgContainerMiguel}>
          <img src={Miguel} alt="Miguel full image" />
          <h1>Miguel Hernandez</h1>
          <h2>Developer / Designer</h2>
        </div>
        <div className={classes.tabImgContainerTroy}>
          <img src={Troy} alt="Troy full image" />
          <h1>Troy Calderon</h1>
          <h2>Lead Designer</h2>
        </div>
      </div>

      <div className="container-fluid">
        <div className={`row ${classes.row}`}>
          <div className="col-12 col-md-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Team;
