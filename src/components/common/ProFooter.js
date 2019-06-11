import React, { Component } from "react";
import styled from "styled-components";

export default class ProFooter extends Component{
    render(){
        return(
            <FooterContainer>
                <div className="copyright">
                    <p>PRD公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
                </div>
            </FooterContainer>
        )
    }
}

const FooterContainer = styled.div`
    width: 100%;
    height: 40px;
    color: #fff;
    background-color: #4d4d4d;
    display: flex;
    justify-content: center;
    font-size: 12px;
    .copyright {
        min-width: 1240px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;