import React from 'react';
import styled ,{createGlobalStyle, ThemeProvider, css} from "styled-components";
import {Route} from 'react-router-dom';
import MemberFormPage from "./pages/member/MemberFormPage";
import LoginPage from "./pages/member/LoginPage";
import MemberPage from "./pages/member/MemberPage";

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
                      gray: '#e9ecef'
                  }
              }}
          >
              <GlobalStyle/>
              <Route
                  path="/member"
                  component={MemberPage}
              />
              <Route path="/member/memberForm" component={MemberFormPage}/>
          </ThemeProvider>
  );
}

export default App;
