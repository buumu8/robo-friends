import React from "react";
import SearchBox from "../search-box/search-box";
import "./nav-bar.css";

const NavBar = React.memo((props) => {
  const { searchChange } = props;
  return (
    <nav>
      <h1>Robo Friends</h1>
      <SearchBox searchChange={searchChange} />
    </nav>
  );
});

export default NavBar;
