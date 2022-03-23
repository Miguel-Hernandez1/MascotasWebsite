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
        <div className={classes.person}>
          <div className={classes.teamProfileImageContainer}>
            <img src={Derick} alt="Derick full" />
          </div>
          <h1>Derick Barientos</h1>
          <h2>Lead Developer</h2>
        </div>
        <div className={classes.person}>
          <div className={classes.teamProfileImageContainer}>
            <img src={Miguel} alt="Miguel full" />
          </div>

          <h1>Miguel Hernandez</h1>
          <h2>Developer / Designer</h2>
        </div>
        <div className={classes.person}>
          <div className={classes.teamProfileImageContainer}>
            <img src={Troy} alt="Troy full" />
          </div>

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
