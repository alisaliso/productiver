import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import WeekCalendar from "./WeekCalendar";
import "../App.sass";

export default function App() {
  return (
    <div className="app">
      <WeekCalendar />
      <VisibleTodoList />
      <AddTodo />
      {/* <Footer /> */}
    </div>
  );
}
