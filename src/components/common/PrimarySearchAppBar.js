import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import LoginDialog from "components/login/LoginDialog";
import RegisterDialog from "components/register/RegisterDialog";
import ModelList from  "components/common/ModelList";

class PrimarySearchAppBar extends Component{
    constructor(props) {
        super(props);
        this._loginDialog = '';
        this._registerDialog = '';
        this.state = {
            showLang: false,
            showMub: false
        }
    }
    openLangMenu = () => {
        this.setState({showLang: !this.state.showLang});
    }
    closeLangMenu = () => {
        this.setState({showLang: false});
    }
    toggleMub = () => {
        this.setState({showMub: !this.state.showMub});
    }
    closeMub = () => {
        this.setState({showMub: false});
    }
    openMubDropdown = () => {
        this.setState({showMubDropdown: !this.state.showMubDropdown});
    }
    closeMubDropdown = () => {
        this.setState({showMubDropdown: false});
    }
    componentDidMount() {
    }
    onBtnClick = e =>{
        let id = e.target.parentNode.id;
        if(id === "login"){
            this._loginDialog.showLoginDialog();
        }else if(id === "register"){
            this._registerDialog.showRegisterDialog();
        }else if(id === "upload"){
            this._registerDialog.showRegisterDialog();
        }else if(id === "personalcenter"){

        }
    }

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
                            <div style={{position: "relative"}}>
                                <Button
                                    style={classes.menuButton}
                                    color="inherit"
                                    onClick={this.toggleMub}
                                >
                                    模板
                                    <MenuIcon />
                                    {
                                        this.state.showMub ?
                                            <nav style={{width: 200, position: "absolute", top: 50, left: -30, "backgroundColor": "#fff", color: "#000"}} >
                                               <ModelList />
                                            </nav>
                                            : null
                                    }
                                </Button>
                            </div>
                            <div style={classes.search} >
                                <IconButton style={classes.searchIcon} >
                                    <SearchIcon color="inherit"/>
                                </IconButton>
                                <InputBase
                                    placeholder="搜索…"
                                    classes={{
                                        root: "inputRoot",
                                        input: "inputInput",
                                    }}
                                />
                            </div>
                            <div style={classes.sectionDesktop} onClick={this.onBtnClick}>
                                <Button color="inherit" id="login" >
                                    登录
                                </Button>
                                <Button color="inherit" id="register" >
                                    注册
                                </Button>
                                <Button color="inherit" id="upload" >
                                    上传
                                </Button>
                                <Button color="inherit" id="personalcenter" >
                                    个人中心
                                </Button>
                                <IconButton color="inherit" style={{position: "relative"}}>
                                    <LanguageIcon onClick={this.openLangMenu} />
                                    {
                                        this.state.showLang ?
                                            <nav style={{width: 100, position: "absolute", top: 50, right: -30, "background-color": "#fff", color: "#000"}} >
                                                <List disablePadding>
                                                    <ListItem buttononClick={this.closeMubDropdown}>
                                                        <ListItemText primary="中文" />
                                                    </ListItem>
                                                    <ListItem buttononClick={this.closeMubDropdown}>
                                                        <ListItemText primary="English" />
                                                    </ListItem>
                                                </List>
                                            </nav> : null
                                    }
                                </IconButton>
                            </div>
                        </Toolbar>
                    </div>
                </AppBar>
                <LoginDialog onRef={login => {this._loginDialog = login}} />
                <RegisterDialog onRef={reg => {this._registerDialog = reg}}/>
            </div>
        );
    }
}

export default PrimarySearchAppBar;
const classes = {
    appbar: {
        flexGrow: 1,
        top: 0,
        bottom: "auto",
        height: "64px"
    },
    wrapper: {
        width: "1280px",
        marginRight: "auto",
        marginLeft: "auto"
    },
    title: {
        display: 'block',
        marginRight: "16px",
    },
    menuButton: {
        marginRight: "16px"
    },
    search: {
        color: "#fff",
        position: 'relative',
        display: "flex",
        flexDirection: "row",
        borderRadius: "4px",
        backgroundColor: "#fff",
        "&:hover": {
            backgroundColor: "#fff",
        },
        marginRight: "16px",
        marginLeft: 0,
        width: "250px",
        opacity: 0.2

     },
    searchIcon: {
        width: "56px",
        lineHeight: "60px",
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: "8px 8px 8px 56px",
        width: "200px",
    },
    sectionDesktop: {
        "marginLeft": "auto"
    }
};
