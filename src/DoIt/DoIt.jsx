import React, { Component } from "react";
import AddList from "../Components/Nav/AddList";
import Container from "../Components/ContainerList/Container";
import Tasks from "../../src/Components/List/Lists/Tasks";
import classes from "../Components/Tasks.css";
import { Route, NavLink } from "react-router-dom";

class DoIt extends Component {
  state = {
    items: [],
    done: [],
    lists: {
      list: null,
      id: Math.random(),
    },
    type: "",
  };
  inputHandler = (e) => {
    this.setState({
      lists: {
        list: e.target.value,
        id: Math.random(),
      },
      type: e.target.value,
    });
  };
  submitHandler = (e) => {
    e.preventDefault();
    if (this.state.type != "") {
      const newItems = this.state.items;
      const list = this.state.lists;
      const lists = [...this.state.items, list];

      console.log(lists);

      this.setState({
        items: lists,
        lists: {
          lists: "",
          newList: "",
        },
        type: "",
      });
    }
  };
  handleDelete = (e) => {
    const newItems = this.state.items.filter((item) => {
      return item.id !== e;
    });
    this.setState({
      items: newItems,
    });
  };
  handleDeleteInFinishedTasks = (e) => {
    console.log("deleted");
    const newItems = this.state.done.filter((item) => {
      return item.id !== e;
    });
    this.setState({
      done: newItems,
    });
  };
  handleDone = (e) => {
    const newItems = this.state.items.filter((item) => {
      return item.id !== e;
    });
    const finishedItems = this.state.items.filter((item) => {
      return item.id === e;
    });
    let arrayDoneTasks = [...this.state.done, finishedItems];
    const merged = [].concat.apply([], arrayDoneTasks);

    console.log(merged);
    this.setState({
      done: merged,
      items: newItems,
    });
  };
  handleDeleteAll = () => {
    this.setState({
      items: [],
      done: [],
      lists: {
        list: null,
        id: Math.random(),
      },
      type: "",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="to-do">
          <div className="tasks">
            <div>
              <NavLink
                className="links one"
                to="/"
                exact
                activeClassName="active"
              >
                Tasks
              </NavLink>
              <NavLink
                className="links two"
                activeClassName="active"
                to="/finishedTasks"
              >
                Finished Tasks
              </NavLink>
              <button
                className="button delete-tasks"
                onClick={this.handleDeleteAll}
              >
                Delete All
              </button>
            </div>
          </div>

          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <AddList
                  input={this.inputHandler}
                  add={this.submitHandler}
                  value={this.state.type}
                ></AddList>
                <Container
                  text={this.state.items}
                  del={this.handleDelete}
                  key={this.state.id}
                  done={this.handleDone}
                />
              </React.Fragment>
            )}
          />
          <Route
            path="/finishedTasks"
            exact
            render={() => (
              <Tasks
                del={this.handleDeleteInFinishedTasks}
                finished={this.state.done}
              />
            )}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default DoIt;
