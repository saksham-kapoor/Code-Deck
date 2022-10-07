import React from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import styled from "styled-components";

const HomeScreenContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
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
