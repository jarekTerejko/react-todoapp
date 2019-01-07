import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <li className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <button
            className="waves-effect waves-light red darken-1 btn-small right"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            delete
          </button>
        </li>
      );
    })
  ) : (
    <li className="center">You don't have any todo's</li>
  );

  return (
    <div className="container">
      <h5 className="teal-text">Todo's...</h5>
      <ul className="todos collection">{todoList}</ul>
    </div>
  );
};

export default Todos;
