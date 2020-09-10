import React from 'react';
import styled from 'styled-components';

const MemberFormTemplateBlock = styled.div`
    width: 500px;
    height: 500px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.2);
`;


function MemberFormTemplate({children}) {
    return (
        <MemberFormTemplateBlock>
            {children}
        </MemberFormTemplateBlock>
    )
}

export default MemberFormTemplate;
