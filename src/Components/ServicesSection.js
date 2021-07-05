import React from 'react';
import { InnerLayout } from '../styles/Layout';
import styled from 'styled-components';
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../img/aboutImg/design.svg';
import gameDev from '../img/aboutImg/gameDev.svg';
import intelligence from '../img/aboutImg/intelligence.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={"Services"} span={'services'} />
                <div className="services">
                    <ServiceCard image={design} 
                                 title={"Web Design"} 
                                 paragraph={"Welcome Design Web"}
                    />
                    <div className="mid-card">
                        <ServiceCard image={intelligence} 
                                 title={"Artificial intelligence"} 
                                 paragraph={"Welcome AI"}
                        />
                    </div>
                    <ServiceCard image={gameDev}
                                 title={"Game development"} 
                                 paragraph={"Welcome Game"}
                    />
                    
                </div>
            </ServicesSectionStyled>       
         </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
  .services{
      margin-top: 5rem;
      display: flex;
      justify-content: space-between;
      .mid-card{
          margin: 0 1.2rem;
      }
  }
`

export default ServicesSection
