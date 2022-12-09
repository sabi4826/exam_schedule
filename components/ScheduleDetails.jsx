import React from "react";

// import Bands from "./Bands";
import scheduleStyle from "../src/style/schedule.module.css";

export default function ScheduleDetails() {
  return (
    <>
      <div className={scheduleStyle.schedule_styling}>
        <h1>Foofest schedule</h1>

        {/* we have to make a table with the days of the week, where artists are displayed, then we need to filter */}
        {/* <p>the three stages</p> */}

        {/* <p>Here you are able to see our three stages and all the artists that are playing!</p> */}
        {/* <button className={scheduleStyle.buttonStyling}>Go back</button> */}
      </div>
    </>
  );
}
