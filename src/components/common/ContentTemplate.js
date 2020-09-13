import React from 'react';
import styled,{css} from "styled-components";


const ContentTemplateBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Header = styled.div`
    width: 100%;
    height: 50px;
    position: absolute;
    background: white;
`;

const HeaderLeftMargin = styled.div`
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding-left: 30px;
    
`;

const HeaderText = styled.div`
    ${({theme}) => {
    const borderBottomColor = theme.palette['border'];
    return css`
            border-bottom: 1px solid ${borderBottomColor};
        `;
    }}
    width:100%;
    height:100%;
    display: flex;
    align-items: flex-end;
    font-size: 16px;
    padding-bottom: 5px;
    box-sizing: border-box;
    color: #494949;
`;

function ContentTemplate({children, title}) {
    return(
        <ContentTemplateBlock>
            <Header>
                <HeaderLeftMargin>
                    <HeaderText>
                        {title}
                    </HeaderText>
                </HeaderLeftMargin>
            </Header>
            {children}
        </ContentTemplateBlock>
    )
}

export default ContentTemplate;