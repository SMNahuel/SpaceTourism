import React from "react";
import style from "./cardDestination.module.css";
import { Images } from "../../../enum/Destination.js";

const CardDestination = ({ destination }) => {
  return (
    <div className={style.Container}>
      <img
        className={style.ImgDestination}
        src={Images[destination.name]}
        alt="planetDestination"
      />
      <div className={style.Info}>
        <h1 className={style.Title}>{destination.name.toUpperCase()}</h1>
        <p className={style.Description}>{destination.description}</p>
        <hr className={style.Line} />
        <div className={style.ContainerDistance}>
          <div>
            <p className={style.TitleDistance}>AVG. DISTANCE</p>
            <p className={style.TitleInfo}>{destination.distance}</p>
          </div>
          <div>
            <p className={style.TitleDistance}>EST. TRAVEL TIME</p>
            <p className={style.TitleInfo}>{destination.travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDestination;
