import React from 'react';
import styled, {css} from 'styled-components';

const BackgroundBlock = styled.div`
    ${({theme, color}) => {
    const selected = theme.palette[color];
    return css`
            background: ${selected};
            width: 100%;
            height: 100%;
        `;
    }}
`;

    function Background({children, color}) {

    return(
        <BackgroundBlock color={color}>
            {children}
        </BackgroundBlock>
    )
}

export default Background;