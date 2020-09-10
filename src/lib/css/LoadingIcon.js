import React from 'react';
import styled, {css, keyframes} from 'styled-components';
import loadingIcon10 from "../../images/loading-10.svg";
import loadingIcon12 from "../../images/loading-12.svg";

const spinCircle = keyframes`
    100%{
        transform: rotate(360deg);
    }
`;

const LoadingIconBlock = styled.img.attrs({
})`
    ${({width}) => {
        return css`
            width: ${width};
        `;
    }}
    transformOrigin: 50% 50%;
    animation: ${spinCircle} 2s linear infinite
`;

function LoadingIcon({color, width, loadingSizeKind}) {
    let loadingSrc = loadingIcon10;

    if(loadingSizeKind == 12){
        loadingSrc = loadingIcon12;
    }

    return(
        <LoadingIconBlock
            width={width}
            src={loadingSrc}
        />
    )
}

export default LoadingIcon;