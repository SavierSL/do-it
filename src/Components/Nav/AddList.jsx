import React from "react";
import Container from "../ContainerList/Container";

const addList = (props) => {
  return (
    <React.Fragment>
      <div>
        <form action="" onSubmit={props.add}>
          <h4>Just Do It</h4>
          <input
            type="text"
            placeholder="Add Task"
            value={props.value}
            onChange={props.input}
          />
          <button className="add">Add Task</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default addList;
