import React from "react";
import './AutoPanel.css';
import { FaTree } from "react-icons/fa";
import { GiCloudyFork, GiWaterDrop } from "react-icons/gi";

const AutoPanel = () => {
  return (
    <div className="auto-panel">
      <div className="scrolling-text">
        <div className="stat-item">
          <p>For every <span className="highlight">used book</span> you buy, You Save:</p>
        </div>
        <div className="stat-item">
          <FaTree className="icon" />
          <p>0.0106 Tree(s)</p>
        </div>
        <div className="stat-item">
          <GiCloudyFork className="icon" />
          <p>1.41Kg of CO2 Emission</p>
        </div>
        <div className="stat-item">
          <GiWaterDrop className="icon" />
          <p>176 Liters of Water</p>
        </div>
      </div>
    </div>
  );
};

export default AutoPanel;
