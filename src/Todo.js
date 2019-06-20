import React, { Component } from "react";

export default class Todo extends Component {
  state = {
    isEditing: false,
    content: this.props.content
  };

  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  handleUpdate = e => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.content);
    this.setState({ isEditing: false });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    console.log(this.props);
    let result;
    if (this.state.isEditing) {
      result = (
        <div className="container">
          <form onSubmit={this.handleUpdate} style={{ marginBottom: 15 }}>
            <input
              type="text"
              value={this.state.content}
              name="content"
              onChange={this.handleChange}
            />
            <button className="waves-effect waves-light green darken-1 btn-small right">
              Update
            </button>
          </form>
        </div>
      );
    } else {
      result = (
        <li className="collection-item">
          <div>{this.props.content}</div>
          <div>
            <button
              onClick={() => this.props.deleteTodo(this.props.id)}
              className="waves-effect waves-light red darken-1 btn-small"
            >
              delete
            </button>
            <button
              onClick={this.toggleForm}
              className="waves-effect waves-light blue darken-1 btn-small"
            >
              Edit
            </button>
          </div>
        </li>
      );
    }
    return result;
  }
}
