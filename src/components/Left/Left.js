import React from "react";
import "./Left.css";
import { navList, otherList, iconsList } from "../../util/utility";

function Left() {
  return (
    <div className="nav-container">
      <div>
        <ul className="links">
          {navList.map((item) => (
            <li key={item.id} className="links-hover">
              {item.nav}
            </li>
          ))}
        </ul>
        <h4>Other</h4>
        <ul className="links">
          {otherList.map((item) => (
            <li key={item.id} className="links-hover">
              {item.nav}
            </li>
          ))}
        </ul>
        <div className="media-icons">
          {iconsList.map((item) => (
            <i key={item.id} className="social hover-blue">
              {item.icon}
            </i>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Left;
