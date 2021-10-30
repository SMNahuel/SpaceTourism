import React from "react";
import style from "./CircleButton.module.css";

const CircleButon = ({ active, Select, index }) => {
  return (
    <button
      className={active ? style.PointActive : style.PointDisable}
      onClick={() => Select(index)}
    ></button>
  );
};

export default CircleButon;
