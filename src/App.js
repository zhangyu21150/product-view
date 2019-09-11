import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router";
import styled from "styled-components";
import history from "./history";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Overview from "./components/overview/Overview";
import Detail from "./components/detail/Detail";
import UploadMu from "./components/upload/UploadMu";
import PersonalCenter from "./components/personalcenter/PersonalCenter";
import ProFooter from "./components/common/ProFooter";
import PrimarySearchAppBar from "./components/common/PrimarySearchAppBar";

const AuthRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => {
            return sessionStorage.getItem("username") ?
                (
                    <Component {...props}/>
                ):(
                    <Redirect link="/login" />
                )
        }}
    />
);

const ROUTE_PATH = ["overview", "detail", "upload", "personalcenter"];
class App extends Component {
  render() {
      let uri = window.location.pathname;
      uri = uri.split("/")[1];
      let showHeader = ROUTE_PATH.includes(uri);
    return (
        <Router history={history}>
            <AppContainer >
                {showHeader ? <PrimarySearchAppBar /> : null}
                <AppContent>
                    {/*<IndexRoute component={Home}/>*/}
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route path="/overview" component={Overview}/>
                    <Route path="/detail" component={Detail}/>
                    <Route path="/upload" component={UploadMu}/>
                    <Route path="/personalcenter" component={PersonalCenter}/>
                </AppContent>
            </AppContainer>
        </Router>
    )
  }
}
export default App;

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
`;
const AppContent = styled.div`
    width: 1240px;
    min-height: calc(100% - 200px); 
    margin: 0 auto; 
    padding: 64px 0;
`;
