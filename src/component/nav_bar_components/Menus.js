import React from "react";
import DropDownMenu from "./DropDownMenu";
import Menu from "./Menu";
import SearchBox from "./SearchBox";

function Menus() {
  return (
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <Menu MenuName="Home" />
        <Menu MenuName="About" />
        <DropDownMenu ParentName="Category" />
      </ul>
      <SearchBox />
    </div>
  );
}

export default Menus;
