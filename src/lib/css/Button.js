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
        height: '35px',
        fontSize: '17px'
    },
    medium: {
        width: '40px',
        height: '20px',
        fontSize: '12px',
        borderRadius: '2px'
    },
    small: {
        height: '1.5rem',
        fontSize: '0.875rem'
    }
};

const sizeStyles = css`
    ${({size}) =>
    css`
            width: ${sizes[size].width};
            height: ${sizes[size].height};
            font-size: ${sizes[size].fontSize};
            border-radius: ${sizes[size].borderRadius};
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

const ButtonBlock = styled.button`
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