import React from "react";
import Navbar from "../../components/Navbar";
import style from "./Destination.module.css";
import Data from "../../asset/space-tourism-website-main/starter-code/data.json";
import CardDestination from "./cardDestination/cardDestination.js";
import { connect, useDispatch } from "react-redux";
import { SelectDestination } from "../../store/actionCreator";


const Destination = ({destination}) => {
  const dispatch = useDispatch();

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
            {Data.destinations.map((destination , index) => {
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
          <CardDestination destination={destination} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  destination: state.destination
})

export default connect(mapStateToProps)(Destination);
