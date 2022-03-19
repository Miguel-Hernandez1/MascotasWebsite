import React from "react";
import classes from "./Roadmap.module.css";

import triangle from "../../../assets/triangle.png";
/**
 * This component renders the section with our roadmap
 * @returns
 */
function Roadmap() {
  return (
    <div>
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
              <h4 style={{ color: "#D7D5B4" }}>what</h4>
              <p>NFT game concept and idea development</p>
            </div>

            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#C1CDE3" }}>what</h4>
              <p>NFT game concept and idea development</p>
            </div>

            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#CC0A11" }}>what</h4>
              <p>NFT game concept and idea development</p>
            </div>
            <div className={classes.milestoneRowItem}>
              <h4 style={{ color: "#8DD0C0" }}>what</h4>
              <p>NFT game concept and idea development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
