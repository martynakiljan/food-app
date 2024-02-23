/** @format */

import "./App.css";
import "./styles/all.scss";
import Home from "./mainComponents/Home/Home";
import Nav from "./mainComponents/NavVertical/Nav";
import { Routes, Route } from "react-router-dom";
import LoginPanel from "./mainComponents/LoginPanel/LoginPanel.jsx";
import Contact from "./mainComponents/Contact/Contact";
import Help from "./mainComponents/Help/Help";
import ComingSoon from "./mainComponents/ComingSoon/ComingSoon";

function App() {
  return (
    <div className="eat-app">
      <div className="eat-app__col1">
        <Nav />
      </div>
      <div className="eat-app__col2">
        <Home />
        <Routes>
          <Route path="/">
            <Route path="Contact" element={<Contact />} />
            <Route path="ComingSoon" element={<ComingSoon />} />
            <Route path="Help" element={<Help />} />
            <Route path="LoginPanel" element={<LoginPanel />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
