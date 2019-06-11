import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Menu from "./Menu";
const menuItems = [
    {
        key: "1",
        caption: "Button 1",
        onClick: () => {}
    },
    {
        key: "2",
        caption: "Button 2",
        onClick: () => {}
    },
    {
        key: "3",
        caption: "Button 3",
        onClick: () => {}
    },
    {
        key: "more",
        caption: "More items",
        subMenuItems: [
            {
                key: "4",
                caption: "Button 4",
                onClick: () => {}
            },
            {
                key: "5",
                caption: "Button 5",
                onClick: () => {}
            },
            {
                key: "6",
                caption: "Button 6",
                onClick: () => {}
            }
        ]
    }
];
export default class SearchBox extends Component{
    constructor(props){
        super(props);
        this.classes = {
            root: {
                padding: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
            },
            input: {
                marginLeft: 8,
                flex: 1,
            },
            iconButton: {
                padding: 10,
            },
            divider: {
                width: 1,
                height: 28,
                margin: 4,
            },
        };
    }
    openMenu = () => {

    }
    render() {
        return (
            <Paper style={this.classes.root}>
                <IconButton onClick={this.openMenu}>
                    <MenuIcon />
                </IconButton>
                <InputBase
                    style={this.classes.input}
                    placeholder="搜索"
                />
                <IconButton style={this.classes.iconButton}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        )
    }
}
