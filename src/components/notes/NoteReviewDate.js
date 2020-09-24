import React from 'react';
import {IconContext} from "react-icons";
import styled from "styled-components";
import {AiOutlineMenu} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";

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



function NoteReviewDate() {
    return (
        <NoteReviewDateBlock>
            <IconContext.Provider
                value={{
                    color: '#494949',
                    size: '15'
                }}
            >
                <Option>
                    <IconContainer>
                        <AiOutlineMenu/>
                    </IconContainer>
                    <OptionHeader>
                        종류
                    </OptionHeader>
                    <OptionBody>
                        <InputContainer>
                            <RadioInput id="default" name="kind" value="default"
                                   checked/>
                            <Label htmlFor="default">기본</Label>
                        </InputContainer>
                        <InputContainer>
                            <RadioInput id="custom" name="kind" value="custom"
                            />
                            <Label htmlFor="custom">사용자 설정</Label>
                        </InputContainer>
                    </OptionBody>
                </Option>
                <Option>
                    <IconContainer>
                        <BiTimeFive/>
                    </IconContainer>
                    <OptionHeader>
                        복습
                    </OptionHeader>
                    <OptionBody>
                        <InputContainer>
                            <DateInput name="reviewDate" value="2020-09-25"/>
                        </InputContainer>
                    </OptionBody>
                </Option>
                <Option>
                    <IconContainer>
                        <AiOutlinePlus/>
                    </IconContainer>
                    <OptionHeader>
                        추가
                    </OptionHeader>
                </Option>
            </IconContext.Provider>
        </NoteReviewDateBlock>
    )
}

export default NoteReviewDate;