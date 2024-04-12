import React from "react";
import { colors } from "../config";

const Color = ({ title }) => {
  return (
    <div className="color_container">
      <h4 className="color_heading">{title}</h4>
      <div className="color_palette">
        {colors.map((item, index) => (
          <button className="color" key={index} style={{ backgroundColor: item }}></button>
        ))}
      </div>
    </div>
  );
};

export default Color;
