import React from "react";
import classes from "./Team.module.css";

function Team() {
  return (
    <div>
      <div className="container-fluid">
        <div className={`row ${classes.row}`}>
          <div className="col-12 col-md-6">
            <div className={classes.teamContainer}>
              <h1>Our Awesome Team </h1>
              <h3>
                This game was created by three highschool students!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
