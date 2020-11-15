import React from "react";
import classes from "../../ContainerList/Container.css";

const finishedTasks = (props) => {
  const lists = props.finished.map((list) => {
    return (
      <div className="container" key={list.id}>
        <li key={list.key}>{list.list}</li>
        <button
          className="button-container delete"
          onClick={() => props.del(list.id)}
        >
          Delete
        </button>
      </div>
    );
  });
  return lists;
};

export default finishedTasks;
