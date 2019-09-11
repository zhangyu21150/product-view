import React, { Component } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import LoginDialog from "../login/LoginDialog"
import RegisterDialog from "../register/RegisterDialog"
import {connect} from "react-redux";
//todo fix logo path

const mapStateToProps = state => {
    return {
        isLogin: state.loginSession.data
    }
}
const mapDispatchToProps = dispatch => {
    return {};
}

class ProHeader extends Component{
    constructor(props){
        super(props);
    }
    showLoginDialog = () => {
         this._loginDailog.showLoginDialog();
    }
    showRegisterDialog = () => {
         this._registerDailog.showRegisterDialog();
    }
    onLoginRef = ref => {
        this._loginDailog = ref;
    }
    onRegisterRer = ref => {
        this._registerDailog = ref;
    }
    render(){
        let isLoginPage = window.location.href.indexOf("login") > -1;
        let username = sessionStorage.getItem("username");
        let isLogin = Object.keys(this.props.isLogin).length > 0;
        console.log(isLogin);
        return(
            <HeaderContainer>
                <div className="headerWrapper">
                    <div className="log">
                        <img src={logo} />
                    </div>
                    {
                        isLoginPage ? null
                        :(
                            <div className="loginInfo">
                                {!!username ? (
                                    <div>
                                        <span>{username}</span>
                                    </div>
                                ): (
                                    <div>
                                        <span onClick={this.showLoginDialog}>登录</span>
                                        <span onClick={this.showRegisterDialog}>注册</span>
                                    </div>)}
                                <span>上传</span>
                                <span>个人中心</span>
                                {!!username ?
                                    <span>注销</span> : null
                                }
                            </div>
                        )
                    }
                </div>
                <LoginDialog onRef={this.onLoginRef}/>
                <RegisterDialog onRef={this.onRegisterRer}/>
            </HeaderContainer>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProHeader);

const HeaderContainer = styled.div`
    width: 100%;
    height: 40px;
    color: #b0b0b0;
    background-color: #4d4d4d;
    display: flex;
    justify-content: center;
    .headerWrapper {
        min-width: 1240px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .log {
            width: 40px;
            height: 40px;
            img {
                width: 40px;
                height: 40px;
            }
        }
        .loginInfo {
            line-height: 40px;
            margin-left: auto;
            display: flex;
            font-size: 12px;
            span {
                cursor: pointer;
                margin-right: 10px;
            }
            span:hover {
                color: #fff;
            }

        }
    }
`;