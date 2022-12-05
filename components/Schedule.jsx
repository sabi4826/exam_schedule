import React from "react";
import scheduleStyle from "../src/style/schedule.module.css";

export default function Schedule() {
  return (
    <div className={scheduleStyle.schedule_styling}>
      <h1>This is the schedule section</h1>
      <p>Lorem ipsum</p>
      <button className={scheduleStyle.buttonStyling}>Go back</button>
    </div>
  );
}
