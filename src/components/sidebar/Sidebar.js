import { Avatar } from "@material-ui/core";
import React from "react";
import style from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.sidebar__top}>
        <img
          src="https://i.pinimg.com/originals/e2/c1/1d/e2c11da5189aa842795c00bb152e85f1.jpg"
          alt=""
        />
        <Avatar className={style.sidebar__avatar} />
        <h2>Ali Veli</h2>
        <h4>sonny@sang.com</h4>
      </div>

      <div className={style.sidebar__stats}>
        <div className={style.sidebar__stat}>
          <p>Who viewed you</p>
          <p className={style.sidebar__statNumber}>1.234</p>
        </div>
        <div className={style.sidebar__stat}>
          <p>Who viewed you</p>
          <p className={style.sidebar__statNumber}>2.623</p>
        </div>
      </div>

      <div className={style.sidebar__bottom}>
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
