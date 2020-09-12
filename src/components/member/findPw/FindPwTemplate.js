import React from 'react';
import styled from "styled-components";

const FindPwTemplateBlock = styled.div`
    width: 500px;
    height: 250px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
    position: relative;
`;

function FindPwTemplate({children}) {
    return(
        <FindPwTemplateBlock>
            {children}
        </FindPwTemplateBlock>
    )
}

export default FindPwTemplate;