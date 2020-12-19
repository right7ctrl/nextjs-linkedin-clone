import { Avatar } from "@material-ui/core";
import React from "react";
import style from "./Header-Option.module.css";

function HeaderOption({ Icon, title, avatar }) {
  return (
    <div className={style.headerOption}>
      {Icon && <Icon className={style.headerOption__icon} />}
      {avatar && <Avatar className={style.headerOption__icon} src={avatar} />}
      <h3 className={style.headerOption__title}>{title}</h3>
    </div>
  );
}

export default HeaderOption;
