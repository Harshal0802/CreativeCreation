import React from "react";
import { colors } from "../config";

const Color = ({ title, value, onClick }) => {
  // console.log(title, value);
  return (
    <div className="color_container">
      <h4 className="color_heading">{title}</h4>
      <div className="color_palette">
        {colors.map((item, index) => {
          return (
            <div key={index} className="color_btn" style={{borderColor: item == value ? "#000000" : "#ffffff"}}>
              <button
                className="color"
                onClick={() => onClick(item)}
                style={{ backgroundColor: item }}
              ></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
