import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "./Menu";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import withStyles from "@material-ui/core/styles/withStyles";
//import classNames from "classnames";

const styles = {
    subMenuItem: {
        display: "flex",
        justifyContent: "space-between"
    }
};

class SubMenuItem extends React.Component {
    constructor(props){
        super(props);
        this.menuOpen = true;
    }
    handleItemClick(event) {
        this.menuOpen = !this.menuOpen;
    }

    handleSubMenuClose() {
        this.menuOpen = false;
    }

    render() {
        const { caption, menuItems } = this.props;
        return (
            <React.Fragment>
                <MenuItem
                    onClick={this.handleItemClick}
                   // className={classNames(classes.subMenuItem)}
                >
                    {caption}
                    <ArrowRightIcon />
                </MenuItem>
                <Menu
                    open={this.menuOpen}
                    menuItems={menuItems}
                    onClose={this.handleSubMenuClose}
                />
            </React.Fragment>
        );
    }
}

SubMenuItem.propTypes = {
    caption: PropTypes.string.isRequired,
    menuItems: PropTypes.array.isRequired
};

export default withStyles(styles)(SubMenuItem);
