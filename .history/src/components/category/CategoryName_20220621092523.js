import React from "react";
import styled from "styled-components";

const CategoryNameStyles = styled.div`
  height: 562px;
  position: relative;
  margin-top: 55px;
`;
const CategoryName = ({ name = "" }) => {
  return (
    <CategoryNameStyles>
      <img
        src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="workspace"
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-0 right-0 flex items-center max-w-[247px] w-full justify-between p-2 bg-white cursor-pointer box-border">
        <p className="text-base">{name}</p>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="box-border w-16 h-full max-h-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </CategoryNameStyles>
  );
};

export default CategoryName;
