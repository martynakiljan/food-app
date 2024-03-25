/** @format */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavFood.scss";

const NavFood = ({ onSortChange }) => {
  const [sortValue, setSortValue] = useState("");

  const handleChangeSort = (event) => {
    const value = event.target.value;
    setSortValue(value);
    onSortChange(value); 
  }

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
          <select
            className="navfood__select"
            value={sortValue}
            onChange={handleChangeSort}
          >
            <option value="priceUp">price up</option>
            <option value="priceDown">price down</option>
          </select>
        </label>
      </li>
    </ul>
  );
};

export default NavFood;
