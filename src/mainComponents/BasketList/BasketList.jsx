/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./BasketList.scss";
import { useBasket } from "../../context/BasketContext";

const BasketList = ({ basket }) => {
  const { increaseInBasket, decreaseInBasket, removeFromBasket } = useBasket();
  return (
    <>
      {basket.map((item) => (
        <div key={item.id} className="order__item">
          <p className="order__item--text">{item.name}</p>
          <p className="order__item--text">{item.price} CHF</p>
          <p className="order__item--piece">{item.piece}</p>
          <div className="order__modification">
            <p className="order__modification--text">Add more</p>
            <div className="order__modification--buttons">
              <FontAwesomeIcon
                icon={faPlus}
                onClick={() =>
                  increaseInBasket(item.id, item.piece, item.price)
                }
              />
              <p className="order__modification--num">1</p>

              <FontAwesomeIcon
                icon={faMinus}
                onClick={() =>
                  decreaseInBasket(item.id, item.piece, item.price)
                }
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => removeFromBasket(item.price, item.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BasketList;
