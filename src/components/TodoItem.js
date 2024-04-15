import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const vekilFonksiyon = useDispatch();

  function handleClick() {
    vekilFonksiyon(toggleComplete({ id, completed: !completed }));
  }

  function deleteItem() {
    vekilFonksiyon(deleteTodo({ id }));
  }

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <label>
            <input
              type="checkbox"
              onClick={handleClick}
              className="mr-3"
              checked={completed}
            />
          </label>
          {title}
        </span>
        <button onClick={deleteItem} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
