import React,{useEffect} from 'react';
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {Route, Switch} from 'react-router-dom';
import MemberPage from "./pages/member/MemberPage";
import MemberFormSuccessPage from "./components/member/memberForm/MemberFormSuccessPage";
import MainPage from "./pages/main/MainPage";
import {useDispatch, useSelector} from "react-redux";
import {LoginCheck} from "./modules/member/member";
import Page404 from "./components/error/Page404";
import axios from 'axios';
import {useHistory} from "react-router";

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

    const history = useHistory();

    const loginCheckState =
        useSelector(state => state.member.loginCheck);
    const dispatch = useDispatch();
    const {loading, error, data} = loginCheckState;

    useEffect(() => {
        // axios.post('http://localhost:8080/loginCheck')
        //     .then((data) => console.log(data.code))
        //     .catch(
        //         (data) => console.log(data.response)
        //     );
        dispatch(LoginCheck());
    },[]);

    // if(
    //     error === 403
    //     && error === 401
    // ){
    //     history.push('/member/login');
    // }


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
                      path="/"
                      component={MainPage}
                  />
                  <Route
                      path="/test"
                      component={MemberFormSuccessPage}
                  />
                  <Route
                      comonent={Page404}
                  />
              </Switch>
          </ThemeProvider>
  );
}

export default App;
