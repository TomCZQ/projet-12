import React, { useEffect, useState } from "react";
import "./about.scss";
import profilePicture from "../../assets/pp.jpg";

function About() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-section">
      <div
        className="about"
        style={{ transform: `translateX(-${scrollPosition / 4}px)` }}
      >
        <div className="thomas">
          <h2>Thomas Cemeli</h2>
          <img src={profilePicture} alt="Profile"></img>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="placeholder"></div>
    </div>
  );
}

export default About;