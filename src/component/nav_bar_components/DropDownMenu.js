import React from "react";
import DropDownList from "./DropDownList";

function DropDownMenu({ ParentName }) {
  return (
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {ParentName}
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <DropDownList ChildName="Vegetable" />
        <DropDownList ChildName="Fruits" />
      </ul>
    </li>
  );
}

export default DropDownMenu;
