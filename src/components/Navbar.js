import React from "react";
import style from "./Navbar.module.css";
import Logo from "../asset/space-tourism-website-main/starter-code/assets/shared/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className={style.Container}>
        <img src={Logo} alt="logoStar" className={style.ImgLogo} />
        <hr />
        <div className={style.ContainerLink}>
          <div className={style.Link} onClick={() => window.location.href= "/"}>
            <p className={style.Number}>00</p>
            <p className={style.NameLink}>HOME</p>
          </div>
          <div className={style.Link} onClick={() => window.location.href= "/destination"}>
            <p className={style.Number}>01</p>
            <p className={style.NameLink}>DESTINATION</p>
          </div>
          <div className={style.Link} onClick={() => window.location.href= "/crew"}>
            <p className={style.Number}>02</p>
            <p className={style.NameLink}>CREW</p>
          </div>
          <div className={style.Link} onClick={() => window.location.href= "/technology"}>
            <p className={style.Number}>03</p>
            <p className={style.NameLink}>TECHNOLOGY</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
