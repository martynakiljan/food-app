/** @format */
import { ChineseKitchen } from "../kitchenData/ChineseKitchen/ChineseKitchen";
import FoodTile from "./FoodTile";
import "../styles/all.scss";

const ChineseFood = () => {
  return (
    <>
      <div className="food-panel">
        {ChineseKitchen.map(({ id, name, description, price, src }) => (
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

export default ChineseFood;
