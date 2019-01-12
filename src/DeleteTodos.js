import React from "react";

const DeleteTodos = props => {
  return (
    <div className="container">
      <button
        className="waves-effect waves-light btn red darken-1"
        onClick={props.deleteTodos}
      >
        Delete Todos
      </button>
    </div>
  );
};

export default DeleteTodos;
