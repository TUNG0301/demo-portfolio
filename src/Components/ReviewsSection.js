import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import Title from './Title';
import ReviewItem from './ReviewItem';

function ReviewsSection() {
    return (
        
           <ReviewsSectionStyled>
               <Title title={"Review Me"} paragraph={"Review Me"}/>
               <InnerLayout>
                   <div className="reviews">
                       <ReviewItem text={"i'm a front-end developer"}/> 
                       <ReviewItem text={"i'm a front-end developer reactjs"}/>
                   </div>
               </InnerLayout>
           </ReviewsSectionStyled>
        
        
    )
}

const ReviewsSectionStyled = styled.section`
   .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`

export default ReviewsSection
