/** @format */
import "../styles/all.scss";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FoodTile = ({ id, name, description, price, src }) => {
  return (
    <div className="foodTile" id={id}>
      <img className="foodTile__img" src={src} alt="img"></img>
      <div className="foodTile__wrapper-text">
        <p className="foodTile__title">{name}</p>
        {/* <p className="foodTile__text">{description}</p> */}
        <p className="foodTile__price">{price} CHF</p>

        <div className="foodTile__shopping-card">
          <div>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodTile;
