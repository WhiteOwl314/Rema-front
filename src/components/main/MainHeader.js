import React from 'react';
import styled,{css} from 'styled-components';

const MainHeaderBlock = styled.div`
    ${({theme}) => {
        const borderBottomColor = theme.palette['border'];
        return css`
            border-bottom: 1px solid ${borderBottomColor};
        `;
    }}
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    background: white;
    z-index: 1000;
`;

const HeaderLogo = styled.div`
    ${({theme}) => {
    const fourthC = theme.palette['fourthC'];
    return css`
            color: ${fourthC};
        `;
    }}
    font-size: 23px;
    cursor: pointer;
    margin-left: 15px;
`;

const HeaderMenu = styled.div`
    display: flex;
    margin-right: 15px;
`;

const HeaderMenuItem = styled.div`
    &+&{
        margin-left: 10px;
    }
    cursor: pointer;
    font-size: 13px;
`;


function MainHeader({history,onClickLogout}) {
    return(
        <MainHeaderBlock>
            <HeaderLogo
                onClick={()=>history.push('/')}
            >
                REMA
            </HeaderLogo>
            <HeaderMenu>
                <HeaderMenuItem>설정</HeaderMenuItem>
                <HeaderMenuItem
                    onClick={()=>history.push('/mypage')}
                >
                    회원정보
                </HeaderMenuItem>
                <HeaderMenuItem
                    onClick={onClickLogout}
                >
                    로그아웃
                </HeaderMenuItem>
            </HeaderMenu>
        </MainHeaderBlock>
    )
}

export default MainHeader;