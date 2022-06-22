import React from "react";
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
        <div className="flex items-center justify-between max-w-[970px]">
          <h2 className="text-5xl font-medium max-w-[468px]">
            Explore courses by category
          </h2>
          <p className="text-base font-light max-w-[470px]">
            Build new skills with new trendy courses and shine for the next
            future career.
          </p>
        </div>
        <div className="grid-layout">
          {categoryName.map((item) => (
            <CategoryName></CategoryName>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
