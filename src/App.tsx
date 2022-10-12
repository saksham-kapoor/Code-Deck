import React from "react";
import ModalProvider from "./context/ModalContext";
import HomeScreen from "./screens/HomeScreen";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <ModalProvider>
      <GlobalStyles />
      <HomeScreen />
    </ModalProvider>
  );
}

export default App;
