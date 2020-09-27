import React from 'react';
import styled,{css} from "styled-components";
import {Link} from "react-router-dom";

const addZero = (number) => {

    if(number <10){
        return '0' + number;
    }

    return number
};


const ContainerBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: auto;
    padding-top: 30px;
    box-sizing: border-box;
`;

const ReviewDateContainer = styled.div`
    ${({theme}) => {
    const borderBottomColor = theme.palette['fourthC'];
    return css`
            border: 4px solid ${borderBottomColor};
        `;
    }}
    width: 600px;
    height: 30px;
    &+&{
        margin-top: 30px;
    }
    border-radius: 5px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
`;

function ReviewList() {
    //날짜 구하기
    let dayArray = [];
    for(let i=0; i<7; i++){
        let today = new Date();
        today.setDate(today.getDate() + i);

        let year = today.getFullYear(); // 년도
        let month = addZero(today.getMonth() + 1);  // 월
        let day = addZero(today.getDate());  //일

        let fullDay =  `${year}-${month}-${day}`;

        dayArray.push(fullDay);
    }

    return(
        <>
            {
                dayArray.map(item => {
                    return (
                        <Link to={`/review/${item}`}
                              key={item}
                              style={{
                                  width: '600px',
                                  height: '30px',
                                  borderRadius: '5px',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  border: '3px solid #3B77AF',
                                  fontWeight: 'bold',
                                  cursor: 'pointer',
                                  color: 'black',
                                  textDecoration: 'none',
                                  marginTop: '20px'
                              }}
                        >
                                {item}
                        </Link>
                    )
                })
            }
        </>
    )
}

export default ReviewList;