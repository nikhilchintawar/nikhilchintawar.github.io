import React from "react";

import "./currently.styles.css";

const Currently = () => {
  return (
    <div className="currently">
      <h2>I'm Currently...</h2>
      <div className="currently-info">
        <div className="card currently-card">
          <p>
            Working as Frontend Engineer at{" "}
            <a
              href="https://dphi.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              DPhi
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Currently;
