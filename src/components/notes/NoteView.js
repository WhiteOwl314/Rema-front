import React from 'react';
import styled,{css} from "styled-components";
import Button from "../../lib/css/Button";
import NoteReviewDate from "./NoteReviewDate";
import NoteTextArea from "./NoteTextArea";

const NoteViewBlock = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Header = styled.div`
    ${({theme}) => {
    const borderBottomColor = theme.palette['border'];
    return css`
            border-bottom: 1px solid ${borderBottomColor};
        `;
    }}
    position: absolute;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background:white;
`;

const HeaderMenu = styled.div`
    width: 100px;
    height: 100%;
    margin-right: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Body = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px;
    box-sizing: border-box;
    overflow: auto;
`;

const NoteTemplate = styled.div`
    width: 100%;
    padding-top: 30px;
`;

const NoteHeader = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
`;

const NoteHeaderTitle = styled.input.attrs({
    placeholder: '제목'
})`
    width: 100%;
    font-size: 27px;
    font-weight: bold;
    outline: none;
    border: none;
`;

const TextArea = styled.textarea.attrs({
    rows:"5",
    cols:"33",
    placeholder: '내용'
})`
    width: 100%;
    resize: none;
    border: 1px solid black;
    outline: none;
    margin-top: 20px;
    height: 900px;
`;



function NoteView() {

    const resize = (obj) => {
        obj.style.height = "1px";
        obj.style.height =  (12+obj.scrollHeight)+"px";
    };

    return (
        <NoteViewBlock>
            <Header>
                <HeaderMenu>
                    <Button
                        size='medium'
                        backgroundColor='fourthC'
                        style={{
                            width: '50px',
                            height: '23px',
                            fontSize: '13px'
                        }}
                    >
                        저장
                    </Button>
                </HeaderMenu>
            </Header>
            <Body>
                <NoteTemplate>
                    <NoteHeader>
                        <NoteHeaderTitle/>
                    </NoteHeader>
                    <NoteReviewDate/>
                    {/*<TextArea*/}
                    {/*    onKeydown={()=>resize(this)}*/}
                    {/*    onKeyup={()=>resize(this)}*/}
                    {/*/>*/}
                    <NoteTextArea/>
                </NoteTemplate>
            </Body>
        </NoteViewBlock>
    )
}

export default NoteView;
