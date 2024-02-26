/** @format */
import "../styles/all.scss";
import { ChineseKitchen } from "../kitchenData/ChineseKitchen/ChineseKitchen";
import { italianKitchen } from "../kitchenData/ItalianKitchen/ItalianKitchen";
import { FastFoodKitchen } from "../kitchenData/FastFoodKitchen/FastFoodKitchen";
import FoodTile from "./FoodTile";

const allFood = ChineseKitchen.concat(italianKitchen, FastFoodKitchen);

const AllFood = () => {
  return (
    <>
      <div className="food-panel">
        {allFood.map(({ id, name, description, price, src }) => (
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

export default AllFood;
