import React from "react";
import Midgard from "../components/stages/Midgard";

import "../src/style/index.module.css";
import scheduleStyle from "../src/style/schedule.module.css";

export default function ScheduleDetails() {
  // fetch("http://localhost:8080/schedule")
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

  return (
    <>
      <div className={scheduleStyle.schedule_styling}>
        <h1>Foofest schedule</h1>

        {/* <h4 className=""></h4> */}

        <p className="">Midgard</p>
        <p className="">Jotunheim</p>
        <p className="">Vanaheim</p>
        {/* <p className=""></p>
        <p className=""></p>
        <p className=""></p>
        <p className=""></p>
        <p className=""></p> */}
      </div>
    </>
  );
}
