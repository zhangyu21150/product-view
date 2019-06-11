import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";

class PrimarySearchAppBar extends Component{
    render() {
        return (
            <div style={classes.appbar}>
                <AppBar position="fixed" className="appbar">
                    <div style={classes.wrapper}>
                        <Toolbar>
                            <Typography style={classes.title} variant="h6" noWrap>
                                Product View
                            </Typography>
                            <IconButton color="inherit" >
                                <HomeIcon />
                            </IconButton>
                            <IconButton
                                style={classes.menuButton}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <div style={classes.search} >
                                <IconButton style={classes.searchIcon} >
                                    <SearchIcon color="inherit"/>
                                </IconButton>
                                <InputBase
                                    placeholder="Search…"
                                    classes={{
                                        root: "inputRoot",
                                        input: "inputInput",
                                    }}
                                />
                            </div>
                            <div style={classes.sectionDesktop}>
                                <Button color="inherit" >
                                    登录
                                </Button>
                                <Button color="inherit" >
                                    注册
                                </Button>
                                <Button color="inherit" >
                                    上传
                                </Button>
                                <Button color="inherit" >
                                    个人中心
                                </Button>
                            </div>
                        </Toolbar>
                    </div>
                </AppBar>
                <LoginDialog  />
                <RegisterDialog refs="_registerDailog"/>
            </div>
        );
    }
}

export default PrimarySearchAppBar;
const classes = {
    appbar: {
        "flex-grow": 1,
        top: 0,
        bottom: "auto",
    },
    wrapper: {
        width: "1280px",
        "margin-right": "auto",
        "margin-left": "auto"
    },
    title: {
        display: 'block',
        marginRight: "16px",
    },
    menuButton: {
        "margin-right": "16px"
    },
    search: {
        color: "#fff",
        position: 'relative',
        "display": "flex",
        "flex-direction": "row",
        "border-radius": "4px",
        "background-color": "#fff",
        "&:hover": {
            "background-color": "#fff",
        },
        "margin-right": "16px",
        "margin-left": 0,
        width: "250px",
        opacity: 0.2

     },
    searchIcon: {
        width: "56px",
        "line-height": "60px",
        "padding": 0,
        display: 'flex',
        "align-items": 'center',
        "justify-content": 'center'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: "8px 8px 8px 56px",
        width: "200px",
    },
    sectionDesktop: {
        "margin-left": "auto"
    }
};
