import React, { useState } from "react";
import "./Header.css";
import { FaDev } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { RiNotification3Line } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  //state for conditional rendering of hamburger menu
  const [isNavBar, setNavBar] = useState(false);
  return (
    <>
      <NavBar state={isNavBar} clickHandler={setNavBar} />
      <header>
        <div className="left">
          <i
            className="menu hover-blue"
            onClick={() => {
              document.body.style.overflowY = "hidden";
              setNavBar(true);
            }}
          >
            <AiOutlineMenu />
          </i>
          <FaDev className="logo" />
          <div className="search-bar">
            <input
              type="text"
              className="search"
              placeholder="Search..."
              aria-label="search"
            />
            <i className="search-icon hover-blue">
              <BiSearch />
            </i>
          </div>
        </div>
        <div className="right">
          <button className="btn-secondary">Create Post</button>
          <i className="search-btn hover-blue">
            <BiSearch />
          </i>
          <i className="notification hover-blue">
            <RiNotification3Line />
          </i>
          <img
            src="https://github.com/ArjunGTX.png"
            alt="profile"
            className="profile"
          />
        </div>
      </header>
      <div className={isNavBar ? "overlay show-overlay" : "overlay"}></div>
    </>
  );
}
