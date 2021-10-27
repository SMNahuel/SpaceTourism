import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import style from "./Destination.module.css";
import Data from "../../asset/space-tourism-website-main/starter-code/data.json";
import CardDestination from "./cardDestination/cardDestination.js";

const Destination = () => {
  const [state, setState] = useState(Data.destinations[0]);
  return (
    <div className={style.Container}>
      <Navbar />
      <div className={style.ContainerAbout}>
        <div className={style.Row}>
          <p className={style.Number}>01</p>
          <p className={style.Title}>PICK YOUR DESTINATION</p>
        </div>
        <div className={style.ForceRow}>
          <div className={style.ContainerSelect}>
            {Data.destinations.map((destination) => {
              return (
                <p
                  className={style.TitleSelect}
                  onClick={() => setState(destination)}
                >
                  {destination.name}
                </p>
              );
            })}
          </div>
          <CardDestination destination={state} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
