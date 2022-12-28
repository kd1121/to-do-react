// import logo from './logo.svg';
import React, { Component } from "react";

import './App.css';


class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = { text: "", lists: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h1 className="heading">TODOS</h1>
        <div className="Form">
          <form onSubmit={this.handleSubmit}>
            {/* <h3 className="Heading">Add Your List Here!</h3> */}

            <div className="styleComponent">
              <div className="label-1">
                <label htmlFor="todo">Add Your List Here!</label>
              </div>
              <div className="input-container">
                {/* <input
                id="todo"
                placeholder="Add Task"
                onChange={this.handleChange}
                value={this.state.text}
                className="Text"
              /> */}

                <input
                  id="name"
                  className="input"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.text}
                  pattern=".+"
                  required
                />
                {/* <label class="label" for="name">Add Task</label> */}
              </div>

              {/* Button */}

              <div className="btn">
                <button id="button" className="Add">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="todo-list">
          <ToDoList lists={this.state.lists} />
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((state) => ({
      lists: state.lists.concat(newItem),
      text: ""
    }));
  }
}

class ToDoList extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="List">
          {this.props.lists.map((list) => (
            <li key={list.id}>{list.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDo;