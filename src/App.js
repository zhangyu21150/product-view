import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router";
import styled from "styled-components";
import history from "./history";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Overview from "./components/overview/Overview";
import Detail from "./components/detail/Detail";
import Upload from "./components/upload/Upload";
import PersonalCenter from "./components/personalcenter/PersonalCenter";
import ProHeader from "./components/common/ProHeader";
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

class App extends Component {
  render() {
    return (
        <Router history={history}>
            <AppContainer >
                <PrimarySearchAppBar />
                <ProHeader />
                <AppContent>
                    {/*<IndexRoute component={Home}/>*/}
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route path="/overview" component={Overview}/>
                    <Route path="/detail" component={Detail}/>
                    <AuthRoute path="/upload" component={Upload}/>
                    <AuthRoute path="/personalcenter" component={PersonalCenter}/>
                </AppContent>
                <ProFooter />
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
`;
const AppContent = styled.div`
    width: 1240px;
    margin: 0 auto;
`;
