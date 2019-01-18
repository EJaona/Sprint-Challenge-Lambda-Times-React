import React from "react";
import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <Top>
      <Container>
        <ContainerLeft>
          <LeftContainerSpan>TOPICS</LeftContainerSpan>
          <LeftContainerSpan>SEARCH</LeftContainerSpan>
        </ContainerLeft>
        <ContainerCenter>
          <CenterContainerSpan>GENERAL</CenterContainerSpan>
          <CenterContainerSpan>BROWNBAG</CenterContainerSpan>
          <CenterContainerSpan>RANDOM</CenterContainerSpan>
          <CenterContainerSpan>MUSIC</CenterContainerSpan>
          <CenterContainerSpan>ANNOUNCEMENTS</CenterContainerSpan>
        </ContainerCenter>
        <RightContainer>
          <RightContainerSpan>LOG IN</RightContainerSpan>
        </RightContainer>
      </Container>
    </Top>
  );
};

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const LeftContainerSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const CenterContainerSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const RightContainerSpan = styled.span`
  cursor: pointer;
`;

export default TopBar;
