import React from "react";
import HeadingSectionContent from "../content/HeadingSectionContent";
import CategoryName from "./CategoryName";

const Category = () => {
  const categoryName = [
    {
      id: 1,
      name: "Design",
    },
    {
      id: 2,
      name: "Development",
    },
    {
      id: 3,
      name: "Marketing",
    },
  ];
  return (
    <div className="container pt-[180px]">
      <div className="flex flex-col gap-x-[55px]">
        <HeadingSectionContent></HeadingSectionContent>
        <div className="grid-layout-3">
          {categoryName.map((item) => (
            <CategoryName key={item.id} name={item.name}></CategoryName>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
