import React from "react";
import "./App.css";
import CategoryList from "./components/CategoryList";
import Tacking from "./components/Tacking";
import Head from "./components/Head";
import axios from "axios";
import Local from "./components/Local";

axios.defaults.baseURL = "http://localhost:9000";

function App() {
  return (
    <div>
      <div className="entire-container">
        <div className="content-container ">
          <Head />
          <Tacking />
          <hr />

          <div className="product-display container-fluid">
            <hr className="dotted-line" />
            <CategoryList />
          </div>

          <Local />
          <div className="product-display container-fluid">
            <CategoryList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
