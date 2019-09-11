import React, {Component} from "react";
import styled from "styled-components";
import {modelList} from "util/ModelList";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

class ModelList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            fstLevel: '',
            secLevel: ''
        }
    }
    onListClick = () => {
    }
    onListHover = (index, item) => {
        let list = this.getSubList(index, item);
        if (index === 0) {
            this.setState({
                fstLevel: list
            });
        } else if(index === 1) {
            this.setState({
                secLevel: list
            });
        }
    }
    getSubList = (level, item) => {
        return (
            item.subList.length > 0 ?
            <MenuList>
                {
                    item.subList.map((model, index) =>(
                        <MenuItem key={`secList_${index}`}
                            onMouseOver={level === 0 ? this.onListHover.bind(this, 1, model) : null}>{model.label}</MenuItem>
                    ))
                }
            </MenuList>
            :
            null
        );
    };

    render() {
        return (
            <ModelListContainer>
                <MenuList>
                    {
                        modelList.map((item, index) => (<MenuItem key={`fstList_${index}`} onMouseOver={this.onListHover.bind(this, 0, item)}>{item.label}</MenuItem>))
                    }
                </MenuList>
                {this.state.fstLevel}
                {this.state.secLevel}
            </ModelListContainer>
        );
    }
}

const ModelListContainer = styled.div`
    display: flex;
    position: absolute;
    background: #fff;
    ul {
        list-style: none;
        margin: 0;
        width: 150px;
        padding: 5px 0;
        border: 1px solid #eeeeee;
    }
    li {
        padding-left: 20px;
        text-align: left;
    }
`;

export default ModelList;