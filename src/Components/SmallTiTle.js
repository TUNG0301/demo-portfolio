import React from 'react'
import styled from 'styled-components'


function SmallTiTle({icon, title}) {
    return (
        <SmallTiTleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTiTleStyled>
    )
}

const SmallTiTleStyled = styled.div`
     display: flex;
     align-items: center;
     p{
         padding-right: 1rem;
         svg{
             font-size: 2rem;
             
         }
     }
     h3{
         color: var(--white-color);
         font-size: 2rem;
     }
`

export default SmallTiTle
