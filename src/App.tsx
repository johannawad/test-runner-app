import React from "react";
import { Provider } from "react-redux";
import TestRunner from "./Pages/TestRunner/TestRunner";
import Store from "./Store";
import GlobalStyle from "./Styles/global.styles";

const App: React.FC = () => {
  return (
    <Provider store={Store}>
      <GlobalStyle />
      <TestRunner />
    </Provider>
  );
};

export default App;
