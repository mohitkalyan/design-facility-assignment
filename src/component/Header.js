import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [clickClass, setClass] = useState("section1");

  return (
    <div>
      <div className="exam">
        <header className="exam--header">
          <div className="exam--info">
            <div className="exam--name">
              Design Facility <span className="dot">Exam Title</span>
            </div>
            <div className="exam--time">Time Left</div>
          </div>
          <div className="section--navigation">
            <ul>
              <li
                onClick={() => {
                  setClass("section1");
                }}
              >
                <Link
                  to="/"
                  className={`section section1 ${
                    clickClass === "section1" ? "active" : ""
                  }`}
                >
                  Section 1
                </Link>
              </li>
              <li
                onClick={() => {
                  setClass("section2");
                }}
              >
                <Link
                  to="/section2"
                  className={`section section2 ${
                    clickClass === "section2" ? "active" : ""
                  }`}
                >
                  Section 2
                </Link>
              </li>
              <li
                onClick={() => {
                  setClass("section3");
                }}
              >
                <Link
                  to="/section3"
                  className={`section section3 ${
                    clickClass === "section3" ? "active" : ""
                  }`}
                >
                  Section 3
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
