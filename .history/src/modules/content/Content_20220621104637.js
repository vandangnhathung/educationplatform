import React from "react";
import Category from "../content/category/Category";
import Courses from "../content/courses/Courses";
import EvaluateAndLocate from "./EvaluateAndLocate/EvaluateAndLocate";

const Content = () => {
  return (
    <div className="container">
      <Category></Category>
      <Courses></Courses>
      <EvaluateAndLocate></EvaluateAndLocate>
    </div>
  );
};

export default Content;
