import React from "react";
import SearchBox from "../search-box/search-box";
import "./nav-bar.css";

export default function NavBar({ searchChange }) {
  return (
    <nav>
      <h1>Robo Friends</h1>
      <SearchBox searchChange={searchChange} />
    </nav>
  );
}
