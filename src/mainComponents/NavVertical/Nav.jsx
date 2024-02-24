/** @format */
import "./Nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBowlFood,
  faUser,
  faUtensils,
  faQuestion,
  faHome,
  faMessage,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__icons">
        <div className="nav__logo">
          <FontAwesomeIcon className="icon" icon={faBowlFood} />
        </div>
        <NavLink to="/AllFood" className="nav__item nav-item__home">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink to="/LoginPanel" className="nav__item nav-item__login">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink to="/ComingSoon" className="nav__item nav-item__restaurant">
          <FontAwesomeIcon icon={faUtensils} />
        </NavLink>
        <NavLink to="/Help" className="nav__item nav-item__q&a">
          <FontAwesomeIcon icon={faQuestion} />
        </NavLink>
        <NavLink to="/Contact" className="nav__item nav-item__q&a">
          <FontAwesomeIcon icon={faMessage} />
        </NavLink>
        <NavLink to="/Location" className="nav__item nav-item__location">
          <FontAwesomeIcon icon={faLocationDot} />
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
