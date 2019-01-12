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
            X
          </button>
        </li>
      );
    })
  ) : (
    <li className="center red-text">You don't have any todo's</li>
  );

  return (
    <main>
      <div className="row">
        <div className="container">
          <h4 className="teal-text">Todo's...</h4>
          <ul className="todos collection">{todoList}</ul>
        </div>
      </div>
    </main>
  );
};

export default Todos;
