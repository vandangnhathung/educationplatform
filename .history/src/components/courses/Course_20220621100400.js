import React from "react";
import styled from "styled-components";
import StarEmpty from "../icons/star/StarEmpty";
import StarYellow from "../icons/star/StarYellow";

const CourseStyles = styled.div`
  height: 570px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 10px 3px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 10px;
  }
`;
const Course = () => {
  return (
    <CourseStyles>
      <div class="relative h-[408px] mb-[35px] ">
        <img
          src="https://images.unsplash.com/photo-1605436247078-f0ef43ee8d5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <button className="p-3 text-[##1D8C74] text-base absolute bottom-0 right-0">
        UI design
      </button>
      <div className="flex items-center justify-between px-8 py-3 content-course">
        <div className="content-course__right flex flex-col gap-y-[14px]">
          <h3 className="text-base font-medium ">Mobile app development</h3>
          <div className="flex items-center">
            <StarYellow></StarYellow>
            <StarYellow></StarYellow>
            <StarYellow></StarYellow>
            <StarYellow></StarYellow>
            <StarEmpty></StarEmpty>
          </div>
        </div>
        <div className="content-course__left">
          <button className="px-7 py-3 bg-[#1D8C74] text-white text-base flex items-center justify-between hover:bg-[#D6F4EE] transition-all duration-300 hover:text-white">
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
