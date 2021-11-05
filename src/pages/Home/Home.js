import React from "react";
import Navbar from "../../components/Navbar";
import style from "./Home.module.css";

const Home = () => {

  return (
    <div className={style.Container}>
      <Navbar />
      <div className={style.ContainerAbout}>
        <div className={style.Left}>
          <p>SO, YOU WANT TO TRAVEL TO</p>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={style.EffectAmazing}>
          <div className={style.Rigth}>
            <p>EXPLORE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
