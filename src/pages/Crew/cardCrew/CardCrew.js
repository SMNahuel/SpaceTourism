import React from "react";
import style from "./CardCrew.module.css";


const CardCrew = ({ data }) => {
  return (
    <>
    <div className={style.CardCrew}>
      <div className={style.CrewRole}>{data.role}</div>
      <div className={style.CrewName}>{data.name}</div>
      <div className={style.CrewDescription}>{data.bio}</div>
    </div>

    </>
  );
};

export default CardCrew;
