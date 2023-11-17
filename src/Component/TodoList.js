import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const TodoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <CancelIcon
          className="cancel"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          
        </CancelIcon>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default TodoList;
