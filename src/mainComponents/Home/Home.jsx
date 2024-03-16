/** @format */
import "./Home.scss";
import React from "react";
import NavFood from "../NavFood/NavFood";
import AllFood from "../../foodComponents/AllFood";
import ChineseFood from "../../foodComponents/ChineseFood";
import FastFood from "../../foodComponents/FastFood";
import ItalianFood from "../../foodComponents/ItalianFood";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Fade from "@mui/material/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "@mui/material";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <header className="home__header">
        <div className="home__header--mask"></div>
        <div className="home__top">
          <h1 className="home__title">Are you hunger?</h1>
          <div className="home__input">
            <div className="home__input__icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
              className="home__input--input"
              placeholder="Search food..."
            ></input>
          </div>
          <div className="shopping__basket">
            <button onClick={handleOpen} className="shopping__button">
              <FontAwesomeIcon icon={faCartShopping} />
              <p className="shopping__price">23.50 CHF</p>
            </button>

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
                      <input
                        type="checkbox"
                        id="toggle"
                        className="toggleCheckbox"
                      />
                      <label for="toggle" className="toggleContainer">
                        <div>Delivery</div>
                        <div>Take away</div>
                      </label>
                      <div className="order__item">
                        <p className="order__item--text">Pizza Margarita</p>
                        <p className="order__item--text">13.40 CHF</p>
                      </div>

                      <div className="order__adnotation">
                        <p className="order__adnotation--text">
                          Add adnotation
                        </p>
                        <div className="order__adnotation--buttons">
                          <FontAwesomeIcon icon={faPlus} />
                          <p className="order__adnotation--num">1</p>
                          <FontAwesomeIcon icon={faMinus} />
                        </div>
                      </div>

                      <div className="order__info">
                        <p className="order__info--text">
                          * minimum order is 9 CHF
                        </p>
                      </div>

                      <div className="order__price">
                        <p className="order__price--text">
                          All together to pay:
                        </p>
                        <p className="order__price--price">23.34 CHF</p>
                      </div>

                      <button className="order__price--button">PAY</button>
                    </div>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>
        </div>
      </header>

      <div className="navfood">
        <div className="home__panel">
          <div className="home__nav">
            <NavFood />
          </div>
        </div>
        <Routes>
          <Route path="/">
            <Route index path="AllFood" element={<AllFood />} />
            <Route path="ChineseFood" element={<ChineseFood />} />
            <Route path="ItalianFood" element={<ItalianFood />} />
            <Route path="FastFood" element={<FastFood />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default Home;
