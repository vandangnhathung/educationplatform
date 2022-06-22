import React from "react";
import styled from "styled-components";
import StarYellow from "../../../components/icons/star/StarYellow";

const EvaluateInfoAuthorStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0 30px;
  max-width: 470px;
`;
const EvaluateInfoAuthor = () => {
  return (
    <EvaluateInfoAuthorStyles>
      <div class="flex items-center gap-2">
        <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1492632503949-a31d9972b400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <p>Salamah Ulya</p>
          <div className="flex items-center">
            <StarYellow></StarYellow>
            <StarYellow></StarYellow>
            <StarYellow></StarYellow>
            <StarYellow></StarYellow>
            <StarYellow></StarYellow>
          </div>
        </div>
      </div>
      <div className="ml-[70px]">
        <div className="text-sm">
          <p>
            “Not only does my resume look impressive—filled with the names and
            logos of world-class institutions—but these certificates also bring
            me closer to my career goals by validating the skills I've learned."{" "}
          </p>
        </div>
      </div>
    </EvaluateInfoAuthorStyles>
  );
};

export default EvaluateInfoAuthor;
