import React from "react";
import styled from "styled-components";
import RightDashboard from "./RightDashboard";
const Main = () => {
  return (
    <Wrapper>
      <RightDashboard />
    </Wrapper>
  );
};

export default Main;
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
`;
