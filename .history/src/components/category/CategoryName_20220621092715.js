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
      <div className="absolute bottom-0 right-0 flex items-center max-w-[247px] w-full justify-between p-[10px] bg-white cursor-pointer box-border">
        <p className="text-base">{name}</p>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </CategoryNameStyles>
  );
};

export default CategoryName;
