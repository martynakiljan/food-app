/** @format */
import "../styles/all.scss";
import { useContext } from "react";
import { ChineseKitchen } from "../kitchenData/ChineseKitchen/ChineseKitchen";
import { ItalianKitchen } from "../kitchenData/ItalianKitchen/ItalianKitchen";
import { FastFoodKitchen } from "../kitchenData/FastFoodKitchen/FastFoodKitchen";
import FoodTile from "./FoodTile";
import { v4 as uuidv4 } from "uuid";
import { Context } from "../context/context";
import { filterFunction } from "../utilis/filterFunction";
import NoFoodFound from "./NoFoodFoodFound";

const AllFood = () => {
  const { sortValue, searchQuery } = useContext(Context);
  const allFood = ChineseKitchen.concat(ItalianKitchen, FastFoodKitchen);
  const filteredFood = filterFunction(allFood, sortValue, searchQuery);

  return (
    <>
      <div className="food-panel">
        {filteredFood.length !== 0 ? (
          filteredFood.map(({ id, name, description, price, src }) => (
            <FoodTile
              id={id}
              name={name}
              description={description}
              price={price}
              src={src}
              key={uuidv4()}
            />
          ))
        ) : (
          <NoFoodFound />
        )}
      </div>
    </>
  );
};

export default AllFood;
