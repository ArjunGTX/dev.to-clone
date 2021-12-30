import React from "react";
import "./Skeleton.css";

function Skeleton({ cover }) {
  return (
    <div className="card skeleton-container">
      <div className="blink-overlay">
        <div className="blinker"></div>
      </div>
      <div className={cover ? "skeleton-cover" : ""}></div>
      <div className="skeleton-profile">
        <div className="skeleton-dp bg-grey"></div>
        <div className="skeleton-user bg-grey"></div>
      </div>
      <div className="skeleton-title bg-grey"></div>
      <div className="skeleton-subtitle bg-grey"></div>
    </div>
  );
}

export default Skeleton;
