import React from "react";
import style from "./Header.module.css";
import HeaderOption from "../header-option/Header-Option";
import {
  Search,
  Home,
  SupervisorAccount,
  Chat,
  BusinessCenter,
  Notifications,
} from "@material-ui/icons/";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.header__left}>
        <img
          alt="qwe"
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
        />
        <div className={style.header__search}>
          <Search />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className={style.header__right}>
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
