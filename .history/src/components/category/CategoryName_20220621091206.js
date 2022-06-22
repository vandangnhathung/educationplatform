import React from "react";
import styled from "styled-components";

const CategoryNameStyles = styled.div`
  height: 562px;
`;
const CategoryName = ({ name = "" }) => {
  return (
    <CategoryNameStyles>
      <img
        src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
      />
    </CategoryNameStyles>
  );
};

export default CategoryName;
