import React from "react";
import classes from "../../Components/ContainerList/Container.css";

const listsContainer = (props) => {
  const lists = props.text.map((list) => {
    return (
      <div className="container" key={list.id}>
        <li>{list.list}</li>
        <div>
          <button
            className="button-container done"
            onClick={() => props.done(list.id)}
          >
            Done
          </button>
          <button
            className="button-container delete"
            onClick={() => props.del(list.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });
  return lists;
};

export default listsContainer;
