import React from "react";

function Column(props) {
  return (
    <div>
      <h5 className="">{props.title}</h5>
      <ul>
        <li>
          
            {props.link1}
          
        </li>
        <li>
         
            {props.link2}
       
        </li>
        <li>
          
            {props.link3}
       
        </li>
        <li>
         
            {props.link4}
          
        </li>
        <li>
          
            {props.link5}
          
        </li>
      </ul>
    </div>
  );
}

export default Column;
