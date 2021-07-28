import React from "react";

export default function DateTime () {
    let now = new Date();
let currentDateandTime = document.querySelector("#day-time");
let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
let day = days[now.getDay()];
let hours = now.getHours();

let minutes = now.getMinutes();
currentDateandTime.innerHTML = `${day} ${hours}:${minutes}`;

 function formatHours(timestamp) {
  let time = new Date(timestamp);
  let hours = time.getHours();
  if(hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = time.getMinutes();
  if(minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}
}