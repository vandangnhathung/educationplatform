import React from "react";

const HeadingSectionContent = ({ type = "", margin }) => {
  return (
    <>
      {type === "two" ? (
        <div className="flex flex-col  max-w-[470px] mt-[55px]">
          <h2 className="text-5xl font-medium max-w-[468px] mb-4">
            Explore courses by category
          </h2>
          <p className="text-base font-light max-w-[470px]">
            Build new skills with new trendy courses and shine for the next
            future career.
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-between max-w-[970px]">
          <h2 className="text-5xl font-medium max-w-[468px]">
            Explore courses by category
          </h2>
          <p className="text-base font-light max-w-[470px]">
            Build new skills with new trendy courses and shine for the next
            future career.
          </p>
        </div>
      )}
    </>
  );
};

export default HeadingSectionContent;
