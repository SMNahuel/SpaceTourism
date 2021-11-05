import React, { useState } from "react";
import Hamburger from "hamburger-react";
import style from "./Navbar.module.css";
import Logo from "../asset/space-tourism-website-main/starter-code/assets/shared/logo.svg";

const Navbar = () => {
  const [isActive] = useState(window.location.href.split("/").pop());
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={style.Container}>
        <img src={Logo} alt="logoStar" className={style.ImgLogo} />
        <hr />
        <div className={style.ContainerLink}>
          <div
            className={isActive === "" ? style.LinkSelect : style.Link}
            onClick={() => (window.location.href = "/")}
          >
            <p className={style.Number}>00</p>
            <p className={style.NameLink}>HOME</p>
          </div>
          <div
            className={
              isActive === "destination" ? style.LinkSelect : style.Link
            }
            onClick={() => (window.location.href = "/destination")}
          >
            <p className={style.Number}>01</p>
            <p className={style.NameLink}>DESTINATION</p>
          </div>
          <div
            className={isActive === "crew" ? style.LinkSelect : style.Link}
            onClick={() => (window.location.href = "/crew")}
          >
            <p className={style.Number}>02</p>
            <p className={style.NameLink}>CREW</p>
          </div>
          <div
            className={
              isActive === "technology" ? style.LinkSelect : style.Link
            }
            onClick={() => (window.location.href = "/technology")}
          >
            <p className={style.Number}>03</p>
            <p className={style.NameLink}>TECHNOLOGY</p>
          </div>
        </div>
        <div  className={style.Responsive}>
          <Hamburger color="#ffffff" toggled={isOpen} toggle={setOpen} />
        </div>
        {isOpen && (
          <div className={style.MenuResponsive}>
            <div
              className={isActive === "" ? style.LinkSelect : style.Link}
              onClick={() => (window.location.href = "/")}
            >
              <p className={style.Number}>00</p>
              <p className={style.NameLink}>HOME</p>
            </div>
            <div
              className={
                isActive === "destination" ? style.LinkSelect : style.Link
              }
              onClick={() => (window.location.href = "/destination")}
            >
              <p className={style.Number}>01</p>
              <p className={style.NameLink}>DESTINATION</p>
            </div>
            <div
              className={isActive === "crew" ? style.LinkSelect : style.Link}
              onClick={() => (window.location.href = "/crew")}
            >
              <p className={style.Number}>02</p>
              <p className={style.NameLink}>CREW</p>
            </div>
            <div
              className={
                isActive === "technology" ? style.LinkSelect : style.Link
              }
              onClick={() => (window.location.href = "/technology")}
            >
              <p className={style.Number}>03</p>
              <p className={style.NameLink}>TECHNOLOGY</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
