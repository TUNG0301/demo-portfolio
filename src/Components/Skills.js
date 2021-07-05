import React from 'react'
import { InnerLayout} from '../styles/Layout';
import styled from 'styled-components';
import Title from './Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
          <SkillsStyled>
              
                  <Title title={"My Skills"} span={"My Skills"} />
                  <InnerLayout>
                       <div className="skills">
                           <ProgressBar title={"HTML5"} width={'80%'} text={"80%"} />
                           <ProgressBar title={"CSS3"} width={'90%'} text={"90%"} />
                           <ProgressBar title={"JavaScript"} width={'80%'} text={"80%"} />
                           <ProgressBar title={"React JS"} width={'65%'} text={"65%"} />
                           <ProgressBar title={"Node.js"} width={'70%'} text={"70%"} />
                       </div>
                  </InnerLayout>
              
          </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem ;
    }
`

export default Skills
