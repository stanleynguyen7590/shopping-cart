import React from "react";
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">Hello World!</div>
    </>
  );
}

export default App;
