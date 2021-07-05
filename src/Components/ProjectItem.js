import React from 'react'
import styled from 'styled-components'

function ProjectItem({ name, linkGit, linkNet, img, desc}) {
    return (
        <ProjectItemStyled>
            <div className="project-img">
                <a href={linkNet}> <img src={img} alt="Tracker Covid-19" /> </a>
            </div>
            <div className="project-info">
                <h3>{name}</h3>
                <p>{desc}</p>
                <a href={linkGit}>Link to GitHub</a>
            </div>
        </ProjectItemStyled>
    )
}

const ProjectItemStyled = styled.div`
   .project-img{
      width: 100%;
      height: 400px;
      border-radius: 12px;
      overflow: hidden;
      display: inline-block;
      border: 3px solid var(--border-color);
      img {
        width: 100%;
        height: 100%;
      }
   }

   .project-info {
    margin-top: 1rem;
    background-color: var(--background-dark-grey);
    padding: 1rem;
    border-radius: 12px;
    h3{
        font-size: 2.2rem;
    }
    p{
        font-size: 1.2rem;
        margin: 1rem 0;
    }
    a{
        font-size: 1rem;
        font-style: italic;
    }
  }
  
  
  @media only screen and (max-width: 768px) {
    .project-img {
      height: 350px;
    }
  }
`

export default ProjectItem
