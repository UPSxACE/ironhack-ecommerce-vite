import React from "react";

function Input(props) {
  return (
    <input
      {...props}
      className={"py-3 mb-3 text-xl outline-none border-b " + props.className}
    ></input>
  );
}

export default Input;
