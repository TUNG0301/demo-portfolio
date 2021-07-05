import React from 'react'
import styled from 'styled-components'

function ServiceCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
   background-color: var(--background-dark-color);
   border-left: 8px solid var(--border-color);
   border-bottom: 1px solid var(--border-color);
   border-top: 1px solid var(--border-color);
   transition: all .3s ease-in-out;

   &:hover{
               border-left: 8px solid var(--primary-color);
               transform: translateY(5px);
           }
   .container{
       padding: 2rem;
       h4{
           color: var(--white-color);
           font-size: 1.6rem;
           padding: 1rem 0;
           position: relative;
           padding-bottom: 1rem;
           
           &::after{
               content: "";
               width: 4rem;
               background-color: var(--border-color);
               height: 4px;
               position: absolute;
               left: 0;
               bottom: 0;
               border-radius:  10px;
           }
       }
       p{
           padding: .5rem 0;
       }
   }
`;

export default ServiceCard
