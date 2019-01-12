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
      <div className="row">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
          <div className="input-field">
              <input
                type="text"
                id="todoContent"
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
              />
              <label htmlFor="todoContent">Add new Todo</label>

          </div>
           
            <div>
              <button className="btn waves-effect waves-light">Add Todo</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddTodo;
