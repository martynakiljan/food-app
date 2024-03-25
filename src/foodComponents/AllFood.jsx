/** @format */
import "../styles/all.scss";
import { ChineseKitchen } from "../kitchenData/ChineseKitchen/ChineseKitchen";
import { italianKitchen } from "../kitchenData/ItalianKitchen/ItalianKitchen";
import { FastFoodKitchen } from "../kitchenData/FastFoodKitchen/FastFoodKitchen";
import FoodTile from "./FoodTile";
import { v4 as uuidv4 } from "uuid";

const allFood = ChineseKitchen.concat(italianKitchen, FastFoodKitchen);
const uniqueId = uuidv4();

const AllFood = ({ searchQuery, sortValue }) => {
  if (sortValue === "priceUp") {
    allFood.sort((a, b) => a.price - b.price);
  } else if (sortValue === "priceDown") {
    allFood.sort((a, b) => b.price - a.price);
  }
  const filteredFood = allFood.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="food-panel">
        {filteredFood.map(({ id, name, description, price, src }) => (
          <FoodTile
            id={id}
            name={name}
            description={description}
            price={price}
            src={src}
            key={uuidv4()}
          />
        ))}
      </div>
    </>
  );
};

export default AllFood;
