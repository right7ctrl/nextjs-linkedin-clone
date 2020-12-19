import React from "react";
import style from "./Header-Option.module.css";

function HeaderOption({ Icon, title }) {
  return (
    <div className={style.headerOption}>
      {Icon && <Icon className={style.headerOption__icon} />}
      <h3 className={style.headerOption__title}>{title}</h3>
    </div>
  );
}

export default HeaderOption;
