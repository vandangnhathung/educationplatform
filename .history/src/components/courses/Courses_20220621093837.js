import React from "react";
import HeadingSectionContent from "../content/HeadingSectionContent";

const Courses = () => {
  return (
    <div className="mt-[55px]">
      <div class="flex items-center justify-between">
        <HeadingSectionContent></HeadingSectionContent>
        <p className="text-[#1D8C74] text-lg font-medium">View All</p>
      </div>
      <div className="grid-layout-2"></div>
    </div>
  );
};

export default Courses;
