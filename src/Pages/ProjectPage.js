import React from 'react'
import Title  from '../Components/Title'
import projects from '../data/projects'
import { MainLayout } from '../styles/Layout'
import styled from 'styled-components'
import ProjectItem from '../Components/ProjectItem'

function ProjectPage() {
    return (
       <MainLayout>
           <Title title={"Current Projects"} span={"Current Projects"} />
           <ProjectItemStyled>
               
              <div className="project-allItems">
                  {
                      projects.map((item) => (
                          <ProjectItem name={item.name}
                                       desc={item.desc}
                                       linkGit={item.linkGit}
                                       linkNet={item.linkNet}
                                       key={item.id}
                                       img={item.img}
                            />
                      ))
                  }
              </div>
           </ProjectItemStyled>
       </MainLayout>
    )
}

const ProjectItemStyled = styled.section`
  padding: 10rem 0;
  .project-allItems{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
`

export default ProjectPage


/*
useEffect(() => {
    if (searchText === '') return;
    setProjectsData(() =>
      ProjectsInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectsData(ProjectsInfo);
    }
  };
  */