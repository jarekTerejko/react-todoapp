import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Header from "./Header";
import DeleteTodos from "./DeleteTodos";

class App extends Component {
  state = {
    todos: [
      {
        id: Math.random(),
        content: "feed cat"
      },
      {
        id: Math.random(),
        content: "learn react"
      }
    ]
  };

  deleteTodo = id => {
    // console.log(id)
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      // todos: todos
      // key i value są te same mozna wiec skrocic do:
      todos
    });
  };

  deleteTodos = () => {
    this.setState({
      todos: []
    });
  };

  addTodo = todo => {
    console.log(todo);
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    console.log(todo);
    this.setState({
      todos
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          title="Another Todo App"
          subtitle="...but built in React and with Local Storage"
        />
        <DeleteTodos deleteTodos={this.deleteTodos} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
