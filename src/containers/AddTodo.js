import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <form
      className="add_todo"
      onSubmit={(e) => {
        e.preventDefault();

        if (!input.value.trim()) {
          return;
        }

        dispatch(addTodo(input.value));
        input.value = "";
      }}
    >
      <input
        className="add_todo-input"
        type="text"
        placeholder="New"
        ref={(node) => (input = node)}
      />
      <button className="add_todo-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default connect()(AddTodo);
