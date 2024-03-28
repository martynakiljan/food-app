/** @format */
import { useState } from "react";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";
import "./Popup.scss";
import { useBasket } from "../../context/BasketContext";
import BasketList from "../BasketList/BasketList";

const Popup = () => {
  const [clickedPay, setClickedPay] = useState(false);
  const { open, handleClose, totalPrice, getPay, infoAboutPay } = useBasket();

  const [deliveryOption, setDeliveryOption] = useState("delivery");

  const { basket } = useBasket();

  const handleDeliveryOptionChange = (option) => {
    setDeliveryOption(option);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    backgroundColor: "background.paper",
    border: "2px solid #000",
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
    p: 4,
  };

  return open ? (
    <div className="shopping__modal">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="shopping__box">
              <input type="checkbox" id="toggle" className="toggleCheckbox" />
              <label htmlFor="toggle" className="toggleContainer">
                <div onClick={() => handleDeliveryOptionChange("delivery")}>
                  Delivery
                </div>
                <div onClick={() => handleDeliveryOptionChange("takeaway")}>
                  Take away
                </div>
              </label>
              {deliveryOption === "delivery" && totalPrice > 0 && (
                <div className="order__delivery order__item">
                  <p className="order__item--text">Delivery</p>
                  <p className="order__item--text">5.90 CHF</p>
                </div>
              )}
              <div className="order__info">
                <p className="order__info--text">* minimum order is 9 CHF</p>
              </div>
              <BasketList basket={basket} />
              <div className="order__price">
                <p className="order__price--text">All together to pay:</p>
                <p className="order__price--price">
                  {totalPrice ? totalPrice : 0} CHF
                </p>
              </div>
              <button
                className="order__price--button"
                onClick={() => {
                  getPay();
                  setClickedPay(true);
                }}
              >
                PAY
              </button>

              {clickedPay ? (
                infoAboutPay ? (
                  <p className="info__pay info__pay--correct">
                    Your order is placed
                  </p>
                ) : (
                  <p className="info__pay info__pay--notcorrect">
                    * You must have at least 9 CHF in your basket.
                  </p>
                )
              ) : null}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  ) : null;
};

export default Popup;
