import React, { Component } from "react";
import styled from "styled-components";
import { connect} from "react-redux";
import { fetchLogin } from "../../actions/loginAction";

const mapStateToProps = state =>{
    return {
        isLogin: state.loginSession.data
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        login: (username, password, callback) => dispatch(fetchLogin(username, password, callback))
    }
}

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    login = () => {
        this.props.login(this.state.username, this.state.password, this.loginCallback);
    }
    loginCallback = status => {
        if(status == "200"){
            console.log(this.props.isLogin);
        }else{
            //todo error message
        }
    }
    onUserInput = e => {
        let key = e.target.id;
        let val = e.target.value;
        this.setState({
           [key]: val
        })
    }
    render(){
        return(
            <LoginContainer>
                {/*<LoginContainer style={{background: `url(${loginBg}) no-repeat`}}>*/}
                <div className="infoWrap">
                    <div>
                        <p>
                            Abstract(#br)Our aim was to study the protective effect of quercitin on liver cirrhosis induced by carbon tetrachloride (CCl 4 ) in rats and its relationship with liver morphology.
                        </p>
                        <p>
                            Thirty male Wistar rats weighing 200–250 g were randomly divided into three groups: control, CCl 4 , and CCl 4 + quercetin. Rats in the experimental groups were given.
                        </p>
                        <p>
                            Control group rats were given only olive oil for the same period. At the end of the 17 weeks, all rats were sacrificed. Blood samples were taken for determination of serum indicators .
                        </p>
                    </div>
                </div>
                <div className="loginWrap">
                    <span>账号登录</span>
                    <input id="username" onChange={event => this.onUserInput(event)} type="text" placeholder="邮箱/手机号码"/>
                    <input id="password" onChange={event => this.onUserInput(event)} type="text" placeholder="密码"/>
                    <button className="submit" onClick={this.login}>登录</button>
                    <div className="regArea">
                        <a>立即注册</a>
                        <span>|</span>
                        <a>忘记密码</a>
                    </div>
                </div>
            </LoginContainer>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .infoWrap {
        width: 830px;
        height: 500px;
        display: flex;
        align-items: center;
        padding-right: 30px;
    }
    .loginWrap{
        width: 410px;
        height: 524px;
        display: flex;
        flex-direction: column;
        color: #f56600;
        span {
            font-size: 24px;
            margin: 24px 14px;
        }
        input {
            height: 22px;
            line-height: 22px;
            width: 306px;
            padding: 13px 16px 13px 14px;
            display: block;
            color: #4a4a4a;
            border: 1px solid #4a4a4a;
            margin: 14px;
        }
        .submit {
            background-color: #ff6700;
            width: 337px;
            height: 50px;
            line-height: 50px;
            display: block;
            margin: 14px;
            text-align: center;
            font-size: 14px;
            color: #fff;
            cursor: pointer;
            outline: none;
        }
        .regArea {
            width: 337px
            height: 16px;
            display: flex;
            justify-content: flex-end;
            color: #474747;
            font-size: 14px;
            a {
                cursor: pointer;
                &:hover {
                    color: #f56600;
                }
            }
            span {
                height: 16px;
                margin: 0 5px;
                line-height: 16px;
                font-size: 14px;
            }
        }
    }
`;