import React from "react";
import Category from "../content/category/Category";
import Courses from "../content/courses/Courses";

const Content = () => {
  return (
    <div className="container">
      <Category></Category>
      <Courses></Courses>
    </div>
  );
};

export default Content;
