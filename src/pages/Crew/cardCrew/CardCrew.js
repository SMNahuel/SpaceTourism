import React, { useState } from "react";
import CircleButon from "../../../components/CircleBoton";
import style from "./CardCrew.module.css";
import Data from "../../../asset/space-tourism-website-main/starter-code/data.json";

const CardCrew = ({ data, SelectImage}) => {
  const [state, setState] = useState(data);

  const Select = (index) => {
    setState(index);
    SelectImage(index.name.split(" ")[0])
  };

  return (
    <>
      <div className={style.CardCrew}>
        <div className={style.CrewRole}>{state.role}</div>
        <div className={style.CrewName}>{state.name}</div>
        <div className={style.CrewDescription}>{state.bio}</div>
        <div className={style.ContainerButton}>
          {Data.crew.map((index) => {
            return state === index ? (
              <CircleButon index={index} active={true} key={index} />
            ) : (
              <CircleButon
                index={index}
                active={false}
                key={index}
                Select={Select}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardCrew;
