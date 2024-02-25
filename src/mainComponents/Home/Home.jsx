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
    boxShadow: 30,
    p: 4,
  };

  return (
    <>
      <header className="home__header">
        <div className="home__header--mask"></div>
        <div className="home__top">
          <h1 className="home__title">Are you hunger?</h1>
          <div class="home__input">
            <div class="home__input__icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
              class="home__input--input"
              placeholder="Search food..."
            ></input>
          </div>
          <div className="shopping__basket">
            <button onClick={handleOpen} className="shopping__button">
              <FontAwesomeIcon icon={faCartShopping} />
              <p className="shopping__price">23.50 CHF</p>
            </button>


              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <div className="shopping__box"></div>
                  </Box>
                </Fade>
              </Modal>
   
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
