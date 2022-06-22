import React from "react";
import Category from "../category/Category";
import Courses from "../courses/Courses";

const Content = () => {
  return (
    <div className="container">
      <Category></Category>
      <Courses></Courses>
    </div>
  );
};

export default Content;
