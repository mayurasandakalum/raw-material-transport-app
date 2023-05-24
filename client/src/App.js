import React from "react";
import { ThemeProvider } from "@mui/material";
import { Toaster } from "react-hot-toast";

import { Theme } from "./utils/Theme";

import { BrowserRouter as Router } from "react-router-dom";

import Main from "./screen/Main";
import Test from "./screen/Test";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <div>
          <Main />
          {/* <Test /> */}
          {/* <TestComp /> */}
          {/* <DriverDatePicker /> */}
          <Toaster />
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
