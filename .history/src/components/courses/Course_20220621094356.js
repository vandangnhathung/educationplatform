import React from "react";
import styled from "styled-components";

const CourseStyles = styled.div``;
const Course = () => {
  return (
    <CourseStyles>
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1605436247078-f0ef43ee8d5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
        <button className="p-3 text-[##1D8C74] text-base absolute bottom-0 right-0">
          UI design
        </button>
      </div>
      <div className="content-course">
        <div className="content-course__right"></div>
        <div className="content-course__left">
          <button className=""></button>
        </div>
      </div>
    </CourseStyles>
  );
};

export default Course;
