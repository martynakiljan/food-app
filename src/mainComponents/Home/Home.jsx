/** @format */
import "./Home.scss";
import React from "react";
import NavFood from "../NavFood/NavFood";
import AllFood from "../../foodComponents/AllFood";
import ChineseFood from "../../foodComponents/ChineseFood";
import FastFood from "../../foodComponents/FastFood";
import ItalianFood from "../../foodComponents/ItalianFood";
import { Routes, Route } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
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
      </div>
      <div className="home__panel">
        <div className="home__nav">
          <NavFood />
        </div>
        <div className="navfood">
          <Routes>
            <Route path="/">
              <Route index path="AllFood" element={<AllFood />} />
              <Route path="ChineseFood" element={<ChineseFood />} />
              <Route path="ItalianFood" element={<ItalianFood />} />
              <Route path="FastFood" element={<FastFood />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
