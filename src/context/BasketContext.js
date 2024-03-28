/** @format */

import { useState, useContext, createContext } from "react";

const BasketContext = createContext();

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket musi zostac uzyte wewnatrz BasketProvider");
  }
  return context;
};

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryPrice = 5.9;

  //add to Basket //
  const addToBasket = (id, name, price) => {

    console.log(typeof price);
    const newItem = {
      id,
      name,
      price,
      piece: 1,
    };

    setBasket((oldBasket) => [...oldBasket, newItem]);
    totalPriceCalculate(price);
  };

  //increase in Basket//

  const increaseInBasket = (itemID, itemPiece, itemPrice) => {
    const updatedBasket = basket.map((item) => {
      if (item.id === itemID) {
        return {
          ...item,
          price: Number(itemPrice * 2),
          piece: Number(itemPiece) + 1,
        };
      }
      return item;
    });
    setBasket(updatedBasket);
    totalPriceCalculate(itemPrice);
  };

  // decrease

  const decreaseInBasket = (itemId, itemPiece, itemPrice) => {
    const updatedBasket = basket.map((item) => {
      if (item.id === itemId && itemPiece > 1) {
        return {
          ...item,
          price: itemPrice / itemPiece,
          piece: Number(itemPiece) - 1,
        };
      }
      return item;
    });

    setBasket(updatedBasket);
    totalPriceCalculate(itemPrice);
  };

  // total price calculate //

  const totalPriceCalculate = (price) => {
    console.log(price);
    setTotalPrice((prevTotalPrice) => {
      const newPrice = prevTotalPrice + parseFloat(price) + deliveryPrice;
      return parseFloat(newPrice.toFixed(2));
    });
  };

  // remove from Basket //

  const removeFromBasket = (itemPrice, itemId) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== itemId));
    setTotalPrice((prevTotalPrice) => prevTotalPrice - parseFloat(itemPrice));
  };

  //open modal //
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const openModal = () => {};

  // get pay //

  const [infoAboutPay, setInfoAboutPay] = useState(false);
  const minOrder = 9;

  const getPay = () => {
    if (totalPrice < minOrder) return;
    setInfoAboutPay(true);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        openModal,
        open,
        handleClose,
        handleOpen,
        increaseInBasket,
        decreaseInBasket,
        totalPrice,
        removeFromBasket,
        getPay,
        infoAboutPay,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
