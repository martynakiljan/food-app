/** @format */
import FoodTile from "./FoodTile";
import { FastFoodKitchen } from "../kitchenData/FastFoodKitchen/FastFoodKitchen";
import "../styles/all.scss";

const FastFood = () => {
  return (
    <>
      <div className="food-panel">
        {FastFoodKitchen.map(({ id, name, description, price, src }) => (
          <FoodTile
            id={id}
            key={id}
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

export default FastFood;
