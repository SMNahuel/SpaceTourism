import React from "react";
import style from "./CircleButton.module.css";

const BotonTechnology = ({handleClick, index}) => {
  return (
    <>
      <div className={style.Container}>
        <button className={index === 1 ? style.ButtonTechActive : style.ButtonTech} onClick={() => handleClick(0)}>1</button>
        <button className={index === 2 ? style.ButtonTechActive : style.ButtonTech} onClick={() => handleClick(1)}>2</button>
        <button className={index === 3 ? style.ButtonTechActive : style.ButtonTech} onClick={() => handleClick(2)}>3</button>
      </div>
    </>
  );
};

export default BotonTechnology;
