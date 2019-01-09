import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.content !== "") {
      this.props.addTodo(this.state);

      this.setState({
        content: ""
      });
    }
  };

  render() {
    return (
      <div className="container">
        <form className="col" onSubmit={this.handleSubmit}>
          <div className="input-field col">
            <input
              type="text"
              id="todoContent"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <label htmlFor="todoContent">Add new Todo</label>
          </div>

          <button className="btn">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
