import React from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import styled from "styled-components";

const HomeScreenContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const HomeScreen = () => {
  return (
    <HomeScreenContainer>
      <LeftPane />
      <RightPane />
    </HomeScreenContainer>
  );
};

export default HomeScreen;
