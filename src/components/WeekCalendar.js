import React, { useState } from "react";
import * as moment from "moment";
import "../sass/components/WeekCalendar.sass";

function getShortWeek(str) {
  return str.slice(0, 3);
}

function getCurrentWeekDates() {
  let currentDate = moment();
  let weekStart = currentDate.clone().startOf("week");

  const days = [];
  for (let i = 0; i <= 6; i++) {
    const dayObj = {
      month: moment(weekStart).add(i, "days").format("MMMM"),
      date: moment(weekStart).add(i, "days").format("D"),
      week: getShortWeek(moment(weekStart).add(i, "days").format("dddd")),
    };
    days.push(dayObj);
  }

  return days;
}

function getCurrentDate() {
  return {
    month: moment().format("MMMM"),
    date: moment().format("D"),
    week: getShortWeek(moment().format("dddd")),
  };
}

export default function WeekCalendar() {
  const [days] = useState(getCurrentWeekDates);

  return (
    <ul className="week">
      {days.map((date, index) => (
        <li
          key={index}
          className={
            JSON.stringify(getCurrentDate()) === JSON.stringify(date)
              ? "week-item-active week-item"
              : date.week === "Sat" || date.week === "Sun"
              ? "week-item-weekend week-item"
              : "week-item"
          }
        >
          <div className="week-item-w">{date.week}</div>
          <div className="week-item-d">{date.date}</div>
        </li>
      ))}
    </ul>
  );
}
