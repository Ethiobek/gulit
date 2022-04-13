import React from "react";
import Menus from "./nav_bar_components/Menus";
import SearchBox from "./nav_bar_components/SearchBox";

function Navbar({ AppName }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {AppName}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <Menus />
      </div>
    </nav>
  );
}

export default Navbar;
