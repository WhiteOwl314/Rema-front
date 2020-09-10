import React from 'react';
import styled,{css} from 'styled-components';
import {lighten, darken} from 'polished';

const colorStyles = css`
    ${({theme, color, backgroundColor})=>{
        const background = theme.palette[backgroundColor];
        return css`
            background: ${background};
            &:hover{
                background: ${lighten(0.1,background)};
            }
            &:active{
                background: ${darken(0.1,background)};
            }
            color: ${color}
            ${props =>
                props.outline &&
                css`
                    color: ${background};
                    background: none;
                    border: 1px solid ${background};
                    &:hover{
                        background: ${background};
                        color: white;
                    }
                `
            }
        `;
    }}  
`;

const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem'
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem'
    },
    small: {
        height: '1.5rem',
        fontSize: '0.875rem'
    }
};

const sizeStyles = css`
    ${({size}) =>
        css`
            height: ${sizes[size].height};
            font-size: ${sizes[size].fontSize};
        `
    }
`;

const fullWidthStyle = css`
    ${props =>
    props.fullWidth &&
    css`
            width: 100%;
            justify-content: center;
            & + & {
                margin-left: 0;
                margin-top: 1rem;
            }
        `
    }
`;

const ButtonBlock = styled.div`
     /*공통 스타일*/
    display: flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    
    /*크기*/
    ${sizeStyles}
    
    /*색상*/
    ${colorStyles}
    
    /*기타*/
    & + &{
        margin-left: 1rem;
    }
    
    ${fullWidthStyle}
`;

function Button(
    {children, size, backgroundColor, color, outline, fullWidth, ...rest}
    ) {
    return(
        <ButtonBlock
            size={size}
            backgroundColor={backgroundColor}
            color={color}
            outline={outline}
            fullWidth={fullWidth}
            {...rest}
        >
            {children}
        </ButtonBlock>
    )
}

Button.defaultProps = {
    size: 'medium',
    backgroundColor: 'black',
    color: 'white'
};

export default Button;