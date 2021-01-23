import React, { Component } from "react";
import Todo from "./todo";
import Addtodo from "./addtodo";
export default class todos extends Component {
  constructor() {
    super();
    this.state = {
      addTodoValue: "",
      todos: [
        {
          id: 1,
          value: "todo 1",
          isDone: false,
        },
        {
          id: 2,
          value: "todo 2",
          isDone: true,
        },
        {
          id: 3,
          value: "todo 3",
          isDone: false,
        },
      ],
    };
  }
  render() {
    return (
      <table className="table">
        <tbody>
          {this.state.todos.map((todo, index) => (
            <tr key={todo.id}>
              <Todo
                index={index + 1}
                todo={todo}
                fooDelete={this.handleDelete}
                fooDoneDone={this.handleDone}
              />
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="text-center">
              <Addtodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
