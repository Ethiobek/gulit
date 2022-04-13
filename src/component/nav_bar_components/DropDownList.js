import React from "react";

function DropDownList({ ChildName }) {
  return (
    <li>
      <a class="dropdown-item" href="#">
        {ChildName}
      </a>
    </li>
  );
}

export default DropDownList;
