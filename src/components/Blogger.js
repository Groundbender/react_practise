import React from "react";
import Avatar from "./Avatar.js";
import BloggerName from "./BloggerName.js";
import BloggerText from "./Bio.js";

const Blogger = ({ avatar, name, bio, children }) => {
  // const { avatar, name, bio, children } = props;
  // console.log(props);
  return (
    <div className="main-container">
      <Avatar url={avatar} />
      <BloggerName name={name} />
      <BloggerText bio={bio} />
      {children}
    </div>
  );
};

export default Blogger;
