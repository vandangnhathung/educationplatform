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
        <div className="content-course__right">
          <h3 className="text-base font-bold">Mobile app development</h3>
        </div>
        <div className="content-course__left">
          <button className="p-3 bg-[#1D8C74] text-white text-base flex items-center justify-between">
            <p>Email</p>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </CourseStyles>
  );
};

export default Course;
