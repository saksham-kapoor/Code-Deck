import React from "react";
import ModalProvider from "./context/ModalContext";
import PlaygroundProvider from "./context/PlaygroundContext";
import HomeScreen from "./screens/HomeScreen";
import Playground from "./screens/Playground";
import GlobalStyles from "./styles/global";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <PlaygroundProvider>
      <ModalProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/:folderId/:playgroundId' element={<Playground />} />

            {/* only match this when no other routes match */}
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </PlaygroundProvider>
  );
}

export default App;
