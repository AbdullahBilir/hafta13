import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const totalComplete = useSelector((state) =>
    state.todos.filter((todo) => {
      return todo.completed === true;
    })
  );

  return <h4 className="mt-3">Total Complete Items: {totalComplete.length}</h4>;
};

export default TotalCompleteItems;
