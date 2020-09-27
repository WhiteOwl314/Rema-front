import React,{useEffect} from 'react';
import styled from "styled-components";
import ReviewDetailList from "../../components/review/ReviewDetailList";
import {useDispatch} from "react-redux";
import {ClickNotesList, GetReviewDateListByDate} from "../../modules/review/reviewDetail";
import {GetNote} from "../../modules/notes/note";


function ReviewDetailListContainer({date}) {

    const dispatch = useDispatch();

    useEffect(() => {
        //리스트 가져오기
        dispatch(GetReviewDateListByDate(date));
    },[]);

    const onClickItem = (id) => {
        //Change currentClick State
        dispatch(ClickNotesList({current: id}));
        dispatch(GetNote(id));
    };

    return (
        <ReviewDetailList
            onClickItem={onClickItem}
        />
    )
}

export default ReviewDetailListContainer;