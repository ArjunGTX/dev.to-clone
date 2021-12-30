import React from "react";
import { GrFormClose } from "react-icons/gr";
import { navList, otherList, iconsList } from "../../util/utility";
import "./NavBar.css";

const NavBar = ({ state, clickHandler }) => {
  return (
    <nav className={state ? "show-navbar" : ""}>
      <div className="heading">
        <h3>DEV Community</h3>
        <i
          className="close hover-blue"
          onClick={() => {
            document.body.style.overflowY = "auto";
            clickHandler("");
          }}
        >
          <GrFormClose />
        </i>
      </div>
      <ul className="nav-links">
        {navList.map((item) => (
          <li key={item.id} className="links-hover">
            {item.nav}
          </li>
        ))}
      </ul>
      <h4 className="other">Other</h4>
      <ul className="nav-links">
        {otherList.map((item) => (
          <li key={item.id} className="links-hover">
            {item.nav}
          </li>
        ))}
      </ul>
      <div className="social-media">
        {iconsList.map((item) => (
          <i key={item.id} className="social hover-blue">
            {item.icon}
          </i>
        ))}
      </div>
    </nav>
  );
};

export default React.memo(NavBar);
