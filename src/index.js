import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Bloggers = () => {
  return (
    <div className="main-container">
      <Avatar />
      <BloggerName />
      <BloggerText />
    </div>
  );
};

const Avatar = () => {
  return (
    <div className="image-container">
      <img
        className="profile-photo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8sCQBQgEVO6ug4KqV6nsBzx_d8nHUBbTaMu8Z9VU&s"
        alt="avatar"
      />
    </div>
  );
};

const BloggerName = () => {
  return (
    <div className="blogger-name-container">
      <p>Андрей Иванов</p>
    </div>
  );
};

const BloggerText = () => {
  return (
    <div className="bio">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed
        maxime delectus impedit. Dignissimos non ipsa quam quos facere natus?
      </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="root">
    <Bloggers />
    <Bloggers />
    <Bloggers />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
