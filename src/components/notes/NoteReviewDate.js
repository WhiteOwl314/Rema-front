import React from 'react';
import {IconContext} from "react-icons";
import styled from "styled-components";
import {AiOutlineMenu} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";
import {useSelector} from "react-redux";
import LoadingPage from "../common/LoadingPage";

const NoteReviewDateBlock = styled.div`
    width: 100%;
`;

const Option = styled.div`
    width: 100%;
    height: 23px;
    display: flex;
    align-items: center;
`;

const OptionHeader = styled.div`
    margin-left: 5px;
    font-size: 14px;
    display: flex;
    align-items: center;
`;

const OptionBody = styled.div`
    margin-left: 30px;
    font-size: 14x;
    display: flex;
    align-items: center;
`;

const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;

    &+&{
        margin-left: 70px;
    }
`;

const RadioInput = styled.input.attrs({
    type: 'radio'
})`
`;

const Label = styled.label`
    font-size: 14px;
`;

const DateInput = styled.input.attrs({
    type: 'date'
})`
    display: flex;
    justify-content: flex-first;
    align-items: center;
    outline: none;
    font-size: 14px;
    font: 300 14px Arial;
    border: none;
`;



function NoteReviewDate({currentClick,onAddReviewDate}) {

    const reviewDateState = useSelector(state => state.review.reviewDateList);
    let currentReviewDateList = null;

    if(reviewDateState[currentClick]){
        if(reviewDateState[currentClick].data){
            currentReviewDateList = reviewDateState[currentClick].data;
        }
    }

    console.log(currentReviewDateList);

    if(reviewDateState[currentClick].loading) return <LoadingPage/>;

    return (
        <NoteReviewDateBlock>
            <IconContext.Provider
                value={{
                    color: '#494949',
                    size: '15'
                }}
            >
                {
                    currentReviewDateList &&
                    currentReviewDateList.map(item => {
                        let date = item.date.split(" ")[0];
                        return (
                            <Option
                                key={item.id}
                            >
                                <IconContainer>
                                    <BiTimeFive/>
                                </IconContainer>
                                <OptionHeader>
                                    복습
                                </OptionHeader>
                                <OptionBody>
                                    <InputContainer>
                                        <DateInput
                                            id={item.id}
                                            name="reviewDate"
                                            value={date}
                                        />
                                    </InputContainer>
                                </OptionBody>
                            </Option>
                        )
                    })
                }
                <Option
                    style={{
                        marginTop: '15px',
                        cursor: 'pointer'
                    }}
                    onClick={onAddReviewDate}
                >
                    <IconContainer>
                        <AiOutlinePlus/>
                    </IconContainer>
                    <OptionHeader>
                        복습 추가
                    </OptionHeader>
                </Option>
            </IconContext.Provider>
        </NoteReviewDateBlock>
    )
}

export default NoteReviewDate;