import React, { Component } from "react";
import styled from "styled-components";
import GridList from "components/common/GridList";
import SimpleBottomNavigation from "../common/NavMenu"

export default class Overview extends Component{
    render(){
        return(
            <OverviewContainer>
                <div className="search--wrap">
                    <SimpleBottomNavigation />
                </div>
                <GridList/>
                <GridList/>
            </OverviewContainer>
        )
    }
}

const OverviewContainer = styled.div`
    .search--wrap {
        height: 90px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 40px auto;
    }
`;