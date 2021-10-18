import React, { Children } from "react";
import "./Header.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="logo">
          <p>Q</p>
        </div>
        <p className="QuizPortal"> Quiz Portal</p>
        <p
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: "20px",
            marginLeft: "800px",
            cursor: "pointer"

          }}
        >
          {" "}
          Top Students
        </p>
      </header>
    </React.Fragment>
  );
};

export default Header;
