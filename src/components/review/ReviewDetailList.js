import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {IconContext} from "react-icons";
import {TiDocument} from "react-icons/ti";
import {BiArrowBack} from "react-icons/bi";
import {push} from "connected-react-router";

const NotesListBlock = styled.div`
    width: 200px;
    height: 100%;
    box-sizing: border-box;
    background: #f7f7f7;
    border-right: 1px solid #e9ecef;
    position: relative;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;



const NotesListContainer = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    position: relative;
    flex: 1, 1, auto;
    margin-left: 5px;
`;


const Title = styled.div`
    font-size: 13px;
    padding-left: 5px;
    width: 100%;
    cursor: pointer;
`;

const IconContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
`;

const HeaderText = styled.div`
    margin-left: 10px;
    font-size: 13px;
`;

function ReviewDetailList({onClickItem}) {

    const dispatch = useDispatch();

    const notesList =
        useSelector(state => state.reviewDetail.notesListByDate);

    return(
        <NotesListBlock>
            <Header>
                <IconContext.Provider
                    value={{
                        style:{
                            cursor: 'pointer',
                            width: '15px',
                            marginLeft: '5px'
                        }
                    }}
                >
                    <BiArrowBack
                        onClick={() => dispatch(push('/review'))}
                    />
                </IconContext.Provider>
                <HeaderText>
                    뒤로
                </HeaderText>
            </Header>
            {
                notesList.data &&
                    notesList.data.map(item => {
                        return(
                            <NotesListContainer
                                key={item.id}
                                onClick={() => onClickItem(item.id)}
                            >
                                <IconContext.Provider
                                    value={{
                                        color: '#494949',
                                        size: '16',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <IconContainer><TiDocument/></IconContainer>
                                    <Title
                                        onClick={() => onClickItem(item.id)}
                                    >
                                        {item.title}
                                    </Title>
                                </IconContext.Provider>
                            </NotesListContainer>
                        )
                    })

            }
        </NotesListBlock>
    )
}

export default ReviewDetailList;