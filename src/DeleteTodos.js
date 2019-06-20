import React from "react";

const DeleteTodos = props => {
  return (
    <button
      className="waves-effect waves-light btn red darken-1 right"
      onClick={props.deleteTodos}
    >
      Delete Todos
    </button>
  );
};

export default DeleteTodos;
