import React from 'react';
import styled ,{createGlobalStyle, ThemeProvider, css} from "styled-components";
import {Route} from 'react-router-dom';
import MemberFormPage from "./pages/member/MemberFormPage";
import MemberPage from "./pages/member/MemberPage";
import LoadingPage from "./components/common/LoadingPage";
import ErrorPage from "./components/common/ErrorPage";
import MemberFormSuccessPage from "./components/member/memberForm/MemberFormSuccessPage";

const GlobalStyle = createGlobalStyle`
    html, body, #root{
        width: 100%;
        height: 100%;
    }
    body{
        width: 100%;
        height: 100%;
    }
`;

function App() {
  return (
          <ThemeProvider
              theme={{
                  palette:{
                      firstC : '#DAF7F8',
                      secondC : '#A1E9F2',
                      thirdC: '#5AB6DB',
                      fourthC: '#3B77AF',
                      fifthC: '#58B1BA',
                      sixthC: '#3B6272',
                      gray: '#e9ecef',
                      black: '#3B3B3B',
                      green: 'green'
                  }
              }}
          >
              <GlobalStyle/>
              <Route
                  path="/member"
                  component={MemberPage}
              />
              <Route
                  path="/test"
                  component={MemberFormSuccessPage}
              />
          </ThemeProvider>
  );
}

export default App;
