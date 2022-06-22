import React from "react";
import HeadingSectionContent from "../HeadingSectionContent";
import Course from "./Course";

const Courses = () => {
  return (
    <div className="mt-[55px]">
      <div class="flex items-center justify-between">
        <HeadingSectionContent></HeadingSectionContent>
        <p className="text-[#1D8C74] text-lg font-medium">View All</p>
      </div>
      <div className="grid-layout-2 mt-[55px]">
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
      </div>
    </div>
  );
};

export default Courses;
