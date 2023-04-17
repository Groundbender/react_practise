import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const bloggers = [
  {
    id: 0,
    name: "Сергей Сергеев",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp8sCQBQgEVO6ug4KqV6nsBzx_d8nHUBbTaMu8Z9VU&s",
    bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sed ",
  },
  {
    id: 1,
    name: "Петр Петров",
    avatar: "https://avatars.design/wp-content/uploads/2016/09/avatar1b.jpg",
    bio: " ipsum dolor sit amet consectetur adipisicing elit. Cumque, aut. ",
  },

  {
    id: 2,
    name: "Иван Иванов",
    avatar:
      "https://www.seekpng.com/png/small/350-3509606_business-avatar-14-powerpoint-avatar-faces.png",
    bio: " Ea, enim placeat aperiam eius optio eos error, quibusdam repellendus, accusamus tempora ex corporis ratione eveniet praesentium. Fuga nostrum quia officiis eaque!",
  },
  {
    id: 3,
    name: "Иван Иванов",
    avatar:
      "https://www.seekpng.com/png/small/350-3509606_business-avatar-14-powerpoint-avatar-faces.png",
    bio: " Ea, enim placeat aperiam eius optio eos error, quibusdam repellendus, accusamus tempora ex corporis ratione eveniet praesentium. Fuga nostrum quia officiis eaque!",
  },
  {
    id: 4,
    name: "Иван Иванов",
    avatar:
      "https://www.seekpng.com/png/small/350-3509606_business-avatar-14-powerpoint-avatar-faces.png",
    bio: " Ea, enim placeat aperiam eius optio eos error, quibusdam repellendus, accusamus tempora ex corporis ratione eveniet praesentium. Fuga nostrum quia officiis eaque!",
  },
  {
    id: 5,
    name: "Иван Иванов",
    avatar:
      "https://www.seekpng.com/png/small/350-3509606_business-avatar-14-powerpoint-avatar-faces.png",
    bio: " Ea, enim placeat aperiam eius optio eos error, quibusdam repellendus, accusamus tempora ex corporis ratione eveniet praesentium. Fuga nostrum quia officiis eaque!",
  },
  {
    id: 6,
    name: "Иван Иванов",
    avatar:
      "https://www.seekpng.com/png/small/350-3509606_business-avatar-14-powerpoint-avatar-faces.png",
    bio: " Ea, enim placeat aperiam eius optio eos error, quibusdam repellendus, accusamus tempora ex corporis ratione eveniet praesentium. Fuga nostrum quia officiis eaque!",
  },
];

const Bloggers = (props) => {
  return (
    <div className="main-container">
      <Avatar url={props.avatar} />
      <BloggerName name={props.name} />
      <BloggerText bio={props.bio} />
    </div>
  );
};

const Avatar = (props) => {
  return (
    <div className="image-container">
      <img className="profile-photo" src={props.url} alt="avatar" />
    </div>
  );
};

const BloggerName = (props) => {
  return (
    <div className="blogger-name-container">
      <p>{props.name}</p>
    </div>
  );
};

const BloggerText = (props) => {
  console.log(props.bio);
  return (
    <div className="bio">
      <p>{props.bio}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="root">
    {bloggers.map((blogger) => {
      return <Bloggers key={blogger.id} {...blogger} />;
    })}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
