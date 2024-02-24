/** @format */
import { NavLink } from "react-router-dom";
import "./NavFood.scss";

const NavFood = () => {
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
      
    </ul>
  );
};

export default NavFood;
