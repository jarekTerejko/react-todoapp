import React, { Component } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import DeleteTodos from "./DeleteTodos";
class Todos extends Component {
  //  { todos, deleteTodo } = this.props
  state = {
    todos: [],
    content: this.props.todos
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

  addTodo = todo => {
    // console.log(todo);
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    // console.log(todo);
    this.setState({
      todos
    });
  };

  deleteTodos = () => {
    this.setState({
      todos: []
    });
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

  updateTodo = (id, updatedTodo) => {
    const updateTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, content: updatedTodo };
      }
      return todo;
    });
    this.setState({ todos: updateTodos });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const todos = this.state.todos.length ? (
      this.state.todos.map(todo => {
        return (
          <Todo
            content={todo.content}
            key={todo.id}
            deleteTodo={this.deleteTodo}
            updateTodo={this.updateTodo}
            id={todo.id}
          />
        );
      })
    ) : (
      <li className="collection-item">You do not have any todos...</li>
    );

    return (
      <main>
        <div className="row">
          <div className="container">
            <AddTodo addTodo={this.addTodo} />
            <h4 className="blue-text">Todos...</h4>
            <ul className="collection">{todos}</ul>
            <DeleteTodos deleteTodos={this.deleteTodos} />
          </div>
        </div>
      </main>
    );
  }
}

export default Todos;
