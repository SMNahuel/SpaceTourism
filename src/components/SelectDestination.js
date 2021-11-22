import React from "react";
import { useDispatch } from "react-redux";
import { SelectDestination } from "../store/actionCreator";
import style from "./SelectDestination.module.css";
import Data from "../asset/space-tourism-website-main/starter-code/data.json";

const SelectDestinationComponent = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.ContainerSelect}>
      {Data.destinations.map((destination, index) => {
        return (
          <p
            key={index}
            className={style.TitleSelect}
            onClick={() => dispatch(SelectDestination(destination))}
          >
            {destination.name}
          </p>
        );
      })}
    </div>
  );
};

export default SelectDestinationComponent;
