import React from 'react';
import styled,{css} from 'styled-components';
import {CgInbox} from "react-icons/cg";
import {IconContext} from "react-icons";
import {MdLibraryBooks} from "react-icons/md";
import {BiTask} from "react-icons/bi";
import {GoTrashcan} from "react-icons/go";
import {darken} from 'polished';

const MainSideBlock = styled.div`
    ${({theme}) => {
    const borderBottomColor = theme.palette['border'];
    return css`
            border-right: 1px solid ${borderBottomColor};
        `;
    }}
    width: 50px;
    height: 100%;
    padding-top: 50px;
    box-sizing: border-box;
    background: white;
    position: absolute;
    z-index: 100;
`;

const SideMenuItem = styled.div`
    ${({theme}) => {
    const borderBottomColor = theme.palette['border'];
    return css`
            border-bottom: 1px solid ${borderBottomColor};
        `;
    }}
    width: 100%;
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    &:hover{
        background: ${darken(0.1, 'white')};
    }
    &:active{
        background: ${darken(0.2, 'white')};
    }
`;

function MainSide({history}) {

    return(
        <MainSideBlock>
            <IconContext.Provider
                value={{
                    color: '#494949',
                    size: '25'
                }}
            >
                <SideMenuItem>
                    <CgInbox/>
                </SideMenuItem>
                <SideMenuItem
                    onClick={() => history.push('/notes')}
                >
                    <MdLibraryBooks/>
                </SideMenuItem>
                <SideMenuItem>
                    <BiTask/>
                </SideMenuItem>
                <SideMenuItem>
                    <GoTrashcan/>
                </SideMenuItem>
            </IconContext.Provider>
        </MainSideBlock>
    )
}

export default MainSide;