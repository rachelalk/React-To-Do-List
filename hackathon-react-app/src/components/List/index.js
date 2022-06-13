import React from "react";


function List({text, key, buttonText, onClick, className, keyValue }) {
return <li key={key} >{text} <button onClick={onClick} keyValue={keyValue} className = {className}>{buttonText}</button></li>;
  }



export default List;
