/** @format */
import * as React from "react";
import { NavLink } from "react-router-dom";
import "./NavFood.scss";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const NavFood = () => {
  const [sortValue, sortSetValue] = React.useState("");

  const handleChange = (event) => {
    sortSetValue(event.target.value);
  };

  return (
    <ul className="navfood__list">
      <li className="navfood__link">
        <NavLink to="/AllFood">All</NavLink>
      </li>
      <li className="navfood__link">
        <NavLink to="/ChineseFood">Chinese</NavLink>
      </li>
      <li className="navfood__link">
        <NavLink to="/ItalianFood">Italian</NavLink>
      </li>
      <li className="navfood__link">
        <NavLink to="/FastFood">Fast food</NavLink>
      </li>
      <li className="navfood__link navfood__select-input">
        <label className="navfood__select-label">
          Sort by:
          <select className="navfood__select">
            <option value="someOption">price up</option>
            <option value="otherOption">price down</option>
          </select>
        </label>
      </li>
    </ul>
  );
};

export default NavFood;
