import React, { useState } from "react";
import BotonTechnology from "../../components/BotonTechnology.js";
import Navbar from "../../components/Navbar";
import style from "./Technology.module.css";
import { Images } from "../../enum/Technology.js";
import Data from "../../asset/space-tourism-website-main/starter-code/data.json";

const Technology = () => {
  const [state, setState] = useState({
    data: Data.technology[0],
    index: 1,
  });

  const handleClick = async (index) => {
    setState({
      data: Data.technology[index],
      index: index+1,
    });
  };

  return (
    <div className={style.Container}>
      <Navbar />
      <div className={style.Row}>
        <p className={style.Number}>03</p>
        <p className={style.Title}>SPACE LAUNCH 101</p>
      </div>
      <div className={style.ContainerInfo}>
        <div className={style.ContainerAbout}>
          <div className={style.ContainerBotton}>
            <BotonTechnology handleClick={handleClick} index={state.index}/>
          </div>
          <div className={style.Info}>
            <p className={style.TitleInfo}>THE TERMINOLOGY…</p>
            <h1 className={style.SubTitle}>{state.data.name}</h1>
            <p className={style.About}>{state.data.description}</p>
          </div>
        </div>
        <img src={Images[state.index]} className={style.ImagesTech} alt="ImageTech" />
      </div>
    </div>
  );
};

export default Technology;
