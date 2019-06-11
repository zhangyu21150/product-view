import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class LoginDialog extends Component{
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
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="密码"
                        type="password"
                        fullWidth
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
