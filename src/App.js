import React from 'react';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {Route, Switch} from 'react-router-dom';
import MemberPage from "./pages/member/MemberPage";
import MemberFormSuccessPage from "./components/member/memberForm/MemberFormSuccessPage";
import MainPage from "./pages/main/MainPage";
import Page404 from "./components/error/Page404";

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
                      border: '#e9ecef',
                      black: '#3B3B3B',
                      green: 'green',
                      gray: 'gray'
                  }
              }}
          >
              <GlobalStyle/>
              <Switch>
                  <Route
                      path="/member"
                      component={MemberPage}
                  />
                  <Route
                      path="/404"
                      component={Page404}
                  />
                  <Route
                      path="/test"
                      component={MemberFormSuccessPage}
                  />
                  <Route
                      path="/"
                      component={MainPage}
                  />
                  <Route
                      comonent={Page404}
                  />
              </Switch>
          </ThemeProvider>
  );
}

export default App;
