import style from "./Input-Option.module.css";
import React from "react";

function InputOption({ Icon, title, color }) {
  return (
    <div className={style.inputOption}>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
