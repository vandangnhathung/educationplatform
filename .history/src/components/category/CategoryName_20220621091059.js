import React from "react";
import styled from "styled-components";

const CategoryNameStyles = styled.div``;
const CategoryName = ({ name = "" }) => {
  return <CategoryNameStyles name={name}></CategoryNameStyles>;
};

export default CategoryName;
