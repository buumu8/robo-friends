import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./search-box.css";

export default function SearchBox({ searchChange }) {
  return (
    <form>
      <fieldset>
        <label className="search-container" htmlFor="search-box">
          <input
            type="text"
            className="search-box"
            id="search-box"
            placeholder="search for robots"
            onChange={searchChange}
          />
          <FontAwesomeIcon className="search_icon" icon={faMagnifyingGlass} />
        </label>
      </fieldset>
    </form>
  );
}
