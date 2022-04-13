import React from "react";

function Menu({ MenuName }) {
  return (
    <li class="nav-item">
      <a class="nav-link" href="#">
        {MenuName}
      </a>
    </li>
  );
}

export default Menu;
