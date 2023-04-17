import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { bloggers } from "./data/data.js";
import Blogger from "./components/Blogger";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="root">
    {bloggers.map((blogger) => {
      return (
        <Blogger key={blogger.id} {...blogger}>
          {/* <hr style={{ visibility: "visible" }} /> */}
        </Blogger>
      );
    })}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
