import React from "react";
import style from "./Feed.module.css";
import CreateIcon from "@material-ui/icons/CreateTwoTone";
import InputOption from "./inputOption/Input-Option";
import {
  Image,
  CalendarViewDay,
  Subscriptions,
  EventNote,
} from "@material-ui/icons";
function Feed() {
  return (
    <div className={style.feed}>
      <div className={style.feed__inputContainer}>
        <div className={style.feed__input}>
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">send</button>
          </form>
        </div>
        <div className={style.feed__inputOptions}>
          <InputOption Icon={Image} title="Photo" color="#70b5f9" />
          <InputOption Icon={Subscriptions} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNote} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
