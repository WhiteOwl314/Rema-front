import React from 'react';
import styled from "styled-components";
import Button from "../../lib/css/Button";

const LayerPopWindow = styled.div`
    width: 500px;
    height: 60px;
    background-color: white;
    color: 3B3B3B;
`;

const Area = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative; 
    display: flex;
    align-items: center;
`;

const InputContainer = styled.div`
    display: flex;
    width: 100%;
    flex: 1 1 auto;
    padding-left: 15px;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    height: 18px;
    background-color: #f7f7f7;
    border: 1px solid #e2e2e2;
    border-radius: 3px;
    outline: none;
`;

const Title = styled.div`
    width: 50px;
    font-size: 16px;
`;

const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 15px;
    margin-left: 15px;
`;

const ButtonContainer = styled.div`
    
    &+&{
        margin-left: 10px;
    }
    
`;

function AddFolderPopUpWindow({onClickCancle,onChange,content,onSave}) {

    return(
        <LayerPopWindow>
            <Area>
                <InputContainer>
                    <Title>

                        제목:
                    </Title>
                    <Input
                        className='hi'
                        onChange={onChange}
                        name='title'
                        value={content.addFolder.title}
                    />
                </InputContainer>
                <Menu>
                    <ButtonContainer>
                        <Button
                            backgroundColor='fourthC'
                            onClick={onClickCancle}
                        >
                            취소
                        </Button>
                    </ButtonContainer>
                    <ButtonContainer>
                        <Button
                            backgroundColor='fourthC'
                            onClick={onSave}
                        >
                            저장
                        </Button>
                    </ButtonContainer>
                </Menu>
            </Area>
        </LayerPopWindow>
        )
}

export default AddFolderPopUpWindow;