import React, { Component } from "react";
import styled from "styled-components";
import GridList from "components/common/GridList";
import SimpleBottomNavigation from "components/common/NavMenu"
import {connect} from "react-redux";
import { fetchDataGrid } from "actions/dataGridAction";

const mapStateToProps = state => {
    return {
        dataGrid: state.dataGrid.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchDataGrid: callback => dispatch(fetchDataGrid(callback))
    }
}

class Overview extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataGrid: []
        }
    }
    componentDidMount() {
        this.props.fetchDataGrid(this.onRetrieveDataGrid);
    }
    onRetrieveDataGrid = dataGrid =>{
        this.setState({
            dataGrid: dataGrid
        })
    }
    render(){
        return(
            <OverviewContainer>
                {/*<div className="search--wrap">*/}
                {/*    <SimpleBottomNavigation />*/}
                {/*</div>*/}
                <GridList tileData={this.state.dataGrid}/>
            </OverviewContainer>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Overview);
const OverviewContainer = styled.div`
    .search--wrap {
        height: 90px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 40px auto;
    }
`;