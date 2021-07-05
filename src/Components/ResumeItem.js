import React from 'react'
import styled from 'styled-components'

function ResumeItem({year, title, subTitle, text}) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                 <p>{year}</p>
            </div>
            <div className="right-content">
                 <h5>{title}</h5>
                 <h6>{subTitle}</h6>
                 <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    margin-bottom: 3rem;
    &:not(:last-child){
        padding-bottom: 3rem ;
    }
    .left-content{
        width: 20%;
        padding-left: 2rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--primary-color);
        }
       p{
           display: inline-block;
       }
    }

    .right-content{
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            width: 4rem;
            background-color: var(--border-color);
            height: 2px;
        }
       h5{
           color: var(--primary-color);
           font-size: 2rem;
           padding-bottom: .4rem;
       }
       h6{
           padding-bottom: .4rem;
           font-size: 1.5rem;
       }
    }
`

export default ResumeItem
