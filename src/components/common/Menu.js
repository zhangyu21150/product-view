import React from "react";
import PropTypes from "prop-types";
import MuiMenu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SubMenuItem from "./SubMenuItem";

export default class Menu extends React.Component {
    renderMenuItems = () => {
        const { menuItems } = this.props;
        return menuItems.map(menuItem => {
            if (menuItem.hasOwnProperty("subMenuItems")) {
                return (
                    <SubMenuItem
                        key={menuItem.key}
                        menuItems={menuItem.subMenuItems}
                    />
                );
            }

            return (
                <MenuItem key={menuItem.key} onClick={menuItem.onClick}>
                    {menuItem.caption}
                </MenuItem>
            );
        });
    };

    render() {
        const { open, onClose } = this.props;
        return (
            <MuiMenu open={open} onClose={onClose}>
                {this.renderMenuItems()}
            </MuiMenu>
        );
    }
}

Menu.propTypes = {
    open: PropTypes.bool.isRequired,
    menuItems: PropTypes.array.isRequired,
    anchorElement: PropTypes.any,
    onClose: PropTypes.func.isRequired
};

/* Example of menuItems:
[
    {
        'key': 'item1',
        'caption': 'Item 1',
        'onClick': (event) => function () {
        }
    },
    {
        'key': 'item2',
        'caption': 'Item 2',
        'onClick': (event) => function () {
        }
    },
    {
        'key': 'item3',
        'caption': 'Item 3',
        'subMenuItems': [
            {
                'key': 'item1',
                'caption': 'Item 1',
                'onClick': (event) => function () {
                }
            },
            {
                'key': 'item2',
                'caption': 'Item 2',
                'onClick': (event) => function () {
                }
            }
        ]
    }
];
 */
