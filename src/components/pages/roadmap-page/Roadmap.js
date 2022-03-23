import React from "react";
import classes from "./Roadmap.module.css";

import triangle from "../../../assets/triangle.png";
/**
 * This component renders the section with our roadmap
 * @returns
 */
function Roadmap() {
  return (
    <div id="roadmap">
      <div className={classes.container}>
        <div className={classes.roadmapMilestonesContainer}>
          <div className={classes.percentages}>
            <div className={classes.item}>
              <p>25%</p>

              <img src={triangle} alt="triangle" />
            </div>
            <div className={classes.item}>
              <p>50%</p>
              <img src={triangle} alt="triangle" />
            </div>
            <div className={classes.item}>
              <p>75%</p>
              <img src={triangle} alt="triangle" />
            </div>
            <div className={classes.item}>
              <p>100%</p>
            </div>
          </div>

          <div className={classes.milestoneRow}>
            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#C1CDE3" }}>what</h4>
              <p>NFT game concept and idea development</p>
            </div>

            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#D7D5B4" }}>what</h4>
              <p>Finalize Designing</p>
            </div>

            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#CC0A11" }}>what</h4>
              <p>Game Development </p>
            </div>
            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#8DD0C0" }}>what</h4>
              <p>Game beta release to discord members. </p>
            </div>
          </div>
          <div className={classes.milestoneRow}>
            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#C1CDE3" }}>Why</h4>
              <p>
                It is important to finalize your teams MVP before starting
                designing and development
              </p>
            </div>

            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#D7D5B4" }}>Why</h4>
              <p>
                It is important to see a visual demo on how the game will look
                (background and sprite).
              </p>
            </div>

            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#CC0A11" }}>Why</h4>
              <p>
                Game development is key to have a great working game that would
                give a good experience.{" "}
              </p>
            </div>
            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#8DD0C0" }}>Why</h4>
              <p>
                It is important to test our game before the final version is
                released.{" "}
              </p>
            </div>
          </div>
          <div className={classes.milestoneRow}>
            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#C1CDE3" }}>How</h4>
              <p>
                MVP: 1. Market Place 2. Support 3. functionalities of the
                character
              </p>
            </div>

            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#D7D5B4" }}>How</h4>
              <p>Finalize game conceptualization</p>
            </div>

            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#CC0A11" }}>How</h4>
              <p>This will be done with vanilla and Phaser. Our game engine is 2D </p>
            </div>
            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#8DD0C0" }}>How</h4>
              <p>We plan on giving first access to our discord members.  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
