/** @format */
import "./Home.scss";
import React, { useState } from "react";
import NavFood from "../NavFood/NavFood";
import AllFood from "../../foodComponents/AllFood";
import ChineseFood from "../../foodComponents/ChineseFood";
import FastFood from "../../foodComponents/FastFood";
import ItalianFood from "../../foodComponents/ItalianFood";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FilterContext } from "../../context/FilterContext";
import Popup from "../Popup/Popup";
import { useBasket } from "../../context/BasketContext";

const Home = () => {
  const { handleOpen, totalPrice } = useBasket();

  // search //
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (event) => {
    const inputValue = event.target.value.trim();

    if (inputValue !== "") {
      setSearchQuery(inputValue);
    }
  };

  //sort//
  const [sortValue, setSortValue] = useState("");
  const handleSortChange = (value) => {
    setSortValue(value);
  };

  return (
    <FilterContext.Provider
      value={{
        sortValue,
        setSortValue,
        searchQuery,
        setSearchQuery,
      }}
    >
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
              onChange={handleSearchChange}
            ></input>
          </div>
          <div className="shopping__basket">
            <button onClick={handleOpen} className="shopping__button">
              <FontAwesomeIcon icon={faCartShopping} />
              <p className="shopping__price">{totalPrice} CHF</p>
            </button>
            <Popup />
          </div>
        </div>
      </header>

      <div className="navfood">
        <div className="home__panel">
          <div className="home__nav">
            <NavFood onSortChange={handleSortChange} />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/AllFood" />} />
          <Route
            path="/AllFood"
            element={
              <AllFood searchQuery={searchQuery} sortValue={sortValue} />
            }
          />
          <Route path="ChineseFood" element={<ChineseFood />} />
          <Route path="ItalianFood" element={<ItalianFood />} />
          <Route path="FastFood" element={<FastFood />} />
        </Routes>
      </div>
    </FilterContext.Provider>
  );
};

export default Home;
