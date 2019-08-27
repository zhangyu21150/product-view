import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import LoginDialog from "./LoginDialog";
import RegisterDialog from "./RegisterDialog";

class PrimarySearchAppBar extends Component{
    constructor(props) {
        super(props);
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
                                            <nav style={{width: 200, position: "absolute", top: 50, left: -30, "background-color": "#fff", color: "#000"}} >
                                                <List>
                                                    <ListItem button >
                                                        <ListItemIcon>
                                                            <StarBorder />
                                                        </ListItemIcon>
                                                        <ListItemText primary="模板 1" />
                                                    </ListItem>
                                                    <ListItem button  onClick={this.openMubDropdown}>
                                                        <ListItemIcon>
                                                            <StarBorder />
                                                        </ListItemIcon>
                                                        <ListItemText primary="模板 2" />
                                                        {this.state.showMubDropdown ? <ExpandLess /> : <ExpandMore />}
                                                    </ListItem>
                                                    <Collapse component="li" in={this.state.showMubDropdown} timeout="auto" unmountOnExit>
                                                        <List disablePadding>
                                                            <ListItem buttononClick={this.closeMubDropdown}>
                                                                <ListItemIcon>
                                                                    <StarBorder />
                                                                </ListItemIcon>
                                                                <ListItemText primary="模板 2.1" />
                                                            </ListItem>
                                                        </List>
                                                    </Collapse>
                                                </List>
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
        height: "64px"
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
