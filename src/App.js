import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Header from "./Header";
import DeleteTodos from "./DeleteTodos";
import Footer from "./Footer";

class App extends Component {
  state = {
    // hardcoded data - po ustawienu localStorage niepotrzebne
    // todos: [
    //   {
    //     id: Math.random(),
    //     content: "feed cat"
    //   },
    //   {
    //     id: Math.random(),
    //     content: "learn react"
    //   }
    // ]
    todos: []
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("todos");
      // console.log(json);
      const todos = JSON.parse(json);
      // console.log(todos);
      if (todos) {
        this.setState({ todos });
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.lenght !== this.state.todos.length) {
      const json = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", json);
    }
  }

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
    // console.log(todo);
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    // console.log(todo);
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
        <Footer />
      </div>
    );
  }
}

export default App;
