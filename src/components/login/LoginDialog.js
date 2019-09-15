import React, {Component} from 'react';
import Button from '@material-ui/core/Button/index';
import TextField from '@material-ui/core/TextField/index';
import Dialog from '@material-ui/core/Dialog/index';
import DialogActions from '@material-ui/core/DialogActions/index';
import DialogContent from '@material-ui/core/DialogContent/index';
import DialogTitle from '@material-ui/core/DialogTitle/index';
import { fetchLogin } from "actions/loginAction";
import { connect } from "react-redux";

const mapStateToProps = state =>{
    return {
        isLogin: state.loginSession.data.success
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        login: (username, password, callback) => dispatch(fetchLogin(username, password, callback))
    }
}

class LoginDialog extends Component{
    constructor(props){
        super(props);
        this.state = {
            "show": false
        }
    }
    showLoginDialog = () => {
        this.setState({
            "show": true
        })
    }
    closeLoginDialog = () => {
        this.setState({
            "show": false
        })
    }
    onLogin = () => {
        let username = this.state.username;
        let passwd = this.state.password;
        this.props.login(username, passwd, this.loginCallback);
    }
    loginCallback = success => {
        if(success){
            this.setState({
                show: false
            });
        }else{
            //todo error message
        }
    }
    componentDidMount() {
        if(this.props.onRef){
            this.props.onRef(this);
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
        return (
            <Dialog open={this.state.show} onClose={this.closeLoginDialog} >
                <DialogTitle id="form-dialog-title">登录</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="用户名"
                        type="text"
                        fullWidth
                        onChange={event => this.onUserInput(event)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="密码"
                        type="password"
                        fullWidth
                        onChange={event => this.onUserInput(event)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.closeLoginDialog} color="primary">
                        取消
                    </Button>
                    <Button onClick={this.onLogin} color="primary">
                        确定
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog);
