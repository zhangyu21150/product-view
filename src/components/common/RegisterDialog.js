import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class RegisterDialog extends Component{
    constructor(props){
        super(props);
        this.state = {
            "showRegister": false
        }
    }
    showRegisterDialog = () => {
        this.setState({
            "showRegister": true
        })
    }
    closeRegisterDialog = () => {
        this.setState({
            "showRegister": false
        })
    }
    render() {
        return (
            <Dialog open={this.state.showRegister} onClose={this.closeRegisterDialog} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">注册</DialogTitle>
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
                        id="fullname"
                        label="姓名"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="pwd"
                        label="密码"
                        type="password"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="repwd"
                        label="确认密码"
                        type="password"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.closeRegisterDialog} color="primary">
                        取消
                    </Button>
                    <Button onClick={this.closeRegisterDialog} color="primary">
                        确定
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
