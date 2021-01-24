import React, { Component } from "react";

export default class addtodo extends Component {
  constructor() {
    super();
    this.state = {
      defaultValue: "",
    //   value: this.props.addTodoValue,
    };
  }
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" id="todoValue" placeholder="ToDo" onChange={this.handleChange} />
        <div className="input-group-append">
            <button onClick={this.addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
        </div>
      </div>
    );
  }
}
