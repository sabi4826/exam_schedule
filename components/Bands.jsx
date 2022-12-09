import React from "react";

import scheduleStyle from "../src/style/schedule.module.css";

export default function Bands() {
  fetch("http://localhost:8080/bands")
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <>
      <p>Here you are able to see our three stages and all the artists that are playing!</p>
    </>
  );
}
