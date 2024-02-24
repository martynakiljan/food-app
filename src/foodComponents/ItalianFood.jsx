/** @format */
import FoodTile from "./FoodTile";
import { italianKitchen } from "../kitchenData/ItalianKitchen/ItalianKitchen";
import "../styles/all.scss";
const ItalianFood = () => {
  return (
    <>
      <div className="food-panel">
        {italianKitchen.map(({ id, name, description, price, src }) => (
          <FoodTile
            id={id}
            name={name}
            description={description}
            price={price}
            src={src}
          />
        ))}
      </div>
    </>
  );
};

export default ItalianFood;
