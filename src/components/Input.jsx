import React from "react";

function Input(props) {
  return (
  <input {...props} className={"py-6 text-2xl outline-none border-b " + props.className}></input>
  )
}

export default Input;
