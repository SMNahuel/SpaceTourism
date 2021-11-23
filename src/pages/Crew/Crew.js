import React, { useState } from "react";
import style from "./Crew.module.css";
import Navbar from "../../components/Navbar";
import Data from "../../asset/space-tourism-website-main/starter-code/data.json";
import CardCrew from "./cardCrew/CardCrew";
import { CrewImages } from "../../enum/Crew.js";
import CircleButon from "../../components/CircleBoton";

const Crew = () => {
  const [state, setState] = useState("Douglas");

  const SelectImage = (name) => {
    setState(name);
  }
  return (
    <div className={style.Container}>
      <Navbar />
      <div className={style.Row}>
        <p className={style.Number}>02</p>
        <p className={style.Title}>MEET YOUR CREW</p>
      </div>
      <div className={style.ContainerCrew}>
        <div className={style.CrewInfo}>
          <CardCrew data={Data.crew[0]} SelectImage={SelectImage}/>
        </div>
        <div className={style.ContainerButtonResponsive}>
          {Data.crew.map((index) => {
            return state === index ? (
              <CircleButon index={index} active={true} key={index} />
            ) : (
              <CircleButon
                index={index}
                active={false}
                key={index}
              />
            );
          })}
        </div>
        <div className={style.ContainerImg}>
          <img
            loading="lazy"
            className={style.CrewImage}
            src={CrewImages[state]}
            alt="crew"
          />
          <hr className={style.Line} />
        </div>

      </div>
    </div>
  );
};

export default Crew;
