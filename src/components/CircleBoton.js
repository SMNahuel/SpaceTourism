import React from "react";
import style from "./CircleButton.module.css";
import { useDispatch } from "react-redux";
import { SelectCrew } from "../store/actionCreator";

const CircleButon = ({ active, Select, index }) => {
  return (
    <button
      className={active ? style.PointActive : style.PointDisable}
      onClick={() => Select(index)}
    ></button>
  );
};

export default CircleButon;
